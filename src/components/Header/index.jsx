import { GoSignOut, GoSearch } from 'react-icons/go';

import { Container, Logo, Logout, List } from "./styles";
import { ButtonHeader } from '../ButtonHeader'
import { InputHeader } from '../InputHeader';
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { user } = useAuth()
    const navigate = useNavigate()

    function navigateToCreate() {
        navigate("/adicionar-prato")
    }

    function navigateToHome() {
        navigate("/")
    }

    const { signOut } = useAuth()

    async function handleSignOut() {
        signOut()
    }

    return (
        <Container>
            <List>
                <HiMenu />
            </List>

            <Logo onClick={navigateToHome}>
                <img src="/assets/logo.svg" alt="Logo" />
                <h1>food explorer</h1>
            </Logo>

            <InputHeader placeholder="Busque por pratos ou ingredientes" icon={GoSearch} />

            <ButtonHeader
                title={user.role == "admin" ? "Novo prato" : "Pedidos (0)"}
                onClick={user.role == "admin" ? navigateToCreate : null}
            />

            <Logout onClick={handleSignOut}>
                <GoSignOut />
            </Logout>

        </Container>

    );

}