import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useStore } from '../../store/ContextAPI'
import axios from "axios";
import { Link } from 'react-router-dom'
import { adresse } from '../../config'
import classes from '../../styles/books.module.scss'
import empty from '../../assets/images/empty.png'
import loading from '../../styles/app.module.scss'
import { getAllBooks } from '../../actions/BooksAction'

function Books() {

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])
  const stateBooks = useSelector(state => state.booksState);
  const stateReading = useSelector(state => state.booksReadingState)
  const dispatch = useDispatch();
  console.log(stateReading)
  return (
    <div>
      <button onClick={() => dispatch(getAllBooks())}>+</button>
      {stateBooks.books.map(book => (
        <div key={book.id}>
          <Link to={`${book.id}/reading/${0}`}><h1>{book.title}</h1></Link>
        </div>
      ))}
    </div>
  )

}
export default Books