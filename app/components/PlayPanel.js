import React,{Component} from 'react';
import './PlayPanel.scss';
import Progress from './Progress.js';
import PlayIcon from './PlayIcon.js';
import SwitchBar from './SwitchBar.js';
import PlayerName from './PlayerName.js';
class PlayPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
          playStatus:false,
          PlayTime:0,
            duration:0
        };
        this.changeStatus = this.changeStatus.bind(this);
        this.PlayerEnd = this.PlayerEnd.bind(this);
        this.changePlayTime = this.changePlayTime.bind(this);
        this.setDuration = this.setDuration.bind(this);
    }
    changeStatus(status){
        this.setState({
            playStatus:status
        });
    }
    PlayerEnd(){
        this.changeStatus(false);
    }
    changePlayTime(time){
        this.setState({
            PlayTime:time
        });
    }
    setDuration(time){
        this.setState({
            duration:time
        });
    }
    render(){
        return(
            <div className='reactMusicPlayerMain'>
                <PlayerName/>
                <Progress playStatus={this.state.playStatus} onPlayerEnd={this.PlayerEnd} onChangeStatus={this.changePlayTime} onSetDuration={this.setDuration}/>
                <PlayIcon onChangeStatus={this.changeStatus}  playStatus={this.state.playStatus}/>
                <SwitchBar PlayTime={this.state.PlayTime} Duration={this.state.duration}/>
            </div>
        )
    }
}
export default PlayPanel;