import {styled} from "@mui/material/styles";

const AngleBotton = () => {
    const Style = styled('div')`
    .cls-1{fill: ${(props) => props.theme.palette.primary.dark};}
    `
  return (
    <Style className="svg-angle-botton">
        <svg viewBox="0 0 29 17.6">
      <g id="Camada_2" data-name="Camada 2">
        <g id="Camada_1-2" data-name="Camada 1">
          <path
            className="cls-1"
            d="M13.37,17.13.47,4.23A1.59,1.59,0,0,1,.47,2L2,.47a1.59,1.59,0,0,1,2.25,0L14.5,10.69,24.78.46A1.59,1.59,0,0,1,27,.47L28.53,2a1.61,1.61,0,0,1,0,2.26l-12.9,12.9A1.61,1.61,0,0,1,13.37,17.13Z"
          />
        </g>
      </g>
        </svg>
    </Style>
  );
};
export default AngleBotton;
