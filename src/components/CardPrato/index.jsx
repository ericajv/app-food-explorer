import { Container, ImageFav, Title, Amount, Increment } from './styles';
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import {  useNavigate } from "react-router-dom";

import { Button } from '../Button'
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function CardPrato({ title, data, ...rest }) {
    const navigate = useNavigate()
    const { user } = useAuth()
    const plateImageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null

    function navigateToEdit() {
        navigate(`/editar-prato/${data.id}`)
    }

    const [quantity, setQuantity] = useState(1)

    function handleAddItem() {
        setQuantity(quantity + 1)
    }

    function handleRemoveItem() {
        if (quantity != 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <Container>
            {user.role != "admin"
                ? <button className="FavoriteMeal" > <FaRegHeart /> </button>
                : <button onClick={navigateToEdit} className="EditMeal" > <PiPencilSimple /> </button>
            }
            <ImageFav onClick={navigateToEdit}>
                <img src={plateImageUrl} alt="imagem do Prato" />
                {/* <img src="assets\Mask group.png" alt="imagem do Prato" /> */}
            </ImageFav>
            <Title onClick={navigateToEdit}>
                <p>{data.name}</p>
                <IoIosArrowForward />
            </Title>
            <p>{data.description}</p>
            <span>R$ {String(data.price.toFixed(2)).replace(".", ",")}</span>
            {user.role != "admin" &&
                <Increment>
                    <Amount>
                        <FiMinus onClick={handleRemoveItem}/>
                        <p>{quantity < 10 ? `0${quantity}` : quantity}</p>
                        <GoPlus onClick={handleAddItem}/>
                    </Amount>
                    <Button title="Incluir" />
                </Increment>
            }
        </Container>
    );
}