import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const AnuCard = () => {
    return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        mb:5,
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Titulo noticia
                {/* {props.titulo} */}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Descripcion
                {/* {props.decripcion} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
                {/* {props.Id} */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                categorias
                {/* {props.categoria} */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}