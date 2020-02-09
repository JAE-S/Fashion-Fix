// Reacts Imports
// =========================================================   
  import React from 'react';
// Material UI Components
// =========================================================   
  import { makeStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';

// Styling
// =========================================================   
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

// AppBar - Filtering Panel
// =========================================================   
  export default function AppBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={props.viewAll}/>
          <Tab label={props.manual} />
          <Tab label= {props.twitter} />
          <Tab label= {props.instagram} />

        </Tabs>
      </Paper>
    );
  }