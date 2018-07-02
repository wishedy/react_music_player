import React,{Component} from 'react';
import './Progress.scss'
class Progress extends Component{
    constructor(props){
        super(props);
        this.state = {
            playScale:'-',
            currentTime:0,
            sumTime:0
        };
        this.changeProgress = this.changeProgress.bind(this);
        this.PlayerEnd = this.PlayerEnd.bind(this);
    }
    componentWillMount(){
        console.log('comopnentwillmount')
    }
    PlayerEnd(){
        this.props.onPlayerEnd&&this.props.onPlayerEnd();
    }
    componentDidMount(){
        let playerElement = $("#player");
        let isThis = this;
        playerElement.jPlayer({
          ready(){
             $(this).jPlayer('setMedia',{
                 mp3:'http://65.ierge.cn/13/207/414364.mp3'
             }).jPlayer('pause');
          },
            ended: function() { // The $.jPlayer.event.ended event
                isThis.PlayerEnd();
            },
           supplied:'mp3',
           wmode:'window'
       });
        playerElement.bind($.jPlayer.event.timeupdate,(e)=>{
            if(!this.state.sumTime){
                this.setState({
                    sumTime:e.jPlayer.status.duration
                });
            }
           this.setState({
               playScale:Math.round(e.jPlayer.status.currentTime)/this.state.sumTime*100,
               currentTime:Math.round(e.jPlayer.status.currentTime)
           });
       })
    }
    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
        this.setState({
            playScale:progress*100
        });
        let aimTime = progress*this.state.sumTime;
        const playerElement = $("#player");
        if(this.props.playStatus){
            playerElement.jPlayer("play",aimTime);

        }else{
            playerElement.jPlayer("pause",aimTime);
        }
    }
    componentWillUnMount(){
        $("#player").unbind($.jPlayer.event.timeupdate);
    }
    render(){
        return(
            <div className='reactMusicPlayerProgressWrapper' onClick={this.changeProgress} ref="progressBar">
                <div className='reactMusicPlayerProgressInner'
                style={{width:`${this.state.playScale}%`}}>
                </div>
            </div>
        )
    }
}
export default Progress;