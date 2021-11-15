import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     //El handeAdd puede hacerse de varias maneras.
    //     // setCategories([...categories], 'HunterXHunter') //Añade al final
    //     // setCategories('HunterXHunter',[...categories]) //Añade al principio
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                    {/* return <li key={category}> {category} </li> //Deben tener un key único. NO USAR EL INDICE. Es obligatorio especificar un key en el <li> */},
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

/** [APUNTES]
 * <hr/> Representa un cambio de tema entre párrafos (por ejemplo, un cambio de escena en una historia, un cambio de tema en una sección). (Si quieres dibujar una linea, usa el CSS y no esto.)
 * <ol> "Ordered List" -> Permite definir listas o viñetas ordenadas. Bien con numeración o Alfabéticamente.
 * <li> "Item List" -> Declara cada uno de los elementos de una lista.
*/