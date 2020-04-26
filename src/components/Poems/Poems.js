import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adresse } from '../../config'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import SearchPoem from '../../_components/SearchPoem'
import axios from 'axios'
import { useStore, useActions } from '../../store/Store'
import { useDispatch, useSelectors } from 'react-redux'

const Poems = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [poems, setPoems] = useState([])
    const [poemNr, setPoemNr] = useState(0)
    const [opacity, setOpacity] = useState(false)
    const [panel, setPanel] = useState([false, false, false, false, false])
    const [showEmpty, setShowEmpty] = useState(false)

    const fetchPoems = async () => {
        const response = await axios.get(`${adresse}poems/all`)

        const shuffled = response.data.sort(() => 0.5 - Math.random())
        const shuffledFive = shuffled.slice(0, 5)
        setPoems(shuffledFive)
        // if (poemNr === 0) {
        //     console.log('start')
        //     setOpacity(true)
        // }
        if (shuffledFive.length > 0) {
            setIsLoading(false)
        }
        if (opacity === true) {
            setTimeout(function () { setOpacity(false) }, 300)
        }
    }


    useEffect(() => {
        fetchPoems()
    }, [poemNr])

    const change = () => {
        if (poemNr >= 3) {
            setTimeout(function () { setPoemNr(0) }, 1000)
            setOpacity(true)
        } else {
            setTimeout(function () { setPoemNr(poemNr + 1) }, 1000)
            setOpacity(true)
        }
    }
    console.log(poems)
    return (
        <div>

            <div className={classes.ContainerPoem}>
                <div>
                    <button className={classes.NewPoemBtn} onClick={opacity ? null : () => change()}>Przeglądaj dalej</button>
                    {
                        poems.length == 0 ? null : (
                            <div className={opacity !== true ? `${classes.Poem}` : `${classes.Poem} ${classes.Opacity}`}>
                                <Link to={`/poemReading/${poems[poemNr].id}`}>
                                    <h3>{poems[poemNr].title}</h3>
                                    <h4>{poems[poemNr].author}</h4>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
            <SearchPoem />
        </div>
    )
}

export default Poems