import React,{Component} from 'react';
import './PlayPanel.scss';
import Progress from './Progress.js';
import PlayIcon from './PlayIcon.js';
class PlayPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
          playStatus:true
        };
        this.changeStatus = this.changeStatus.bind(this);
        this.PlayerEnd = this.PlayerEnd.bind(this);
    }
    changeStatus(status){
        this.setState({
            playStatus:status
        });
    }
    PlayerEnd(){
        this.changeStatus(false);
    }
    render(){
        return(
            <div className='reactMusicPlayerMain'>
                <Progress playStatus={this.state.playStatus} onPlayerEnd={this.PlayerEnd}/>
                <PlayIcon onChangeStatus={this.changeStatus}  playStatus={this.state.playStatus}/>
            </div>
        )
    }
}
export default PlayPanel;