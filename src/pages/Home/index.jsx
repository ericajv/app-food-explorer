import { Container, Main } from './styles';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Sections } from '../../components/Sections'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [search, setSearch] = useState("")
    const [plates, setPlates] = useState([])

    useEffect(() => {
        async function fetchPlates() {
            const path = search ? `/plates?name=${search}` : '/plates'

            try {
                const response = await api.get(path)
                setPlates(response.data.categories || [])
            } catch (error) {

                if (error.response.status == 401) {
                    signOut()
                    navigate("/")
                }
            }
        }

        fetchPlates()
    }, [search])

    return (
        <Container>
            <Header search={setSearch}/>
            <Main>
                <section className="Banner">
                    <img src="assets\Banner.png" alt="Macarrons" />
                    <div className="Banner-background">
                        <div>
                            <h2> Sabores inigualáveis </h2>
                            <span> Sinta o cuidado do preparo com ingredientes selecionados </span>
                        </div>
                    </div>
                </section>
                <Sections plates={plates}/>
            </Main>
            <Footer />
        </Container>
    )
}