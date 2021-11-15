import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category);
    

    // useEffect(() => {
    //     getGifs( category ).then(imgs => setImages(imgs)); 
    // }, [category]) 

    /**
     * [Apuntes]
     * Esto es igual que el ciclo de vida de componente: componentDidMount
     * el [] es un Array de Dependencias. (List tb es array) Al no tener dependencias, useEffect solo se ejecuta una única vez.
     * Como getGifs ahora es una promesa ya que es una funcion async, podemos poner el .then para indicarle que hacer cuando el fetch se realice correctamente.
     */


    return (
        <>
        <h3>{category}</h3>
        {loading && <p className >Loading</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
/**
 * [APUNTES]
 * En useEffect, usas category, eso es una dependencia. Asi que hay que ponerlo en el array de dependencias.
 * En nuestra app no haría falta puesto que la lógica es que solo se ejecute getGifs si hacemos submit en lo que escribimos en el form.
 * pero es buena practica hacerlo así, no nos daría el warning y creamos memoria muscular.
 * 
 * Hemos separado getGifs como helper porque no es una funcionalidad que deba tener un gifGrid. gifGrid solo se encarga de mostrar imagenes en un grid.
 * asi que es mejor separar el getGifs como un util/helper y así que se pueda utilizar en otros componentes que necesiten esa funcion.
 */
