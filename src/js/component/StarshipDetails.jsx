import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Context  } from '../store/appContext'
import './card.css'


const StarshipDetails = () => {
    const {store , actions } = useContext(Context)
    const navigate = useNavigate()
    const params = useParams()
    useEffect(()=>{
        actions.getStarShipData(params.uid)
        
    },[])
  return (
    <div>
        <div>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} alt={store.starship?.name}/>
            
        </div>
        <div>
            mae : {store.starship?.name}
        </div>
        <button className='btn btn-dark' onClick={()=>navigate('/')}>take me back</button>  
    </div>
  )
}

export default StarshipDetails