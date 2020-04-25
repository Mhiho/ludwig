import React, { Component } from 'react';
import { adresse } from '../../config';
import classes from '../../styles/addBook.module.scss';
import { getUser } from '../../services/auth';
import { Redirect } from 'react-router-dom';

class AddBook extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    cat: [],
    genre: '',
    description: '',
    sample: '',
    public: true,
    redirect: false,
    id: ''
  };

  addBook = event => {
    const url = `${adresse}books/add`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + `${getUser().token}`
    };
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (!response.ok) {
          event.preventDefault();
        }
        return response.json();
      })
      .then(data => {
        this.setState({ redirect: true, id: data.id });
      });
  };

  addCat = event => {
    let array = [...this.state.cat];
    array = [...array, event.target.value];
    const ar = [...new Set(array)];
    this.setState({ cat: ar });
  };

  handleChangeGenre = event => {
    this.setState({ genre: event.target.value });
  };

  handleChangePublic = event => {
    event.target.value == 'true'
      ? this.setState({ public: true })
      : this.setState({ public: false });
  };

  deleteCategory(id) {
    let cat = this.state.cat;
    cat.splice(id, 1);
    this.setState({ cat });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/myBooks/${this.state.id}/addBookCover`} />;
    }
    return (
      <div>
        <h1>Dodaj książkę</h1>
        <form method='post' onSubmit={this.addBook}>
          <label>
            <span>Tytuł</span>
            <input
              name='title'
              type='text'
              onChange={event => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
          </label>
          <label>
            <span>Autor</span>
            <input
              name='author'
              type='text'
              onChange={event => this.setState({ author: event.target.value })}
              value={this.state.author}
            />
          </label>
          <label>
            <span>Rok powstania</span>
            <input
              name='year'
              type='text'
              onChange={event => this.setState({ year: event.target.value })}
              value={this.state.year}
            />
          </label>
          <label>
            <span>Streszczenie</span>
            <textarea
              name='description'
              onChange={event =>
                this.setState({ description: event.target.value })
              }
              value={this.state.description}
            />
          </label>
          <label>
            <span>Próbka tekstu</span>
            <textarea
              name='sample'
              onChange={event => this.setState({ sample: event.target.value })}
              value={this.state.sample}
            />
          </label>
          <label>
            <span>Gatunek</span>
            <select value={this.state.genre} onChange={this.handleChangeGenre}>
              <option value=''></option>
              <option value='kryminał'>Kryminał</option>
              <option value='powieść psychologiczna'>
                Powieść psychologiczna
              </option>
              <option value='powieść romantyczna'>Powieść romantyczna</option>
              <option value='powieść obyczajowa'>Powieść obyczajowa</option>
              <option value='eseje'>Eseje</option>
              <option value='thriller'>Thriller</option>
              <option value='powieść humorystyczna'>
                Powieść humorystycza
              </option>
              <option value='horror'>Horror</option>
              <option value='si-fi'>Si-Fi</option>
              <option value='fantastyka'>Fantastyka</option>
              <option value='literatura faktu'>Literatura faktu</option>
              <option value='dla dzieci i młodzieży'>
                Dla dzieci i młodzieży
              </option>
            </select>
          </label>
          <label>
            <span>Kategoria</span>
            <select
              multiple={true}
              value={this.state.cat}
              onChange={this.addCat}
            >
              <option value='czytadło'>czytadło</option>
              <option value='nowela'>nowela</option>
              <option value='borgesowska'>borgesowska</option>
              <option value='realizm magiczny'>realizm magiczny</option>
              <option value='opera mydlana'>opera mydlana</option>
              <option value='dekadencja'>dekadencja</option>
              <option value='romantyzm'>romantyzm</option>
              <option value='klasycznie'>klasycznie</option>
              <option value='cyberpunk'>cyberpunk</option>
              <option value='przy świecy'>przy świecy</option>
              <option value='kropla drąży skałę'>kropla drąży skałę</option>
              <option value='brutalna'>brutalna</option>
              <option value='abstrakcja'>abstrakcja</option>
              <option value='kości zostały rzucone'>
                kości zostały rzucone
              </option>
            </select>
          </label>
          <div className={classes.categoriesContainer}>
            {this.state.cat.map((category, index) => (
              <span className={classes.Category} key={index}>
                #{category}{' '}
                <strong onClick={() => this.deleteCategory(index)}>× </strong>{' '}
              </span>
            ))}
          </div>
          <label>
            <span>Ogólnodostępna?</span>
            <select
              value={this.state.public}
              onChange={this.handleChangePublic}
            >
              <option value='true'>Tak</option>
              <option value='false'>Nie</option>
            </select>
          </label>

          <input type='submit' value='Opublikuj' />
        </form>
      </div>
    );
  }
}
export default AddBook;
