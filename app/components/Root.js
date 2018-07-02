import React,{Component} from 'react';
import Header from './Header.js'
import Progress from './Progress.js'
class Root extends Component {
    render(){
        return(
            <section className='reactMusicPlayerContainer'>
                <Header/>
                <Progress/>
            </section>
        )
    }
}
export default Root;