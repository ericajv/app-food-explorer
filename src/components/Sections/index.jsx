import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Container, Slider } from "./styles"
import { CardPrato } from '../CardPrato'
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Sections() {
    const [plates, setPlates] = useState([])
    const [search, setSearch] = useState("")

    const navigate = useNavigate()
    const { signOut } = useAuth()

    useEffect(() => {
        async function fetchPlates() {
            const path = search ? `/plates?name=${search}` : '/plates';

            try {
                const response = await api.get(path)
                setPlates(response.data.categories || [])
            } catch (error) {

                if (error.response.status == 401) {
                    signOut()
                    navigate("/")
                }

                console.log(error)
            }
        }

        fetchPlates()
    }, [search])

    return (
        <Container>
            {
                plates.map(category =>
                    <div key={String(category.id)}>
                        <h2> {category.name} </h2>
                        <Slider>
                            <button className="ArrowBack" >
                                <IoIosArrowBack size={40} />
                            </button>

                            {category.plates.map(plate =>
                                <CardPrato key={String(plate.id)} data={plate} />
                            )}

                            <button className="ArrowForward" >
                                <IoIosArrowForward size={40} />
                            </button>
                        </Slider>
                    </div>
                )
            }
        </Container>
    )
}
