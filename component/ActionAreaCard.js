import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function ActionAreaCard(props) {
  const {post} = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.imdbID}
            <Link href={`/movie/${post.imdbID}`}>
              <div>Click to detail</div>
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
