import './style.css';
import SearchInput from '../Input_Busca/index';

import ProfileIcon from '../../assets/images/profile.jpg';

import { ReactComponent as Logo} from '../../assets/images/logo.svg';
import { ReactComponent as IconePromocao} from '../../assets/images/promotion-icon.svg';
import { ReactComponent as IconeFavoritos} from '../../assets/images/bookmark-icon.svg';

export default function Header(props)
{
  return(
    <header className = "header">
        <div  className="header_pesquisa">
            <Logo />        
            <SearchInput encontrarFilmePorTitulo = { props.encontrarFilmePorTitulo }/>
        </div>

        <div class="favoritos">
            <IconeFavoritos className="icone_favoritos" />      
            <h5>Favoritos</h5>
        </div>

        <div class="promocoes">
            <IconePromocao className="icone_pesquisar" />
            <h5>Promoções</h5>
        </div>

        <div class="bem-vindo">
            <h5>Bem vindo Mayan</h5>
            <img src = {ProfileIcon} className="imagem_perfil" alt = "Imagem de Perfil"/>      
        </div>
    </header>
    )
}
