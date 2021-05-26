/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";

import './style.css';

import Movies from  './Dados/filmes';
import Filtro from './Filtros/index';
import Card_Movie from './Card/index';



export default function Filmes(props)
{    
    
    const [filmes, setFilme] = useState(Movies);
    const [filtroCategoria, setFiltroCategoria] = useState([]);    
    
    function AlterarEstadoFavorito(tituloFilme)
    {
        const novosFilmes = [...filmes];

        const filme = novosFilmes.find(filme => filme.title === tituloFilme);
        filme.isStarred = !filme.isStarred
        
        setFilme(novosFilmes);
    }

    function RetornarInfoFilme(top)
    {
        let list_film;
        
        if(top)
        {
            list_film = filmes.slice(0,5).map(filme => 
                (
                    <Card_Movie             
                    title = {filme.title}
                    backgroundImg = {filme.backgroundImg}
                    starsCount = {filme.starsCount}
                    price = {filme.price}
                    categories = {filme.categories}
                    isStarred = {filme.isStarred}
                    AlterarEstadoFavorito = {AlterarEstadoFavorito}
                    />
                )
            )
        }
        else
        {
            list_film = filtragemFilme(filmes).map(filme => 
                (
                    <Card_Movie             
                    title = {filme.title}
                    backgroundImg = {filme.backgroundImg}
                    starsCount = {filme.starsCount}
                    price = {filme.price}
                    categories = {filme.categories}
                    isStarred = {filme.isStarred}
                    AlterarEstadoFavorito = {AlterarEstadoFavorito}
                    />
                )
            )
        }
        return list_film
    }
    
    function filtragemFilme(filme)
    {
        //fazer lógica de filtragem
        return filme;
    }

    return (
        <div className = "filmes">       
            <h3 className="txt-filmes">Top Filmes</h3>            
            <div className="top-conteudo">
                {RetornarInfoFilme("s")}
            </div>

            <h3 className="txt-filmes">Filmes</h3>
            <Filtro 
                filtroCategoria={filtroCategoria}
                setFiltroCategoria ={setFiltroCategoria} 
            />
            <div className="filmes-conteudo">
                {RetornarInfoFilme()}
            </div>
        </div>
    )
}
