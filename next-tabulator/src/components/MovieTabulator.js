'use client';

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { React15Tabulator } from "react-tabulator"; // for React 15.x

const columns = [
    { title: "Name", field: "name"},
    { title: "Release", field: "release", headerHozAlign: "center", hozAlign: "center" },
    { title: "Director", field: "director", hozAlign: "left" },
    { title: "Category", field: "category", hozAlign: "left" },
    { title: "Rating", field: "rating", headerHozAlign: "center", hozAlign: "center", formatter: "star"},
];

const data = [
    {
        name: "The Shawshank Redemption",
        release: 1994,
        director: "Frank Darabont",
        category: "Drama",
        rating: 4.9,
    },
    {
        name: "The Godfather",
        release: 1972,
        director: "Francis Ford Coppola",
        category: "Crime",
        rating: 4.9,
    },
    {
        name: "The Dark Knight",
        release: 2008,
        director: "Christopher Nolan",
        category: "Action",
        rating: 4.8,
    },
    {
        name: "The Lord of the Rings: The Return of the King",
        release: 2003,
        director: "Peter Jackson",
        category: "Fantasy",
        rating: 4.9,
    },
    {
        name: "Pulp Fiction",
        release: 1994,
        director: "Quentin Tarantino",
        category: "Crime",
        rating: 4.8,
    },
];

const MovieTabulator = () => {
    return (
        <React15Tabulator
          columns={columns}
          data={data}
          layout="fitColumns"
        />
    )
}

export default MovieTabulator;
