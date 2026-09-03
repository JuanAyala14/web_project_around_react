export default function NewCard() {
  return (
<form className="popup__form popup__form-add" name="card-form" id="new-card-form" noValidate>
            
            <fieldset className="popup__content">
              <label className="popup__label">
                <input
                  name="title"
                  type="text"
                  className="popup__input popup__input_title "
                  placeholder="Title"
                  minLength="2"
                  maxLength="30"
                  id="title-input"
                  required
                />
                <span
                  className="popup__input_error title-input-error popup__error_visible" id="card-name-error"
                ></span>
              </label>
              <label className="popup__label">
                <input
                  name="Image-url"
                  type="url"
                  className="popup__input popup__input_url "
                  placeholder="Image URL"
                  id="url-input"
                  required
                />
                <span
                  className="popup__input_error url-input-error popup__error_visible" id="card-link-error"
                ></span>
              </label>
              <button
                type="submit"
                className="popup__button popup__button_save popup__button_disabled"
              >
                Save
              </button>
            </fieldset>
          </form>
  )
}