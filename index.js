const BACK_RANK_BLACK = ["♜","♞","♝","♛","♚","♝","♞","♜"];
const BACK_RANK_WHITE = ["♖","♘","♗","♕","♔","♗","♘","♖"];
const pawnBlack = "♟";
const pawnWhite = "♙";
const chessBoard = document.querySelector("#board");
const letterMarks = ["A","B","C","D","E","F","G","H"];
const numberMarks = [8,7,6,5,4,3,2,1];

const cells = Array.from({length: 64}, (_, i) => {
    const p = document.createElement("p");
    p.classList.add("cell");
    p.dataset.index = i;

    const row = Math.floor(i / 8);
    const col = i % 8;
    p.classList.add((row + col) % 2 === 0 ? "light" : "dark");

    if (i >= 0 && i < 8)   p.textContent = BACK_RANK_BLACK[i];
    if (i >= 8 && i < 16)  p.textContent = pawnBlack;
    if (i >= 48 && i < 56) p.textContent = pawnWhite;
    if (i >= 56 && i < 64) p.textContent = BACK_RANK_WHITE[i - 56];

    return p;
});

const wrapper = document.createElement("div");
wrapper.classList.add("chess-wrapper");
wrapper.append(chessBoard);

const createLetterRow = () => {
    const row = document.createElement("div");
    row.classList.add("letters-row");
    row.append(...letterMarks.map(char => {
    const span = document.createElement("span");
    span.textContent = char;
    return span;
    }));
    return row;
};

const createNumberCol = () => {
    const col = document.createElement("div");
    col.classList.add("numbers-col");
    col.append(...numberMarks.map(num => {
    const span = document.createElement("span");
    span.textContent = num;
    return span;
    }));
    return col;
};

function createChess() {
    
    wrapper.insertBefore(createNumberCol(), chessBoard);
    wrapper.append(createLetterRow());
    chessBoard.append(...cells);

    return wrapper;
};

document.body.append(createChess());