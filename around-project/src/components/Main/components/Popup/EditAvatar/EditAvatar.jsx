export default function EditProfile() {
  return (
    <form className="popup__form popup__form-avatar" name="avatar-form" id="avatar-form" noValidate>
            <fieldset className="popup__content">
              <label className="popup__label">
                <input
                  name="avatar"
                  type="url"
                  className="popup__input popup__input_avatar popup__input_type_error"
                  placeholder="Image URL"
                  id="avatar-input"
                  required
                />
                <span
                  className="popup__input_error avatar-input-error popup__error_visible" id="card-avatar-error"
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
  )}
