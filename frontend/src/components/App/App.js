import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Books from '../Books/BookList/books'
import Categories from '../Categories/CategoriesList/categories'
import LibraryService from '../../repository/libraryRepository'
import BookAdd from '../Books/BookAdd/bookAdd';
import BookEdit from '../Books/BookEdit/bookEdit';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {}
    }
  }

  render(){
    return(
      <Router>
        <Header />
        <main>
          <div className={"container"}>
            <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>} />
            <Route path={"/books/add"} exact render={() => <BookAdd categories={this.state.categories} authors={this.state.authors} onAddBook={this.addBook}/>} />
            <Route path={"/books/edit/:id"} exact render={() => <BookEdit categories={this.state.categories} authors={this.state.authors} onEditBook={this.editBook} book={this.state.selectedBook} />} />
            <Route path={["/", "/books"]} exact render={() => <Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} />}/>
            <Redirect to={"/"} />
          </div>
        </main>
        <div className={"mb-5"}>
        </div>
        <Footer />
      </Router>
    );
  }

  componentDidMount(){
      this.loadBooks();
      this.loadCategories();
      this.loadAuthors();
  }

  loadBooks = () => {
    LibraryService.fetchBooks()
      .then((data) => {
       this.setState({
         books: data.data
       })
     })
  }

  loadCategories = () => {
    LibraryService.fetchCategories()
      .then((data) => {
        this.setState({
         categories: data.data
        })
     })
  }

  loadAuthors = () => {
    LibraryService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        })
      })
  }

  deleteBook = (id) => {
    LibraryService.deleteBook(id)
      .then(() => {
        this.loadBooks();
      })
  }

  addBook = (name, category, author, availableCopies) => {
    LibraryService.addBook(name, category, author, availableCopies)
      .then(() => {
        this.loadBooks();
      })
  }

  getBook = (id) => {
    LibraryService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  editBook = (id, name, category, author, availableCopies) => {
    LibraryService.editBook(id, name, category, author, availableCopies)
      .then(() => {
        this.loadBooks()
      })
  }

}

export default App;
