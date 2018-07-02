import React,{Component} from 'react';
import './Player.scss';
class Player extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){

    }
    render(){
        return(
            <div id="player" className='reactMusicPlayerMain'></div>
        )
    }
}
export default  Player;