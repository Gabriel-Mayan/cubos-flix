import './style.css';

export default function Filtros(props)
{
    const categorias = ['action', 'romance','science fiction', 'horror']
    
    const filtro_todos = props.filtroCategoria.length === 0 ? 'filtro_ativo' : '';
    const filtro_acao = props.filtroCategoria.includes(categorias[0]) ? 'filtro_ativo' : '';
    const filtro_romance = props.filtroCategoria.includes(categorias[1]) ? 'filtro_ativo' : '';
    const filtro_ficcaoCientifica = props.filtroCategoria.includes(categorias[2])? 'filtro_ativo' : '';
    const filtro_terror = props.filtroCategoria.includes(categorias[3]) ? 'filtro_ativo' : '';

    function clickParaFiltrar(filtro)
    {
        if(filtro === "todos")
        {
            props.setFiltroCategoria([]);
            return;
        }
        
        const filtrosInclusos = props.filtroCategoria.includes(filtro);
                
        if(filtrosInclusos)
        {
            const novoFiltro = props.filtroCategoria.filter(filme => filme !== filtro);
            props.setFiltroCategoria(novoFiltro);
            return;
        }        
        props.setFiltroCategoria([ ...props.filtroCategoria, filtro]);
    }


    return (
        <div className = "filtros">
            <button 
                className = {`filtro ${filtro_todos}`}
                onClick = {() => clickParaFiltrar('todos')}>
                Todos
            </button>
            
            <button className = {`filtro ${filtro_acao}`}
                    onClick = {() => clickParaFiltrar(categorias[0])}>
                    Ação
            </button>
            
            <button className = {`filtro ${filtro_romance}`}
                    onClick = {() => clickParaFiltrar(categorias[1])}>
                    Romance
            </button>
            <button className = {`filtro ${filtro_ficcaoCientifica}`}
                    onClick = {() => clickParaFiltrar(categorias[2])}>
                    Ficção Científica
            </button>
            
            <button className = {`filtro ${filtro_terror}`}
                    onClick = {() => clickParaFiltrar(categorias[3])}>
                    Terror
            </button>
        </div>
    )
}