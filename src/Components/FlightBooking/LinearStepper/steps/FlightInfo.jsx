import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, TextField } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { MenuItem} from '@material-ui/core';
import Select from '@mui/material/Select';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './FlightInfo.css'

// Define sample flight data
import AIRBLUE from '../../../Images/airblue Logo.png';
import PIA from '../../../Images/PIA Logo.png';
import FLIGHT from '../../../Images/flight.jpg';

const FlightDetails = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();

  const flights = [
    {
      flightLogo:PIA,
      departure: '',
      timing: '8:00 AM',
      destination: '',
      dtiming: '10:00 AM',
      fare: '$300',
      hours: '1 hour 30 min',
    },
    {
      flightLogo:AIRBLUE ,
      departure: '',
      timing: '10:00 AM',
      destination: 'Lahore',
      dtiming: '10:00 AM',
      fare: '$250',
      hours: '2 hours',
    },
    // Add more flight data here
  ];

  return (
    <div>
      {flights.map((flight, index) => (
        <Accordion  className='accordion' key={index}>
          <AccordionSummary>
            <CardMedia
              component="img"
              alt="FlightLogo"
              height="140"
              style={{ maxWidth: '130px' }}
              className='FlightLogo'
              image={flight.flightLogo} // Make sure these paths are correct
            />
            <Typography className='text1' variant="body1">
              {flight.timing} {flight.departure}
            </Typography>
            <div>
              <CardMedia
                component="img"
                alt="Sample Image"
                height="150"
                style={{ maxWidth: '100px' }}
                image={FLIGHT} // Make sure this path is correct
              />
              <Typography variant="body1">{flight.hours}</Typography>
            </div>
            <Typography variant="body1">
              {flight.destination} {flight.dtiming}
            </Typography>
            <Typography variant="body1">{flight.fare}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card>
            <br></br>
          <Grid container spacing={3}>
          <Grid item xs={4}>
            <Field
              name="airline"
              as={TextField}
              label="Airline"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="code"
              as={TextField}
              label="Code"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
  <Field
    name="cabin"
    as={Select}  // Use the Select component for a dropdown
    label="Class"
    variant="outlined"
    fullWidth={true}
  >
    <MenuItem value="economy">Economy</MenuItem>
    <MenuItem value="business">Business</MenuItem>
    <MenuItem value="first">First</MenuItem>
  </Field>
</Grid>

          <Grid item xs={4}>
            <Field
              name="adultFare"
              as={TextField}
              label="Adult Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="childFare"
              as={TextField}
              label="Children Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              name="infantFare"
              as={TextField}
              label="Infant Fare"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
         
        </Grid>
        <br></br>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}
      <br />
      <br />
    </div>
  );
};

export default FlightDetails;
