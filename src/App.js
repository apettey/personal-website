import './App.css';
import {
  Link,
  Typography,
  Container,
  Box,
  ListItemText,
  ListItemAvatar, Avatar, Grid, ListItemButton,
} from '@mui/material';
import '@fontsource/roboto/300.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import Roles from './Roles';
import {lightBlue}
  from '@mui/material/colors';
import {initializeApp} from 'firebase/app';
import {getAnalytics, logEvent} from 'firebase/analytics';
import Books from './Books';
import Certifications from './Certifications';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtAADyojPR4DwOOpHxWjIKnZdTq06asTw',
  authDomain: 'andy-pettey-website.firebaseapp.com',
  projectId: 'andy-pettey-website',
  storageBucket: 'andy-pettey-website.appspot.com',
  messagingSenderId: '670332543202',
  appId: '1:670332543202:web:c1bb34b7ef3777f3407ebb',
  measurementId: 'G-MH10XTLM6G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * Default Copyright for the website
 * @return {JSX.Element}
 * @constructor
 */
function Copyright() {
  return (
    <Grid style={{
      width: '100%',
      bottom: 0,
      marginTop: '40px',
    }}
    container>
      <Grid item xs={12} md={12}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://andy.pettey.eu/">
                        Andrew Pettey
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Grid>
    </Grid>
  );
}

/**
 * Default application to be loaded
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <Container className="App">
      <Container maxWidth="sm">

        <Box sx={{my: 4}}>
          <Typography variant="h2" component="h1" gutterBottom>
                        Howzit!
          </Typography>
          <Typography variant="subtitle" component="subtitle" gutterBottom>
                        I am Andrew (Andy) Pettey
          </Typography>
        </Box>
      </Container>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Grid container
            alignItems="center"
            justifyContent="center"
            xs={{paddingBottom: '20px'}}>
            <Grid item sx={{
              maxWidth: {xs: '30%', sm: '30%',
                md: '70%', lg: '100%', xl: '100%'},
            }}>
              <img src={'./personal_image.jpeg'} style={{
                maxWidth: '100%',
                borderRadius: '50%',
                border: '5px solid white',
              }}/>
            </Grid>
            <Grid item xs={12} md={12} l={12}>
              <Typography variant="p" component="p" align="center">
                                You can find me on Social Media below
              </Typography>
            </Grid>
            <Grid item>
              <ListItemButton button component="a" target="_blank"
                href="https://twitter.com/AndrewPettey"
                onClick={() => {
                  logEvent(analytics, 'click_sm_link', {
                    content_type: 'twitter',
                  });
                }}>
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: 'transparent', color: lightBlue[500]}}>
                    <TwitterIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Twitter"/>
              </ListItemButton>
            </Grid>
            <Grid item>
              <ListItemButton component="a" target="_blank"
                href="https://www.linkedin.com/in/andrew-pettey/"
                onClick={() => {
                  logEvent(analytics, 'click_sm_link', {
                    content_type: 'linkedin',
                  });
                }}>
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: 'transparent', color: lightBlue[500]}}>
                    <LinkedInIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="LinkedIn"/>
              </ListItemButton>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>

            <Books/>

          </Grid>
          <Grid item>
            <Certifications/>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{paddingLeft: '20px'}}>

          <Roles/>

        </Grid>
      </Grid>
      <Copyright/>
    </Container>
  );
}

export default App;
