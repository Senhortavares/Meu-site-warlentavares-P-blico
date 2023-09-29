import React                                       from 'react'
import                                                  './Testimonials.css'
import Avatar01                                    from "../../assets/avatar01.jpg"
import Avatar02                                    from "../../assets/avatar02.jpg"
import Avatar03                                    from "../../assets/avatar03.png"
import Avatar04                                    from "../../assets/avatar04.jpg"
import Avatar05                                    from "../../assets/avatar05.png"
import Avatar06                                    from "../../assets/avatar06.png"
import Avatar07                                    from "../../assets/avatar07.png"
import Avatar08                                    from "../../assets/avatar08.jpg"



// importar núcleo do Swiper e módulos necessários
import { Pagination }                              from 'swiper/modules';

import { Swiper, SwiperSlide }                     from 'swiper/react';

// Importar estilos do Swiper
import                                                  'swiper/css';
import                                                  'swiper/css/pagination';


const data = [

  {
    avatar: Avatar01,
    name: 'Rosy Santos',
    review: 'Muito bom!.',
  
  },
  {
    avatar: Avatar02,
    name: 'Rosimar Tavares',
    review: 'Muito meu sobrinho.',
  },
  {
    avatar: Avatar03,
    name: '__.anynha.__',
    review: 'Seu trabalho é muito bom amigo, é ótimo. Prbns 😊😊'
  },
  {
    avatar: Avatar04,
    name: 'Claudia Antonia',
    review: 'É um grande exemplo para mim,continue se esforçando, vc é capaz, meu orgulho🙏🏾🙏🏾🙏🏾',
  },
  {
    avatar: Avatar05,
    name: 'Daniele Benfica',
    review: 'Projeto muiito bacana e bem estruturado, parabéns ficou incrível 😊😊'
  },
  {
    avatar: Avatar06,
    name: 'Rauan',
    review: 'Showwwwwww😃👏🏽👏🏽👏🏽👏🏽🫱🏿‍🫲🏾'
  },
  {
    avatar: Avatar07,
    name: 'Rony Fonceca',
    review: 'Site bastante interativo achei realmente show cara, você está de parabéns ! Algo que me chamou bastante a atenção foi o menu suspenso usando apenas o css, estou admirado com sua criatividade.'
  },
  {
    avatar: Avatar08,
    name: 'Thais Pereira',
    review: 'Muito Topppp!.'
  },
]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avaliação do Cliente!</h5>
      <h2>Comenterios.</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
>
         {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar}  />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  )
}

export default testimonials
