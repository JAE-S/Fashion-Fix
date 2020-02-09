// React Imports 
// =========================================================   
    import React from 'react';
// Material UI Components
// =========================================================   
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardHeader from '@material-ui/core/CardHeader';
    import CardMedia from '@material-ui/core/CardMedia';
    import CardContent from '@material-ui/core/CardContent';
    import Avatar from '@material-ui/core/Avatar';
    import Typography from '@material-ui/core/Typography';
    import { red } from '@material-ui/core/colors';

 // TODO:////////////////// -> Card Actions 
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';

// Styling
// =========================================================   
  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 314,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
      borderRadius: 8, 
    },
  }));

// Manual Card layout 
// =========================================================   
  export default function ManualCard(props) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="manual" className={classes.avatar}>
              AFF
            </Avatar>
          }
          title={`${props.title}...`}
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.altText}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.link}
          </Typography>

          <Typography variant="caption" color="textSecondary" component="p">
            Posted: {props.date}
          </Typography>
        </CardContent>

        {/* // TODO:////////////////// -> Card Actions  */}
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions> */}
        
      </Card>
    );
  }