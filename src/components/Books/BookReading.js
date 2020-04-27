//do przerobienia, kod z PoemReading
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../services/auth'
import { adresse } from '../../config'
import classes from '../../styles/mypoems.module.scss'
import loading from '../../styles/app.module.scss'
import axiosI from '../../axiosInstance'
import { fetchReadingBook } from '../../actions/BooksReadingAction'

const BookReading = () => {

    const state = useSelector(state => state.booksReadingState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReadingBook())
    }, [])
    // Obsługa wskaźnika postepu
    // reading: [
    //     {
    //         checkpointCh: {type: Number, default: 0},
    //         checkpointA: {type: Number, default: 0},
    //         bookId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: false,
    //         ref: "Book"},
    //     }
    // ]
    console.log('reading')
    return (
        <div className={classes.ContainerReading}>
            <h2>{state.data.author}</h2>
            <h3>{state.data.title}</h3>
            <h4>{state.data.genre}</h4>
            <div>{state.data.categories.map((cat, index) => (<h5 key={index}>{cat}</h5>))}</div>

            {
                state.data.poem.akapits.map((akapit, indAka) => (
                    <div className={classes.Akapit} key={indAka}>
                        {akapit.lines.map((line, index) => (
                            <p className={classes.Line} key={index}>{line}</p>
                        ))

                        }
                    </div>
                ))
            }
            <h5>{state.data.year}</h5>
            <p>{state.data.description}</p>
        </div>
    )
}


export default BookReading