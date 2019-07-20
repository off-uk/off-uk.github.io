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
  },
  pageSection: {
    '& .section-head': {
      padding: '30px 50px',
    },
    '& .section-text': {
      padding: '30px 50px',
    },
    '& .section-card': {
      '&.card-skills': {
        padding: '30px 50px',
        fontWeight: 'bold',
        color: '#fff',
      },
      '&.card-experience': {
        padding: '20px 50px',
        backgroundColor: '#151515',
        '& .card-experience-date': {
          padding: '10px 0',
          fontSize: 12,
          fontWeight: 'bold',
        },
        '& .card-experience-content': {
          display: 'flex',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& .content-text': {
              paddingLeft: '0!important',
            },
          },
          '& .content-head': {
            fontWeight: 'bold',
            color: '#fff',
          },
          '& .content-text': {
            paddingLeft: 30,
          },
        },
      },
    },
  },
}));

export default function About(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
        <header className={classes.pageHeader}>
            <h2>About me</h2>
            <p>I'm a Frontend Developer / React Developer / Little Web Designer</p>
        </header>

        <section className={classes.pageSection}>

          <h3 className="section-head">Skills / Tools</h3>
        
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div className="section-card card-skills" style={{backgroundColor: '#749fc1',}}>
                JavaScript <br/>ES5 / ES6+
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-card card-skills" style={{backgroundColor: '#c1747b',}}>
                React / <br/>React Hooks
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-card card-skills" style={{backgroundColor: '#74c197',}}>
                HTML5 / <br/>CSS3
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-card card-skills" style={{backgroundColor: '#c174a5',}}>
                jQuery / <br/>Bootstrap 4
              </div>
            </Grid>
          </Grid>

          <p className="section-text">
            Sass/Less, BEM, Gulp/Webpack, Backbone.js, mobx, Material UI, Antd, 
            Git (Gitlab/Bitbucket), Jira/Trello, Figma / Adobe XD / Photoshop
          </p>

        </section>

        <section className={classes.pageSection}>

          <h3 className="section-head">Experience</h3>
        
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="section-card card-experience">
                <div className="card-experience-date">
                  2017-2018 / Web Developer / Team Work
                </div>
                <div className="card-experience-content">
                  <div className="content-head">Ice Technology</div>
                  <div className="content-text">WordPress – WooCommerce, Bootstrap Grid Landing Pages</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="section-card card-experience">
                <div className="card-experience-date">
                  September 2018 / Web Developer / Project Work
                </div>
                <div className="card-experience-content">
                  <div className="content-head">BIGBRAND</div>
                  <div className="content-text">Landing Pages – jQuery / Bootstrap Grid Landing Pages, Sass/Gulp</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="section-card card-experience">
                <div className="card-experience-date">
                  2018 – 2019 / Frontend Developer / Team Work
                </div>
                <div className="card-experience-content">
                  <div className="content-head">Kredit24 / Silkway Ventures</div>
                  <div className="content-text">Backbone.js / ES6 / Babel.js / jQuery / Sass / Gulp</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="section-card card-experience">
                <div className="card-experience-date">
                  2019 / Frontend Developer / Team Work
                </div>
                <div className="card-experience-content">
                  <div className="content-head">United Consultants (UCO)</div>
                  <div className="content-text">Vaadin Framework / React (Hooks, mobx, ts, Material UI, Antd), ES6</div>
                </div>
              </div>
            </Grid>
          </Grid>

        </section>
    </div>
  )
}