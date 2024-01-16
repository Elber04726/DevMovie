import { useEffect, useState } from "react"

import { Container, Background } from "./styles"
import { getMovieVideos } from "../../services/getData"



function Modal({ movieId, setShowModal }){
    const [movie, setMovie] = useState()
    
    useEffect(() => {
        async function getMovies() {
       setMovie( await getMovieVideos(movieId))
        }
        getMovies()
    })

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
            <Container>
                <iframe
                src={`https://www.youtube.com/embed/${movie[0].key}`}
                width= "560" 
                height= "315" 

                ></iframe>
            </Container>
            )}
        </Background>
      )}
    

export default Modal