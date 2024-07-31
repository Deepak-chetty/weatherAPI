import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./style.css"



export default function Infobox({info}){

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
              {info.city}
            </Typography>
            <Typography variant="h5" component="div">
              {info.temp}&deg;C
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                
                Humidity {info.humidity} <br />
              {info.tempMin}&deg;C - {info.tempMax}&deg;C
            </Typography>
            <Typography variant="h6">
              The weather is described as <i>{info.weather}</i> & Feels like {info.feelsLike}&deg;C
            </Typography>
          </CardContent>
        </React.Fragment>
      );
    

    return (
        <>
        <div className="infobox searchbox">
            <h3><i>Weather information</i></h3>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
        </>
    )
}