import React from 'react';
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';
import BookTerm from '../BookTerm/bookTerm';

class Books extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size)
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container mt-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-auto"}>
                        <div className={"row mb-3"}>
                            <div className={"row"}>
                                <div className={"col-sm-12 col-md-12"}>
                                    <Link className={"btn btn-block btn-primary"} to={"/books/add"} >Add new book</Link>
                                </div>
                            </div>
                        </div>
                        <table className={"table table-dark table-striped"}>
                            <thead className={"thead-light"}>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                                <th scope={"col"}>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                                {books}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ReactPaginate pageClassName={"text-light ml-1 mr-1 page-item"}
                               containerClassName={"text-light m-4 justify-content-center pagination"}
                               previousLabel={"Back"}
                               nextLabel={"Next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me page-item"}
                               breakLinkClassName={'page-link'}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               activeClassName={"active"}
                               pageLinkClassName={'page-link'}
                               previousClassName={'page-item'}
                               previousLinkClassName={'page-link'}
                               nextClassName={'page-item'}
                               nextLinkClassName={'page-link'}
                />
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
            return this.props.books.map((term, index) => {
            return (
                <BookTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
            })
    }

}

export default Books;