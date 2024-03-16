import { Container } from "./styles";
export function Select({ ...rest }) {
    return (
        <Container>
            <select {...rest} />
        </Container>
    );
}
