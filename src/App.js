import './App.css';
import {Timeline} from 'react-twitter-widgets'
import {
    Link,
    Typography,
    Container,
    Box,
    CircularProgress,
    List,
    ListItemText,
    ListItem,
    ListItemAvatar, Avatar
} from "@mui/material";
import React, {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import BookIcon from '@mui/icons-material/Book';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import {green, orange, red} from "@mui/material/colors";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
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
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://andrew.pettey.me/">
                Andrew Pettey
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function App() {
    const [isTwitterLoaded, setIsTwitterLoaded] = useState(false);
    analytics.logEvent('select_content', {
        content_type: 'image',
        content_id: 'P12453'
    });
    return (
        <Container className="App">
            <Container maxWidth="sm">
                <Box sx={{my: 4}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Howzit!
                    </Typography>
                </Box>
            </Container>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    {isTwitterLoaded ? null : (<CircularProgress id={"Loader"}/>)}
                    <Timeline
                        dataSource={{sourceType: "profile", screenName: "AndrewPettey"}}
                        options={{height: "600"}}
                        onLoad={() => {
                            console.log("Loaded Twitter")
                            setIsTwitterLoaded(1)
                        }}
                    />
                </Grid2>
                <Grid2 xs={4}>
                    <Typography variant="p" component="p">
                        This is my list of content that I have consumed that I believe is useful
                    </Typography>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ListItem button component="a" target="_blank"
                                  href="https://docs.google.com/spreadsheets/d/1PDpLy5lvkLqLFIIONPTFQWGxLndo3yA_Jq0qIIBLlUg/edit?usp=sharing">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: red[500]}}>
                                    <VideoLibraryIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="YouTube Playlist"/>
                        </ListItem>
                        <ListItem button component="a" target="_blank"
                                  href="https://docs.google.com/spreadsheets/d/1PDpLy5lvkLqLFIIONPTFQWGxLndo3yA_Jq0qIIBLlUg/edit?usp=sharing">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: green[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Tech Books"/>
                        </ListItem>
                        <ListItem button component="a" target="_blank"
                                  href="https://docs.google.com/spreadsheets/d/1PDpLy5lvkLqLFIIONPTFQWGxLndo3yA_Jq0qIIBLlUg/edit?usp=sharing">
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: 'transparent', color: orange[500]}}>
                                    <BookIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Management Books"/>
                        </ListItem>

                    </List>
                </Grid2>
            </Grid2>
            <Copyright/>
        </Container>
    );
}

export default App;
