import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const DisplayPlaylist = props => {
  const {songDetails, onDeleteSong} = props
  const {imageUrl, name, genre, duration} = songDetails

  const deleteSong = () => {
    onDeleteSong(name)
  }

  return (
    <li className="each-item">
      <div className="details-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="sub-cont">
          <p className="song-name">{name}</p>
          <p className="song-title">{genre}</p>
        </div>
      </div>
      <div className="end-cont">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={deleteSong}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default DisplayPlaylist
