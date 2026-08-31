export default function Card({ card, onCardClick }) {
    const { name, link, isLiked } = card;
  return (
    <li className="gallery__card">
      <img
        className="gallery__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <button
        aria-label="Delete card"
        className="gallery__button_delete"
        type="button"
      />
      <div className="gallery__content">
        <h2 className="gallery__paragraph">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="gallery__button_like"
        />
      </div>
    </li>
  );
}