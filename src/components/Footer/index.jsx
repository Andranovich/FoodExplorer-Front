// import { Content, Container, Footering } from "./styles";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <footer>
        <div>
          <img src="/src/assets/imagens/Polygon2.svg" alt="polygon" />
          <h1>food explorer</h1>
        </div>

        <p>© 2023 - Todos os direitos reservados.</p>

      </footer>
    </Container>
  );
}

// export function Footer({ className }) {
//   return (
//     <Footering className={className}>
//       <Container>
//         <Content >
//           <div>
//             <img src="/src/assets/imagens/Polygon2.svg" alt="polygon" />
//             <h1>food explorer</h1>
//           </div>

//           <p>© 2023 - Todos os direitos reservados.</p>
//         </Content>
//       </Container>
//     </Footering>
//   );
// }
