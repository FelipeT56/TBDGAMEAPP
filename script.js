let turnNumber = 1;
let health = 0;
let armor = 0;
let mana = 0;

// Elements
const turnDisplay = document.getElementById('turnNumber');
const healthDisplay = document.getElementById('health');
const armorDisplay = document.getElementById('armor');
const manaDisplay = document.getElementById('manaDisplay');
const setHealthButton = document.getElementById('setHealth');
const nextTurnButton = document.getElementById('nextTurn');
const addArmorButton = document.getElementById('addArmor');
const removeArmorButton = document.getElementById('removeArmor');
const manaButtons = document.querySelectorAll('.mana-btn');
const addTemporaryManaButton = document.getElementById('addTemporaryMana');

// Set initial health
setHealthButton.addEventListener('click', () => {
    const initialHealth = document.getElementById('initialHealth').value;
    health = parseInt(initialHealth) || 0;
    healthDisplay.textContent = health;
});

// Increment turn
nextTurnButton.addEventListener('click', () => {
    turnNumber++;
    mana += turnNumber;
    turnDisplay.textContent = turnNumber;
    manaDisplay.textContent = mana;
});

// Add or remove armor
addArmorButton.addEventListener('click', () => {
    armor++;
    armorDisplay.textContent = armor;
});

removeArmorButton.addEventListener('click', () => {
    if (armor > 0) armor--;
    armorDisplay.textContent = armor;
});

// Add mana by color
manaButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.mana;
        alert(`Added ${color} mana!`);
    });
});

// Add temporary mana
addTemporaryManaButton.addEventListener('click', () => {
    alert('Temporary mana added for this turn!');
});
