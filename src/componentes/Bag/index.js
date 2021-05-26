import './style.css';

import { ReactComponent as IconeMochila} from '../../assets/images/bag-icon.svg';
import { ReactComponent as Pessoa} from '../../assets/images/person-illustration.svg';
import { ReactComponent as CupomIcone} from '../../assets/images/coupon-icon.svg';

export default function Bag() {
    return (
        <div class="bag">
            <div class="cabecalho-sacola">
                <IconeMochila/> 
                <h3>Sacola</h3>
            </div>
            <div class="mid-sacola">
                <h3>Sacola Está Vazia</h3>
                <h6>Adcione Filmes Agora</h6>
                <Pessoa/>
            </div>
            <div class="pad-sacola">
                <h6>Insira Seu Cupom</h6>
                <div class="pesquisa">
                    <input className="icone_bag_pesquisar" type = "text" placeholder = "Cupom de desconto"/>
                    <CupomIcone/>
                </div>
            </div>
        </div>
    )
}