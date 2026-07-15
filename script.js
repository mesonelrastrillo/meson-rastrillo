
const dishes = [
  {
    "n": 1,
    "name": "Ensaladilla rusa",
    "cat": "raciones",
    "img": "01.png"
  },
  {
    "n": 2,
    "name": "Ensalada 3 mares",
    "cat": "raciones",
    "img": "02.png"
  },
  {
    "n": 3,
    "name": "Mejillones al vapor",
    "cat": "raciones",
    "img": "03.png"
  },
  {
    "n": 4,
    "name": "Mejillones a la vinagreta",
    "cat": "raciones",
    "img": "04.png"
  },
  {
    "n": 5,
    "name": "Mejillones a la marinera",
    "cat": "raciones",
    "img": "05-v2.png"
  },
  {
    "n": 6,
    "name": "Boquerones en vinagre",
    "cat": "raciones",
    "img": "06.png"
  },
  {
    "n": 7,
    "name": "Salpicón de pulpo y gambón",
    "cat": "raciones",
    "img": "07.png"
  },
  {
    "n": 8,
    "name": "Sepia sanglochada",
    "cat": "raciones",
    "img": "08.png"
  },
  {
    "n": 9,
    "name": "Sepia con tomate",
    "cat": "raciones",
    "img": "09.png"
  },
  {
    "n": 10,
    "name": "Sepia a la plancha",
    "cat": "raciones",
    "img": "10.png"
  },
  {
    "n": 11,
    "name": "Sepia frita",
    "cat": "raciones",
    "img": "11.png"
  },
  {
    "n": 12,
    "name": "Calamares a la romana",
    "cat": "raciones",
    "img": "12.png"
  },
  {
    "n": 13,
    "name": "Chopitos",
    "cat": "raciones",
    "img": "13.png"
  },
  {
    "n": 14,
    "name": "Chipirones en su salsa",
    "cat": "raciones",
    "img": "14.png"
  },
  {
    "n": 15,
    "name": "Púlpitos con tomate",
    "cat": "raciones",
    "img": "15.png"
  },
  {
    "n": 16,
    "name": "Pulpo con alcachofas",
    "cat": "raciones",
    "img": "16.png"
  },
  {
    "n": 17,
    "name": "Gambones al ajillo",
    "cat": "raciones",
    "img": "17.png"
  },
  {
    "n": 18,
    "name": "Gambas al ajillo",
    "cat": "raciones",
    "img": "18.png"
  },
  {
    "n": 19,
    "name": "Gambones en salsa con almejas",
    "cat": "raciones",
    "img": "19.png"
  },
  {
    "n": 20,
    "name": "Gambones salteados",
    "cat": "raciones",
    "img": "20.png"
  },
  {
    "n": 21,
    "name": "Almejas a la gallega",
    "cat": "raciones",
    "img": "21.png"
  },
  {
    "n": 22,
    "name": "Croquetas caseras",
    "cat": "raciones",
    "img": "22.png"
  },
  {
    "n": 23,
    "name": "Patatas bravas",
    "cat": "raciones",
    "img": "23.png"
  },
  {
    "n": 24,
    "name": "Patatas alioli",
    "cat": "raciones",
    "img": "24.png"
  },
  {
    "n": 25,
    "name": "Muslos de pollo campero",
    "cat": "raciones",
    "img": "25.png"
  },
  {
    "n": 26,
    "name": "Ternera gallega a la miel",
    "cat": "raciones",
    "img": "26.png"
  },
  {
    "n": 27,
    "name": "Magra con tomate",
    "cat": "raciones",
    "img": "27.png"
  },
  {
    "n": 28,
    "name": "Albóndigas caseras",
    "cat": "raciones",
    "img": "28.png"
  },
  {
    "n": 29,
    "name": "Carrillada",
    "cat": "raciones",
    "img": "29.png"
  },
  {
    "n": 30,
    "name": "Berenjena rellena de carne",
    "cat": "raciones",
    "img": "30.png"
  },
  {
    "n": 31,
    "name": "Pimiento relleno de carne y arroz",
    "cat": "raciones",
    "img": "31.png"
  },
  {
    "n": 32,
    "name": "Merluza fresca a la vasca",
    "cat": "raciones",
    "img": "32.png"
  },
  {
    "n": 33,
    "name": "Bacalao a la riojana",
    "cat": "raciones",
    "img": "33.png"
  },
  {
    "n": 34,
    "name": "Caracoles",
    "cat": "raciones",
    "img": "34.png"
  },
  {
    "n": 35,
    "name": "Codillo asado",
    "cat": "raciones",
    "img": "35.png"
  },
  {
    "n": 36,
    "name": "Conejo al ajillo",
    "cat": "raciones",
    "img": "36.png"
  },
  {
    "n": 37,
    "name": "Conejo con tomate",
    "cat": "raciones",
    "img": "37.png"
  },
  {
    "n": 38,
    "name": "Pulpo sanglochado",
    "cat": "raciones",
    "img": "38.png"
  },
  {
    "n": 39,
    "name": "Rabo de toro",
    "cat": "raciones",
    "img": "39.png"
  },
  {
    "n": 40,
    "name": "Sopa de mariscos",
    "cat": "sopas",
    "img": "40.png"
  },
  {
    "n": 41,
    "name": "Sopa de la casa",
    "cat": "sopas",
    "img": "41.png"
  },
  {
    "n": 42,
    "name": "Dorada",
    "cat": "pescados",
    "img": "42.png"
  },
  {
    "n": 43,
    "name": "Lubina",
    "cat": "pescados",
    "img": "43.png"
  },
  {
    "n": 44,
    "name": "Salmón a la brasa",
    "cat": "pescados",
    "img": "44.png"
  },
  {
    "n": 45,
    "name": "Merluza a la plancha",
    "cat": "pescados",
    "img": "45.png"
  },
  {
    "n": 46,
    "name": "Merluza fresca a la marinera",
    "cat": "pescados",
    "img": "46.png"
  },
  {
    "n": 47,
    "name": "Atún a la brasa",
    "cat": "pescados",
    "img": "47.png"
  },
  {
    "n": 48,
    "name": "Emperador a la brasa",
    "cat": "pescados",
    "img": "48.png"
  },
  {
    "n": 49,
    "name": "Zarzuela de marisco para dos",
    "cat": "pescados",
    "img": "49.png"
  },
  {
    "n": 50,
    "name": "Mariscada",
    "cat": "pescados",
    "img": "50.png"
  },
  {
    "n": 51,
    "name": "Gamba roja",
    "cat": "pescados",
    "img": "51.png"
  },
  {
    "n": 52,
    "name": "Zamburiñas",
    "cat": "pescados",
    "img": "52.png"
  },
  {
    "n": 53,
    "name": "Fritura de pescado",
    "cat": "pescados",
    "img": "53.png"
  },
  {
    "n": 54,
    "name": "Pulpo al horno",
    "cat": "pescados",
    "img": "54.png"
  },
  {
    "n": 55,
    "name": "Pulpo a la gallega",
    "cat": "pescados",
    "img": "55.png"
  },
  {
    "n": 56,
    "name": "Pulpo a la brasa",
    "cat": "pescados",
    "img": "56.png"
  },
  {
    "n": 57,
    "name": "Pechuga de pollo a la plancha",
    "cat": "combinados",
    "img": "57.png"
  },
  {
    "n": 58,
    "name": "Lomo de cerdo / castaño a la plancha",
    "cat": "combinados",
    "img": "58.png"
  },
  {
    "n": 59,
    "name": "Filete de ternera gallega o Angus",
    "cat": "combinados",
    "img": "59.png"
  },
  {
    "n": 60,
    "name": "Chuletón gallego o Angus",
    "cat": "carnes",
    "img": "60.png"
  },
  {
    "n": 61,
    "name": "Entrecot de vaca rubia gallega, mestiza o añojo",
    "cat": "carnes",
    "img": "61.png"
  },
  {
    "n": 62,
    "name": "Solomillo de vaca rubia gallega, mestiza, añojo o ternera rosada",
    "cat": "carnes",
    "img": "62.png"
  },
  {
    "n": 63,
    "name": "Parrillada de carnes",
    "cat": "carnes",
    "img": "63.png"
  },
  {
    "n": 64,
    "name": "Paella mixta",
    "cat": "arroces",
    "img": "64.png"
  },
  {
    "n": 65,
    "name": "Paella de mariscos",
    "cat": "arroces",
    "img": "65.png"
  },
  {
    "n": 66,
    "name": "Arroz con carabineros",
    "cat": "arroces",
    "img": "66.png"
  },
  {
    "n": 67,
    "name": "Arroz con bogavante",
    "cat": "arroces",
    "img": "67.png"
  },
  {
    "n": 68,
    "name": "Espaguetis a la boloñesa",
    "cat": "pastas",
    "img": "68.png"
  },
  {
    "n": 69,
    "name": "Tagliatella a la marinera",
    "cat": "pastas",
    "img": "69.png"
  },
  {
    "n": 70,
    "name": "Porción de tarta",
    "cat": "postres",
    "img": "70.png"
  },
  {
    "n": 71,
    "name": "Pan de Calatrava",
    "cat": "postres",
    "img": "71.png"
  },
  {
    "n": 72,
    "name": "Arroz con leche",
    "cat": "postres",
    "img": "72.png"
  },
  {
    "n": 73,
    "name": "Fresas con nata",
    "cat": "postres",
    "img": "73.png"
  },
  {
    "n": 74,
    "name": "Fruta de campaña",
    "cat": "postres",
    "img": "74.png"
  },
  {
    "n": 75,
    "name": "Tarrina de helado",
    "cat": "postres",
    "img": "75.png"
  },
  {
    "n": 76,
    "name": "Postres artesanales",
    "cat": "postres",
    "img": "76.png"
  }
];
const categoryNames = {"raciones": "Raciones", "sopas": "Sopas", "pescados": "Pescados y mariscos", "combinados": "Platos combinados", "carnes": "Carnes premium", "arroces": "Arroces al momento", "pastas": "Pastas", "postres": "Postres"};

const englishNames = {
  1: "Russian salad", 2: "Three-seas salad", 3: "Steamed mussels", 4: "Mussels with vinaigrette",
  5: "Mussels in marinara sauce", 6: "Marinated anchovies", 7: "Octopus and king prawn seafood salad",
  8: "Blanched cuttlefish", 9: "Cuttlefish in tomato sauce", 10: "Grilled cuttlefish",
  11: "Fried cuttlefish", 12: "Battered squid rings", 13: "Fried baby cuttlefish",
  14: "Baby squid in its own sauce", 15: "Baby octopus in tomato sauce", 16: "Octopus with artichokes",
  17: "King prawns with garlic", 18: "Garlic prawns", 19: "King prawns in sauce with clams",
  20: "Sauteed king prawns", 21: "Galician-style clams", 22: "Homemade croquettes",
  23: "Patatas bravas", 24: "Potatoes with aioli", 25: "Free-range chicken thighs",
  26: "Galician beef with honey", 27: "Lean pork in tomato sauce", 28: "Homemade meatballs",
  29: "Braised pork cheeks", 30: "Meat-stuffed aubergine", 31: "Pepper stuffed with meat and rice",
  32: "Fresh Basque-style hake", 33: "Rioja-style cod", 34: "Snails", 35: "Roast pork knuckle",
  36: "Rabbit with garlic", 37: "Rabbit in tomato sauce", 38: "Blanched octopus", 39: "Oxtail stew",
  40: "Seafood soup", 41: "House soup", 42: "Sea bream", 43: "Sea bass", 44: "Chargrilled salmon",
  45: "Grilled hake", 46: "Fresh hake in seafood sauce", 47: "Chargrilled tuna",
  48: "Chargrilled swordfish", 49: "Seafood zarzuela for two", 50: "Mixed seafood platter",
  51: "Mediterranean red prawn", 52: "Variegated scallops", 53: "Mixed fried fish",
  54: "Oven-roasted octopus", 55: "Galician-style octopus", 56: "Chargrilled octopus",
  57: "Grilled chicken breast", 58: "Grilled pork loin / chestnut-fed pork loin",
  59: "Galician beef or Angus steak", 60: "Galician or Angus T-bone steak",
  61: "Galician blond, crossbred or yearling beef entrecote",
  62: "Galician blond, crossbred, yearling or rose veal tenderloin", 63: "Mixed grilled meats",
  64: "Mixed paella", 65: "Seafood paella", 66: "Rice with scarlet prawns", 67: "Rice with lobster",
  68: "Spaghetti Bolognese", 69: "Seafood tagliatelle", 70: "Slice of cake",
  71: "Calatrava bread pudding", 72: "Rice pudding", 73: "Strawberries with cream",
  74: "Seasonal fruit", 75: "Tub of ice cream", 76: "Homemade desserts"
};

const grid = document.getElementById('platos');
const buttons = document.querySelectorAll('[data-filter]');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

function render(filter='all') {
  grid.innerHTML = '';
  dishes.filter(d => filter === 'all' || d.cat === filter).forEach(d => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      ${d.n === 59
        ? '<div class="photo-placeholder"><span>Fotografía pendiente</span><small>Photo coming soon</small></div>'
        : `<img src="imagenes-uniformes/${d.img}?v=20260714-7" alt="${d.name}" loading="lazy">`}
      <div class="card-body">
        <span class="number">Nº ${d.n}</span>
        <h3>${d.name}</h3>
        <div class="category-label">${categoryNames[d.cat]}</div>
      </div>`;
    card.addEventListener('click', () => {
      if (d.n === 59) return;
      modalImg.src = `imagenes-uniformes/${d.img}?v=20260714-7`;
      modalImg.alt = d.name;
      modalTitle.textContent = `Nº ${d.n} · ${d.name}`;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });
    grid.appendChild(card);
  });
}

buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
}));

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

render();
