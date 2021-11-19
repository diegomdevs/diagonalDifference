import React, { useRef, useContext } from 'react';
import AppContext  from '@context/AppContext';
import Result from '@components/Result'
import '@styles/Main.scss';

const Main = () => {
    const { state, setMatrix } = useContext(AppContext);
    const form = useRef(null);
    const handleSubmit = (e) => {
        const formData = new FormData(form.current);
		const data = {
			firstRow: formData.get('firstRow'),
			secondRow: formData.get('secondRow'),
            thirdRow: formData.get('thirdRow'),
		};
        setMatrix(data);
        console.log(data);
        
    };
    return (
        <main>
            <form ref={form} action="/">
                <label htmlFor="firstRow">Enter the numbers of the first row: </label>
                <input type="text" placeholder="1, 2, 3" name="firstRow" />
                <label htmlFor="secondRow">Enter the numbers of the second row: </label>
                <input type="text" placeholder="1, 2, 3" name="secondRow" />
                <label htmlFor="thirdRow">Enter the numbers of the third row: </label>
                <input type="text" placeholder="1, 2, 3" name="thirdRow" />
                <button type="button" onClick={() => handleSubmit()} id="submit">Submit</button>
                <Result />
            </form>
        </main>
    );
};

export default Main;
