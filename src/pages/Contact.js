import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
      margin: '30px 0',
  },
  pageHeader: {
    padding: '50px',
    backgroundColor: '#151515',
    marginBottom: 30,
  },
  pageSection: {
    '& .section-head': {
      padding: '30px 50px',
    },
    '& .section-text': {
      padding: '30px 50px',
    },
    '& .section-card': {
      '&.card-contact': {
        backgroundColor: '#151515',
        padding: '30px 50px',
        fontWeight: 'bold',
        color: '#fff',
        '& a': {
          color: '#749fc1',
        },
      },
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
        <header className={classes.pageHeader}>
            <h2>Contact</h2>
            <p>If you want to contact me</p>
        </header>

        <section className={classes.pageSection}>
        
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="section-card card-contact">
                Email: <a href="mailto:lillinearlight@gmail.com">lillinearlight@gmail.com</a>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-card card-contact">
                <a href="https://www.linkedin.com/in/udaltsovkirill/" target="_blank">LinkedIn</a>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-card card-contact">
                <a href="https://t.me/off_uk" target="_blank">Telegram</a>
              </div>
            </Grid>
          </Grid>

        </section>
    </div>
  )
}