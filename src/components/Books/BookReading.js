//do przerobienia, kod z PoemReading
// import React,{Component} from 'react'
// import {getUser} from '../../services/auth'
// import {adresse} from '../../config'
// import classes from '../../styles/mypoems.module.scss'
// import loading from '../../styles/app.module.scss'

// class BookReading extends Component {
//     state= {
//         isLoading: true,
//         id: null,
//         data: null
//     }
//     componentDidMount(){
//         let {id} = this.props.match.params
//         this.setState({
//             id: id
//         }, ()=>{
//             const url = `${adresse}poems/poem/${this.state.id}`
//             const headers = { 'Content-Type': 'application/json',
//                               'Authorization': 'Bearer ' + `${getUser().token}`
//         }
//         fetch(url, {
//           headers: headers
//         }).then(response=>
//           response.json()
//         ).then(data=>{
//         this.setState({data},()=>{
//             this.setState({isLoading: false})
//         })
//         })

//         }
//         )
//     }
//     render(){
//         console.log(this.state.data)
//         if(this.state.isLoading === true) { return(<div style={{marginTop: '-180px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className={loading.loader}></div></div>)}
//         return(
//             <div className={classes.ContainerReading}>
//                 <h2>{this.state.data.author}</h2>
//                 <h3>{this.state.data.title}</h3>
//                 <h4>{this.state.data.genre}</h4>
//                 <div>{this.state.data.categories.map((cat,index)=>(<h5 key={index}>{cat}</h5>))}</div>

//                 {
//                     this.state.data.poem.akapits.map((akapit,indAka)=>(
//                         <div className={classes.Akapit} key={indAka}>
//                         {  akapit.lines.map((line,index)=>(
//                             <p className={classes.Line} key={index}>{line}</p>
//                         ))

//                         }
//                         </div>
//                     ))
//             }
//               <h5>{this.state.data.year}</h5>
//               <p>{this.state.data.description}</p>
//             </div>
//         )
//     }
// }

// export default BookReading