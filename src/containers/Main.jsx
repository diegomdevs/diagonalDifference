import React from 'react';

const Main = () => {
    return (
        <main>
            <form action="submit">
                <label for="">Enter the numbers of the first row: </label>
                <input type="text" placeholder="1, 2, 3" id="firstRow" />
                <label for="">Enter the numbers of the second row: </label>
                <input type="text" placeholder="1, 2, 3" id="secondRow" />
                <label for="">Enter the numbers of the third row: </label>
                <input type="text" placeholder="1, 2, 3" id="thirdRow" />
                <button onclick="" type="button" id="submit">Submit</button>
                <section>
                    <h1 id="result"></h1>
                </section>
            </form>
        </main>
    );
};

export default Main;
