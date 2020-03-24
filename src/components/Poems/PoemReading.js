import React,{Component} from 'react'
import {getUser} from '../../services/auth'
import {adresse} from '../../config'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import Comments from './Comments'


class PoemReading extends Component {
    state= {
        isLoading: true,
        id: null,
        data: null,
        comments: false,
        commentsData: [],
        myCom: '',
        counter: 0
    }
    componentDidMount(){
        let {id} = this.props.match.params
        this.setState({
            id: id
        }, ()=>{
            const url = `${adresse}poems/poem/${this.state.id}`
            const headers = { 'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + `${getUser().token}`
        }
        fetch(url, {
          headers: headers
        }).then(response=>
          response.json()
        ).then(data=>{
        this.setState({data}
            ,()=>{
            const url2 = `${adresse}comments/showComments/${this.state.id}`
            const headers2 = { 'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + `${getUser().token}`
            }
        fetch(url2, {
          headers: headers2
        }).then(response=>
          response.json()
        ).then(data=>{
        this.setState({commentsData: data}
        ,()=>{
    this.setState({isLoading: false,
                   counter: this.state.commentsData.length})
    })
})
})
        })
        })
    }
    showCommentsHandler(){
        this.setState({comments: !this.state.comments})
            
    }
    addComment(){
        this.setState({counter: this.state.counter + 1},()=>{
            const url = `${adresse}comments/add/${this.state.id}`
            const headers = { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${getUser().token}`
        }
        const time = new Date()
        const fulltime = time.getDate() + "/"
        + (time.getMonth()+1)  + "/" 
        + time.getFullYear() + " @ "  
        + time.getHours() + ":"  
        + time.getMinutes()
        console.log(fulltime)
        const obj = {commentAuthor: getUser().user.name,
                     comment: this.state.myCom,
                     commentedAt: fulltime }
        const toAdd = [...this.state.commentsData, obj ]
        this.setState({commentsData: toAdd})
        fetch(url,{
            method: "POST",
            headers: headers,
            body: JSON.stringify(
                obj
            )
        }).then(response=> {
            if(!response.ok){
                console.log('błąd')
            }
            return response.json()
        })
        .then(data => {})
    })
    }

    render(){
        console.log(this.state.commentsData)
        if(this.state.isLoading === true) { return(<div style={{marginTop: '-180px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className={loading.loader}></div></div>)}
        return (
        
            <div className={classes.ContainerReading}>
                <h2>{this.state.data.author}</h2>
                <h3>{this.state.data.title}</h3>
                <h4>{this.state.data.genre}</h4>
                <div>{this.state.data.categories.map((cat,index)=>(<h5 key={index}>{cat}</h5>))}</div>

                {
                    this.state.data.poem.akapits.map((akapit,indAka)=>(
                        <div className={classes.Akapit} key={indAka}>
                        {  akapit.lines.map((line,index)=>(
                            <p className={classes.Line} key={index}>{line}</p>
                        ))

                        }
                        </div>
                    ))
                }
              <h5>{this.state.data.year}</h5>
              <p>{this.state.data.description}</p>
              <div style={{marginTop: '30px'}}>
                <button onClick={()=>this.showCommentsHandler()}>Wyświetl komentarze</button>
              </div>
              <div>
                {
                    this.state.comments === false ? null :
                    
                    <div>
                <div>
                {this.state.commentsData.map((comment) => (
                    <div>
                        <h3>{comment.commentAuthor}</h3>
                        <h4>{comment.comment}</h4>
                        <h5>{comment.commentedAt}</h5>
                    </div>
                    ))}
                    </div>
                            </div>
                         } 
                        <div>
                    <input type="text"
                           onChange={e=>this.setState({myCom: e.target.value})}
                           value={this.state.myCom}
                           name="comment"
                    />
                    <button onClick={()=>this.addComment()}>dodaj komentarz</button>
                 </div>
            </div>
           </div> 
        )
    }
}

export default PoemReading

