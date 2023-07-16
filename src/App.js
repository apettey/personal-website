import './App.css';
import {
    Link,
    Typography,
    Container,
    Box,
    CircularProgress,
    List,
    ListItemText,
    ListItem,
    ListItemAvatar, Avatar, Grid, ListItemButton
} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, {useState} from "react";
import BookIcon from '@mui/icons-material/Book';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import {blueGrey, green, lightBlue, orange, purple, red} from "@mui/material/colors";
import {initializeApp} from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdXs86DOP809wWwulFg-ZOomZztmSicHo",
    authDomain: "personal-website-cd5da.firebaseapp.com",
    projectId: "personal-website-cd5da",
    storageBucket: "personal-website-cd5da.appspot.com",
    messagingSenderId: "482609373612",
    appId: "1:482609373612:web:eb63421dd0072c22f19a09",
    measurementId: "G-5470PX28VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Copyright() {
    return (
        <Grid style={{
            width: '100%',
            position: 'fixed',
            bottom: 0
        }}
              container spacing={4}>
            <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://andrew.pettey.me/">
                        Andrew Pettey
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Grid>
        </Grid>
    );
}

function App() {
    return (
        <Container className="App">
            <Container maxWidth="sm">
                <Box sx={{my: 4}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Howzit!
                    </Typography>
                </Box>
            </Container>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={12} l={12}>
                            <Typography variant="p" component="p" align="left">
                                You can find me on Social Media below
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ListItemButton button component="a" target="_blank"
                                      href="https://twitter.com/AndrewPettey">
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
                                      href="https://www.linkedin.com/in/andrew-pettey/">
                                <ListItemAvatar>
                                    <Avatar sx={{bgcolor: 'transparent', color: lightBlue[500]}}>
                                        <LinkedInIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="LinkedIn"/>
                            </ListItemButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="p" component="p">
                        This is my list of content that I have consumed that I believe is useful
                    </Typography>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        {/*<ListItemButton button component="a" target="_blank"*/}
                        {/*          href="">*/}
                        {/*    <ListItemAvatar>*/}
                        {/*        <Avatar sx={{bgcolor: 'transparent', color: red[500]}}>*/}
                        {/*            <VideoLibraryIcon/>*/}
                        {/*        </Avatar>*/}
                        {/*    </ListItemAvatar>*/}
                        {/*    <ListItemText primary="YouTube Playlist"/>*/}
                        {/*</ListItemButton>*/}
                        <ListItemButton button component="a" target="_blank"
                                  href="https://andy-pettey.notion.site/Management-Books-13c740d1b30a4776ac5946ae1586247a?pvs=4">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: green[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Management Books"/>
                        </ListItemButton>
                        <ListItemButton button component="a" target="_blank"
                                  href="https://andy-pettey.notion.site/Self-help-737b395666434fdf963f83eea2d8219d?pvs=4">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: orange[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Self-help Books"/>
                        </ListItemButton>
                        <ListItemButton button component="a" target="_blank"
                                  href="https://andy-pettey.notion.site/Self-help-737b395666434fdf963f83eea2d8219d?pvs=4">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: blueGrey[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Strategy"/>
                        </ListItemButton>
                        <ListItemButton button component="a" target="_blank"
                                  href="https://andy-pettey.notion.site/Entrepreneurship-7e40038a44194097beb06247e5b23715?pvs=4">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: purple[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Entrepreneurship"/>
                        </ListItemButton>

                    </List>
                </Grid>
            </Grid>
            <Copyright/>
        </Container>
    );
}

export default App;
