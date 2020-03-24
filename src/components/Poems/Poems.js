import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {adresse} from '../../config'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import SearchPoem from '../../_components/SearchPoem'

class Poems extends Component {

    state={
        isLoading: true,
        poems: undefined,
        poemNr: 0,
        opacity: false,
        panel: [false,false,false,false,false],
        showEmpty: false
      }
    componentDidMount(){
        fetch(`${adresse}poems/all`)
        .then(response => response.json())
         .then(poems => {
           const shuffled = poems.sort(() => 0.5 - Math.random())
           const shuffledFive = shuffled.slice(0,5)        
           this.setState({ poems: shuffledFive }, ()=>{
                        this.setState({isLoading: false})
                       })
         })
    }
    change(){
        const thi = this
        if(this.state.poemNr >=3){
            setTimeout(function(){thi.setState({poemNr: 0})},1000)
           this.setState({opacity: true})
         } else{ 
             setTimeout(function(){thi.setState({poemNr: thi.state.poemNr+1})},1000)
           this.setState({opacity: true})
        }
    }
    componentDidUpdate(prevProps,prevState){
        const thi = this
        if(prevState.opacity !== this.state.opacity){
            setTimeout(function(){thi.setState({opacity: false})},2000)
        }
    }
    render(){
        return (
            <div>

            <div className={classes.ContainerPoem}>
                <div>
                    <button className={classes.NewPoemBtn} onClick={this.state.opacity ? null : ()=>this.change()}>Przeglądaj dalej</button>
                    {
                        this.state.poems !== undefined ? (
                            <div className={this.state.opacity !== true ? `${classes.Poem}` : `${classes.Poem} ${classes.Opacity}`}>
                                <Link to={`/poemReading/${this.state.poems[this.state.poemNr].id}`}>
                                <h3>{this.state.poems[this.state.poemNr].title}</h3>
                                <h4>{this.state.poems[this.state.poemNr].author}</h4>
                                </Link>
                            </div>
                        ) : null
                    }
                </div>
            </div>
                <SearchPoem />
                    </div>
        )
    }
}


export default Poems