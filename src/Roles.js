import {Grid, Collapse, Typography, Box, Link} from '@mui/material';
import React, {useState} from 'react';
import {ExpandLess, ExpandMore} from '@mui/icons-material';

/**
 * Generates a list of data
 * @return {JSX.Element}
 * @constructor
 */
function Roles() {
  const [roles, setRoles] = useState({});
  const [expanded, setExpanded] = useState({});
  const [gettingRoles, setGettingRoles] = useState(false);
  if (!gettingRoles && Object.keys(roles).length === 0) {
    setGettingRoles(true);
    fetch('data/roles.json')
        .then((r) => r.json()
            .then((json) => {
              Object.keys(json.roles)
                  .forEach((roleKey) => {
                    json.roles[roleKey].open = false;
                    return json.roles[roleKey];
                  });
              setRoles(json.roles);
            }),
        ).finally(() => {
          setGettingRoles(false);
        });
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Typography variant="h4" padding="15px" align="center">
                    Experience
        </Typography>
      </Grid>
      {!gettingRoles ? Object.keys(roles).map((key) => {
        return (
          <Grid item key={key} paddingBottom="20px">
            <Grid container>
              <Grid item xs={12} sm={12} lg={4} md={4}>

                <Link href={roles[key].primary_link}
                  rel="noreferrer" target="_blank">
                  <Box component="img" src={roles[key].logo_url} style={{
                    minWidth: '150px',
                    maxWidth: '100%',
                    borderRadius: '50%',
                    border: '5px solid white',
                  }}/>
                </Link>
                <Typography variant='h6'>{roles[key].title}</Typography>
                {roles[key].end_date ? <Typography variant='subtitle1'>
                  {roles[key].start_date} - {roles[key].end_date}
                </Typography> :
                                        <Typography variant='subtitle1'>
                                          {roles[key].start_date} - now
                                        </Typography>
                }

              </Grid>
              <Grid item xs={12} sm={12} lg={8} md={8} key={'$key'}
                style={{alignItems: 'center'}}>
                <Collapse collapsedSize={200} in={expanded[key]}>
                  <Typography variant='body1' align='left'
                    style={{
                      whiteSpace: 'pre-line',
                      textAlign: 'left',
                      width: '100%',
                    }}>
                    {roles[key].description}
                  </Typography>
                </Collapse>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  {roles[key].description.length > 300 ?
                                            <Grid item xs={3}>

                                              {expanded[key] ?
                                                    <ExpandLess onClick={() => {
                                                      setExpanded({
                                                        ...expanded,
                                                        [key]: false,
                                                      });
                                                    }}/> :
                                                    <ExpandMore onClick={() => {
                                                      setExpanded({
                                                        ...expanded,
                                                        [key]: true,
                                                      });
                                                    }}/>}
                                            </Grid> : ''
                  }
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        );
      },
      ) : ''}
    </Grid>
  );
}

export default Roles;
