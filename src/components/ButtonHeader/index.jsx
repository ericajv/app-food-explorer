import { Container } from './styles';
import { PiReceiptBold } from "react-icons/pi";

export function ButtonHeader({ title, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {title == "Pedidos (0)" &&  <PiReceiptBold />}
            {title}
        </Container>
    );
}