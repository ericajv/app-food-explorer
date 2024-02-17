import { Container, ImageFav, Title, Amount, Increment } from './styles';
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";
import {  useNavigate } from "react-router-dom";

import { Button } from '../Button'


export function CardPrato({ title, data, ...rest }) {
    const navigate = useNavigate()

    function navigateToEdit() {
        navigate(`/editar-prato/${data.id}`)
    }

    return (
        <Container>
            {false
                ? <button className="FavoriteMeal" > <FaRegHeart /> </button>
                : <button onClick={navigateToEdit} className="EditMeal" > <PiPencilSimple /> </button>
            }
            <ImageFav>
                <img src="public\assets\Mask group.png" alt="imagem do Prato" />
            </ImageFav>
            <Title>
                <p>Salada Ravanello</p>
                <IoIosArrowForward />
            </Title>
            <p>Massa fresca com camarões e pesto. </p>
            <span>R$ 49,97</span>
            {true &&
                <Increment>
                    <Amount>
                        <FiMinus />
                        <p>01</p>
                        <GoPlus />
                    </Amount>
                    <Button title="Incluir" />
                </Increment>
            }
        </Container>
    );
}