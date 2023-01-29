
import React from "react";
import Book from "./UI/Book";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
    console.log(Book);
    console.log();

  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                    {Book
                    .filter((book) => book.rating === 5)
                    .slice(0, 4)
                    .map((book) => (

                        <Book book={book} key={book.id} />

                    ))}
                </div>
                
            </div>
        </div>
    </section>
    
   
  );
};

export default Featured;