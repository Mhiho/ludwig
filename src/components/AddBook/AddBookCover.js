import React,{Component} from 'react'
import { adresse } from '../../config';
import { getUser } from '../../services/auth';
import classes from '../../styles/addBook.module.scss'
import classesRoot from '../../styles/index.module.scss'
import axios from 'axios'
import empty from '../../assets/images/empty.png'
import {Redirect} from 'react-router-dom'


class AddBookCover extends Component {
    state ={
        file: 'file',
        preview: null,
        id: '',
        sent: false,
        error: '',
        btnCt: '',
        redirect: false,
    }

    componentDidMount(){
      let {id} = this.props.match.params
      this.setState({id: id})
    }



    addImg = (event) => {
      event.preventDefault()

        const url = `${adresse}books/mine/addImage/${this.state.id}`
        const headers = { 'content-type': 'formData',
        'Authorization': 'Bearer ' + `${getUser().token}`
        }
        let data = new FormData(event.target);
    
        data.append('booksImages',this.state.file.name);
        axios.post(url, data, {
          headers: headers
      })
    .then(res => { // then print response status
        this.setState({sent: true,
                       error: ''})
     }).catch(error => {
      console.log(error);
      this.setState({sent: false, error: 'Coś poszło nie tak. Zdjęcie musi być w formacie png lub jpg i mieć nie więcej niż 1 Mb.'})
  });
    }

      handleImageChange(event) {
        event.preventDefault();
    
        let reader = new FileReader();
        let file = event.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            preview: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      goFurther = ()=>{
        if(this.state.sent === true){
        this.setState({redirect: true})
        }else {
          this.setState({error: 'Zdjęcie musi być dodane'})
        }
      }

    render(){
        if(this.state.redirect === true){
          return <Redirect to={`/myBooks/${this.state.id}/writing`} />
        }
        return (
            <div>
                 <div style={{color: 'red',width: '100%', height: '50px'}}>{this.state.error}</div>
               <form onSubmit={(e)=>this.addImg(e)}>
                <div className={classes.inptsContainer}>

                <input
                 className={`${classes.fileAdd} ${classes.inpt}`}
                 name="booksImages"
                 accept="image/png, image/jpeg, image/jpg"
                 type="file"
                 onChange={(e)=>this.handleImageChange(e)}
                 />
                
                <input 
                className={`${classes.inpt} ${classes.fileSbmt}`}
                type="submit"
                value="Prześlij"
                />
                </div>
                </form>
                <div className={classes.buttonContainer}><button onClick={this.goFurther} className={classesRoot.typicalBtn}>Chcę przejść do pisania!</button></div>
      <div className={classes.frameContainer}>

{this.state.preview ?
    <img src={this.state.preview} /> :
    <img src={empty} />
}

    </div>
            </div>
        )
    }
}

export default AddBookCover