function openCase() {
  const items = [
    'P2000 | Amber Fade',
    'Glock-18 | Candy Apple',
    'AK-47 | Blue Laminate',
    'AWP | Pit Viper',
    'M4A1-S | Bright Water',
    'Desert Eagle | Crimson Web',
    'USP-S | Torque',
    'MAC-10 | Candy Apple',
    'UMP-45 | Corporal',
    'P90 | Death by Kitty',
    'Sawed-Off | The Kraken',
    'M249 | System Lock',
    'Galil AR | Chatterbox',
    'Nova | Antique',
    'XM1014 | Blue Steel',
    'Negev | Terrain',
    'SSG 08 | Blue Spruce',
    'Dual Berettas | Stained',
    'Tec-9 | Brass',
    'P250 | Steel Disruption',
    'Five-SeveN | Urban Hazard',
    'CZ75-Auto | The Fuschia Is Now',
    'MP9 | Deadly Poison',
    'MP7 | Army Recon',
    'SG 553 | Ultraviolet',
    'AUG | Wings',
    'FAMAS | Spitfire',
    'SCAR-20 | Contractor',
    'G3SG1 | Desert Storm',
    'PP-Bizon | Osiris'
  ];
  
  const randomItem = items[Math.floor(Math.random() * items.length)];
  
  document.getElementById('resultText').textContent = `You got: ${randomItem}!`;
}
