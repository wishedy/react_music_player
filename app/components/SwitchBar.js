import React,{Component} from 'react';
import './SwitchBar.scss';
class SwitchBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className='reactMusicPlayerSwitchBar'>
                <section className='reactMusicPlayerChange upIcon'></section>
                <section className='reactMusicPlayerChange timeCount'>{this.props.PlayTime}</section>
                <section className='reactMusicPlayerChange split'>/</section>
                <section className='reactMusicPlayerChange timeCount'>{this.props.Duration}</section>
                <section className='reactMusicPlayerChange downIcon'></section>
            </section>
        )
    }
}
export default SwitchBar;