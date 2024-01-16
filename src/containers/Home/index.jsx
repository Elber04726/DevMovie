import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImages } from '../../Utils/getImages'
import Modal from '../../components/Modal'





function Home(){
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topPopular, setPopularSeries] = useState()
    const navigate =  useNavigate()


useEffect(() => { 
            async function getMovies(){
                const {
                    data: {results}
                } = await api.get('/movie/popular')
        
                setMovie(results[0])
            }


            async function getTopMovies(){
                const {
                    data: {results}
                } = await api.get('/movie/top_rated')

                console.log(results)
                setTopMovies(results)
            }
        
            async function getTopSeries(){
                const {
                    data: {results}
                } = await api.get('/tv/top_rated')

                console.log(results)
                setTopSeries(results)
            }

              
            async function getPopularSeries(){
                const {
                    data: {results}
                } = await api.get('/tv/popular')

                console.log(results)
                setPopularSeries(results)
            }


            getMovies()
            getTopMovies()
            getTopSeries()
            getPopularSeries()
  
}, [])

    return(
        <>
        {movie && (
        <Background img={getImages(movie.backdrop_path)}>
           {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
          <Container>
           <Info>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
                <ContainerButtons>
                    <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                    <Button red={false} onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                </ContainerButtons>
            </Info>
            <Poster>
                <img 
                src={getImages(movie.poster_path)} 
                alt="capa-do-filme" />
            </Poster>
            </Container>
        </Background>
    )}
    {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
    {topSeries && <Slider info={topSeries} title={'Top Séries'}></Slider>}
    {topPopular && <Slider info={topPopular} title={'Séries Populares'}></Slider>}
    </>

)
}

export default Home