import { StyledForm } from "./Styled"
import { SubmitHandler, useForm } from "react-hook-form"
import InputIdentifier from "../../../Atoms/Inputs/Identifier/Index";
import InputPassword from "../../../Atoms/Inputs/Password/Index";



const Form = () => {

    type Inputs = {
        identifier: string;
        password: string;
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputIdentifier
                label="Identificador"
                register={register}
                error={errors.identifier}
            />
            <InputPassword
                label="Senha"
                register={register}
                error={errors.password}

            />
            <input className="submit" type="submit" value={"Entrar"} />

        </StyledForm>
    )
}

export default Form