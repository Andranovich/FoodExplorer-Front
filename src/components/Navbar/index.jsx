import { Container } from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import { BiSearch } from 'react-icons/bi'
export function Navbar() {
    return(
        <Container>
            
            <div>
                <img src="/src/assets/Polygon 1.svg" alt="polygon" />
                <h1>food explorer</h1>
            </div>
            <Input 
            icon={BiSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            <Button/>
        </Container>
    );
}
