import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";


function ProjectCards() {
    return (
        <div>
            <Card className='card-border'>
                <Card.Body>
                    <Card.Title> <h2>Note Taker</h2> </Card.Title>
                        <Card.Text>
                            <h6>A Note Taking application that uses Express.js and is also depolyed to Heroku.</h6>
                        </Card.Text>
                        <Card.Img variant="bottom" src="/src/images/Note Taker.png"></Card.Img>
                    </Card.Body>
            </Card>

            <Card className='card-border'>
                <Card.Body>
                    <Card.Title> <h2>Dish Up</h2> </Card.Title>
                        <Card.Text>
                            <h6>A group project that allows users to search through thousands of recipes with the help of the Spoonacular API.</h6>
                        </Card.Text>
                    </Card.Body>
            </Card>

            <Card className='card-border'>
                <Card.Body>
                    <Card.Title> <h2>Team Profile Generator</h2> </Card.Title>
                        <Card.Text>
                            <h6>Using Inquirer, a team profile generator that builds cards based on NodeJS command line input from a user.</h6>
                        </Card.Text>
                    </Card.Body>
            </Card>

            <Card className='card-border'>
                <Card.Body>
                    <Card.Title> <h2>NewsFlash</h2> </Card.Title>
                        <Card.Text>
                            <h6>A news aggreagate website which focused on building the backend with a group of fellow students.</h6>
                        </Card.Text>
                    </Card.Body>
            </Card>

            <Card className='card-border'>
                <Card.Body>
                    <Card.Title> <h2>Piano on the Go</h2> </Card.Title>
                        <Card.Text>
                            <h6>The final group project </h6>
                        </Card.Text>
                    </Card.Body>
            </Card>
            
        </div>
    )
}
export default ProjectCards;