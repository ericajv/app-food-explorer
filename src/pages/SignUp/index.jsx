import { Container, Logo, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function navigateToLogin() {
        navigate("/")
    }

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso");
                navigate("/");
            })
            .catch(error => alert(error.response.data.message || "Não foi possível cadastrar"));
    }

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
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button onClick={handleSignUp} title="Criar conta"/>
                <ButtonText onClick={navigateToLogin} title="Já tenho uma conta"/>
            </Form>
        </Container>
    );

}