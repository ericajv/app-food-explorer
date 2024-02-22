import { Container, Logo, Form } from "./styles";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const { signIn } = useAuth()

    function navigateToRegister() {
        navigate("/register")
    }

    async function handleSignIn() {
        signIn({ email, password })
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
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button onClick={handleSignIn} title="Entrar" />
                <ButtonText onClick={navigateToRegister} title="Criar uma conta" />
            </Form>
        </Container>
    );

}