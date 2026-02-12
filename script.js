const locations = [
  {
    brand: "Benjamin Moore",
    name: "Jinhua, China",
    address: "Jinhua, Zhejiang, China",
    coords: [29.0789, 119.6474],
  },
  {
    brand: "Benjamin Moore",
    name: "Zhejiang, China",
    address: "Zhejiang, China",
    coords: [30.2741, 120.1551],
  },
  {
    brand: "Benjamin Moore",
    name: "Zhuhai, China",
    address: "Zhuhai, Guangdong, China",
    coords: [22.2707, 113.5767],
  },
  {
    brand: "Benjamin Moore",
    name: "Dededo, Guam",
    address: "Dededo, Guam",
    coords: [13.517, 144.839],
  },
  {
    brand: "Benjamin Moore",
    name: "Muntinlupa City, Philippines",
    address:
      "201 Sycamore Prime Building, Alabang-Zapote Road, Barangay Cupang, Muntinlupa City",
    coords: [14.427, 121.026],
  },
  {
    brand: "Benjamin Moore",
    name: "Taipei, Taiwan",
    address:
      "No. 39, Lane 128, Jingye 1st Rd., Zhongshan District, Taipei City, Taiwan 104",
    coords: [25.0595, 121.542],
  },
  {
    brand: "Benjamin Moore",
    name: "Seoul, South Korea",
    address: "Gangnam-gu, Seoul, South Korea",
    coords: [37.5172, 127.0473],
  },
  {
    brand: "Benjamin Moore",
    name: "Tokyo, Japan",
    address: "B.M. JAPAN CORP., Minami-aoyama, Minato-ku, Tokyo",
    coords: [35.6628, 139.7123],
  },
  {
    brand: "Benjamin Moore",
    name: "Singapore (Midview City)",
    address: "24 Sin Ming Lane, #01-95, Midview City, Singapore 573970",
    coords: [1.3587, 103.8368],
  },
  {
    brand: "Benjamin Moore",
    name: "Singapore (Joo Chiat)",
    address: "98 Joo Chiat Road, #01-01, Singapore 427392",
    coords: [1.3111, 103.9],
  },
  {
    brand: "Benjamin Moore",
    name: "Bangkok, Thailand",
    address:
      "410/3 Sukhumvit Soi 68, Bang Na Nuea Subdistrict, Bang Na District, Bangkok, 10260",
    coords: [13.6667, 100.6045],
  },
  {
    brand: "Benjamin Moore",
    name: "Tashkent, Uzbekistan",
    address: "St. Shota Rustaveli 43, 100000, Tashkent",
    coords: [41.3112, 69.2797],
  },
  {
    brand: "Benjamin Moore",
    name: "Ho Chi Minh City, Vietnam",
    address: "Ho Chi Minh City, Vietnam",
    coords: [10.8231, 106.6297],
  },
  {
    brand: "Benjamin Moore",
    name: "Hanoi, Vietnam",
    address: "Hanoi, Vietnam",
    coords: [21.0278, 105.8342],
  },
  {
    brand: "Benjamin Moore",
    name: "St. John's, Antigua and Barbuda",
    address: "BLUE WATERS MAIN RD, ST. JOHN'S, 00200",
    coords: [17.121, -61.8456],
  },
  {
    brand: "Benjamin Moore",
    name: "St. John's (Old Parham Rd)",
    address: "OLD PARHAM RD, ST. JOHN'S, 99999",
    coords: [17.121, -61.8456],
  },
  {
    brand: "Benjamin Moore",
    name: "Oranjestad, Aruba",
    address: "Oranjestad, Aruba",
    coords: [12.5092, -70.0086],
  },
  {
    brand: "Benjamin Moore",
    name: "Freeport, Bahamas",
    address: "Freeport, Bahamas",
    coords: [26.5333, -78.7],
  },
  {
    brand: "Benjamin Moore",
    name: "Nassau, Bahamas",
    address: "Nassau, Bahamas",
    coords: [25.0479, -77.3554],
  },
  {
    brand: "Benjamin Moore",
    name: "Bridgetown, Barbados",
    address: "Bridgetown, Barbados",
    coords: [13.0975, -59.6165],
  },
  {
    brand: "Benjamin Moore",
    name: "St. Michael, Barbados",
    address: "St. Michael, Barbados",
    coords: [13.1132, -59.5988],
  },
  {
    brand: "Benjamin Moore",
    name: "Pembroke, Bermuda (Bakery Lane)",
    address: "17 BAKERY LANE, PEMBROKE, HM 07",
    coords: [32.2925, -64.774],
  },
  {
    brand: "Benjamin Moore",
    name: "Pembroke, Bermuda (St Johns Road)",
    address: "67 ST JOHNS ROAD, PEMBROKE, HM 07",
    coords: [32.2925, -64.774],
  },
  {
    brand: "Benjamin Moore",
    name: "Kralendijk, Bonaire",
    address: "Kaya Korona 11, Kralendijk, Bonaire",
    coords: [12.1507, -68.2763],
  },
  {
    brand: "Benjamin Moore",
    name: "Curacao",
    address: "Curacao, 99999",
    coords: [12.1696, -68.99],
  },
  {
    brand: "Benjamin Moore",
    name: "Santo Domingo, Dominican Republic",
    address: "Santo Domingo, DR",
    coords: [18.4861, -69.9312],
  },
  {
    brand: "Benjamin Moore",
    name: "George Town, Grand Cayman",
    address: "George Town, Grand Cayman",
    coords: [19.2866, -81.3671],
  },
  {
    brand: "Benjamin Moore",
    name: "Petion-Ville, Haiti",
    address: "Petion-Ville, Haiti",
    coords: [18.5128, -72.2852],
  },
  {
    brand: "Benjamin Moore",
    name: "Kingston, Jamaica",
    address: "51 UPPER WATERLOO RD, KINGSTON, 99999",
    coords: [17.9712, -76.7936],
  },
  {
    brand: "Benjamin Moore",
    name: "Aguadilla, Puerto Rico",
    address: "CARR. 107 KM 2.7 BARRIO BORINQUEN, AGUADILLA, 00603",
    coords: [18.4274, -67.1541],
  },
  {
    brand: "Benjamin Moore",
    name: "Caguas, Puerto Rico (Ave. Angora)",
    address: "CARR #1 KM 33.3 AVE. ANGORA, CAGUAS, 00725",
    coords: [18.2341, -66.0485],
  },
  {
    brand: "Benjamin Moore",
    name: "Guaynabo, Puerto Rico",
    address: "ACURELA ST, GUAYNABO, 00969",
    coords: [18.3575, -66.111],
  },
  {
    brand: "Benjamin Moore",
    name: "Hato Rey, Puerto Rico",
    address: "231 AVENIDA ROOSEVELT, HATO REY, 00918-2419",
    coords: [18.423, -66.0659],
  },
  {
    brand: "Benjamin Moore",
    name: "Caguas, Puerto Rico (Barrio Bairoa)",
    address: "6B CARR #1 KM 33.3, MARGINAL BARRIO BAIROA, CAGUAS, 00725",
    coords: [18.2341, -66.0485],
  },
  {
    brand: "Benjamin Moore",
    name: "St Kitts/Nevis",
    address: "St Kitts/Nevis",
    coords: [17.3578, -62.783],
  },
  {
    brand: "Benjamin Moore",
    name: "Gros Islet, St Lucia",
    address: "MASSADE INDUSTRIAL ZONE, GROS ISLET ST LUCIA, 99999",
    coords: [14.0845, -60.9457],
  },
  {
    brand: "Benjamin Moore",
    name: "Vieux Fort, St Lucia",
    address: "B2F/B2B BEANFIELD INDUSTRIAL EST, VIEUX FORT P.O, LC12 201",
    coords: [13.7167, -60.95],
  },
  {
    brand: "Benjamin Moore",
    name: "St Maarten",
    address: "A.J.C. BROUWERS ROAD 23, ST MAARTEN, 9999 ST",
    coords: [18.0425, -63.0548],
  },
  {
    brand: "Benjamin Moore",
    name: "Christiansted, St Croix",
    address: "86A CASTLE COAKLEY, CHRISTIANSTED, 00820-5693",
    coords: [17.7466, -64.7032],
  },
  {
    brand: "Benjamin Moore",
    name: "St Thomas, US Virgin Islands",
    address: "AL COHEN'S PLAZA RTE 38, ST THOMAS, 00820",
    coords: [18.3358, -64.8963],
  },
  {
    brand: "Benjamin Moore",
    name: "Road Town, Tortola",
    address: "701 ROADTOWN, TORTOLA, 00820",
    coords: [18.4286, -64.6185],
  },
  {
    brand: "Benjamin Moore",
    name: "Trinidad",
    address: "42 CARLTON AVE, TRINIDAD, 99999",
    coords: [10.6918, -61.2225],
  },
  {
    brand: "Benjamin Moore",
    name: "Providenciales, Turks and Caicos",
    address: "1115 LEEWARD HIGHWAY, PROVIDENCIALES, 99999",
    coords: [21.7737, -72.265],
  },
  {
    brand: "Benjamin Moore",
    name: "Novaki, Croatia",
    address: "ZAGREBACKA 13A, NOVAKI, 10431",
    coords: [45.776, 15.85],
  },
  {
    brand: "Benjamin Moore",
    name: "Paris, France (Haussmann)",
    address: "126 Boulevard Haussmann Paris",
    coords: [48.8734, 2.3297],
  },
  {
    brand: "Benjamin Moore",
    name: "Paris, France (Riquier)",
    address: "8 Boulevard de Riquier Paris",
    coords: [48.8541, 2.379],
  },
  {
    brand: "Benjamin Moore",
    name: "Nanterre, France",
    address: "Nanterre France",
    coords: [48.8924, 2.206],
  },
  {
    brand: "Benjamin Moore",
    name: "Chatillon d'Azergues, France",
    address: "Chatillon d'Azergues France",
    coords: [45.864, 4.646],
  },
  {
    brand: "Benjamin Moore",
    name: "Athens, Greece",
    address: "12km Nat. Road Athens-Lamie",
    coords: [38.0, 23.73],
  },
  {
    brand: "Benjamin Moore",
    name: "Chalkida, Greece",
    address: "18 Zerva Napoleontos Street, Chalkida Greece",
    coords: [38.463, 23.598],
  },
  {
    brand: "Benjamin Moore",
    name: "Arta, Greece",
    address: "Arta Greece",
    coords: [39.1606, 20.985],
  },
  {
    brand: "Benjamin Moore",
    name: "Budapest, Hungary",
    address: "AR PAD UT 44-46, BUDAPEST, 1042",
    coords: [47.559, 19.082],
  },
  {
    brand: "Benjamin Moore",
    name: "Kopavogur, Iceland",
    address: "AUDBREKKA 20, 200 KOPAVOGUR",
    coords: [64.112, -21.912],
  },
  {
    brand: "Benjamin Moore",
    name: "Gardabaer, Iceland",
    address: "GARDABAER",
    coords: [64.089, -21.922],
  },
  {
    brand: "Benjamin Moore",
    name: "Dublin 8, Ireland",
    address: "12-13 CORNMARKET, DUBLIN 8, D08 P520",
    coords: [53.337, -6.284],
  },
  {
    brand: "Benjamin Moore",
    name: "Monaghan, Ireland",
    address: "DUBLIN RD, LATHIORCAN, MONAGAHAN, H18",
    coords: [54.249, -6.968],
  },
  {
    brand: "Benjamin Moore",
    name: "Petah Tikva, Israel",
    address: "18 EFAL, PETASCH TIKVA, 4951125",
    coords: [32.087, 34.889],
  },
  {
    brand: "Benjamin Moore",
    name: "Saronno, Italy",
    address: "Via San Giuseppe 100, Saronno (MI) 21047",
    coords: [45.627, 9.035],
  },
  {
    brand: "Benjamin Moore",
    name: "Pisa, Italy",
    address: "Pisa Italy",
    coords: [43.7228, 10.4017],
  },
  {
    brand: "Benjamin Moore",
    name: "Vilnius, Lithuania",
    address: "SAVANORIU PR 22, VILNIUS, 03116",
    coords: [54.6872, 25.2797],
  },
  {
    brand: "Benjamin Moore",
    name: "Mosta, Malta",
    address: "GRECH & ELLUL, VJAL IL QALBIENA MOS, MALTA, MST1243",
    coords: [35.914, 14.425],
  },
  {
    brand: "Benjamin Moore",
    name: "Warsaw, Poland",
    address: "Warsaw Poland",
    coords: [52.2297, 21.0122],
  },
  {
    brand: "Benjamin Moore",
    name: "Wroclaw, Poland",
    address: "Wroclaw Poland",
    coords: [51.1079, 17.0385],
  },
  {
    brand: "Benjamin Moore",
    name: "Marbella, Spain",
    address: "CALLE DUBLIN 21, MARBELLA, 29 29670",
    coords: [36.5101, -4.8825],
  },
  {
    brand: "Benjamin Moore",
    name: "Timisoara, Romania",
    address: "BUJORILOR STREET NR 70, TIMISOARA, 300462",
    coords: [45.7489, 21.2087],
  },
  {
    brand: "Benjamin Moore",
    name: "Kyiv, Ukraine",
    address: "VOZDVIZHENSKAYA, 3, OFC 1, KIEV, M_K 04071",
    coords: [50.4501, 30.5234],
  },
  {
    brand: "Benjamin Moore",
    name: "Dubai, UAE",
    address: "Dubai UAE",
    coords: [25.2048, 55.2708],
  },
  {
    brand: "Benjamin Moore",
    name: "Yas Island, Abu Dhabi, UAE",
    address: "Yas Island Abu Dhabi UAE",
    coords: [24.4881, 54.6118],
  },
  {
    brand: "Benjamin Moore",
    name: "Sheikh Zayed Road, Dubai",
    address: "Sheikh Zayed Road",
    coords: [25.197, 55.273],
  },
  {
    brand: "Benjamin Moore",
    name: "Slough, United Kingdom",
    address: "804 Oxford Avenue, SL1 4LN",
    coords: [51.51, -0.595],
  },
  {
    brand: "Benjamin Moore",
    name: "London, United Kingdom (Chelsea Wharf)",
    address: "Chelsea Wharf, Lots Road, SW10 0QJ",
    coords: [51.4767, -0.1835],
  },
  {
    brand: "Benjamin Moore",
    name: "Belize City, Belize",
    address: "38 REGENT ST, BELIZE CITY, 99999",
    coords: [17.5046, -88.1962],
  },
  {
    brand: "Benjamin Moore",
    name: "Las Condes, Chile",
    address: "AVENIDA LAS CONDES 9765, L002, LAS CONDES, 13 7550000",
    coords: [-33.4087, -70.569],
  },
  {
    brand: "Benjamin Moore",
    name: "Temuco, Chile",
    address: "AVENIDA PABLO NERUDA 2430, TEMUCO, 4780000",
    coords: [-38.7359, -72.5904],
  },
  {
    brand: "Benjamin Moore",
    name: "Bogota, Colombia (Carrera 24)",
    address: "CARRERA 24 #87-25, LOCAL 2, BOGOTA DC",
    coords: [4.711, -74.0721],
  },
  {
    brand: "Benjamin Moore",
    name: "Bogota, Colombia (Carrera 27)",
    address: "CARRERA 27 78 91, BOGOTA, D.C., 11 111211",
    coords: [4.711, -74.0721],
  },
  {
    brand: "Benjamin Moore",
    name: "Quetzaltenango, Guatemala",
    address: "3 CALLE 0-15A ZONA 9, QUETZALTENANGO, 00000",
    coords: [14.8333, -91.5167],
  },
  {
    brand: "Benjamin Moore",
    name: "Georgetown, Guyana",
    address: "30 ANIRA STREET, QUEENSTOWN GEORGETOWN, GUYANA, 413741",
    coords: [6.8013, -58.1551],
  },
  {
    brand: "Benjamin Moore",
    name: "San Pedro Sula, Honduras",
    address: "16 BO LOS ANDES, 2DA CALLE Y EDIFICIO FIREN, SAN PEDRO SULA, CT1100",
    coords: [15.5042, -88.024],
  },
  {
    brand: "Benjamin Moore",
    name: "Mexico City, Mexico",
    address: "Mexico City Mexico",
    coords: [19.4326, -99.1332],
  },
  {
    brand: "Benjamin Moore",
    name: "Los Cabos, Mexico",
    address: "Los Cabos Mexico",
    coords: [22.8905, -109.9167],
  },
  {
    brand: "Benjamin Moore",
    name: "Guadalajara, Mexico",
    address: "Guadalajara Mexico",
    coords: [20.6597, -103.3496],
  },
  {
    brand: "Benjamin Moore",
    name: "Puerto Vallarta, Mexico",
    address: "Puerto Vallarta Mexico",
    coords: [20.6534, -105.2253],
  },
  {
    brand: "Benjamin Moore",
    name: "Panama City, Panama (Costa del Este)",
    address: "PZ COSTA DEL ESTE, STAR, CIUDAD DE PANAMA, 0801",
    coords: [9.0087, -79.478],
  },
  {
    brand: "Benjamin Moore",
    name: "Panama City, Panama (Via Espana)",
    address:
      "C 56, AVE ABEL BRAVO VIA ESPANA EDIFICIA CROMA, CIUDAD DE PANAMA, 0801",
    coords: [8.9867, -79.5197],
  },
  {
    brand: "Benjamin Moore",
    name: "Paramaribo, Suriname",
    address: "TOURTONNELAAN 120, PARAMARIBO, 00000",
    coords: [5.852, -55.2038],
  },
];


const map = L.map("map", {
  worldCopyJump: true,
  minZoom: 2,
}).setView([20, 0], 2.2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const brandColors = {
  "Benjamin Moore": {
    fill: "#c62828",
    stroke: "#9b1c1c",
  },
  BEHR: {
    fill: "#f4b400",
    stroke: "#b38700",
  },
};

const listElement = document.getElementById("location-list");
const markers = new Map();


locations.forEach((location) => {
  const brandStyle = brandColors[location.brand] || brandColors["Benjamin Moore"];
  const marker = L.circleMarker(location.coords, {
    radius: 7,
    fillColor: brandStyle.fill,
    color: brandStyle.stroke,
    weight: 2,
    opacity: 1,
    fillOpacity: 0.9,
  })
    .addTo(map)
    .bindPopup(
      `<strong>${location.name}</strong><br />${location.address}`,
      { closeButton: true }
    );

  markers.set(location.name, marker);

  if (location.list !== false) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = location.name;
    button.addEventListener("click", () => {
      map.setView(location.coords, 5, { animate: true });
      marker.openPopup();
    });

    item.appendChild(button);
    listElement.appendChild(item);
  }
});

