import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Stack>
                <Avatar alt="usuario" src="https://img2.rtve.es/imagenes/experimento-monos-virtuales-consigue-reescribir-obras-completas-shakespeare/1317125517644.jpg" sx={{ width: 80, height: 80, }} />
            </Stack>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Moises
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam, vel culpa quasi eos officia aspernatur, minima magni quae assumenda modi consequatur qui repellat ipsa fugiat voluptatem sint voluptatibus? Pariatur.
                </Typography>
                <br/>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illum consectetur quia debitis perferendis architecto totam earum voluptate qui ullam, ipsam in, id aliquid autem magnam aut alias iure a!
                </Typography>
            </CardContent>
        </Card>
    );
}
