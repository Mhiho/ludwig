import React,{Component} from 'react'
import { adresse } from '../../config';
import classes from '../../styles/addBook.module.scss'
import {getUser} from '../../services/auth'
import {Redirect} from 'react-router-dom'

class AddPoem extends Component{

    state = {
        title: '',
        author: '',
        year: '',
        categories: [],
        description: '',
        redirect: false,
        id: '',
        poem: {akapits: [{lines: []}]}
    }

    addPoem = (event) => {
        const url = `${adresse}poems/add`
        const headers = { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${getUser().token}`
        }
        event.preventDefault()
       fetch(url,{
         method: "POST",
         headers: headers,
         body: JSON.stringify(this.state)
       }).then(response=> {
         if(!response.ok){
             console.log('fock')
           event.preventDefault()
         }
         return response.json()
       })
         .then(data => {
           this.setState({redirect: true,
                         id: data.id})
         
         })
      }
      addCat = event => {
        let array = [...this.state.categories]
        array = [...array, event.target.value]
        const ar = [...new Set(array)]
        this.setState({categories: ar})
      }
      deleteCategory(id) {
        let cat = this.state.categories
        cat.splice(id,1)
        this.setState({categories: cat})
      }

    
    render(){
        console.log(this.state)
        if(this.state.redirect === true){
            return <Redirect to={`/addBody/${this.state.id}`} />
          }
        return (
            <div>
            <h1>Dodaj wiersz</h1>
            <form 
                method="post"
                onSubmit={this.addPoem}
            >
              <label>
                <span>Tytuł</span>
                <input 
                 name="title"
                 type="text"
                 onChange={event => this.setState({title: event.target.value})}
                 value={this.state.title}
                  />
                </label>

                <label>
                <span>Autor</span>
                <input 
                 name="author"
                 type="text"
                 onChange={event => this.setState({author: event.target.value})}
                 value={this.state.author}
                  />
                </label>
                <label>
                <span>Rok powstania</span>
                <input 
                 name="year"
                 type="text"
                 onChange={event => this.setState({year: event.target.value})}
                 value={this.state.year}
                  />
                </label>
                <label>
                <span>Opis wiersza (okoliczności powstania, ciekawostki)</span>    
                <textarea
                 name="description"
                 onChange={event => this.setState({description: event.target.value})}
                 value={this.state.description}
                  />
                </label>
                <label>
                  <span>Kategoria</span>
                  <select multiple={true} value={this.state.categories} onChange={this.addCat}>
                    <option value="miłość">miłość</option>
                    <option value="nienawiść">nienawiść</option>
                    <option value="smutek">smutek</option>
                    <option value="złość">złość</option>
                    <option value="radość">radość</option>
                    <option value="romantyk">romantyk</option>
                    <option value="klasycznie">klasycznie</option>
                    <option value="prawda">prawda</option>
                    <option value="Bóg">Bóg</option>
                    <option value="relacje">relacje</option>
                    <option value="ambiwalencja">ambiwalencja</option>
                    <option value="dziwny">dziwny</option>
                    <option value="abstrakcja">abstrakcja</option>
                    <option value="gorycz">gorycz</option>
                    <option value="pochwała życia">pochwała życia</option>
                  </select>
                </label>
                <div className={classes.categoriesContainer}>
                  {
                    this.state.categories.map((category,index) => (<span className={classes.Category} key={index}>#{category} <strong onClick={()=>this.deleteCategory(index)}>× </strong> </span>))
                  }  
                </div>
                <input
                    type="submit"
                    value="Opublikuj"
                />
            </form>

        </div>
        )
    }
}

export default AddPoem