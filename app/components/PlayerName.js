import React,{Component} from 'react';
import './PlayerName.scss';
class PlayerName extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className='PlayerName'>这是这首歌的名字</section>
        )
    }
}
export default PlayerName;