import {styled} from "@mui/material/styles";

const Losango = () => {
    const StyledLosango = styled("div")`
    .cls-1 {
      fill: url(#Gradiente_sem_nome);
    }
  `;
    return (
        <StyledLosango className="svg-losango" >
            <svg viewBox="0 0 974 461">
                <defs>
                    <linearGradient
                        id="Gradiente_sem_nome"
                        y1="311.5"
                        x2="974"
                        y2="311.5"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 542)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#0085ff" />
                        <stop offset="0.5" stop-color="#d943b8" />
                        <stop offset="1" stop-color="#0500ff" />
                    </linearGradient>
                </defs>
                <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                        <path className="cls-1" d="M487,0,974,230.5,487,461,0,230.5Z" />
                    </g>
                </g>
            </svg>
        </StyledLosango>
    );
};

export default Losango;
