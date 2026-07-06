const backRankBlack = ["♜","♞","♝","♛","♚","♝","♞","♜"];
const backRankWhite = ["♖","♘","♗","♕","♔","♗","♘","♖"];
const pawnBlack = "♟";
const pawnWhite = "♙";
const chessBoard = document.querySelector("#board");

const cells = Array.from({length: 64}, (_, i) => {
    const p = document.createElement("p");
    p.classList.add("cell");
    p.dataset.index = i;
    return p;
});

chessBoard.append(...cells);

cells.forEach((p, i) => p.classList.add((Math.floor(i / 8) + i) % 2 ? "dark" : "light"));

cells.forEach(p => Number(p.dataset.index) >= 0 && Number(p.dataset.index) < 8 && (p.textContent = backRankBlack[p.dataset.index-0]));
cells.forEach(p => Number(p.dataset.index) >= 8 && Number(p.dataset.index) < 16 && (p.textContent = pawnBlack));
cells.forEach(p => Number(p.dataset.index) >= 48 && Number(p.dataset.index) < 56 && (p.textContent = pawnWhite));
cells.forEach(p => Number(p.dataset.index) >= 56 && Number(p.dataset.index) < 64 && (p.textContent = backRankWhite[p.dataset.index-56]));