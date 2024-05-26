'use client'

import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";

const Movies = () => {
    const columns = [
        { title: "No.", field: "", formatter: "rownum"},
        { title: "Name", field: "name"},
        { title: "Release", field: "release", hozAlign: "center" },
        { title: "Director", field: "director", hozAlign: "left" },
        { title: "Category", field: "category", hozAlign: "left" },
        { title: "Rating", field: "rating", hozAlign: "center", formatter: "star"},
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

    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    );
};

export default Movies;
