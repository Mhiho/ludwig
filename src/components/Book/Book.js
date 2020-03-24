import React, {Component} from 'react'
import {getUser} from '../../services/auth'
import {adresse} from '../../config'
import {Link} from 'react-router-dom'
import classes from '../../styles/books.module.scss'

class Book extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        let {id} = this.props.match.params
        this.setState({
            id: id
        }, ()=>{
            const url = `${adresse}books/${this.state.id}`
            const headers = { 'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + `${getUser().token}`
        }
        fetch(url, {
          headers: headers
        }).then(response=>
          response.json()
        ).then(data=>{
        this.setState({book: data})
        })

        }
        )
    }
    readChapter(id){

    }
    render(){
        return (
            <div>
                <h2>{this.state.book !== undefined ? this.state.book.title : ''}</h2>
                <h3>{this.state.book !== undefined ? this.state.book.author : ''}</h3>
                <div>{this.state.book !== undefined ? this.state.book.categories.map(cat=><span>cat</span>) : null}</div>
                <h2>Rozdziały:</h2>
                {this.state.book !== undefined ? this.state.book.chapters.map((chapter,index)=>(
                    <Link to={`/${this.state.id}/reading/${index}`}><button className={classes.btnChaptitle}>{chapter.chaptitle}</button></Link>
                )) : null
                }

            </div>
        )
    }
}
export default Book