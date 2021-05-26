import './style.css';

import {useState} from "react";

import { ReactComponent as IconePesquisa} from '../../assets/images/search-icon.svg';



export default function SearchInput(props)
{
    const [search, setSearch] = useState('');
    
    function pesquisarNoEnter(tecla)
    {
        if(tecla.key !== 'Enter') return;
    
        props.encontrarFilmePorTitulo(search)
    }
    
    return (
        <div className = "pesquisa">
            <input  
                className = "conteiner_pesquisa" 
                type = "text" 
                placeholder = "Pesquisar Filmes..." 
                
                onChange = {pesquisa => setSearch(pesquisa.target.value)}
                value={search}
                onKeyDown={pesquisa => pesquisarNoEnter(pesquisa)}
            />            
            <IconePesquisa 
                className = "icone_pesquisa" 
                alt = "icons Pes"
                onClick = {() => props.encontrarFilmePorTitulo(search)}
                />        
        </div>
    )
}