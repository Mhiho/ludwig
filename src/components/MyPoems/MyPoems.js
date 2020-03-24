import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {adresse} from '../../config'
import {getUser} from '../../services/auth'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'

class MyPoems extends Component {
    _isMounted = false;
    state={
        isLoading: true,
        poems: []
    }
        componentDidMount() {
            this._isMounted = true;
            const url = `${adresse}poems/mine`
            const headers = { 'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + `${getUser().token}`
            }
            fetch(url, {
                headers: headers
              })
            .then(response => response.json())
              .then(poems => {            
                this.setState({ poems: poems
                                },()=>{
                                    
                                        this.setState({isLoading: false})
                                    
                                })
     
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render(){
    
       
        if(this.state.isLoading === true) { return(<div style={{marginTop: '-180px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className={loading.loader}></div></div>)}
          return (
              <div className={classes.Frame}>

              <Link to="/addPoem"><h2>Dodaj nowy wiersz!</h2></Link>
              <div className={classes.Container}>
                
                <div>
                Kliknij na tytuł, żeby edytować:
                {this.state.poems.map((poem,index)=>(
                    <Link key={poem.id} className={classes.Item} to={`addBody/${poem.id}`}>
                    <div className={classes.MyPoem}>
                        <p><span>{index+1}. </span>{poem.title}</p>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
                </div>
        )
    }
}

export default MyPoems