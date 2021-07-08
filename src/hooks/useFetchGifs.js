//los custom hooks funcionan como si fueran funtional components
//pueden tener efectos, usar reducer, usar contextos
import { useState, useEffect  } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category )

        .then( imgs => {
            
            setState({
                data: imgs,
                loading: false,

                });
            
        })
    },[ category ])

    

    return state; // {data:[], loading:true }
}
