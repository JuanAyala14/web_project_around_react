export default function EditProfile( { name, profession }) {
  return (
   <form className="popup__form popup__form-edit" 
name="card-form"
      id="new-card-form" noValidate>
            
            <fieldset className="popup__content">
              <label className="popup__label">
                <input
                  name="name"
                  defaultValue={name}
                  type="text"
                  className="popup__input popup__input_name "
                  placeholder="Name"
                  minLength="2"
                  maxLength="40"
                  id="name-input"
                  required
                />
                <span
                  className="popup__input_error name-input-error popup__error_visible" id="card-name-error"
                ></span>
              </label>
              <label className="popup__label">
                <input
                  name="job"
                  defaultValue={profession}
                  type="text"
                  className="popup__input popup__input_profession "
                  placeholder="Profession"
                  minLength="2"
                  maxLength="200"
                  id="profession-input"
                  required
                />
                <span
                  className="popup__input_error profession-input-error popup__error_visible" id="card-profession-error"
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