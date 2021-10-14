import React from 'react';
import Header from '../components/header';
import Content from '../components/Content';

function AboutMe(props) {

    return(
        <div>
            <Header title={props.title} />

            <Content>
            <p>Hello! My name is Rachael. I'm a full stack web developer with experience dabbling in HTML/CSS, JavaScript, Node JS, Express, MySQL, MongoDB, and React.</p>

            <p>Over the last decade, my career focus has been solely in dentistry and making my way through orthodontic assisting. I have filled just about every role in the dental clinic with my current credentials. However, I need a fresh start and web development is my siren's call. </p>

            <p>I love to learn and follow my way down rabbit holes of knowledge. Currently I am in the process of gaining more experience with MongoDB, React, Express JS, and Node JS. I would make an great student under an excellent mentor's wing.</p>

            <p>The latest group project currently in the works is a working Piano in which a user can play a piano in a browser using the mouse or keys. A user is also able to sign up with a simple username and can save recordings of their masterpieces. You can check it out the process now <a href="https://github.com/rwintersteen/Piano-app-1" target="_blank" rel="noopener noreferrer">here</a>,. It is built with ApolloServer, MongoDB, Express JS, Node JS, and React.</p>

            <p>Born and raised in the Pacific Northwest, my hobbies are quintessentially Cascadian. I love being outdoors, but I find true joy when I'm birdwatching. Bowling is my first sport, however I have gained a real passion for the game of disc golf. And there's nothing quite like relaxing to reruns of Star Trek: TNG to an ice cold beer.</p>
            </Content>
        </div>
    );

}

export default AboutMe;