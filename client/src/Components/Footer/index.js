// React Imports 
// =========================================================   
    import React from "react";
// Material UI Components
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
    import { Typography, Container } from '@material-ui/core/';

// Styles
// =========================================================
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        color: "#f7f7f7",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        textAlign: 'center',
        textDecoration: "none"
      },
     link: {
      textDecoration: "none!important", 
      color: "#56585D"
     }


    }));

// Footer
// =========================================================
    export function Footer() {
        const classes = useStyles();
    
        return (
            <div className={classes.root}>
                <footer className={classes.footer}>
                    <Container maxWidth="sm" className={classes.link}>
                        <Typography  justify="center" variant="body2">
                            {' © '} 2020 Bullring Birmingham Autumn Fashion Fix
                        </Typography>
                    </Container>
                </footer>
            </div>
        );
    }