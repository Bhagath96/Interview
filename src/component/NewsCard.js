import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function NewsCard(props) {
  const classes = useStyles();
  const getRouting=(id)=>{         
   } 
  return (
    <Grid  item xs={12} sm={12} md={6} lg={4} xl={4} spacing={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.Data.title}
          height="180"
          image={props.Data.urlToImage}
          title={props.Data.title}
         
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
           {props.Data.discription}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.Data.content}
          </Typography>
          <p>{props.Data.publishedAt}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>  
      <Link to={{ pathname:`/DetailedPage/${props.Data.publishedAt}`, query: {id:props.Data.publishedAt}}}>Learn More</Link> 
      <td onClick={()=> window.open(`/DetailedPage/${props.Data.publishedAt}`, "_blank")}>text</td>    
      </CardActions>
    </Card>
    </Grid>
  );
}
