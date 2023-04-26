const Header = ({ title }) => {
  return (
    <header className="header">
        <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'My first React App!',
}

const headingStyle = {
    color: 'pink',
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    padding: '10px'
}

export default Header
