import { Container } from './styles';
import { BiSearch } from 'react-icons/bi';


export function Input( {icon: Icon, ...rest}) {
    return(
        <Container>            
            {Icon && <Icon size={24}/>}
            <input {...rest}/>
        </Container>
    );
}