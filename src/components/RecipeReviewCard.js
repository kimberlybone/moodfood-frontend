import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onImageClick = e => {
      return props.history.push(`/recipes/${ e.target.title }`)
  }

  const cookingMinutes = `Ready in ${props.cookingMinutes} minutes`
  const instructions = `${props.instructions}`
  const summary = `${instructions.slice(0, 100)}...`
  const summary1 = `${instructions.slice(0, 100)}`
  const summary2 = `${instructions.slice(100, 200)}`
  const summary3 = `${instructions.slice(200, 300)}...`

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ props.name }
        subheader={ cookingMinutes }
      />
      <CardMedia
        className={classes.media}
        onClick={onImageClick}
        image={props.image}
        title={props.id}
        onMouseOver={(e) => e.target.classList.toggle('is-hovered')}
        onMouseLeave={(e) => e.target.classList.toggle('is-hovered')}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
            {summary1}
          </Typography>
          <Typography paragraph>
            {summary2}
          </Typography>
          <Typography paragraph>
            {summary3}
          </Typography>
          <Typography paragraph>
            Click on Image for more!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default withRouter( RecipeReviewCard )
