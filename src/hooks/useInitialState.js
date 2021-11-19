import { useState } from "react";

const initialState = {
    matrix: [],
};
const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const setMatrix = (matrix) => {
        setState({
            matrix,
        });
    };

    return {
        state,
        setMatrix,
    };
};

export default useInitialState;
