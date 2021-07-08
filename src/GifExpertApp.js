import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // //setCategories( [...categories,'Pokemon'] );
    //     // setCategories( categ =>  [...categories, 'Pokemon'])
    // }

    return (
        <>
            <h2>Buscador de GIFS</h2>

            <AddCategory setCategories={setCategories}/>  
            {/* Lo que envio aca (setCategories) lo voy a recibir en *** */}

            <hr />

            <ol>
                {
                    categories.map( category => 
                         <GifGrid 
                         key = {category}
                         category = {category}
                         />
                    )
                    //el key no puede ser i y tiene que ser unico
                }
            </ol>

        </>
    )
}
