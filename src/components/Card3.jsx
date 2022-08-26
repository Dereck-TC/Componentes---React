import React from 'react'; //No es necesario importar
import '../assets/css/Car.css'
import image from '../assets/img/2396.jpg';

function Card3(){
    //Un componente siempre debe devolver una cosa (un elemento de jsx)
    return <> {/*Fragment <React.Fragment></React.Fragment>*/}
     <article className='total-card'>
        {/* <p>Componente</p> */}
        <div className='body-card'>
            <div className="title">
                <h1>SUMER TIME</h1>
            </div>
            <div className="img-card">
                <div className="photo">
                    <img className="img-product" src={image} alt="product" />
                </div>
            </div>
            <div className="content-card">
                <div className="contador">😍 10k</div>
                <div className="card-description">
                    <div className="buttons">
                        <button className='btn'>👍 like</button>
                        <button className='btn'>💬 comentar</button>
                        <button className='btn'>🌐 compartir</button>
                    </div>
                    <p className="content-des">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ea odit.
                    </p>
                </div>
            </div>
        </div>
    </article>
    </>
}

export default Card3