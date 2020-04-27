import React, { Component, Suspense, lazy } from 'react';
import './App.module.scss';
import PrivateRoute from './_components/PrivateRoute';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { ThemeProvider } from './store/ContextAPI'
import { createBrowserHistory } from 'history'
import classes from './styles/app.module.scss'
import empty from '../src/assets/images/empty.png'
import ErrorBoundary from './hoc/errorHandler'

// const HomePage = lazy(() => import("./components/HomePage/HomePage"));
// const Login = lazy(()=> import("./components/Login/Login"));
// const MyProfile = lazy(()=> import('./components/MyProfile/MyProfile'));
// import HomePage from './components/HomePage/HomePage'
// import Login from './components/Login/Login'
// import MyProfile from './components/MyProfile/MyProfile'
import Layout from './_components/Layout';
// import Books from './components/Books/Books'
// import AddBook from './components/AddBook/AddBook'
// import AddBookCover from './components/AddBook/AddBookCover'
// import Writing from './components/AddBook/Writing'
// import NewChapter from './components/AddBook/NewChapter'
// import Book from './components/Book/Book'
// import Reading from './components/Book/Reading'
// import Poems from './components/Poems/Poems'

const MyBooks = lazy(() => import('./components/MyBooks/MyBooks'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const Login = lazy(() => import('./components/Login/Login'));
const MyProfile = lazy(() => import('./components/MyProfile/MyProfile'));
// const Layout = lazy(() => import('./_components/Layout'))
const Books = lazy(() => import('./components/Books/Books'));
const AddBook = lazy(() => import('./components/AddBook/AddBook'));
const AddBookCover = lazy(() => import('./components/AddBook/AddBookCover'));
const Writing = lazy(() => import('./components/AddBook/Writing'));
const NewChapter = lazy(() => import('./components/AddBook/NewChapter'));
const Book = lazy(() => import('./components/Book/Book'));
const Reading = lazy(() => import('./components/Book/Reading'));
const Poems = lazy(() => import('./components/Poems/Poems'));
const Logout = lazy(() => import('./components/Login/Logout'));
const AddPoem = lazy(() => import('./components/AddPoem/AddPoem'));
const AddPoemBody = lazy(() => import('./components/AddPoem/AddPoemBody'));
const MyPoems = lazy(() => import('./components/MyPoems/MyPoems'));
const PoemReading = lazy(() => import('./components/Poems/PoemReading'));
const SocialRoom = lazy(() => import('./components/SocialRoom/SocialRoom'));

const override = css`
  box-sizing: content-box;
`;
class App extends Component {
  state = { loading: true };
  renderLoader = () => <div className={classes.loader}></div>;
  render() {
    return (
      <HashRouter>
        <ThemeProvider>
          <Layout>

            <Suspense
              fallback={
                <div
                  style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <h1 style={{ color: 'white' }}>Loading...</h1>
                </div>
              }
            >
              <Route path='/login' component={Login} />
              <Route exact path='/' component={HomePage} />
              <ErrorBoundary>

                <Route path='/books' component={Books} />
              </ErrorBoundary>
              <Route path='/logout' component={Logout} />
              <Route path='/poems' component={Poems} />
              <PrivateRoute path='/society' component={SocialRoom} />
              <PrivateRoute path='/poemReading/:id' component={PoemReading} />
              <PrivateRoute path='/addPoem' component={AddPoem} />
              <PrivateRoute path='/addBody/:id' component={AddPoemBody} />
              <PrivateRoute path='/minePoems' component={MyPoems} />
              <PrivateRoute path='/myProfile' component={MyProfile} />
              <PrivateRoute path='/sample/:id' component={Book} />
              <PrivateRoute path='/addBook' component={AddBook} />
              <PrivateRoute
                path='/myBooks/:id/addBookCover'
                component={AddBookCover}
              />
              <PrivateRoute path='/myBooks/:id/writing' component={Writing} />
              <PrivateRoute
                path='/myBooks/:id/chapters/:chapterNr'
                component={NewChapter}
              />
              <PrivateRoute
                path='/:id/reading/:chapterNr'
                component={Reading}
              />
              <PrivateRoute path='/mine' component={MyBooks} />
            </Suspense>
          </Layout>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
export default App;
