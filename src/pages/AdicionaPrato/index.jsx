import { Container, ButtonBack, Form, IngredientList } from './styles';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { IngredienteItem } from '../../components/IngredienteItem'
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";


export function AdicionaPrato() {
  return (
    <Container>
      <Header />
      <ButtonBack>
        <Button icon={IoChevronBackOutline} title="voltar" />
        <h2>Novo Prato</h2>
      </ButtonBack>
      <Form>
        <div className='firstline'>
          <div className='image'>
            <span>Imagem do prato</span>
            <Input
              icon={HiOutlineArrowUpTray}
              placeholder="selecione a imagem"
              type="img"
            ></Input>
          </div>
          <div className='name'>
            <span>Name</span>
            <Input
              placeholder="Exemplo: Salada Cesar"
              type="text"
            ></Input>
          </div>
          <div className='category'>
            <span>Categoria</span>
            <Input
              placeholder="No mínimo 6 caracteres"
              icon={SlArrowDown}
              type="select"
            ></Input>
          </div>
        </div>
        <div className='secondline'>
          <div className='ingredients'>
            <span>Ingredientes</span>
            <IngredientList>
              <IngredienteItem value="cebola"></IngredienteItem>
              <IngredienteItem value="alface"></IngredienteItem>
              <IngredienteItem value="pão"></IngredienteItem>
              <IngredienteItem value="pepino"></IngredienteItem>
              <IngredienteItem value="tomate"></IngredienteItem>
              <IngredienteItem $isNew placeholder="Adicionar"></IngredienteItem>
            </IngredientList>
          </div>
          <div className='price'>
            <span>Preço</span>
            <Input
              placeholder="R$ 00,00"
              type="float"
            ></Input>
          </div>
        </div>
        <div className='description'>
          <span>Descrição</span>
          <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></TextArea>
        </div>
        <div className='button'>
          <Button title="Salvar alterações" />
        </div>
      </Form>
      <Footer />
    </Container>
  )
}