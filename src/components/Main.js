import Blogs from './Blogs';

const Main = () => {
    return (
        <div style={mainStyle} className="main">
        <Blogs />
        </div>
    );
}

const mainStyle = {
    width: '75%',
    height: 'auto',
    float: 'left',
    text: 'center',
    color: 'pink',
    backgroundColor: 'green'
}

export default Main;
