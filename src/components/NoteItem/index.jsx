import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NoteItem ({ isNew = false, value, onClick, onChange, ... rest}) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
                placeholder='Adicionar'
                onChange={onChange}
            />
            <button
                onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}