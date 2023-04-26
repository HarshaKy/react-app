const Footer = () => {
    return (
        <footer className="footer" style={footerStyle}>
            <p>CopyRight &copy; 2023</p>
        </footer>
    )
}

const footerStyle = {
    backgroundColor: 'black',
    color: 'pink',
    textAlign: 'left',
    width: '70%',
    clear: 'both',
    padding: '10px'
}

export default Footer
