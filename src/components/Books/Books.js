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
  const state = useSelector(state => state.booksState);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(getAllBooks())}>+</button>
      {state.books.map(book => (
        <h1>{book.title}</h1>
      ))}
    </div>
  )

}
export default Books