import { GoSignOut } from 'react-icons/go';
import { GoSearch } from "react-icons/go";


import { Container, Logo, Logout } from "./styles";
import { ButtonHeader } from '../ButtonHeader'
import { Input } from '../Input';


export function Header() {
    return (
        <Container>

            <Logo>
                <img src="/assets/logo.svg" alt="Logo" />
                <h1>food explorer</h1>

            </Logo>
            <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} ></Input>

            <ButtonHeader title="Pedidos (0)">
            </ButtonHeader>

            <Logout>
                <GoSignOut />
            </Logout>

        </Container>

    );

}