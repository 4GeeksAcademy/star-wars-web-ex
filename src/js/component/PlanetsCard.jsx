import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const PlanetsCard = ({name , uid}) => {
    const {store , actions} = useContext(Context)
  return (
    <div className="card">
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
          alt={name}
        />
          <div className="name"><p>{name}</p></div>
      </div>
      <figure>
        <div className='button'>
          <button className='btn btn-primary'>
            <Link to={`/planetdetails/${uid}`}>More Info</Link>
          </button>
          <button className='btn btn-warning' onClick={() => actions.addFav({ name: name, uid: uid })}>
            fav
          </button>
        </div>
      </figure>
    </div>
  )
}

export default PlanetsCard