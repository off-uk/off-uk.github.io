import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
    letterSpacing: '.35px',
    color: '#8f8f8f',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    '& .header-decoration': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '100px 0 20px 0 ',
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    '& .logo': {
      margin: '10px 0',
      '& .logo-beta': {
        color: '#8f8f8f',
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 10,
      },
    },
    '& .logo a': {
      letterSpacing: 16,
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontSize: 14,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    '& .nav': {
      '& .nav-list': {
        display: 'flex',
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& .nav-item': {
          paddingRight: 40,
          '&:last-child': {
            paddingRight: 0,
          },
        },
        '& .nav-item a': {
          padding: '15px 0 15px 0',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontSize: 14,
          fontWeight: 'bold',
          color: '#8f8f8f',
          '&:hover': {
            color: '#fff',
          },
          '&.active:hover': {
            color: '#fff',
          }
        },
        '& .nav-item a.active': {
          color: '#fff',
        },
      },
    },
  },
  main: {
    position: 'relative',
  },
}));

const routes = [
  { path: '/', name: 'About', Component: About },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contact', name: 'Contact', Component: Contact },
]

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">

        <Router>

          <header className={classes.header}>

            <div className="header-decoration">

              <div className="logo">
                <Link to="/" className="glitch" data-text="Kirill Udaltsov ...">Kirill Udaltsov ***</Link>
                {/* <div className="logo-beta">Beta / 2019</div> */}
              </div>

              <nav className="nav">
                <ul className="nav-list">
                  {routes.map(route => (
                    <li key={route.path} className="nav-item">
                      <NavLink to={route.path} activeClassName="active" exact>{route.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

            </div>

          </header>

          <main className={classes.main}>

            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={{
                      appear: 300,
                      enter: 300,
                      exit: 300,
                    }}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div className="fade">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}

          </main>

        </Router>

      </Container>
    </div>
  )
}