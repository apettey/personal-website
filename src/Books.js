import {
  Avatar, List, ListItemAvatar,
  ListItemButton, ListItemText, Typography,
} from '@mui/material';
import React from 'react';
import {blueGrey, green, orange, purple} from '@mui/material/colors';
import BookIcon from '@mui/icons-material/Book';
import {logEvent} from 'firebase/analytics';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Books() {
  return (
    <div>
      <Typography variant="p" component="p">
                This is my list of content that I have consumed
                that I believe is useful
      </Typography>
      <List sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}>
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
          href="https://andy-pettey.notion.site/Self-help-737b395666434fdf963f83eea2d8219d?pvs=4"
          onClick={() => {
            logEvent(analytics, 'click_book_link', {
              content_type: 'self-help',
            });
          }}>
          <ListItemAvatar>
            <Avatar sx={{bgcolor: 'transparent', color: orange[500]}}>
              <BookIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Self-help Books"/>
        </ListItemButton>
        <ListItemButton button component="a" target="_blank"
          href="https://andy-pettey.notion.site/Self-help-737b395666434fdf963f83eea2d8219d?pvs=4"
          onClick={() => {
            logEvent(analytics, 'click_book_link', {
              content_type: 'strategy',
            });
          }}>
          <ListItemAvatar>
            <Avatar sx={{bgcolor: 'transparent', color: blueGrey[500]}}>
              <BookIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Strategy"/>
        </ListItemButton>
        <ListItemButton button component="a" target="_blank"
          href="https://andy-pettey.notion.site/Entrepreneurship-7e40038a44194097beb06247e5b23715?pvs=4"
          onClick={() => {
            logEvent(analytics, 'click_book_link', {
              content_type: 'entrepreneurship',
            });
          }}>
          <ListItemAvatar>
            <Avatar sx={{bgcolor: 'transparent', color: purple[500]}}>
              <BookIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Entrepreneurship"/>
        </ListItemButton>

      </List>
    </div>
  );
}

export default Books;
