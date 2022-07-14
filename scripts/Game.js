"use strict";

function Game() {
    let self = this;

    let fieldDOM = document.getElementById("field");
    let cellsDOM = document.getElementById("cells");
    let scoreDOM = document.getElementById("score");
    let livesDOM = document.getElementById("lives");

    let score;
    let lives;

    let fieldWidth = fieldDOM.getBoundingClientRect().width;
    let fieldHeight = fieldDOM.getBoundingClientRect().height;

    let cellSide;
    let cellBorder;
    let cellCountX;
    let cellCountY;
    let cellsPadding;

    let field = [];
    let snake = [];
    let food = [];

    let initialize = function () {
        score = 0;
        scoreDOM.innerText = score;

        lives = 3;
        for (let i = 0; i < lives; i++) {
            let lifeIcon = document.createElement("span");
            lifeIcon.innerText = "favorite";
            lifeIcon.className = "life full material-icons";
            livesDOM.append(lifeIcon);
        }

        createField(fieldWidth, fieldHeight);

    }

    let createField = function (width, height) {
        if (width >= 2540) {
            cellCountX = 40;
            cellsPadding = 16;
            cellBorder=3.2;
        } else if (width >= 1440) {
            cellCountX = 38;
            cellsPadding = 16;
            cellBorder=3.2;

        } else if (width >= 1024) {
            cellCountX = 36;
            cellsPadding = 16;
            cellBorder=3.2;

        } else if (width >= 768) {
            cellCountX = 32;
            cellsPadding = 16;
            cellBorder=3.2;

        } else {
            cellCountX = 28;
            cellsPadding = 16;
            cellBorder=3.2;

        }

        cellSide = Math.floor((width - cellsPadding * 2) / cellCountX);
        cellCountY = Math.floor((height - cellsPadding * 2) / cellSide);
        cellSide -=cellBorder*2;

        for (let y = 1; y <= cellCountY; y++) {
            let row = document.createElement("div");
            row.className = "row";

            for (let x = 1; x <= cellCountX; x++) {
                let cell = document.createElement("div");
                cell.style.width = `${cellSide}px`;
                cell.style.height = `${cellSide}px`;
                cell.className = "cell";
                cell.id = `${y}_${x}`;

                row.append(cell);
            }
            cellsDOM.append(row);
        }

    }

    initialize();
}

let game = new Game();