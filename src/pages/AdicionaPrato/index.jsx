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
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';
import { useState } from 'react';

export function AdicionaPrato() {
    const navigate = useNavigate()
    const params = useParams()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [image, setImage] = useState("")

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, { name: newIngredient }])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.name !== ingredientDeleted))
    }

    function navigateToHome() {
        navigate("/")
    }

    async function handleCreatePlate() {
        if (!image) {
            return alert("Adicione uma imagem para o prato")
        }

        if (!name) {
            return alert("Adicione um titulo para o prato")
        }

        if (!description) {
            return alert("Adicione uma descrição para o prato")
        }

        if (!category) {
            return alert("Adicione um categoria para o prato")
        }

        if (!price) {
            return alert("Adicione um preço para o prato")
        }

        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        const response = await api.post(`/plates/`, {
            name,
            description,
            price,
            category_name: category,
            ingredients
        })

        if (response.status == 401) {
            navigate("/login")
        }

        console.log(image);
        const formData = new FormData()
        formData.append("image", image)
        await api.patch(`/plates/${params.id}/image`, formData)

        alert("Refeição salva com sucesso")
    }

    return (
        <Container>
            <Header />
            <ButtonBack>
                <Button onClick={navigateToHome} icon={IoChevronBackOutline} title="voltar" />
                <h2>Novo Prato</h2>
            </ButtonBack>
            <Form>
                <div className='firstline'>
                    <div className='image'>
                        <span>Imagem do prato</span>
                        <Input
                            icon={HiOutlineArrowUpTray}
                            placeholder="selecione a imagem"
                            type="file"
                            id="image"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className='name'>
                        <span>Name</span>
                        <Input
                            placeholder="Exemplo: Salada Cesar"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='category'>
                        <span>Categoria</span>
                        <Input
                            placeholder="No mínimo 6 caracteres"
                            icon={SlArrowDown}
                            type="select"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    </div>
                </div>
                <div className='secondline'>
                    <div className='ingredients'>
                        <span>Ingredientes</span>
                        <IngredientList>
                            {ingredients.map(ingredient =>
                                <IngredienteItem
                                    key={String(ingredient.id)}
                                    value={ingredient.name}
                                    onClick={() => handleRemoveIngredient(ingredient.name)}
                                />
                            )}

                            <IngredienteItem
                                $isNew
                                placeholder="Adicionar"
                                onChange={e => setNewIngredient(e.target.value)}
                                value={newIngredient}
                                onClick={handleAddIngredient}
                            />
                        </IngredientList>
                    </div>
                    <div className='price'>
                        <span>Preço</span>
                        <Input
                            placeholder="R$ 00,00"
                            type="float"
                            // value={"R$ " + String(price.toFixed(2)).replace(".", ",")}
                            value={price}
                            onChange={e => {
                                // console.log(e.target.value)
                                // const p = e.target.value.split(' ')[1].replace(",", ".")
                                // console.log(p)
                                // setPrice(p)
                                setPrice(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className='description'>
                    <span>Descrição</span>
                    <TextArea
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    />
                </div>
                <div onClick={handleCreatePlate} className='button'>
                    <Button title="Salvar alterações" />
                </div>
            </Form>
            <Footer />
        </Container>
    )
}