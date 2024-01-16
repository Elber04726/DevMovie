
import Card from "../Card"
import { Container } from "./styles"
import {Swiper, SwiperSlide} from 'swiper/react'


function Slider({ info, title }){

    return (
        <>
        <Container>
           <h2>{title}</h2>
           <Swiper
            grabCursor
            spaceBetween={10}
            slidesPerView={'auto'}
            className="swiper"
           >
            {info.map((item, index) => (
                <SwiperSlide key={index}>
                    <Card item={item}></Card>
                </SwiperSlide>
            ))}
           
           </Swiper>
        </Container>
        </>
    )

}


export default Slider