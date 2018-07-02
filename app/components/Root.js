import React,{Component} from 'react';
import './Reset.scss';
import Header from './Header.js';

import Player from './Player.js';
import PlayPanel from './PlayPanel.js';
class Root extends Component {
    render(){
        return(
            <section className='reactMusicPlayerContainer'>
                <Header/>
                <Player/>
                <PlayPanel/>
            </section>
        )
    }
}
export default Root;