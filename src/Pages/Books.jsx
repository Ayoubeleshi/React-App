import React from "react";
import Book from "../compontenst/ui/Book";
import { books } from "../data";




const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks (filter) {
        console.log(filter)
        if (filter === 'LOW_TO_HIGH') {
            books.sort((a,b) => (a.salesPrice || a.orginalPrice) - (b.salesPrice || a.orginalPrice))
        }
    }
§
  return (

        <div id="books__body">
            <main id=" books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books--title">All</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks}>
                                    <option value="DEFAULT" selected disabled>sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                { books.map((book) =>(
                                        <Books book={book} key={book.id} />
                                    )) }

                            </div>
                        </div>
                    </div>
                </section>

            </main>

           
        </div>
    
   

  );
};

export default Books;