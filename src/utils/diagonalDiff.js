function handleClick() {
    const diagonalDifference = (arr) => {
        const firstDiagonal = arr.map((row, index) => row[index]).reduce((acc, curr) => acc + curr, 0);
        const secondDiagonal = arr.map((row, index) => row[row.length - 1 - index]).reduce((acc, curr) => acc + curr, 0); 
        return Math.abs(firstDiagonal - secondDiagonal); 
    };
    const firstRow = document.getElementById("firstRow").value.split(",").map(Number);
    const secondRow = document.getElementById("secondRow").value.split(",").map(Number);
    const thirdRow = document.getElementById("thirdRow").value.split(",").map(Number); 
    const matrix = [
        firstRow,
        secondRow,
        thirdRow,
    ];
    document.getElementById("result").innerText = diagonalDifference(matrix);
};
