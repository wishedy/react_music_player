import React,{Component} from 'react';
import './PlayIcon.scss';
class PlayIcon extends Component{
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(){
        const playerElement = $("#player");
        if(this.props.playStatus){
            playerElement.jPlayer("pause");
        }else{
            playerElement.jPlayer("play");
        }
        this.props.onChangeStatus&&this.props.onChangeStatus(!this.props.playStatus);
    }
    render(){
        return(
            <section className={!this.props.playStatus?'PlayIcon' : 'PlayIcon Pause'} onClick={this.changeStatus}></section>
        )
    }
}
export default PlayIcon;