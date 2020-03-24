import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {adresse} from '../../config'
import classes from '../../styles/books.module.scss'
import empty from '../../assets/images/empty.png'
import loading from '../../styles/app.module.scss'

const base64Flag = 'data:image/jpeg;base64,';
class Books extends Component {
  _isMounted = false;

  state={
    isLoading: true,
    books: [],
    url: null,
    leftUrl: null,
    rightUrl: null,
    id: 0,
    opacity: false,
    panel: [false,false,false,false,false,false,false,false,false,false],
    showEmpty: false
  }
  componentDidMount() {
    this._isMounted = true;
    const arrayBufferToBase64 = (buffer) => {
          var binary = '';
          var bytes = [].slice.call(new Uint8Array(buffer));
          bytes.forEach((b) => binary += String.fromCharCode(b));
          return window.btoa(binary);
    };
    fetch(`${adresse}books/all`)
    .then(response => response.json())
      .then(books => {
        const shuffled = books.sort(() => 0.5 - Math.random())
        const shuffledTen = shuffled.slice(0,10)        
        this.setState({ books: shuffledTen }, ()=>{
        if(
           this.state.books[this.state.id].coverUrl !== undefined
           ){
        this.setState({url: arrayBufferToBase64(this.state.books[this.state.id].coverUrl.data),
                       opacity: true},()=>{
                        this.setState({isLoading: false})
                       })
        }
      })
 
    });
    let array = this.state.panel
    array[this.state.id] = true
    this.setState({panel: array})
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate(prevProps, prevState){
    const arrayBufferToBase64 = (buffer) => {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
  };
    if(prevState.id !== this.state.id && this.state.opacity === false){
      this.setState({opacity: true})
    }
    if(prevState.id !== this.state.id && this.state.books[this.state.id].url !== undefined){ 
      this.setState({url: arrayBufferToBase64(this.state.books[this.state.id].url.data)}
      )
    }
    if(prevState.id !== this.state.id && this.state.books[this.state.id].url === undefined){
      this.setState({url: null})
    }
    if(prevState.id !== this.state.id){
      let array = [false,false,false,false,false,false,false,false,false,false]
      array[this.state.id] = true
      this.setState({panel: array})
    }
  }
  narrowLeft(){
    this.state.id <= 0 ? this.setState({id: this.state.books.length - 1}) : this.setState({id: this.state.id -1,opacity: false})
  }
  narrowRight(){
    this.state.id >= this.state.books.length-1 ? this.setState({id: 0}) : this.setState({id: this.state.id + 1, opacity: false})
  }
  changeSlide(id){
    this.setState({id: id})
  }
  render(){
    console.log(this.state.books[this.state.id])
    if(this.state.isLoading === true) { return(<div style={{marginTop: '-180px',width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className={loading.loader}></div></div>)}
    return (
        <div className={classes.Container}>
        <div className={classes.Buttons}>
              <span className={classes.left} onClick={()=>this.narrowLeft()}>←</span>
              <span className={classes.right} onClick={()=>this.narrowRight()}>→</span>
        </div>
        <div>
      
        <div className={classes.Slider}>
            
           <div className={classes.Cover}>

            <Link to={`/sample/${this.state.books[this.state.id].id}`}><img className={this.state.opacity ? `${classes.opacity} ${classes.Slide}` : `${classes.Slide}`} src={ !this.state.url ? null : base64Flag + this.state.url }/>
              <div className={classes.upTitle}><p className={classes.title}>{this.state.books.length == 0 ? null : this.state.books[this.state.id].title}</p></div>
            </Link>
            <div className={classes.upPanel}> <div className={classes.panel}> {this.state.books.map((book,index)=> <span className={ this.state.panel[index] === false ? `${classes.changeSlideCircle}` : `${classes.changeSlideCircle} ${classes.activeCircle}` } onClick={()=>this.changeSlide(index)}>○</span>)} </div></div>
           </div>
        </div>
      </div>
      </div>
    )
  }
}


export default Books