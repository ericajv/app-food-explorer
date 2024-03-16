import CurrencyInput from 'react-currency-input-field';
import { Container } from "./styles";

export function InputCurrency({ ...rest }) {
    return (
        <Container>
            <CurrencyInput {...rest}>
            </CurrencyInput>
        </Container>
    );
}
