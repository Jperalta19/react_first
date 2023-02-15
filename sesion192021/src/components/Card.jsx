import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, CardActions, CardContent, Button, Typography, Link } from '@mui/material';
const baseURL = 'https://api.chucknorris.io/jokes/random';

const CardBody = () => {

    const [quote, setQuote] = useState();
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);

    useEffect(() => {
        
    });

    const refreshQuote = () => {
        axios
        .get(`${baseURL}`)
        .then((response) => {
            setQuote(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const onCount = (setCounter, counter) => {
        setCounter(counter + 1);
        refreshQuote();
    };

    return (
        <div>
            {quote ?
                (<Card sx={{ maxWidth: 345 }}>
                    <Typography gutterBottom variant="h5" component="div"> <Link  href='https://api.chucknorris.io/'>chucknorris.io</Link> is a free JSON API for hand curated Chuck Norris facts. <Link href="https://api.chucknorris.io/#!">Read More</Link> </Typography>
                    <Typography variant="body2" color="text.secondary">{quote.value}</Typography>
                <CardActions>
                <div style={{display:'flex', flexDirection:'column', marginTop:'1rem'}}>
                    <Button onClick={refreshQuote}  variant="contained" size="small">Generate a new chiste</Button>
                    <Button style={{marginTop:'0.5rem'}} variant="contained" onClick={() => onCount(setPositiveCount, positiveCount)} value='like' size="small">Like</Button>
                    <Button style={{marginTop:'0.5rem'}} variant="contained" onClick={() => onCount(setNegativeCount, negativeCount)} size="small">Dislike</Button>
                    </div>
                </CardActions>
                <CardContent>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <Typography variant="body2 contained" color="text.secondary">Likes: {positiveCount}</Typography>
                        <Typography variant="body2 contained" color="text.secondary">Dislike: {negativeCount}</Typography>
                    </div>
                </CardContent>
            </Card>)
                :
                (<Button onClick={refreshQuote} variant="contained" size="large">Generate a new chiste</Button>)
            }
        </div>
    )
}

export default CardBody
