import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, useParams } from 'react-router';
import './card.css'


const CharacterDefault = () => {
  const { store, actions } = useContext(Context);
  const params = useParams()
  const navigate = useNavigate()
  console.log('params', params)

  useEffect(()=>{
    actions.getCharactorData(params.uid);
  },[])

return (
 
  
    <div className='container-fluid'>
    <div>
    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
           alt={name}/>
    </div>
    <h1>name : {store.character?.name}</h1>
       <p> gender : {store.character?.gender} </p>
       <p> eye_color : {store.character?.eye_color} </p>
       <p> hair_color : {store.character?.hair_color} </p>
        <p> height : {store.character?.height} </p>
        <p> mass : {store.character?.mass} </p>
        
        
      
     
  <button className='btn btn-dark ' onClick={()=>navigate('/')
  }>take me back</button>

    </div>


);

}
export default CharacterDefault;