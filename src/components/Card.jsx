import React from 'react'; //No es necesario importar
import '../assets/css/Card.css';
import image from '../assets/img/2396.jpg';

function Card(){
    //Un componente siempre debe devolver una cosa (un elemento de jsx)
    return <> {/*Fragment <React.Fragment></React.Fragment>*/}
     <article className='card'>
        {/* <p>Componente</p> */}
        <div className='card-content'>
            <div className="product">
                <div className="imga">
                    <img className="img-product" src={image} alt="product" />
                </div>
            </div>
            <div className="content">
                <div className="description">
                    <h3 className="title-product">SUMER TIME</h3>
                    <p className="content-product">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ea odit.
                    </p>
                </div>
                <div className="price">
                    <p className="price-number">$20
                    <button href="" className="buy">BUY</button></p>
                </div>
            </div>
        </div>
    </article>
    </>
}

export default Card