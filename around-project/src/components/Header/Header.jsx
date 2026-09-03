import logo from '../../images/Vector.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__image" />
    </header>
  )
}