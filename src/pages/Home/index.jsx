import { Container, Main } from './styles';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Sections } from '../../components/Sections'


export function Home() {
  return (
    <Container>
      <Header />
      <Main>

        <section className="Banner">
          <img src="public\assets\Banner.png" alt="Macarrons" />

          <div className="Banner-background">
            <div>
              <h2> Sabores inigualáveis </h2>
              <span> Sinta o cuidado do preparo com ingredientes selecionados </span>
            </div>
          </div>
        </section>

        <Sections/>

      </Main>
      <Footer />
    </Container>
  )
}