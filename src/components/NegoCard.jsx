import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const NegoCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nombre del Negocio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}