import React from 'react'
import CategoriesTerm from '../CategoriesTerm/categoriesTerm';

const categories = (props) => {
    return (
        <div className={"container mt-5"}>
        <div className={"row"}>
            <div className={"col-auto"}>
                <table className={"table table-dark table-striped"}>
                    <thead className={"thead-light"}>
                        <tr>
                            <th scope={"col"}>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.categories.map((term) => {
                            return (
                                <CategoriesTerm term={term}/>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default categories;