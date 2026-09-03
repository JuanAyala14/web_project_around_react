export default function ImagePopup({card, onClose}) {
    return (
        <div className="popup popup-image">
        <div className="popup__image-container">
          <button type="button" className="popup__button popup__button_close" onClick={onClose}>
            Cerrar
          </button>
          <img className="popup__image" src={card.link} alt={card.name} />
          <p className="popup__caption">{card.name}</p>
        </div>
      </div>
    );}
    