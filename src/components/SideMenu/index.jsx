import { Container, HeaderMenu, Frame } from './styles';
import { MdClose } from "react-icons/md";
import { InputMenu } from "../InputMenu";
import { ButtonMenu } from "../ButtonMenu";
import { GoSearch } from "react-icons/go";

import { Footer } from '../Footer'

export function SideMenu() {
  return (
    <Container>
      <HeaderMenu>
        <MdClose />
        <p>Menu</p>
      </HeaderMenu>
      <Frame>
        <InputMenu placeholder="Busque por pratos ou ingredientes" icon={GoSearch} />
        <ButtonMenu title="Sair"></ButtonMenu>
      </Frame>
      <Footer />
    </Container>
  )
}