import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { api } from '../../../services/api.js';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import {
	Container,
	Form,
	InputGroup,
	Label,
	Input,
	LabelUpload,
	Select,
	SubmitButton,
	ErrorMessage,
	ContainerCheckBox,
} from './styles';

const schema = yup.object({
	name: yup.string().required('Nome é obrigatório'),
	price: yup
		.number()
		.positive()
		.required('Preço é obrigatório')
		.typeError('Preço deve ser um número'),
	category: yup.object().required('Categoria é obrigatória'),
	offer: yup.bool(),
	file: yup
		.mixed()
		.test('required', 'Escolha um arquivo para continuar', value => {
			return value && value.length > 0;
		})
		.test('fileSize', 'Carregue arquivos até 5mb', value => {
			return value && value.length > 0 && value[0].size <= 5000000;
		})
		.test('type', 'Somente arquivos PNG ou JPEG são aceitos', value => {
			return (
				value &&
				value.length > 0 &&
				['image/jpeg', 'image/png'].includes(value[0].type)
			);
		}),
});

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategories(data);
		}
		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async data => {
		const productFormData = new FormData();
		productFormData.append('name', data.name);
		productFormData.append('price', data.price * 100); // converte para centavos
		productFormData.append('category_id', data.category.id);
		productFormData.append('file', data.file[0]);
		productFormData.append('offer', data.offer);

		await toast.promise(api.post('/products', productFormData), {
			pending: 'Adicionando produto...',
			success: 'Produto adicionado com sucesso!',
			error: 'Erro ao adicionar o produto.',
		});

		setTimeout(() => {
			navigate('/admin/produtos');
		}, 2000);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label>Nome</Label>
					<Input type="text" {...register('name')} />
					<ErrorMessage>{errors?.name?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label>Preço</Label>
					<Input type="number" {...register('price')} />
					<ErrorMessage>{errors?.price?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<LabelUpload>
						<Image />
						<input
							type="file"
							{...register('file')}
							accept="image/png, image/jpeg"
							onChange={value => {
								setFileName(value?.target?.files[0]?.name);
								register('file').onChange(value);
							}}
						/>

						{fileName || 'Upload da imagem do produto'}
					</LabelUpload>

					<ErrorMessage>{errors?.file?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label>Categoria</Label>
					<Controller
						name="category"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								name="category"
								options={categories}
								getOptionLabel={category => category.name}
								getOptionValue={category => category.id}
								placeholder="Selecione a categoria"
								menuPortalTarget={document.body}
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message}</ErrorMessage>
				</InputGroup>
				<InputGroup>
					<ContainerCheckBox>
						<input type="checkbox" {...register('offer')} />
						<Label>Produto em Oferta</Label>
					</ContainerCheckBox>
				</InputGroup>

				<SubmitButton>Adicionar Produto</SubmitButton>
			</Form>
		</Container>
	);
}
