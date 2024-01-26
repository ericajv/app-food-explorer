import { Container } from './styles';

export function ButtonText({ title, loading = false, icon: Icon, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}>
            {Icon && <Icon size={30} />}

            {loading ? 'carregando...' : title}

        </Container>
    );
}