import { useState } from 'react'
import './App.css'
import Slider from 'react-slick'

interface Props{
    className: string;
    style: string;
    onClick: string;
}

function NextArrow(props: any){

    const { className, style, onClick } = props;
    return (
        <div
        className={className}
            style = {{...style, display: 'block', background: '#000', color: '#000'}}
        onClick={onClick}
        >

        </div>
    )

}

function PrevtArrow(props: any){

    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style = {{...style, display: 'block', background: '#000'}}
        onClick={onClick}
        >

        </div>
    )

}

function App() {
    const images = [
        'BANNER_BLACK_BAGS_DESKTOP',
        'BANNER_NEW_IN_DESKTOP',
        'BANNER_CHANEL_DESKTOP'
    ];





  const [count, setCount] = useState(0)
  const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: <NextArrow/>,
     prevArrow: <PrevtArrow/>
  }


  return (
    <div className="app">
    <div className= 'advisor'>
        <div className = 'advlimit'>
        <p>
        As melhores marcas em até 12x sem juros! Somene produtos originais e com duplo ava de autenticidade

    </p>

        <button>
            QUERO VENDER
        </button>
        </div>

    </div>

        <div className='navbar'>
            <div className='navlimit'>
            <img src = {'./imgs/logo-cansei-vendi.png'} alt='image unavaiable'/>
            <div className='actionbtns'>
                <ul>
                    <li>INÍCIO</li>
                    <li>PRODUTOS</li>
                    <li>QUEM SOMOS</li>

                </ul>
                <form>
                    <input type='search' placeholder='Buscar Produto'/>
                    <button type='submit'>
                        <img className = "ico-search"src={'./imgs/ico-search.svg'}
                        />
                    </button>

                </form>
                <button className='fav'>

                    <img src={'./imgs/ico-heart.svg'} alt='image unavaiable'/>
                </button>
                    <button className='bag'>

                        <img src = {'./imgs/ico-bag.svg'} alt='image unavaiable'/>
                    </button>
                <span>|</span>
                <a href='#'>Cadastre-se</a>
                <a href='#'>Acessar</a>

            </div>
            </div>
                    </div>


        {/*hero section**/}

<div className='heading'>
                <p>MELHOR BRECHÓ DE LUXO DO BRASIL! COMPRE BOLSAS, ROUPAS, SPATOS E ACESSÓRIOS DAS MAIORES MARCAS DE LUXO COM AUTENTICIDADE GARANTIDA
                     </p>

            </div>


        {/**React Slick**/}

                <div className = "sildes" >
            <Slider
                {...settings}

            >

                {
                    images.map((img, index)=> {

                        return <div key = {index}><img src={`./imgs/${img}.webp`} alt='image unavaiable' className='slideImg'/> </div>
                })
                }
            </Slider>
                </div>



    </div>
  )
}

export default App
