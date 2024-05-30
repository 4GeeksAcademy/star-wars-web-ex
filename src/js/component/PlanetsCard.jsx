import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const PlanetsCard = ({name , uid}) => {
    const {store , actions} = useContext(Context)
  return (
    <div className="card1">
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
          alt={name}
        />
      </div>
      <figure>
        <div className='button'>
          <button className='btn btn-sucess'>
            <Link to={`/planetdetails/${uid}`}> {name}</Link>
          </button>
          <button className='btn btn-dark' onClick={() => actions.addFav({ name: name, uid: uid })}>
            fav
          </button>
        </div>
      </figure>
    </div>
  )
}

export default PlanetsCard