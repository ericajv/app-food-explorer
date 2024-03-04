import { Container, ButtonBack, Details, TagList, Increment, Amount, Description } from './styles';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { IoChevronBackOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function Prato() {
    const navigate = useNavigate()
    const params = useParams()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const [ingredients, setIngredients] = useState([])

    const [image, setImage] = useState("")

    const [quantity, setQuantity] = useState(1)

    const platePrice = "R$ " + String(price.toFixed(2)).replace(".", ",")
    const plateImageUrl = image ? `${api.defaults.baseURL}/files/${image}` : null


    function handleAddItem() {
        setQuantity(quantity + 1)
    }

    function handleRemoveItem() {
        if (quantity != 1) {
            setQuantity(quantity - 1)
        }
    }

    function navigateToHome() {
        navigate("/")
    }

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/plates/${params.id}`)
            const { _, ingredients, plate } = response.data

            setName(plate.name)
            setDescription(plate.description)
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
            </ButtonBack>
            <Details>
                <img src={plateImageUrl} alt="imagem do Prato" />
                <Description>
                    <p className='title'>{name}</p>
                    <span>{description}</span>
                    <TagList>
                        {ingredients.map(ingredient =>
                            <Tag
                                key={String(ingredient.id)}
                                title={ingredient.name}
                            />
                        )}
                    </TagList>

                    <Increment>
                        <Amount>
                            <FiMinus onClick={handleRemoveItem}/>
                            <p>{quantity < 10 ? `0${quantity}` : quantity}</p>
                            <GoPlus onClick={handleAddItem}/>
                        </Amount>
                        <Button title={`Incluir ∙ ${platePrice}`} />
                    </Increment>
                </Description>
            </Details>
            <Footer />
        </Container>
    )
}