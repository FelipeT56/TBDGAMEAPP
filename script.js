// Game Variables
let turnNumber = 1;
let health = 0;
let armor = 0;
let mana = {};
const manaTypes = ["black", "red", "blue", "white", "yellow", "purple", "colorless"];

// Elements
const turnDisplay = document.getElementById("turnNumber");
const healthDisplay = document.getElementById("health");
const armorDisplay = document.getElementById("armor");
const manaDisplay = document.getElementById("manaDisplay");
const nextTurnButton = document.getElementById("nextTurn");
const addArmorButton = document.getElementById("addArmor");
const removeArmorButton = document.getElementById("removeArmor");
const manaButtons = document.querySelectorAll(".mana-btn");

// Initialize Mana
manaTypes.forEach((type) => {
    mana[type] = 0;
});

// Helper Function to Update Mana Display
function updateManaDisplay() {
    let manaText = manaTypes
        .filter((type) => mana[type] > 0)
        .map((type) => `${type}: ${mana[type]}`)
        .join(", ");
    manaDisplay.textContent = manaText || "None";
}

// Set Initial Health
function askInitialHealth() {
    const initialHealth = prompt("Enter your initial health:");
    if (initialHealth !== null) {
        health = parseInt(initialHealth) || 0;
        healthDisplay.textContent = health;
    }
}

// Ask for Mana Choice
function askManaType(turnMana) {
    const chosenMana = prompt(
        `Turn ${turnNumber}: Choose one mana type (${manaTypes.join(", ")}):`
    );
    if (manaTypes.includes(chosenMana)) {
        mana[chosenMana] += turnMana;
        alert(`You gained ${turnMana} ${chosenMana} mana!`);
    } else {
        alert("Invalid mana type. No mana was added.");
    }
    updateManaDisplay();
}

// Increment Turn
nextTurnButton.addEventListener("click", () => {
    turnNumber++;
    turnDisplay.textContent = turnNumber;
    askManaType(turnNumber);
});

// Add Armor
addArmorButton.addEventListener("click", () => {
    armor++;
    armorDisplay.textContent = armor;
});

// Remove Armor
removeArmorButton.addEventListener("click", () => {
    if (armor > 0) armor--;
    armorDisplay.textContent = armor;
});

// Gain Specific Mana (Temporary or Extra)
manaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.dataset.mana;
        mana[color]++;
        updateManaDisplay();
        alert(`Added 1 ${color} mana!`);
    });
});

// Start the Game
askInitialHealth();
updateManaDisplay();
