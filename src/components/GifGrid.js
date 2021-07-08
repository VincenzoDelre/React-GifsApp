import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    const {data:images, loading} = useFetchGifs( category );
    //data:images = renombro data como images
    
    return (
        
        <div className='contenedor'>
            <h3> { category } </h3>
            
            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            
            <div className='grid'>
            {
                images.map (img => (
                    <GifGridItem 
                    key={img.id}
                    // img={img}
                    { ...img}
                    />
                ))
            }
            </div>
        </div>
        
    )
}
