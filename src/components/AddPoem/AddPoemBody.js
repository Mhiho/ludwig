import React,{ Component } from 'react';
import classes from '../../styles/addBook.module.scss'
import classes2 from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import {Link, Redirect} from 'react-router-dom'
import {getUser, isLoggedIn} from '../../services/auth'
import { adresse } from '../../config';
import update from 'immutability-helper';
  

class AddPoemBody extends Component{


    state = {
        title: '',
        author: '',
        year: '',
        cat: [],
        description: '',
        redirect: false,
        id: '',
        poem: {akapits:[{lines: []}]},
        line: '',
        isLoading: true,
        akapitNr: 0
    }

    componentDidMount() {

        const {id} = this.props.match.params
        this.setState({id: id},()=>{
        const url = `${adresse}poems/mine/${this.state.id}`
        const headers = { 'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + `${getUser().token}`
        }
        fetch(url, {
          headers: headers
        }).then(response=>
          response.json()
        ).then(data=>{
          this.setState({title: data[0].title,
                          poem: data[0].poem,
                         isLoading: false,
                        },()=>{
                          this.setState({akapitNr: this.state.poem.akapits.length-1})
                        })
        })
      })
  }
    deleteAkapit(id){
        const url = `${adresse}users/updateMyPoem/${this.state.id}`
        const headers = {    
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + `${getUser().token}`
        }
        const arr = this.state.poem.akapits.filter((akapit,index)=> index !== id)
        console.log(arr)
        this.setState({akapitNr: this.state.akapitNr -1,
          poem: update(this.state.poem,
          { 
            akapits: { $set: arr }
         }
        )},()=>{
          console.log(this.state.poem)
          fetch(url,{
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({ poem: this.state.poem})
          }).then(response=> {
            if(!response.ok){
              console.log('błąd')
            }
            return response.json()
          })
            .then(data => {
            })
        })
    }
    
        oneDown(id){
          function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; // for testing
        };
          const newArr = array_move(this.state.poem.akapits, id, id+1)
          const url = `${adresse}users/updateMyPoem/${this.state.id}`
          const headers = {    
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + `${getUser().token}`
          }
          this.setState({poem: update(this.state.poem,
            { akapits: { $set: newArr } }
          )},()=>{
            fetch(url,{
              method: "PATCH",
              headers: headers,
              body: JSON.stringify({ poem: this.state.poem})
            }).then(response=> {
              if(!response.ok){
                console.log('błąd')
              }
              return response.json()
            })
              .then(data => {
              })
          })
        }
        oneUp(id){
          function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; // for testing
        };
          const newArr = array_move(this.state.poem.akapits, id, id-1)
          const url = `${adresse}users/updateMyBook/${this.state.id}`
          const headers = {    
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + `${getUser().token}`
          }
          this.setState({poem: update(this.state.poem,
            { akapits: { $set: newArr } } 
          )},()=>{
            fetch(url,{
              method: "PATCH",
              headers: headers,
              body: JSON.stringify({ poem: this.state.poem})
            }).then(response=> {
              if(!response.ok){
                console.log('błąd')
              }
              return response.json()
            })
              .then(data => {
              })
          })
        }
        editPoem(event){
            event.preventDefault()
            const url = `${adresse}users/updateMyPoem/${this.state.id}`
            const headers = {    
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + `${getUser().token}`
            }
            this.setState({poem: update(this.state.poem,
              { akapits: {
                [this.state.poem.akapits.length-1]: {
                  lines: {
                    [this.state.poem.akapits[this.state.poem.akapits.length-1].lines.length]: { $set: this.state.line}
                  }
                }
              }

              } 
            )
            },()=>{
                    fetch(url,{
                      method: "PATCH",
                      headers: headers,
                      body: JSON.stringify({ poem: this.state.poem})
                    }).then(response=> {
                      if(!response.ok){
                        event.preventDefault()
                        console.log('błąd')
                      }
                      return response.json()
                    })
                      .then(data => {
                      })
                      this.setState({line: ''})
                    })  
        }
        addAka(){
          const url = `${adresse}users/updateMyPoem/${this.state.id}`
          const headers = {    
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + `${getUser().token}`
          }
          const pushedAka = [...this.state.poem.akapits, {lines: []}]
          console.log('!'+pushedAka)
          this.setState({poem: {akapits: pushedAka}},()=>{
            fetch(url,{
              method: "PATCH",
              headers: headers,
              body: JSON.stringify({ poem: this.state.poem,
                                     akapitNr: this.state.akapitNr + 1})
            }).then(response=> {
              if(!response.ok){
                console.log('błąd')
              }
              return response.json()
            })
              .then(data => {
              })
          })
        }
        deletePoem = id =>{
          const headers = {    
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + `${getUser().token}`
               }
               
              fetch(`${adresse}poems/mine/deletePoem/${id}`,{
                  method: "DELETE",
                  headers: headers,
                  body: JSON.stringify({id: id})
                }).then(response=> {
               
                 return response
                }).then(data => {
             
                  return  this.props.history.push('/')
                })
        }
    render(){
      console.log(this.state.poem)
        return(
          <div className={classes2.Frame}>  
            <h2>{this.state.title}</h2>
            <span>Dodaj akapit </span><button className={classes2.addAkaBtn} onClick={()=>this.addAka()}>+</button>
              <form onSubmit={e=>this.editPoem(e)}>
                  <input 
                    name="line"
                    type="text"
                    onChange={event=>this.setState({line: event.target.value})}
                    value={this.state.line}
                  />
                  <input 
                    className={classes2.addLine}
                    type="submit"
                    value="dodaj wers"
                  />
              </form>
            
            <div className={classes.Part}>{
               this.state.poem.akapits.map((akapit,indAka)=>(
                 <div key={indAka} className={classes2.Akapit}>  { akapit.lines.map((line,index)=>(
                   <p className={classes2.Line} key={index+100}>{line} </p> 
                 ))}  <span className={classes.oneUp} onClick={this.state.poem.akapits === 0 ? null : ()=>this.oneUp(indAka)}>↑</span>
                 <span className={classes.oneDown} onClick={this.state.poem.akapits.length-1 === indAka ? null : () =>this.oneDown(indAka)}>↓</span>  
                 <span className={classes.delAkapit} onClick={this.state.poem.akapits.length === 1 ? null : ()=>this.deleteAkapit(indAka)}>× </span></div>
               ))
           }

          </div>
           <button className={classes2.goBackBtn} onClick={ ()=>this.props.history.goBack()}>Wróć do poprzedniej strony</button>
           <button className={classes2.deleteBtn} onClick={()=>this.deletePoem(this.state.id)}>Usuń ten bullshit</button>
            </div>
        )
    }
}
export default AddPoemBody