import { styled } from "@mui/material";
import { useThemeContext } from "../../src/contexts/ThemeContext";

const CurverBorderButton = () => {
    const {mainColor,secondaryColor} = useThemeContext()
    const Style = styled("div")(({ ...props }) => `
    .cls-1 {
        fill: url(#Gradiente_sem_nome);
    }
  `);
    return (
        <Style className="svg-curver-border-button">
            <svg viewBox="0 0 174 156">
                <defs>
                    <linearGradient
                        id="Gradiente_sem_nome"
                        x1="-29.31"
                        y1="117.73"
                        x2="125.77"
                        y2="-55.24"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 144)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color={mainColor} />
                            <stop offset="1" stop-color={secondaryColor} />
                    </linearGradient>
                </defs>
                <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                        <path
                            className="cls-1"
                            d="M0,156H174L69.39,129A50,50,0,0,1,34.8,97.42L0,0Z"
                        />
                    </g>
                </g>
            </svg>
        </Style>
    );
};

export default CurverBorderButton;
