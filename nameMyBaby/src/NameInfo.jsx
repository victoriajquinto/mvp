import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Etymology() {
  return(
    <>
      <Typography variant="p">
        Etymology content
      </Typography>
    </>
  )
}

function Origin() {
  return(
    <>
      <Typography variant="p">
        Origin content
      </Typography>
    </>
  )
}

function Popularity() {
  return(
    <>
      <Typography variant="p">
        Popularity content
      </Typography>
    </>
  )
}

function FamousNamesakes() {
  return(
    <>
      <Typography variant="p">
        Famouse Namesakes content
      </Typography>
    </>
  )
}

function SimilarNames() {
  return(
    <>
      <Typography variant="p">
        Similar Names content
      </Typography>
    </>
  )
}

export default function NameInfo() {
  return(
    <Box sx={{
      backgroundColor: 'secondary.main',
      marginTop: 2,
    }}>
      <Grid container spacing={1}>
        <Grid xs={4}>
          <Typography variant='h2'>Name</Typography>
        </Grid>
        <Grid xs={7}>
          <Etymology />
        </Grid>
        <Grid xs={1}>
          <FavoriteBorderIcon />
        </Grid>
      </Grid>
      <Box>
        <Box>
          <Typography variant='h4'>
            Origin
          </Typography>
          <Origin />

        </Box>
        <Box>
          <Typography variant='h4'>
            U.S. Popularity Over Time
          </Typography>
          <Popularity />
        </Box>
        <Box>
          <Typography variant='h4'>
            Famous Namesakes
          </Typography>
          <FamousNamesakes />
        </Box>
        <Box>
          <Typography variant='h4'>
            Similar Names
          </Typography>
          <SimilarNames />
        </Box>
      </Box>
    </Box>
  )
}