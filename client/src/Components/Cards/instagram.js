// React imports
// =========================================================   
  import React from 'react';
// Material UI Components 
// =========================================================   
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardHeader from '@material-ui/core/CardHeader';
  import CardContent from '@material-ui/core/CardContent';
  import Avatar from '@material-ui/core/Avatar';
  import Typography from '@material-ui/core/Typography';

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
      borderRadius: 8, 
      backgroundColor: "transparent"
    },
  }));

// Instagram Card Layout
// =========================================================   
  export default function InstagramCard(props) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardHeader 
          avatar={
            <Avatar aria-label="manual" className={classes.avatar}>
              <img alt="instagram" src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" />
            </Avatar>
          }
          title={`@${props.title}`}
          subheader={props.date}
        />
        
        <CardContent>
          <img alt={props.altText} src={props.image}/>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.link}
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