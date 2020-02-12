// Reacts Imports
// =========================================================   
  import React, {useEffect, useState } from 'react';
// Material UI Components
// =========================================================   
  import { makeStyles, withStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import Carousel from '../Carousel';
// Styling
// =========================================================   
  import "./style.css";
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginBottom: "10px",
    },
    navTitle: {
      margin: "0px!important",
      color: "#57585D",
    }
  }));

  const StyledTabs = withStyles(theme => ({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div": {
        width: "100%",
        backgroundColor: "#DC3166",
      }
    }
  }))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

// AppBar - Filtering Panel
// =========================================================   
  export default function AppBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      const header = document.getElementById("myHeader");
      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > 260) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);

    return (
      <header>
        <Carousel/>
        <nav id="myHeader" className="header">
          <Paper id="TabNavs" className={classes.root}>
          
            <StyledTabs
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab label={props.viewAll} className={classes.navTitle}/>
              <Tab label={props.manual} className={classes.navTitle}/>
              <Tab label= {props.twitter} className={classes.navTitle}/>
              <Tab label= {props.instagram} className={classes.navTitle}/>

            </StyledTabs>
          </Paper>
        </nav>
      </header>
    );
  }