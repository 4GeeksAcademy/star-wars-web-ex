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
    <div className='container-fluid'>
        <div >
        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} alt={store.starship?.name}/>
            
        </div>
        <div>
          <h1>name : {store.starship?.name}</h1>  
          <p>model : {store.starship?.model}</p>
          <p>manufacturer : {store.starship?.manufacturer}</p>
          <p>cost_in_credits : {store.starship?.cost_in_credits}</p>
          <p>length : {store.starship?.length}</p>
          <p>max_atmosphering_speed : {store.starship?.max_atmosphering_speed}</p>
          <p>crew : {store.starship?.crew}</p>
          <p>passengers : {store.starship?.passengers}</p>
          <p>cargo_capacity : {store.starship?.cargo_capacity}</p>
          <p>consumables : {store.starship?.consumables}</p>
          <p>hyperdrive_rating : {store.starship?.hyperdrive_rating}</p>
          <p>MGLT : {store.starship?.MGLT}</p>
          <p>starship_class : {store.starship?.starship_class}</p>

        </div>
        <button className='btn btn-dark' onClick={()=>navigate('/')}>take me back</button>  
    </div>
  )
}

export default StarshipDetails