import avatar from '../../images/profile.jpg'
import {useState} from 'react'
import Popup from './components/Popup/Popup.jsx'
import NewCard from './components/Popup/NewCard/NewCard.jsx'
import EditProfile from './components/Popup/EditProfile/EditProfile.jsx'
import EditAvatar from './components/Popup/EditAvatar/EditAvatar.jsx'
import Card from './components/Card/Card.jsx'
import ImagePopup from './components/Popup/ImagePopup/ImagePopup.jsx'
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];



export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
   const [userName, setUserName] = useState("Max Verstappen");
const [userProfession, setUserProfession] = useState("Racing Driver"); 
const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newProfilePopup = { title: "Editar perfil", children: <EditProfile name={userName} profession={userProfession} /> };
  const newAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
 
  function handleOpenPopup(popup) {
      setPopup(popup);
  }
   function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <main>
    <div className="gallery">
                <div className="gallery__profile">
                  <button aria-label="Edit avatar" type="button" className="gallery__profile-image-wrapper" onClick={() => handleOpenPopup(newAvatarPopup)}>
                    <img
                      className="gallery__profile-image"
                      src={avatar}
                      alt="profile-image"
                    />
                  </button>
                  <div className="gallery__profile-container">
                    <p className="gallery__profile-name">{userName}</p>
                    <p className="gallery__profile-profession">{userProfession}</p>
                    <button aria-label="Edit profile" type="button" className="gallery__button gallery__button-edit" onClick={() => handleOpenPopup(newProfilePopup)}>
                      🖌
                    </button>
                  </div>
                  <button aria-label="Add card" type="button" className="gallery__button gallery__button-add" onClick={() => handleOpenPopup(newCardPopup)}>
                    🞣
                  </button>
                </div>
                <ul className="gallery__grid">
      {cards.map((card) => {
 
  return (
    <Card
      key={card._id}
      card={card}
      onCardClick={handleCardClick}
    />
  );
})}
      </ul>
                 
                
              
    </div>
    {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={handleClosePopup} />
      )}

    </main>
    )}