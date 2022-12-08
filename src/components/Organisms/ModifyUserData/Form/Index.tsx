import { SubmitHandler, useForm } from "react-hook-form";
import { courses } from "../../../../use/fetchCourses";
import InputUpload from "../../../Atoms/Inputs/Upload/Index"
import ModifyBio from "../../../Molecules/ModifyUserData/ModifyBio/Index";
import ModifyCourse from "../../../Molecules/ModifyUserData/ModifyCourse/Index";
import ModifyIdentity from "../../../Molecules/ModifyUserData/ModifyIdentity/Index";
import ModifySocialMidias from "../../../Molecules/ModifyUserData/ModifySocialMidias/Index";
import { StyledForm } from "./Styled";

const Form = () => {

    type Inputs = {
        name: string;
        matriculation: number;
        instagram: string;
        twitter: string;
        personalEmail: string;
        academicEmail: string;
        course: string;
        bio: string;
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="identity">
                <ModifyIdentity errors={errors} register={register} />
            </div>
            <div className="social-midias">
                <ModifySocialMidias errors={errors} register={register} />
            </div>
            <div className="course">
                <ModifyCourse course={courses} errors={errors} register={register} />
            </div>
            <div className="upload-image">
                <InputUpload />
            </div>
            <div className="bio">
                <ModifyBio errors={errors} register={register} />
            </div>
            <div className="submit">
                <input type="submit" value={"Atualizar"} />
            </div>
        </StyledForm>
    )
}

export default Form