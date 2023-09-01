import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

// Styled components
const Form = styled.form`
	max-width: 400px;
	margin: 0 auto;
`;

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	// console.log(errors);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Firstname"
				{...register("Firstname", { required: true })}
			/>
			<input type="text" placeholder="Lastname" {...register("Lastname", {})} />
			<input type="email" placeholder="Email" {...register("Email", {})} />
			<input
				type="number"
				placeholder="Phonenumber"
				{...register("Phonenumber", { required: true })}
			/>
			<select {...register("terms")}>
				<option value="Yes">Yes</option>
				<option value="No">No</option>
			</select>

			<input type="submit" />
		</Form>
	);
}
