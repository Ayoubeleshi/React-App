import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const Book = ({ book }) => {


  return (
    <div className="book">
        <a href="">
            <figure className="book__img--wrapper">
                <img className="book__img" 
                      src={book.url}>
                </img>
            </figure>
        </a>
        <div className="book__title">
            <a href="/" className="book__title--link">
                {book.title}
            </a>
        </div>
        <div className="book__ratings">
            {
                new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={ index }/>)
            }
            {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half--alt" key={ index } />
            }
        </div>
        <div>
     
         
        
                
        </div>
    </div>

  );
};

export default Book;