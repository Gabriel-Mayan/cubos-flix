import { ReactComponent as Estrela } from '../../../assets/images/star.svg';
import { ReactComponent as EstrelaDourada } from '../../../assets/images/golden-star.svg';

import './style.css';

export default function Card_Movie(props) 
{
    const background = `url(${props.backgroundImg}) no-repeat center / cover`;

    return (
        <div className="filme_card" style={{background}}>           
            <Estrela 
                className={`estrela_topo ${props.isStarred ? "ativo" : ""}`} 
                onClick = { () => props.AlterarEstadoFavorito(props.title)}
            />            
            
            <div className="filme_info">
                <h3>{props.title}</h3>
                <div className="movie-stars">
                    <EstrelaDourada />
                    {props.starsCount}
                </div>
            </div>
                
            <button className="botao_compra">
                <h3>Sacola</h3>
                <span className="price">R$ {props.price.toFixed(2)}</span>
            </button>            
        </div>
    )

}