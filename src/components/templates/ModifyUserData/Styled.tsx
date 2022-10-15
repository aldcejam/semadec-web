import {styled} from "@mui/material/styles";

export const StyledModifyUserData = styled("section")`
  display: block;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 0 50px 0;
  border: ${(props) => props.theme.palette.primary.main} 1px solid;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  background-color: ${(props) => props.theme.palette.secondary.dark}1a;
  box-shadow: inset -40px -40px 81px ${(props) => props.theme.palette.primary.dark}12;
  backdrop-filter: blur(40px);
  transition: 0.3s;

  &.is-open-component-false {
    max-height: 80px;
    ${(props) => props.theme.breakpoints.down("md")} {
      max-height: 120px;
    }
    ${(props) => props.theme.breakpoints.down("sm")} {
      max-height: 80px;
    }
  }
  &.is-open-component-true {
    max-height: 100%;
  }

  .top-segment {
    position: relative;
    width: 100%;
    background-color: #f90000;

    .svg-vector {
      position: absolute;
      width: 100%;
    }

    .expand-area-click {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: 3%;
      @media (max-width: 1000px) {
        & {
          margin-top: 2%;
        }
      }
      ${(props) => props.theme.breakpoints.down("md")} {
        margin-top: 6%;
      }
      @media (max-width: 800px) {
        & {
          margin-top: 4.2%;
        }
      }
      ${(props) => props.theme.breakpoints.down("sm")} {
        margin-top: 3%;
      }
      ${(props) => props.theme.breakpoints.down("xs")} {
        margin-top: 1.5%;
      }

      .complement-icon {
        position: absolute;
        z-index: 1;
        border: 1px solid ${(props) => props.theme.palette.primary.dark};
        border-radius: 100px;
        padding: 4px;
        transition: 0.3s;
        cursor: pointer;
        &.is-open-component-true {
          transform: rotate(180deg);
        }

        .svg-angle-botton {
          display: flex;
          justify-content: center;
          height: 18px;
          width: 18px;
        }
      }
    }
  }

  .update-data {
    position: relative;
    z-index: 1;
    margin-top: 100px;
    display: grid;
    gap: 15px;
    grid-template:
      "identity social-midias"
      "identity social-midias"
      "course course"
      "upload-image upload-image"
      "bio-message bio-message"
      "submit submit"
      / 1fr 1.5fr;
    padding: 0 10%;

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-top: 22%;
    }
    ${(props) => props.theme.breakpoints.down("sm")} {
      margin-top: 23%;
      padding: 0 6%;
    }

    .input-material-ui {
      width: 100%;
      transition: 0.3s all;
      input {
        display: flex;
        align-items: center;
        background-color: transparent;
        border-radius: ${(props) => props.theme.shape.borderRadius};
      }
      .MuiOutlinedInput-root {
        & fieldset {
          border: solid 2px ${(props) => props.theme.palette.primary.main};
          border-radius: ${(props) => props.theme.shape.borderRadius};
        }
        &.Mui-focused fieldset {
          border: solid 2px ${(props) => props.theme.palette.primary.dark};
        }
      }
      MuiInputLabel-root {
        padding-bottom: 10px;
      }
    }
    
    &__upload-image {
      grid-area: upload-image;
    }
    &__submit {
      grid-area: submit;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      input[type="submit"] {
        background-color: transparent;
        filter: blue(10);
        border-radius: ${(props) => props.theme.shape.borderRadius};
        border: 2px solid ${(props) => props.theme.palette.secondary.main};
        padding: 10px 30px;
        color: ${(props) => props.theme.palette.text.primary};
        font-weight: bold;
        transition: 0.3s;
        &:hover {
          background-color: ${(props) => props.theme.palette.text.primary}1a;
          cursor: pointer;
        }
      }
    }
  }
`;
