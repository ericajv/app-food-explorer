import { Container, Logo, Form } from "./styles";
import {  useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function Signin() {
    
    const navigate = useNavigate()

    function navigateToRegister() {
        navigate("/register")
    }

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
                <Button title="Entrar" ></Button>
                <ButtonText onClick={navigateToRegister} title="Criar uma conta"></ButtonText>
            </Form>
        </Container>
    );

}