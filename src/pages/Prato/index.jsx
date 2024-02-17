import { Container, ButtonBack, Details, TagList, Increment, Amount, Description } from './styles';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { IoChevronBackOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function Prato() {
  const navigate = useNavigate()

  function navigateToHome() {
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <ButtonBack>
        <Button onClick={navigateToHome} icon={IoChevronBackOutline} title="voltar" />
      </ButtonBack>
      <Details>
        <img src="public\assets\Mask group.png" alt="foto prato comida" />
        <Description>
          <p className='title'>Salada Ravanello</p>
          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. </span>
          <TagList>
            <Tag title="alface"></Tag>
            <Tag title="cebola"></Tag>
            <Tag title="pão naan"></Tag>
            <Tag title="penino"></Tag>
            <Tag title="rabanete"></Tag>
            <Tag title="tomate"></Tag>
          </TagList>

          <Increment>
            <Amount>
              <FiMinus />
              <p>01</p>
              <GoPlus />
            </Amount>
            <Button title="Incluir" />
          </Increment>
        </Description>
      </Details>
      <Footer />
    </Container>
  )
}