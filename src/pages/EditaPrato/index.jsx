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
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function EditaPrato() {
    const navigate = useNavigate()
    const params = useParams()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [image, setImage] = useState("")

    function navigateToHome() {
        navigate("/")
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, {name: newIngredient}])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.name !== ingredientDeleted))
    }

    async function handleDeletePlate() {
        const confirm = window.confirm("Deseja deletar a refeição?")

        if (confirm) {
            await api.delete(`/plates/${params.id}`)
            navigate("/")
        }
    }

    async function handleEditPlate() {
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

        await api.put(`/plates/${params.id}`, { name, description, price, category_name: category, ingredients })

        const response = await api.get(`/meals/${params.id}`)

        if (response.status == 401) {
            navigate("/login")
        }

        if (image != response.data.image) {
            const formData = new FormData()
            formData.append("image", image)
            await api.patch(`/meals/${params.id}/image`, formData)
        }

        alert("Refeição modificada com sucesso")
        navigate("/")
    }

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/plates/${params.id}`)
            const { category, ingredients, plate } = response.data

            setName(plate.name)
            setDescription(plate.description)
            setCategory(category.name)
            setPrice(plate.price)
            setIngredients(ingredients)
            setImage(plate.image || "")
        }
        fetchPlate()
    }, [])

    return (
        <Container>
            <Header />
            <ButtonBack>
                <Button onClick={navigateToHome} icon={IoChevronBackOutline} title="voltar" />
                <h2>Editar Prato</h2>
            </ButtonBack>
            <Form>
                <div className='firstline'>
                    <div className='image'>
                        <span>Imagem do prato</span>
                        <Input
                            icon={HiOutlineArrowUpTray}
                            placeholder="selecione a imagem"
                            type="file"
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
                            value={"R$ " + String(price.toFixed(2)).replace(".", ",")}
                            onChange={e => setPrice(Number(e.target.value.replace(",", ".")))}
                        />
                    </div>
                </div>
                <div className='description'>
                    <span>Descrição</span>
                    <TextArea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='buttons'>
                    <Button
                        onClick={handleDeletePlate}
                        title="Excluir prato"
                        className='buttonDelet'
                    />
                    <Button
                        onClick={handleEditPlate}
                        title="Salvar alterações"
                        className='buttonSave'
                    />
                </div>
            </Form>
            <Footer />
        </Container>
    )
}