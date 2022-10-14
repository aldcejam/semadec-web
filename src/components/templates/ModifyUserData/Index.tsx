import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AngleBotton from "../../../../public/format/Angle-botton";
import Vector from "../../../../public/format/Vector";
import ButtonUpload from "../../Atoms/ButtonUpload/Index";
import ModifyBio from "../../Molecules/ModifyUserData/ModifyBio/Index";
import ModifyCourse from "../../Molecules/ModifyUserData/ModifyCourse/Index";
import ModifyIdentity from "../../Molecules/ModifyUserData/ModifyIdentity/Index";
import ModifySocialMidias from "../../Molecules/ModifyUserData/ModifySocialMidias/Index";
import { StyledModifyUserData } from "./Styled";

const ModifyUserData = () => {
    const course = [
        "Informática",
        "Eletrotécnica",
        "Administração",
        "Física",
        "Energias",
    ];

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

    const [isOpenComponentPersonaData, setIsOpenComponentPersonaData] = useState(false)
    const ToggleComponentPersonaData = () => {
        isOpenComponentPersonaData ? setIsOpenComponentPersonaData(false) :
            setIsOpenComponentPersonaData(true)
    }

    return (
        <StyledModifyUserData className={`is-open-component-${isOpenComponentPersonaData.toString()}`}>
            <div className="top-segment">
                <Vector />
                <div className="expand-area-click"
                    onClick={() => ToggleComponentPersonaData()}>
                    <div className={`complement-icon is-open-component-${isOpenComponentPersonaData.toString()}`}>
                        <AngleBotton />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="update-data">
                <ModifyIdentity errors={errors} register={register} />
                <ModifySocialMidias errors={errors} register={register} />
                <ModifyCourse course={course} errors={errors} register={register}/>
                <div className="update-data__upload-image">
                    <ButtonUpload />
                </div>
                <ModifyBio errors={errors} register={register}/>
                <div className="update-data__submit">
                    <input type="submit" value={"Atualizar"} />
                </div>
            </form>
        </StyledModifyUserData>
    );
};

export default ModifyUserData;
