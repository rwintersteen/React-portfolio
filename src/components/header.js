import Card from 'react-bootstrap/Card';

function Header(props) {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src="holder.js/100px270" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{props.this.title}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Header;