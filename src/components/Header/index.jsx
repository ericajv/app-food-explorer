import { GoSignOut, GoSearch } from 'react-icons/go';

import { Container, Logo, Logout, List } from "./styles";
import { ButtonHeader } from '../ButtonHeader'
import { InputHeader } from '../InputHeader';
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate()

    function navigateToCreate() {
        navigate("/adicionar-prato")
    }

    return (
        <Container>
            <List>
                <HiMenu />
            </List>
            <Logo>
                <img src="/assets/logo.svg" alt="Logo" />
                <h1>food explorer</h1>

            </Logo>
            <InputHeader placeholder="Busque por pratos ou ingredientes" icon={GoSearch} />

            <ButtonHeader
                title={false ? "Novo prato" : "Pedidos (0)"}
                onClick={false ? navigateToCreate : null}
            />

            <Logout>
                <GoSignOut />
            </Logout>

        </Container>

    );

}