import { Container } from "./styles";

export function Button({ icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {icon && icon}
      {title}
    </Container>
  );
}
