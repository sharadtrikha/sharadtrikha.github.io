import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    FormLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Paper,
    Button,
    Slider,
    Typography
} from '@material-ui/core';

const Project = (props) => {
    return (
        <Paper
            className="Project"
            style={{
                //backgroundColor: props.item.color,
            }}
            elevation={10}
        >
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <img src={props.item.src} style={{position: 'relative', right: '50%'}} />

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export const SlideShow = () => {
    const items = [
        {
            name: "Lear Music Reader",
            description: "A PDF Reader specially designed for musicians.",
            color: "#64ACC8",
            src: "https://i5.walmartimages.com/dfw/4ff9c6c9-e328/k2-_e6c8eb35-8c39-4cb8-b07e-8ec7041f59fb.v1.jpg?odnWidth=480&odnHeight=431&odnBg=ffffff"
        },
        {
            name: "Hash Code 2019",
            description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
            color: "#7D85B1",
            src: "https://i5.walmartimages.com/dfw/4ff9c6c9-9247/k2-_7c1956d4-c962-4105-b2f6-c7f0cd75db24.v1.jpg?odnWidth=767&odnHeight=231&odnBg=ffffff"
        },
        {
            name: "Terrio",
            description: "A exciting mobile game game made in the Unity Engine.",
            color: "#CE7E78",
            src: "https://i5.walmartimages.com/dfw/4ff9c6c9-afba/k2-_9b3006fa-60d9-445d-b84e-2c564ef2341f.v1.jpg?odnWidth=767&odnHeight=231&odnBg=ffffff"
        },
        {
            name: "React Carousel",
            description: "A Generic carousel UI component for React using material ui.",
            color: "#C9A27E"
        }
    ];

    return (
        <Carousel
        className="SecondExample"
        autoPlay={false}
        animation={'fade'}
        indicators={false}
        timeout={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}

    >
        {
            items.map((item, index) => {
                return <Project item={item} key={index} />
            })
        }
    </Carousel>
    )
}