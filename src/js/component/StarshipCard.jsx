import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

const StarshipCard = ({name , uid}) => {
    const {store , actions} = useContext(Context)

  return (
    <div className="card2">
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
          alt={name}
        />
      </div>
      <figure>
        <div className='button'>
          <button>
            <Link to={`/starshipdetails/${uid}`}> {name}</Link>
          </button>
          <button onClick={() => actions.addFav({ name: name, uid: uid })}>
            fav
          </button>
        </div>
      </figure>
    </div>
  )
}

export default StarshipCard