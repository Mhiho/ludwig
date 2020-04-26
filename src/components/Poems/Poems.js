import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { adresse } from '../../config'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import SearchPoem from '../../_components/SearchPoem'
import axios from 'axios'
import { useStore, useActions } from '../../store/Store'
import { useDispatch, useSelector, useReducer } from 'react-redux'

const Poems = () => {

    const initPanel = [false, false, false, false, false]
    const [isLoading, setIsLoading] = useState(true)
    const [poems, setPoems] = useState([])
    const [poemNr, setPoemNr] = useState(0)
    const [opacity, setOpacity] = useState(false)
    const [panel, setPanel] = useState(initPanel)
    const [showEmpty, setShowEmpty] = useState(false)


    const fetchPoems = async () => {
        const response = await axios.get(`${adresse}poems/all`);

        setPoems(response.data);
    };
    useEffect(() => { fetchPoems(poems) }, [opacity]);
    const change = () => {
        if (poemNr >= 3) {
            setTimeout(function () { setPoemNr(0) }, 1000)
            this.setState({ opacity: true })
        } else {
            setTimeout(function () { setPoemNr(poemNr + 1) }, 1000)
            this.setState({ opacity: true })
        }
    }

    return (
        <div>

            <div className={classes.ContainerPoem}>
                <div>
                    <button className={classes.NewPoemBtn} onClick={opacity ? null : () => change}>Przeglądaj dalej</button>
                    {
                        poems !== undefined ? (
                            <div className={opacity !== true ? `${classes.Poem}` : `${classes.Poem} ${classes.Opacity}`}>
                                <Link to={`/poemReading/${poems[poemNr].id}`}>
                                    <h3>{poems[poemNr].title}</h3>
                                    <h4>{poems[poemNr].author}</h4>
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


export default Poems