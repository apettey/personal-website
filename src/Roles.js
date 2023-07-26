import {Grid, Collapse} from '@mui/material';
import React, {useState} from 'react';

/**
 *
 * @param {any=} role
 * @return {JSX.Element}
 */
function generateViewForRole(role) {
  console.log(role);

  return (
    <Grid item>
      <Collapse collapsedSize={200}>
        <Grid container>
          <Grid item lg={4} xs={4} md={4}>

            <img src={role.logo_url} style={{
              maxWidth: '100%',
              borderRadius: '50%',
              border: '5px solid white',
            }}/>
            <h3>{role.title}</h3>
          </Grid>
          <Grid item lg={8} xs={8} md={8}>
            <p
              style={{
                whiteSpace: 'pre-line',
                textAlign: 'left',
                height: '100%',
                width: '100%',
              }}>
              {role.description}
            </p>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
}

/**
 * Generates a list of data
 * @return {JSX.Element}
 * @constructor
 */
function Roles() {
  /**
     *
     * @return {JSX.Element}
     */
  const [roles, setRoles] = useState([]);
  const [gettingRoles, setGettingRoles] = useState(false);
  if (!gettingRoles && roles.length === 0) {
    setGettingRoles(true);
    fetch('data/roles.json')
        .then((r) => r.json()
            .then((json) => setRoles(Object.keys(json.roles)
                .map((roleKey) => json.roles[roleKey]))),
        ).finally(() => {
          setGettingRoles(false);
        });
  }

  return (
    <Grid container>
      {!gettingRoles ? roles.map((role) => generateViewForRole(role)) : ''}
    </Grid>
  );
}

export default Roles;
