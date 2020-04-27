import React, { createContext, useState, useEffect } from 'react'


const defaultState = {
  light: false,
  bookId: null,
  animate: false
}

export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const [bookId, setBookId] = useState(null);
  const [animate, setAnimate] = useState(false)
  return (
    <ThemeContext.Provider value={{ light, setLight, bookId, setBookId, animate, setAnimate }}>
      {children}
    </ThemeContext.Provider>
  );
}

