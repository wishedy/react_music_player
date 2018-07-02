import React,{Component} from 'react';
import './header.scss';
class Header extends Component{
    render(){
        return(
            <header className='reactMusicPlayerHeaderWrapper'>
                <div className='reactMusicPlayerHeaderInner'>
                    <span className='playerIcon'></span>
                    <p className='playTitle'>自制音乐播放器</p>
                </div>
            </header>
        )
    }
}
export  default Header;