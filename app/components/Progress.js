import React,{Component} from 'react';
import './Progress.scss'
class Progress extends Component{
    render(){
        return(
            <div className='reactMusicPlayerProgressWrapper'>
                <div className='reactMusicPlayerProgressInner'></div>
            </div>
        )
    }
}
export default Progress;