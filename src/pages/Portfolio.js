import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MiddlemanImage from './../img/01-3.jpg';
import IBuumerangImage from './../img/mosque-615415_1920.jpg';
import ParadigmaImage from './../img/laptop-3190194_1920.jpg';
import MlserviceImage from './../img/forklift-835340_1920.jpg';
import FinGravitationImage from './../img/safe-913452_1920.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
      margin: '30px 0',
  },
  pageHeader: {
    marginBottom: 30,
    padding: 50,
    backgroundColor: '#151515',
  },
  card: {
    display: 'flex',
    padding: 50,
    textDecoration: 'none',
    backgroundColor: '#151515',
    transition: '.5s',
    // backgroundAttachment: 'fixed!important',
    '&:hover': {
        opacity: '.5',
    },
    [theme.breakpoints.down('sm')]: {
        padding: 0,
        background: 'none!important',
        '& .card-content': {
            width: '100%',
        },
    },
    '& .card-content': {
        padding: '20px 20px',
        backgroundColor: '#151515',
        color: '#fff',
        '& .card-head': {
            fontSize: 25,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            marginBottom: '5px',
        },
        '& .card-text': {
            color: '#fff',
            fontSize: 12,
        },
    },
  },
  meta: {
    padding: '10px 0',
    fontSize: '12px',
    '& a': {
        color: '#fff',
    },
  },
}));

export default function Portfolio(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
        <header className={classes.pageHeader}>
            <h2>Portfolio</h2>
            <p>My personal projects and projects in which I participated</p>
        </header>

        {/* Todo: Оптимизировать изображения */}

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <a href="http://buum-travel.000webhostapp.com" target="_blank" className={classes.card} style={{background: `url(${IBuumerangImage}) center center no-repeat`, backgroundSize: 'cover'}}>
                    <div className="card-content" style={{backgroundColor: '#749fc1'}}>
                        <div className="card-head">
                            iBuumerang
                        </div>
                        <div className="card-text">
                            Website for Travel Booking Platform
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Developed in 2019 / 
                    Tools: <a href="https://prepros.io" target="_blank">Prepros</a> / 
                    jQuery / Bootstrap 4 Grid / Sass / PHPMailer
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <a href="http://www.uco.kz/" target="_blank" className={classes.card} style={{backgroundColor: '#653995'}}>
                    <div className="card-content" style={{backgroundColor: '#653995'}}>
                        <div className="card-head">
                            UCO <br/>Projects
                        </div>
                        <div className="card-text">
                            Participated in front-end developmen
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Participated in 2019 / 
                    React Apps / Vaadin Framework
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <a href="https://kredit24.kz/" target="_blank" className={classes.card} style={{backgroundColor: '#b8ba00'}}>
                    <div className="card-content" style={{backgroundColor: '#b8ba00'}}>
                        <div className="card-head">
                            Kredit <br/>24
                        </div>
                        <div className="card-text">
                            Participated in front-end developmen
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Participated in 2018-2019 / 
                    ES6 / Backbone.js
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <a href="https://silkwayventures.com/" target="_blank" className={classes.card} style={{backgroundColor: '#256dc6'}}>
                    <div className="card-content" style={{backgroundColor: '#256dc6'}}>
                        <div className="card-head">
                            Silkway <br/>Ventures
                        </div>
                        <div className="card-text">
                            Participated in front-end developmen
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Participated in 2018-2019
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <a href="http://middleman.kz" target="_blank" className={classes.card} style={{background: `url(${MiddlemanImage}) center center no-repeat`, backgroundSize: 'cover'}}>
                    <div className="card-content" style={{backgroundColor: '#a1393d'}}>
                        <div className="card-head">
                            Middleman
                        </div>
                        <div className="card-text">
                            Website for Investment Company
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Developed in 2018 / 
                    Tools: <a href="https://wordpress.org" target="_blank">WordPress</a> / 
                    jQuery / Gulp / Sass / Animate.css
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <a href="http://test.bigbrand.kz/" target="_blank" className={classes.card} style={{background: `url(${ParadigmaImage}) center center no-repeat`, backgroundSize: 'cover'}}>
                    <div className="card-content" style={{backgroundColor: '#ccae33'}}>
                        <div className="card-head">
                            Paradigma 2.0
                        </div>
                        <div className="card-text">
                            Website for Course "Paradigm2.0" by Alexander Lee
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Developed in 2018 / Design by <a href="https://kalitin.kz/portfolio/web/kurs-paradigma.html" target="_blank">Kalitin</a>
                </div>
            </Grid>
            <Grid item xs={12}>
                <a href="http://skladteh.kz/rokhli" target="_blank" className={classes.card} style={{background: `url(${MlserviceImage}) center center no-repeat`, backgroundSize: 'cover'}}>
                    <div className="card-content" style={{backgroundColor: '#1d9d8d'}}>
                        <div className="card-head">
                            MLSERVICE
                        </div>
                        <div className="card-text">
                            Landing Page for Online Store
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Developed in 2018 / Design by <a href="https://kalitin.kz" target="_blank">Kalitin</a>
                </div>
            </Grid>
            <Grid item xs={12}>
                <a href="http://fingravitation.net/" target="_blank" className={classes.card} style={{background: `url(${FinGravitationImage}) center center no-repeat`, backgroundSize: 'cover'}}>
                    <div className="card-content" style={{backgroundColor: '#6159a1'}}>
                        <div className="card-head">
                            Fingravitation
                        </div>
                        <div className="card-text">
                            Landing Page for Independent Evaluation Company
                        </div>
                    </div>
                </a>
                <div className={classes.meta}>
                    Developed in 2018 / Design by <a href="https://kalitin.kz/portfolio/web/fingravitation.html" target="_blank">Kalitin</a>
                </div>
            </Grid>
        </Grid>

    </div>
  )
}