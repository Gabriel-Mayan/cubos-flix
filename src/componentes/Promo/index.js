import './style.css';

import { ReactComponent as TimeIcon } from '../../assets/images/time-icon.svg';
import { ReactComponent as CircleIcon } from '../../assets/images/coupon-circle-icon.svg';
import Money from '../../assets/images/money.png';

export default function Banner() {
    return (
        <div class="banner">
            <h1 class="txt_cupom">APROVEITE AGORA</h1>            
            <div class="info_cupom">
                <CircleIcon />
                <span class="titulo_cupom">CUPOM: </span>
                <span calss="valor_cupom">HTMLNAOELINGUAGEM</span>
            </div>

            <h2 class="txt_tempo">FINALIZA EM:</h2>           
            <div class="info_tempo">
                <TimeIcon />
                <span>00:05:00</span>
            </div>

            <img class="img_money" src={Money} alt="Promotion Banner" />
        </div>
    )
}
