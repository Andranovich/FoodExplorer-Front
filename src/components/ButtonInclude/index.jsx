import { Container } from "./styles";

export function ButtonInclude({ icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {icon && icon}
      {title}
    </Container>
  );
}
