import { Container } from "./styles";

export function ButtonInclude({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}
