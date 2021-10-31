import React from 'react';
import Header from '../components/header';


const HomePage = (props) => {

    return(
        <div>
            <Header title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );

}

export default HomePage;