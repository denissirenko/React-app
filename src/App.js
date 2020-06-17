import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="app-main">
          <div className="container">
            <div className="page-content"> 
              <aside className="app-aside">
                <Navbar />
              </aside>
              <div className="app-wrapper-content">
                <Route path='/dialogs' 
                  render={ ()=> <DialogsContainer
                    store={props.store} /> }/>
                <Route path='/profile'
                  render={ ()=> <Profile 
                    store = {props.store} /> }/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
