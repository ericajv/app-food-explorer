
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Container, Slider } from "./styles"
import {CardPrato} from '../CardPrato'

export function Sections() {
      return (
        <Container>
            <h2> Refeições </h2>

            <Slider>
              
                <button className="ArrowBack" >
                    <IoIosArrowBack size={40} />
                </button>
                <CardPrato></CardPrato>
                <CardPrato></CardPrato>
                        
            
                <button className="ArrowForward" >
                    <IoIosArrowForward size={40} />
                </button>
             </Slider>
        </Container>
    )
}
