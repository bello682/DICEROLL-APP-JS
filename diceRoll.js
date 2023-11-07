const buttonEl = document.getElementById("roll_button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll_history");

let historyList = [];

function rollDice() {
	const rollResults = Math.floor(Math.random() * 6) + 1;
	const diceFace = getDiceFace(rollResults);
	diceEl.innerHTML = diceFace;
	historyList.push(rollResults);
	updateRollHistory();
}

function updateRollHistory() {
	rollHistoryEl.innerHTML = "";
	for (let i = 0; i < historyList.length; i++) {
		const listItem = document.createElement("li");
		listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
			historyList[i]
		)}</span>`;
        rollHistoryEl.appendChild(listItem);
	}
}

function getDiceFace(rollResults) {
	// we could also us the if statement or switch statement.
	switch (rollResults) {
		case 1:
			return "&#9856;";
			break;

		case 2:
			return "&#9857;";
			break;

		case 3:
			return "&#9858;";
			break;

		case 4:
			return "&#9859;";
			break;

		case 5:
			return "&#9860;";
			break;

		case 6:
			return "&#9861;";

		default:
			return "";
			break;
	}
}

buttonEl.addEventListener("click", () => {
	diceEl.classList.add("roll-animation");
	setTimeout(() => {
		diceEl.classList.remove("roll-animation");
		rollDice();
	}, 1000);
});
