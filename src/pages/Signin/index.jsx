import { Container, Logo, Form } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Signin() {
    return (
        <Container>
            <Logo>
                <img src="/assets/logo.svg" alt="Logo" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h2>Faça Login</h2>
                  <label htmlFor="email">Email</label>  
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                ></Input>
                 <label htmlFor="password">Senha</label>  
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                ></Input>
                <Button title="Entrar"></Button>
            </Form>
        </Container>
    );

}