import { styled } from "@mui/material/styles";

export const StyledForm = styled("form")`
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
  .identity{
    grid-area: identity;
  }
  .social-midias{
    grid-area: social-midias;
  }
  .course{
    grid-area: course;
  }
  .upload-image {
    grid-area: upload-image;
  }
  .bio{
    grid-area: bio-message;
  }
  .submit {
    grid-area: submit;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    input[type="submit"] {
      grid-area: submit;
      padding: 10px 30px;
      font-weight: bold;
      transition: 0.3s;
      filter: blur(10);
      background-color: ${(props) => props.theme.palette.primary.main}5b;
      color: ${(props) => props.theme.palette.text.primary};
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      border: 2px solid ${(props) => props.theme.palette.secondary.main};

      &:hover {
        background-color: ${(props) => props.theme.palette.primary.main}c2;
        cursor: pointer;
      }
    }
  }
`;
