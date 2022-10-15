import {styled} from "@mui/material/styles";

const Vector = () => {
    const Style = styled('div')`
        .cls-1{
            fill: ${props => props.theme.palette.primary.main};
        }
    `
    return (
        <Style className="svg-vector">
            <svg viewBox="22 0 500 52.78">
                <defs></defs>
                <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                        <path
                            className="cls-1"
                            d="M21.76,0H522.24A21.88,21.88,0,0,1,544,22L276.37,52.56a34.63,34.63,0,0,1-7.75,0L0,22A21.88,21.88,0,0,1,21.76,0Z"
                        />
                    </g>
                </g>
            </svg>
        </Style>
    );
};

export default Vector;
