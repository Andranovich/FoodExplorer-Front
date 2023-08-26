import { Container } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';

export function Navbar() {
    return(
        <Container>
            
            <div>
                <img src="/src/assets/Polygon 1.svg" alt="polygon" />
                <h1>food explorer</h1>
            </div>
            <Input placeholder="Busque por pratos ou ingredientes"/>
            <Button/>
        </Container>
    );
}
