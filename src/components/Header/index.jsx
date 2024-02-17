import { GoSignOut, GoSearch } from 'react-icons/go';

import { Container, Logo, Logout, List } from "./styles";
import { ButtonHeader } from '../ButtonHeader'
import { InputHeader } from '../InputHeader';
import { HiMenu } from "react-icons/hi";


export function Header() {
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

            <ButtonHeader title="Pedidos (0)" />

            <Logout>
                <GoSignOut />
            </Logout>

        </Container>

    );

}