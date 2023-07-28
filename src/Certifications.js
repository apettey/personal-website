import {Box, Grid, Link, Typography} from '@mui/material';
import React from 'react';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Certifications() {
  return (<Grid container>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}
    >
      <Typography variant="h4" align='center' sx={{width: '100%'}}
        paddingY="20px">
                    Certifications
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
      <Link href="https://www.credly.com/badges/43aea8a1-8316-4c7e-a149-eaf987c4bf4f/public_url"
        rel="noreferrer" target="_blank">
        <Box component="img"
          sx={{
            maxWidth: {
              xs: '50%', sm: '50%',
              md: '70%', lg: '100%', xl: '100%',
            },
          }}
          src="./aws_solutions_arch.png" style={{width: '100%'}}/>
      </Link>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
      <Link href="https://www.credly.com/badges/0a61c27e-9051-452a-83aa-f7184b1e986d/public_url"
        rel="noreferrer" target="_blank">
        <Box component="img"
          sx={{
            maxWidth: {
              xs: '50%', sm: '50%',
              md: '70%', lg: '100%', xl: '100%',
            },
          }}
          src="./aws_developer_associate.png" style={{width: '100%'}}/>
      </Link>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}
    >
      <Link href="https://iapp.org/certify/cipt/" rel="noreferrer" target="_blank">
        <Box component="img"
          sx={{
            maxWidth: {
              xs: '50%', sm: '50%',
              md: '70%', lg: '100%', xl: '100%',
            },
          }}
          src="./seal_hi_res_CIPT.png" style={{width: '100%'}}/>
      </Link>
    </Grid>
  </Grid>
  );
}

export default Certifications;
