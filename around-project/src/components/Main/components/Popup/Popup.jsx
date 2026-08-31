export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const {onClose, title, children} = props;
  return (
   <div className="popup">
        <div className="popup__container">
          <button
            aria-label="Close modal"
            className="popup__button_close"
            type="button"
            onClick={onClose}
          ></button>
          <h3 className="popup__title">{title}</h3>
          {children}
        </div>
      </div>
  )
}