import { Container, Logo, Form } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function Signup() {
    return (
        <Container>
            <Logo>
                <img src="/assets/logo.svg" alt="Logo" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h2>Faça Login</h2>
                <label htmlFor="text">Name</label>
                <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                ></Input>
                <label htmlFor="email">Email</label>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                ></Input>
                <label htmlFor="password">Senha</label>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                ></Input>
                <Button title="Criar conta"></Button>
                <ButtonText title="Já tenho uma conta"></ButtonText>
            </Form>
        </Container>
    );

}