import React,{Component} from 'react';
import './SwitchBar.scss';
class SwitchBar extends Component{
    constructor(props){
        super(props);
        //this.changeIndex = this.changeIndex.bind(this,dir);
    }
    changeIndex(dir){
        console.log(dir);
    }
    render(){
        return(
            <section className='reactMusicPlayerSwitchBar'>
                <section className='reactMusicPlayerChange upIcon' onClick={this.changeIndex.bind(this,0)}></section>
                <section className='reactMusicPlayerChange timeCount'>{this.props.PlayTime}</section>
                <section className='reactMusicPlayerChange split'>/</section>
                <section className='reactMusicPlayerChange timeCount'>{this.props.Duration}</section>
                <section className='reactMusicPlayerChange downIcon' onClick={this.changeIndex.bind(this,1)}></section>
            </section>
        )
    }
}
export default SwitchBar;