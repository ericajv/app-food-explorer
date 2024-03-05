import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Container, Slider } from "./styles"
import { CardPrato } from '../CardPrato'

export function Sections({ plates }) {
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
