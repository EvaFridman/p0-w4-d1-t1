const backRankBlack = ["♜","♞","♝","♛","♚","♝","♞","♜"];
const backRankWhite = ["♖","♘","♗","♕","♔","♗","♘","♖"];
const pawnBlack = "♟";
const pawnWhite = "♙";
const chessBoard = document.querySelector("#board");

const cells = Array.from({length: 64}, (v, i) => {
    const p = document.createElement("p");
    p.classList.add("cell");
    p.dataset.index = i;
    if ((p.dataset.index) % 2) {
        p.classList.add("light");
    } else {
        p.classList.add("dark");
    }
    return p;
});

chessBoard.append(...cells);