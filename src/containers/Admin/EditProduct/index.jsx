import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { api } from '../../../services/api.js';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

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
});

export function EditProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	const {
		state: { product },
	} = useLocation();

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
		try {
			const productFormData = new FormData();
			productFormData.append('name', data.name);

			// garante que price seja número e converte para centavos
			const priceNumber = Number(String(data.price).replace(/[,\s]/g, '')) || 0;
			productFormData.append('price', Math.round(priceNumber * 100));

			// category pode ser objeto do react-select ou apenas um id
			const categoryId = data?.category?.id ?? data?.category ?? null;
			if (categoryId) productFormData.append('category_id', categoryId);

			// só anexa arquivo se o usuário escolheu um
			if (data.file && data.file.length > 0) {
				productFormData.append('file', data.file[0]);
			}

			productFormData.append('offer', data.offer ? '1' : '0');

			// debug: opcional — ver os campos antes de enviar
			// for (const pair of productFormData.entries()) console.log(pair[0], pair[1]);

			await toast.promise(api.put(`/products/${product.id}`, productFormData), {
				pending: 'editando produto...',
				success: 'Produto editado com sucesso!',
				error: 'Erro ao editar o produto.',
			});
			setTimeout(() => {
				navigate('/admin/produtos');
			}, 2000);
		} catch (err) {
			console.error('Erro ao editar produto:', err);
			const serverMessage =
				err?.response?.data ?? err?.response?.data?.message ?? err.message;
			toast.error(
				typeof serverMessage === 'string'
					? serverMessage
					: 'Erro ao editar o produto.'
			);
		}
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label>Nome</Label>
					<Input
						type="text"
						{...register('name')}
						defaultValue={product.name}
					/>
					<ErrorMessage>{errors?.name?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label>Preço</Label>
					<Input
						type="number"
						{...register('price')}
						defaultValue={product.price / 100}
					/>
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
						defaultValue={product.category}
						render={({ field }) => (
							<Select
								{...field}
								name="category"
								options={categories}
								getOptionLabel={category => category.name}
								getOptionValue={category => category.id}
								placeholder="Selecione a categoria"
								menuPortalTarget={document.body}
								defaultValue={product.category}
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<ContainerCheckBox>
						<input
							type="checkbox"
							defaultChecked={product.offer}
							{...register('offer')}
						/>
						<Label>Produto em Oferta</Label>
					</ContainerCheckBox>
				</InputGroup>
				<SubmitButton>Editar Produto</SubmitButton>
			</Form>
		</Container>
	);
}
