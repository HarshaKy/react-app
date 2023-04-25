const Header = ({ title }) => {
  return (
    <header>
        <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'My first React App!',
}

const headingStyle = {
    color: 'pink',
    backgroundColor: 'black'
}

export default Header
