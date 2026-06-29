// ══════════════════════════════════════════════════════════
//  COUNTRIES 2026 WORLD CUP — 32 Selecciones y convocados
// ══════════════════════════════════════════════════════════

export const POSITIONS = {
  GK:  { label: 'Portero',         labelEn: 'Goalkeeper', color: '#FFD700' },
  DEF: { label: 'Defensa',         labelEn: 'Defender',   color: '#00D4FF' },
  MID: { label: 'Centrocampista',  labelEn: 'Midfielder', color: '#00C853' },
  FWD: { label: 'Delantero',       labelEn: 'Forward',    color: '#FF4444' },
};

function p(id, name, pos, num, rating) {
  return { id, name, position: pos, number: num, rating,
           goals: 0, assists: 0, saves: 0, yellowCards: 0, redCards: 0 };
}

export const COUNTRIES = [
 
// ── GRUPO A ────────────────────────────────────────────
  
  // 1. MÉXICO
  {
    id: 'MEX', name: 'México', nameEn: 'Mexico', flag: '🇲🇽', continent: 'CONCACAF',
    kitHome: { shirt: '#006847', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#006847' },
    coach: 'Javier Aguirre', rating: 4.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MEX_1','Luis Malagón','GK',1,82), p('MEX_12','Julio González','GK',12,79), p('MEX_23','Raúl Rangel','GK',23,78),
      p('MEX_2','Jorge Sánchez','DEF',2,80), p('MEX_3','César Montes','DEF',3,82), p('MEX_4','Edson Álvarez','MID',4,85),
      p('MEX_5','Johan Vásquez','DEF',5,81), p('MEX_6','Gerardo Arteaga','DEF',6,79), p('MEX_7','Luis Romo','MID',7,80),
      p('MEX_8','Carlos Rodríguez','MID',8,79), p('MEX_9','Raúl Jiménez','FWD',9,82), p('MEX_10','Roberto Alvarado','FWD',10,80),
      p('MEX_11','Santiago Giménez','FWD',11,84), p('MEX_13','Guillermo Martínez','FWD',13,78), p('MEX_14','Julián Quiñones','FWD',14,81),
      p('MEX_15','Uriel Antuna','FWD',15,79), p('MEX_16','Israel Reyes','DEF',16,78), p('MEX_17','Orbelín Pineda','MID',17,80),
      p('MEX_18','Marcelo Flores','MID',18,77), p('MEX_19','Jesús Angulo','DEF',19,78), p('MEX_20','César Huerta','FWD',20,81),
      p('MEX_21','Jordi Cortizo','MID',21,78), p('MEX_22','Víctor Guzmán','DEF',22,79), p('MEX_24','Luis Chávez','MID',24,81),
      p('MEX_25','Alexis Vega','FWD',25,80), p('MEX_26','Brian García','DEF',26,77),
    ]
  },

  // 2. REPÚBLICA CHECA
  {
    id: 'CZE', name: 'República Checa', nameEn: 'Czech Republic', flag: '🇨🇿', continent: 'Europa',
    kitHome: { shirt: '#D7141A', shorts: '#11457E', socks: '#D7141A' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Ivan Hašek', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CZE_1','Jindřich Staněk','GK',1,81), p('CZE_16','Matěj Kovář','GK',16,80), p('CZE_23','Vítězslav Jaroš','GK',23,78),
      p('CZE_5','Vladimír Coufal','DEF',5,82), p('CZE_3','Tomáš Holeš','DEF',3,81), p('CZE_4','Robin Hranáč','DEF',4,80),
      p('CZE_18','Ladislav Krejčí','DEF',18,81), p('CZE_2','David Zima','DEF',2,79), p('CZE_15','David Jurásek','DEF',15,79),
      p('CZE_6','Martin Vitík','DEF',6,80), p('CZE_24','Tomáš Vlček','DEF',24,78), p('CZE_22','Tomáš Souček','MID',22,84),
      p('CZE_14','Lukáš Provod','MID',14,81), p('CZE_8','Ondřej Lingr','MID',8,79), p('CZE_7','Antonín Barák','MID',7,82),
      p('CZE_20','Ondřej Zmrzlý','MID',20,77), p('CZE_21','Lukáš Červ','MID',21,78), p('CZE_25','Pavel Šulc','MID',25,79),
      p('CZE_17','Václav Černý','FWD',17,80), p('CZE_9','Adam Hložek','FWD',9,81), p('CZE_10','Patrik Schick','FWD',10,85),
      p('CZE_11','Jan Kuchta','FWD',11,80), p('CZE_13','Mojmír Chytil','FWD',13,79), p('CZE_19','Tomáš Chorý','FWD',19,79),
      p('CZE_26','Matěj Jurásek','FWD',26,78), p('CZE_12','David Douděra','DEF',12,78),
    ]
  },

  // 3. SUDÁFRICA
  {
    id: 'RSA', name: 'Sudáfrica', nameEn: 'South Africa', flag: '🇿🇦', continent: 'África',
    kitHome: { shirt: '#FFD700', shorts: '#000000', socks: '#000000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Hugo Broos', rating: 3.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('RSA_1','Ronwen Williams','GK',1,83), p('RSA_16','Veli Mothwa','GK',16,77), p('RSA_22','Ricardo Goss','GK',22,76),
      p('RSA_2','Nyiko Mobbie','DEF',2,78), p('RSA_3','Terrence Mashego','DEF',3,77), p('RSA_5','Siyanda Xulu','DEF',5,79),
      p('RSA_14','Mothobi Mvala','DEF',14,78), p('RSA_18','Grant Kekana','DEF',18,79), p('RSA_20','Khuliso Mudau','DEF',20,80),
      p('RSA_19','Nkosinathi Sibisi','DEF',19,78), p('RSA_6','Aubrey Modiba','DEF',6,78), p('RSA_4','Teboho Mokoena','MID',4,81),
      p('RSA_8','Jayden Adams','MID',8,76), p('RSA_13','Sphephelo Sithole','MID',13,79), p('RSA_15','Thapelo Morena','MID',15,78),
      p('RSA_21','Mihlali Mayambela','MID',21,77), p('RSA_23','Thapelo Maseko','MID',23,76), p('RSA_11','Themba Zwane','MID',11,80),
      p('RSA_10','Percy Tau','FWD',10,82), p('RSA_9','Evidence Makgopa','FWD',9,79), p('RSA_12','Iqraam Rayners','FWD',12,78),
      p('RSA_17','Zakhele Lepasa','FWD',17,77), p('RSA_7','Oswin Appollis','FWD',7,76), p('RSA_24','Relebohile Mofokeng','FWD',24,75),
      p('RSA_25','Lyle Foster','FWD',25,81), p('RSA_26','Luke Le Roux','MID',26,76),
    ]
  },

  // 4. COREA DEL SUR
  {
    id: 'KOR', name: 'Corea del Sur', nameEn: 'South Korea', flag: '🇰🇷', continent: 'Asia',
    kitHome: { shirt: '#CC0000', shorts: '#003087', socks: '#CC0000' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Hong Myung-bo', rating: 4.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('KOR_1','Kim Seung-gyu','GK',1,81), p('KOR_21','Jo Hyeon-woo','GK',21,80), p('KOR_12','Song Bum-keun','GK',12,78),
      p('KOR_2','Lee Ki-je','DEF',2,78), p('KOR_3','Kim Jin-su','DEF',3,80), p('KOR_4','Kim Min-jae','DEF',4,86),
      p('KOR_15','Jung Seung-hyun','DEF',15,79), p('KOR_19','Kim Young-gwon','DEF',19,80), p('KOR_22','Seol Young-woo','DEF',22,81),
      p('KOR_23','Kim Tae-hwan','DEF',23,79), p('KOR_25','Kim Ji-soo','DEF',25,76), p('KOR_5','Park Yong-woo','MID',5,78),
      p('KOR_6','Hwang In-beom','MID',6,83), p('KOR_8','Hong Hyun-seok','MID',8,80), p('KOR_10','Lee Jae-sung','MID',10,82),
      p('KOR_13','Lee Soon-min','MID',13,77), p('KOR_16','Park Jin-seob','MID',16,78), p('KOR_7','Son Heung-min','FWD',7,88),
      p('KOR_11','Hwang Hee-chan','FWD',11,83), p('KOR_18','Lee Kang-in','FWD',18,85), p('KOR_17','Jeong Woo-yeong','FWD',17,81),
      p('KOR_9','Cho Gue-sung','FWD',9,81), p('KOR_20','Oh Hyeon-gyu','FWD',20,79), p('KOR_24','Yang Hyun-jun','FWD',24,78),
      p('KOR_14','Moon Seon-min','FWD',14,77), p('KOR_26','Joo Min-kyu','FWD',26,80),
    ]
  },

  // ── GRUPO B ────────────────────────────────────────────

  // 5. BRASIL
  {
    id: 'BRA', name: 'Brasil', nameEn: 'Brazil', flag: '🇧🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#000080', socks: '#FFFFFF' },
    kitAway: { shirt: '#007FFF', shorts: '#FFFFFF', socks: '#007FFF' },
    coach: 'Dorival Júnior', rating: 5.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BRA_1','Alisson','GK',1,89), p('BRA_12','Ederson','GK',12,88), p('BRA_23','Bento','GK',23,82),
      p('BRA_2','Danilo','DEF',2,83), p('BRA_3','Éder Militão','DEF',3,86), p('BRA_4','Marquinhos','DEF',4,87),
      p('BRA_14','Gabriel Magalhães','DEF',14,86), p('BRA_17','Beraldo','DEF',17,83), p('BRA_6','Wendell','DEF',6,81),
      p('BRA_16','Guilherme Arana','DEF',16,82), p('BRA_13','Yan Couto','DEF',13,81), p('BRA_5','Bruno Guimarães','MID',5,86),
      p('BRA_8','Lucas Paquetá','MID',8,85), p('BRA_15','João Gomes','MID',15,83), p('BRA_18','Douglas Luiz','MID',18,84),
      p('BRA_19','Andreas Pereira','MID',19,82), p('BRA_24','Éderson','MID',24,82), p('BRA_7','Vinícius Júnior','FWD',7,91),
      p('BRA_10','Rodrygo','FWD',10,87), p('BRA_11','Raphinha','FWD',11,85), p('BRA_20','Sávio','FWD',20,83),
      p('BRA_22','Gabriel Martinelli','FWD',22,84), p('BRA_9','Endrick','FWD',9,82), p('BRA_21','Evanilson','FWD',21,81),
      p('BRA_25','Pepê','FWD',25,80), p('BRA_26','Bremer','DEF',26,85),
    ]
  },

  // 6. HAITÍ
  {
    id: 'HAI', name: 'Haití', nameEn: 'Haiti', flag: '🇭🇹', continent: 'CONCACAF',
    kitHome: { shirt: '#003087', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#CE1126', shorts: '#003087', socks: '#003087' },
    coach: 'Sébastien Migné', rating: 2.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('HAI_1','Johny Placide','GK',1,78), p('HAI_12','Alexandre Pierre','GK',12,75), p('HAI_23','Garissone Innocent','GK',23,76),
      p('HAI_2','Carlens Arcus','DEF',2,79), p('HAI_3','Duke Lacroix','DEF',3,77), p('HAI_4','Ricardo Adé','DEF',4,80),
      p('HAI_5','Garven Metusala','DEF',5,78), p('HAI_6','Jean-Kévin Duverne','DEF',6,79), p('HAI_15','Stéphane Lambese','DEF',15,76),
      p('HAI_22','Alex Christian','DEF',22,77), p('HAI_16','Martin Expérience','DEF',16,75), p('HAI_8','Danley Jean Jacques','MID',8,79),
      p('HAI_17','Carl Fred Sainté','MID',17,76), p('HAI_19','Steeven Saba','MID',19,77), p('HAI_21','Bryan Alceus','MID',21,76),
      p('HAI_10','Derrick Etienne Jr.','MID',10,78), p('HAI_14','Leverton Pierre','MID',14,77), p('HAI_7','Fafà Picault','FWD',7,79),
      p('HAI_9','Duckens Nazon','FWD',9,81), p('HAI_11','Frantzdy Pierrot','FWD',11,80), p('HAI_13','Mondy Prunier','FWD',13,76),
      p('HAI_18','Carnejy Antoine','FWD',18,77), p('HAI_20','Jayro Jean','FWD',20,75), p('HAI_24','Dany Jean','FWD',24,76),
      p('HAI_25','Louicius Don Deedson','FWD',25,78), p('HAI_26','Mikaël Cantave','MID',26,75),
    ]
  },

  // 7. MARRUECOS
  {
    id: 'MAR', name: 'Marruecos', nameEn: 'Morocco', flag: '🇲🇦', continent: 'África',
    kitHome: { shirt: '#C1272D', shorts: '#006233', socks: '#C1272D' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Walid Regragui', rating: 4.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MAR_1','Yassine Bounou','GK',1,86), p('MAR_12','Munir Mohamedi','GK',12,81), p('MAR_22','Mehdi Benabid','GK',22,78),
      p('MAR_2','Achraf Hakimi','DEF',2,87), p('MAR_3','Noussair Mazraoui','DEF',3,84), p('MAR_4','Sofyan Amrabat','MID',4,85),
      p('MAR_5','Nayef Aguerd','DEF',5,84), p('MAR_6','Romain Saïss','DEF',6,83), p('MAR_15','Chadi Riad','DEF',15,80),
      p('MAR_13','Abdel Abqar','DEF',13,79), p('MAR_25','Yahya Attiyat Allah','DEF',25,80), p('MAR_7','Hakim Ziyech','MID',7,85),
      p('MAR_8','Azzedine Ounahi','MID',8,83), p('MAR_11','Ismael Saibari','MID',11,81), p('MAR_10','Brahim Díaz','MID',10,86),
      p('MAR_14','Oussama El Azzouzi','MID',14,79), p('MAR_24','Amir Richardson','MID',24,80), p('MAR_23','Bilal El Khannouss','MID',23,82),
      p('MAR_9','Youssef En-Nesyri','FWD',9,84), p('MAR_17','Sofiane Boufal','FWD',17,82), p('MAR_19','Ayoub El Kaabi','FWD',19,83),
      p('MAR_20','Amine Adli','FWD',20,81), p('MAR_21','Ilias Akhomach','FWD',21,80), p('MAR_16','Soufiane Rahimi','FWD',16,81),
      p('MAR_18','Eliesse Ben Seghir','MID',18,81), p('MAR_26','Tarik Tissoudali','FWD',26,80),
    ]
  },

  // 8. ESCOCIA
  {
    id: 'SCO', name: 'Escocia', nameEn: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', continent: 'Europa',
    kitHome: { shirt: '#002B5E', shorts: '#FFFFFF', socks: '#002B5E' },
    kitAway: { shirt: '#FFFFFF', shorts: '#002B5E', socks: '#FFFFFF' },
    coach: 'Steve Clarke', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SCO_1','Angus Gunn','GK',1,80), p('SCO_12','Liam Kelly','GK',12,77), p('SCO_21','Zander Clark','GK',21,78),
      p('SCO_2','Anthony Ralston','DEF',2,78), p('SCO_3','Andrew Robertson','DEF',3,85), p('SCO_5','Grant Hanley','DEF',5,80),
      p('SCO_6','Kieran Tierney','DEF',6,83), p('SCO_13','Jack Hendry','DEF',13,81), p('SCO_15','Ryan Porteous','DEF',15,79),
      p('SCO_16','Liam Cooper','DEF',16,80), p('SCO_24','Greg Taylor','DEF',24,79), p('SCO_26','Scott McKenna','DEF',26,80),
      p('SCO_4','Scott McTominay','MID',4,83), p('SCO_7','John McGinn','MID',7,84), p('SCO_8','Callum McGregor','MID',8,82),
      p('SCO_11','Ryan Christie','MID',11,81), p('SCO_14','Billy Gilmour','MID',14,82), p('SCO_23','Kenny McLean','MID',23,79),
      p('SCO_20','Ryan Jack','MID',20,78), p('SCO_17','Stuart Armstrong','MID',17,80), p('SCO_10','Che Adams','FWD',10,81),
      p('SCO_9','Lawrence Shankland','FWD',9,80), p('SCO_19','Tommy Conway','FWD',19,78), p('SCO_25','James Forrest','FWD',25,79),
      p('SCO_18','Lewis Morgan','FWD',18,78), p('SCO_22','Ross McCrorie','DEF',22,77),
    ]
  },
  // ── GRUPO C ────────────────────────────────────────────

  // 9. CURAÇAO
  {
    id: 'CUR', name: 'Curaçao', nameEn: 'Curacao', flag: '🇨🇼', continent: 'CONCACAF',
    kitHome: { shirt: '#002B7F', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#002B7F', socks: '#002B7F' },
    coach: 'Dick Advocaat', rating: 2.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CUR_1','Eloy Room','GK',1,78), p('CUR_22','Trevor Doornbusch','GK',22,74), p('CUR_23','Nino Fancito','GK',23,73),
      p('CUR_2','Cuco Martina','DEF',2,76), p('CUR_3','Jurien Gaari','DEF',3,75), p('CUR_4','Roshon van Eijma','DEF',4,74),
      p('CUR_5','Juriën Timber','DEF',5,77), p('CUR_13','Nathangelo Markelo','DEF',13,74), p('CUR_15','Justin Ogenia','DEF',15,73),
      p('CUR_19','Sherel Floranus','DEF',19,75), p('CUR_6','Kevin Felida','MID',6,74), p('CUR_7','Juninho Bacuna','MID',7,79),
      p('CUR_8','Godfried Roemeratoe','MID',8,75), p('CUR_10','Leandro Bacuna','MID',10,78), p('CUR_17','Brandley Kuwas','MID',17,76),
      p('CUR_20','Vurnon Anita','MID',20,75), p('CUR_21','Roly Bonevacia','MID',21,74), p('CUR_9','Rangelo Janga','FWD',9,76),
      p('CUR_11','Jearl Margaritha','FWD',11,74), p('CUR_14','Kenji Gorré','FWD',14,75), p('CUR_16','Jürgen Locadia','FWD',16,76),
      p('CUR_18','Elson Hooi','FWD',18,74), p('CUR_24','Jeremy Antonisse','FWD',24,73), p('CUR_25','Joshua Brenet','DEF',25,76),
      p('CUR_26','Richairo Živković','FWD',26,75), p('CUR_12','Shanon Carmelia','DEF',12,74),
    ]
  },

  // 10. ECUADOR
  {
    id: 'ECU', name: 'Ecuador', nameEn: 'Ecuador', flag: '🇪🇨', continent: 'Sudamérica',
    kitHome: { shirt: '#FFEB3B', shorts: '#001D3D', socks: '#FFEB3B' },
    kitAway: { shirt: '#FFFFFF', shorts: '#001D3D', socks: '#FFFFFF' },
    coach: 'Sebastián Beccacece', rating: 4.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ECU_22','Hernán Galíndez','GK',22,81), p('ECU_1','Alexander Domínguez','GK',1,80), p('ECU_12','Moisés Ramírez','GK',12,79),
      p('ECU_2','Félix Torres','DEF',2,82), p('ECU_3','Piero Hincapié','DEF',3,85), p('ECU_4','Joel Ordóñez','DEF',4,79),
      p('ECU_6','Willian Pacho','DEF',6,84), p('ECU_7','Pervis Estupiñán','DEF',7,84), p('ECU_17','Ángelo Preciado','DEF',17,81),
      p('ECU_24','José Hurtado','DEF',24,79), p('ECU_25','Jackson Porozo','DEF',25,78), p('ECU_5','José Cifuentes','MID',5,80),
      p('ECU_8','Carlos Gruezo','MID',8,79), p('ECU_21','Alan Franco','MID',21,80), p('ECU_23','Moisés Caicedo','MID',23,87),
      p('ECU_16','Jeremy Sarmiento','MID',16,81), p('ECU_10','Kendry Páez','MID',10,83), p('ECU_15','Ángel Mena','MID',15,79),
      p('ECU_9','John Yeboah','FWD',9,79), p('ECU_11','Kevin Rodríguez','FWD',11,79), p('ECU_13','Enner Valencia','FWD',13,83),
      p('ECU_14','Alan Minda','FWD',14,79), p('ECU_19','Jordy Caicedo','FWD',19,78), p('ECU_20','Nilson Angulo','FWD',20,77),
      p('ECU_18','Jhoanner Chávez','DEF',18,78), p('ECU_26','Pedro Vite','MID',26,78),
    ]
  },

  // 11. ALEMANIA
  {
    id: 'GER', name: 'Alemania', nameEn: 'Germany', flag: '🇩🇪', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    kitAway: { shirt: '#FF00FF', shorts: '#FF00FF', socks: '#FF00FF' },
    coach: 'Julian Nagelsmann', rating: 4.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GER_1','Marc-André ter Stegen','GK',1,88), p('GER_12','Oliver Baumann','GK',12,83), p('GER_22','Alexander Nübel','GK',22,82),
      p('GER_2','Antonio Rüdiger','DEF',2,87), p('GER_3','David Raum','DEF',3,83), p('GER_4','Jonathan Tah','DEF',4,85),
      p('GER_6','Joshua Kimmich','DEF',6,86), p('GER_15','Nico Schlotterbeck','DEF',15,84), p('GER_16','Waldemar Anton','DEF',16,82),
      p('GER_20','Benjamin Henrichs','DEF',20,82), p('GER_24','Robin Koch','DEF',24,81), p('GER_5','Pascal Groß','MID',5,83),
      p('GER_8','Robert Andrich','MID',8,84), p('GER_23','Emre Can','MID',23,82), p('GER_25','Aleksandar Pavlović','MID',25,82),
      p('GER_10','Jamal Musiala','MID',10,89), p('GER_17','Florian Wirtz','MID',17,89), p('GER_11','Chris Führich','MID',11,82),
      p('GER_19','Leroy Sané','FWD',19,85), p('GER_7','Kai Havertz','FWD',7,86), p('GER_9','Niclas Füllkrug','FWD',9,84),
      p('GER_13','Deniz Undav','FWD',13,83), p('GER_14','Maximilian Beier','FWD',14,81), p('GER_18','Serge Gnabry','FWD',18,84),
      p('GER_21','Karim Adeyemi','FWD',21,82), p('GER_26','Julian Brandt','MID',26,83),
    ]
  },

  // 12. COSTA DE MARFIL
  {
    id: 'CIV', name: 'Costa de Marfil', nameEn: 'Ivory Coast', flag: '🇨🇮', continent: 'África',
    kitHome: { shirt: '#FF8700', shorts: '#FFFFFF', socks: '#138B42' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FF8700', socks: '#FFFFFF' },
    coach: 'Emerse Fae', rating: 4.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CIV_1','Yahia Fofana','GK',1,81), p('CIV_16','Charles Folly','GK',16,77), p('CIV_23','Badra Ali Sangaré','GK',23,78),
      p('CIV_2','Ousmane Diomande','DEF',2,82), p('CIV_3','Ghislain Konan','DEF',3,80), p('CIV_5','Wilfried Singo','DEF',5,82),
      p('CIV_7','Odilon Kossounou','DEF',7,83), p('CIV_21','Evan Ndicka','DEF',21,84), p('CIV_12','Willy Boly','DEF',12,80),
      p('CIV_26','Ismaël Diallo','DEF',26,78), p('CIV_4','Jean-Michaël Seri','MID',4,80), p('CIV_6','Seko Fofana','MID',6,85),
      p('CIV_8','Franck Kessié','MID',8,85), p('CIV_18','Ibrahim Sangaré','MID',18,83), p('CIV_25','Idrissa Doumbia','MID',25,78),
      p('CIV_17','Simon Adingra','FWD',17,82), p('CIV_15','Max Gradel','MID',15,79), p('CIV_10','Nicolas Pépé','FWD',10,81),
      p('CIV_14','Oumar Diakité','FWD',14,80), p('CIV_22','Sébastien Haller','FWD',22,84), p('CIV_9','Jonathan Bamba','FWD',9,81),
      p('CIV_11','Jean-Philippe Krasso','FWD',11,80), p('CIV_13','Jérémie Boga','FWD',13,81), p('CIV_19','Christian Kouamé','FWD',19,80),
      p('CIV_24','Karim Konaté','FWD',24,79), p('CIV_20','Wilfried Zaha','FWD',20,82),
    ]
  },

  // ── GRUPO D ────────────────────────────────────────────

  // 13. AUSTRALIA
  {
    id: 'AUS', name: 'Australia', nameEn: 'Australia', flag: '🇦🇺', continent: 'Asia',
    kitHome: { shirt: '#FFD700', shorts: '#006633', socks: '#FFD700' },
    kitAway: { shirt: '#003087', shorts: '#FFFFFF', socks: '#003087' },
    coach: 'Graham Arnold', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('AUS_1','Mathew Ryan','GK',1,82), p('AUS_12','Joe Gauci','GK',12,77), p('AUS_18','Lawrence Thomas','GK',18,76),
      p('AUS_19','Harry Souttar','DEF',19,81), p('AUS_4','Kye Rowles','DEF',4,79), p('AUS_21','Cameron Burgess','DEF',21,78),
      p('AUS_16','Aziz Behich','DEF',16,79), p('AUS_3','Nathaniel Atkinson','DEF',3,77), p('AUS_2','Thomas Deng','DEF',2,77),
      p('AUS_5','Jordan Bos','DEF',5,78), p('AUS_25','Gethin Jones','DEF',25,76), p('AUS_22','Jackson Irvine','MID',22,80),
      p('AUS_8','Connor Metcalfe','MID',8,78), p('AUS_17','Keanu Baccus','MID',17,77), p('AUS_14','Riley McGree','MID',14,79),
      p('AUS_13','Aiden O\'Neill','MID',13,77), p('AUS_24','Patrick Yazbek','MID',24,75), p('AUS_23','Craig Goodwin','FWD',23,80),
      p('AUS_6','Martin Boyle','FWD',6,79), p('AUS_10','Kusini Yengi','FWD',10,77), p('AUS_15','Mitchell Duke','FWD',15,78),
      p('AUS_9','Bruno Fornaroli','FWD',9,77), p('AUS_11','Awer Mabil','FWD',11,78), p('AUS_7','Samuel Silvera','FWD',7,76),
      p('AUS_20','John Iredale','FWD',20,75), p('AUS_26','Alessandro Circati','DEF',26,78),
    ]
  },

  // 14. PARAGUAY
  {
    id: 'PAR', name: 'Paraguay', nameEn: 'Paraguay', flag: '🇵🇾', continent: 'Sudamérica',
    kitHome: { shirt: '#CE1126', shorts: '#003087', socks: '#FFFFFF' },
    kitAway: { shirt: '#003087', shorts: '#003087', socks: '#003087' },
    coach: 'Gustavo Alfaro', rating: 3.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('PAR_22','Carlos Coronel','GK',22,79), p('PAR_1','Roberto Fernández','GK',1,78), p('PAR_12','Alfredo Aguilar','GK',12,77),
      p('PAR_15','Gustavo Gómez','DEF',15,83), p('PAR_6','Júnior Alonso','DEF',6,81), p('PAR_5','Fabián Balbuena','DEF',5,80),
      p('PAR_3','Omar Alderete','DEF',3,81), p('PAR_4','Matías Espinoza','DEF',4,79), p('PAR_2','Iván Ramírez','DEF',2,78),
      p('PAR_13','Néstor Giménez','DEF',13,77), p('PAR_14','Andrés Cubas','MID',14,81), p('PAR_23','Mathías Villasanti','MID',23,80),
      p('PAR_20','Richard Sánchez','MID',20,79), p('PAR_8','Damián Bobadilla','MID',8,78), p('PAR_16','Matías Rojas','MID',16,79),
      p('PAR_21','Kaku Romero Gamarra','MID',21,79), p('PAR_10','Miguel Almirón','MID',10,84), p('PAR_19','Julio Enciso','FWD',19,82),
      p('PAR_24','Ramón Sosa','FWD',24,80), p('PAR_17','Alejandro Romero','FWD',17,78), p('PAR_11','Ángel Romero','FWD',11,79),
      p('PAR_9','Antonio Sanabria','FWD',9,80), p('PAR_7','Derlis González','FWD',7,79), p('PAR_18','Alex Arce','FWD',18,78),
      p('PAR_25','Adam Bareiro','FWD',25,79), p('PAR_26','Gustavo Velázquez','DEF',26,78),
    ]
  },

  // 15. TURQUÍA
  {
    id: 'TUR', name: 'Turquía', nameEn: 'Turkey', flag: '🇹🇷', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    coach: 'Vincenzo Montella', rating: 4.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('TUR_1','Mert Günok','GK',1,81), p('TUR_12','Altay Bayındır','GK',12,80), p('TUR_23','Uğurcan Çakır','GK',23,81),
      p('TUR_4','Samet Akaydin','DEF',4,79), p('TUR_3','Merih Demiral','DEF',3,81), p('TUR_14','Abdülkerim Bardakcı','DEF',14,81),
      p('TUR_20','Ferdi Kadıoğlu','DEF',20,83), p('TUR_18','Mert Müldür','DEF',18,80), p('TUR_2','Zeki Çelik','DEF',2,80),
      p('TUR_13','Ahmetcan Kaplan','DEF',13,78), p('TUR_22','Kaan Ayhan','DEF',22,80), p('TUR_10','Hakan Çalhanoğlu','MID',10,86),
      p('TUR_15','Salih Özcan','MID',15,81), p('TUR_16','İsmail Yüksek','MID',16,80), p('TUR_6','Orkun Kökçü','MID',6,83),
      p('TUR_8','Arda Güler','MID',8,83), p('TUR_17','İrfan Can Kahveci','MID',17,82), p('TUR_25','Yunus Akgün','MID',25,79),
      p('TUR_7','Kerem Aktürkoğlu','FWD',7,83), p('TUR_21','Barış Alper Yılmaz','FWD',21,81), p('TUR_19','Kenan Yıldız','FWD',19,80),
      p('TUR_9','Cenk Tosun','FWD',9,79), p('TUR_24','Semih Kılıçsoy','FWD',24,78), p('TUR_11','Yusuf Yazıcı','MID',11,80),
      p('TUR_5','Okay Yokuşlu','MID',5,79), p('TUR_26','Ozan Kabak','DEF',26,81),
    ]
  },

  // 16. ESTADOS UNIDOS
  {
    id: 'USA', name: 'Estados Unidos', nameEn: 'United States', flag: '🇺🇸', continent: 'CONCACAF',
    kitHome: { shirt: '#FFFFFF', shorts: '#002B60', socks: '#FFFFFF' },
    kitAway: { shirt: '#002B60', shorts: '#002B60', socks: '#002B60' },
    coach: 'Gregg Berhalter', rating: 4.1,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('USA_1','Matt Turner','GK',1,82), p('USA_18','Ethan Horvath','GK',18,77), p('USA_25','Sean Johnson','GK',25,76),
      p('USA_3','Chris Richards','DEF',3,81), p('USA_13','Tim Ream','DEF',13,81), p('USA_12','Miles Robinson','DEF',12,79),
      p('USA_5','Antonee Robinson','DEF',5,82), p('USA_22','Joe Scally','DEF',22,80), p('USA_2','Cameron Carter-Vickers','DEF',2,80),
      p('USA_16','Shaq Moore','DEF',16,77), p('USA_23','Kristoffer Lund','DEF',23,78), p('USA_4','Tyler Adams','MID',4,82),
      p('USA_8','Weston McKennie','MID',8,83), p('USA_6','Yunus Musah','MID',6,82), p('USA_7','Gio Reyna','MID',7,81),
      p('USA_14','Luca de la Torre','MID',14,79), p('USA_15','Johnny Cardoso','MID',15,80), p('USA_17','Malik Tillman','MID',17,79),
      p('USA_10','Christian Pulisic','FWD',10,85), p('USA_21','Tim Weah','FWD',21,81), p('USA_11','Brenden Aaronson','FWD',11,79),
      p('USA_20','Folarin Balogun','FWD',20,82), p('USA_9','Ricardo Pepi','FWD',9,79), p('USA_19','Haji Wright','FWD',19,80),
      p('USA_24','Josh Sargent','FWD',24,79), p('USA_26','Mark McKenzie','DEF',26,78),
    ]
  },    
  // ── GRUPO E ────────────────────────────────────────────

  // 17. BOSNIA Y HERZEGOVINA
  {
    id: 'BIH', name: 'Bosnia y Herzegovina', nameEn: 'Bosnia and Herzegovina', flag: '🇧🇦', continent: 'Europa',
    kitHome: { shirt: '#003087', shorts: '#FFFFFF', socks: '#FFD700' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003087', socks: '#003087' },
    coach: 'Sergej Barbarez', rating: 3.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BIH_1','Nikola Vasilj','GK',1,78), p('BIH_12','Kenan Pirić','GK',12,75), p('BIH_22','Osman Hadžikić','GK',22,74),
      p('BIH_5','Sead Kolašinac','DEF',5,81), p('BIH_3','Dennis Hadžikadunić','DEF',3,77), p('BIH_16','Anel Ahmedhodžić','DEF',16,79),
      p('BIH_2','Amar Dedić','DEF',2,78), p('BIH_4','Jusuf Gazibegović','DEF',4,77), p('BIH_15','Nihad Mujakić','DEF',15,75),
      p('BIH_19','Stjepan Radeljić','DEF',19,74), p('BIH_21','Nikola Katić','DEF',21,75), p('BIH_13','Ermin Bičakčić','DEF',13,76),
      p('BIH_8','Rade Krunić','MID',8,80), p('BIH_6','Benjamin Tahirović','MID',6,77), p('BIH_7','Denis Huseinbašić','MID',7,76),
      p('BIH_20','Haris Hajradinović','MID',20,77), p('BIH_14','Dženis Burnić','MID',14,75), p('BIH_17','Armin Gigović','MID',17,76),
      p('BIH_24','Dal Varešanović','MID',24,75), p('BIH_25','Ivan Bašić','MID',25,74), p('BIH_9','Edin Džeko','FWD',9,82),
      p('BIH_10','Ermedin Demirović','FWD',10,81), p('BIH_11','Haris Tabaković','FWD',11,77), p('BIH_23','Madžid Šošić','FWD',23,74),
      p('BIH_18','Dario Šarić','MID',18,76), p('BIH_26','Milan Đurić','FWD',26,75),
    ]
  },

  // 18. CANADÁ
  {
    id: 'CAN', name: 'Canadá', nameEn: 'Canada', flag: '🇨🇦', continent: 'CONCACAF',
    kitHome: { shirt: '#E31C23', shorts: '#FFFFFF', socks: '#E31C23' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#E31C23' },
    coach: 'Jesse Marsch', rating: 3.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CAN_1','Dayne St. Clair','GK',1,78), p('CAN_16','Maxime Crépeau','GK',16,79), p('CAN_22','Tom McGill','GK',22,74),
      p('CAN_2','Alistair Johnston','DEF',2,81), p('CAN_19','Alphonso Davies','DEF',19,86), p('CAN_15','Derek Cornelius','DEF',15,78),
      p('CAN_4','Moïse Bombito','DEF',4,77), p('CAN_3','Luc de Fougerolles','DEF',3,75), p('CAN_13','Kamal Miller','DEF',13,76),
      p('CAN_20','Ali Ahmed','DEF',20,76), p('CAN_26','Kyle Hiebert','DEF',26,75), p('CAN_7','Stephen Eustáquio','MID',7,81),
      p('CAN_8','Ismaël Koné','MID',8,80), p('CAN_21','Jonathan Osorio','MID',21,78), p('CAN_6','Samuel Piette','MID',6,77),
      p('CAN_24','Mathieu Choinière','MID',24,76), p('CAN_17','Tajon Buchanan','MID',17,80), p('CAN_14','Jacob Shaffelburg','MID',14,78),
      p('CAN_10','Jonathan David','FWD',10,83), p('CAN_9','Cyle Larin','FWD',9,80), p('CAN_23','Liam Millar','FWD',23,78),
      p('CAN_25','Tani Oluwaseyi','FWD',25,75), p('CAN_12','Jacen Russell-Rowe','FWD',12,74), p('CAN_11','Theo Bair','FWD',11,75),
      p('CAN_18','Charles-Andreas Brym','FWD',18,74), p('CAN_5','Joel Waterman','DEF',5,75),
    ]
  },

  // 19. QATAR
  {
    id: 'QAT', name: 'Qatar', nameEn: 'Qatar', flag: '🇶🇦', continent: 'Asia',
    kitHome: { shirt: '#8B0000', shorts: '#FFFFFF', socks: '#8B0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#8B0000', socks: '#FFFFFF' },
    coach: 'Tintín Márquez', rating: 3.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('QAT_22','Meshaal Barsham','GK',22,78), p('QAT_1','Saad Al-Sheeb','GK',1,76), p('QAT_21','Salah Zakaria','GK',21,74),
      p('QAT_2','Ró-Ró (Pedro Miguel)','DEF',2,77), p('QAT_3','Al-Mahdi Ali Mukhtar','DEF',3,76), p('QAT_15','Tarek Salman','DEF',15,75),
      p('QAT_16','Boualem Khoukhi','DEF',16,77), p('QAT_5','Tarek Salman','DEF',5,74), p('QAT_12','Lucas Mendes','DEF',12,78),
      p('QAT_18','Sultan Al-Brake','DEF',18,75), p('QAT_4','Mohammed Waad','MID',4,76), p('QAT_6','Abdulaziz Hatem','MID',6,77),
      p('QAT_8','Ali Assadalla','MID',8,76), p('QAT_10','Hassan Al-Haydos','MID',10,79), p('QAT_20','Ahmed Fatehi','MID',20,75),
      p('QAT_23','Mostafa Meshaal','MID',23,74), p('QAT_24','Jassem Gaber','MID',24,76), p('QAT_11','Akram Afif','FWD',11,81),
      p('QAT_19','Almoez Ali','FWD',19,80), p('QAT_7','Ahmed Alaaeldin','FWD',7,76), p('QAT_9','Yusuf Abdurisag','FWD',9,75),
      p('QAT_13','Khalid Muneer','FWD',13,74), p('QAT_17','Ismaeel Mohammad','FWD',17,75), p('QAT_25','Ahmed Al-Rawi','FWD',25,74),
      p('QAT_14','Homam Ahmed','DEF',14,77), p('QAT_26','Bassan Al-Rawi','DEF',26,76),
    ]
  },

  // 20. SUIZA
  {
    id: 'SUI', name: 'Suiza', nameEn: 'Switzerland', flag: '🇨🇭', continent: 'Europa',
    kitHome: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Murat Yakin', rating: 4.3,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SUI_1','Gregor Kobel','GK',1,86), p('SUI_12','Yvon Mvogo','GK',12,80), p('SUI_21','David von Ballmoos','GK',21,78),
      p('SUI_5','Manuel Akanji','DEF',5,85), p('SUI_4','Nico Elvedi','DEF',4,81), p('SUI_13','Ricardo Rodriguez','DEF',13,82),
      p('SUI_3','Silvan Widmer','DEF',3,80), p('SUI_2','Leonidas Stergiou','DEF',2,78), p('SUI_15','Cédric Zesiger','DEF',15,79),
      p('SUI_22','Becir Omeragic','DEF',22,77), p('SUI_8','Remo Freuler','MID',8,81), p('SUI_10','Granit Xhaka','MID',10,85),
      p('SUI_20','Michel Aebischer','MID',20,80), p('SUI_16','Vincent Sierro','MID',16,79), p('SUI_6','Denis Zakaria','MID',6,82),
      p('SUI_26','Fabian Rieder','MID',26,80), p('SUI_24','Ardon Jashari','MID',24,78), p('SUI_19','Dan Ndoye','FWD',19,81),
      p('SUI_17','Ruben Vargas','FWD',17,82), p('SUI_11','Renato Steffen','FWD',11,79), p('SUI_9','Noah Okafor','FWD',9,81),
      p('SUI_7','Breel Embolo','FWD',7,82), p('SUI_25','Zeki Amdouni','FWD',25,81), p('SUI_18','Kwadwo Duah','FWD',18,79),
      p('SUI_14','Steven Zuber','FWD',14,80), p('SUI_23','Filip Ugrinic','MID',23,78),
    ]
  },

  // ── GRUPO F ────────────────────────────────────────────

  // 21. JAPÓN
  {
    id: 'JPN', name: 'Japón', nameEn: 'Japan', flag: '🇯🇵', continent: 'Asia',
    kitHome: { shirt: '#0066B2', shorts: '#FFFFFF', socks: '#0066B2' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Hajime Moriyasu', rating: 4.4,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('JPN_1','Zion Suzuki','GK',1,79), p('JPN_12','Keisuke Osako','GK',12,78), p('JPN_23','Daiya Maekawa','GK',23,76),
      p('JPN_16','Takehiro Tomiyasu','DEF',16,84), p('JPN_4','Ko Itakura','DEF',4,82), p('JPN_2','Yukinari Sugawara','DEF',2,81),
      p('JPN_21','Hiroki Ito','DEF',21,81), p('JPN_3','Shogo Taniguchi','DEF',3,80), p('JPN_15','Koki Machida','DEF',15,79),
      p('JPN_22','Yuta Nakayama','DEF',22,78), p('JPN_26','Daiki Hashioka','DEF',26,77), p('JPN_6','Wataru Endo','MID',6,84),
      p('JPN_5','Hidemasa Morita','MID',5,82), p('JPN_17','Ao Tanaka','MID',17,80), p('JPN_8','Takumi Minamino','MID',8,82),
      p('JPN_14','Junya Ito','MID',14,81), p('JPN_20','Takefusa Kubo','MID',20,83), p('JPN_10','Ritsu Doan','MID',10,81),
      p('JPN_7','Kaoru Mitoma','FWD',7,84), p('JPN_13','Keito Nakamura','FWD',13,80), p('JPN_9','Ayase Ueda','FWD',9,81),
      p('JPN_25','Daizen Maeda','FWD',25,80), p('JPN_18','Takuma Asano','FWD',18,79), p('JPN_19','Koki Ogawa','FWD',19,78),
      p('JPN_11','Mao Hosoya','FWD',11,76), p('JPN_24','Reo Hatate','MID',24,80),
    ]
  },

  // 22. PAÍSES BAJOS
  {
    id: 'NED', name: 'Países Bajos', nameEn: 'Netherlands', flag: '🇳🇱', continent: 'Europa',
    kitHome: { shirt: '#FF6B00', shorts: '#FF6B00', socks: '#FF6B00' },
    kitAway: { shirt: '#003087', shorts: '#003087', socks: '#003087' },
    coach: 'Ronald Koeman', rating: 4.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NED_1','Bart Verbruggen','GK',1,84), p('NED_13','Mark Flekken','GK',13,82), p('NED_23','Justin Bijlow','GK',23,81),
      p('NED_4','Virgil van Dijk','DEF',4,88), p('NED_5','Nathan Aké','DEF',5,85), p('NED_6','Stefan de Vrij','DEF',6,84),
      p('NED_22','Denzel Dumfries','DEF',22,83), p('NED_2','Lutsharel Geertruida','DEF',2,83), p('NED_3','Matthijs de Ligt','DEF',3,85),
      p('NED_15','Micky van de Ven','DEF',15,84), p('NED_12','Jeremie Frimpong','DEF',12,84), p('NED_24','Jerdy Schouten','MID',24,82),
      p('NED_14','Tijjani Reijnders','MID',14,83), p('NED_16','Joey Veerman','MID',16,81), p('NED_7','Xavi Simons','MID',7,85),
      p('NED_8','Georginio Wijnaldum','MID',8,80), p('NED_26','Ryan Gravenberch','MID',26,82), p('NED_11','Cody Gakpo','FWD',11,85),
      p('NED_10','Memphis Depay','FWD',10,83), p('NED_18','Donyell Malen','FWD',18,83), p('NED_9','Wout Weghorst','FWD',9,80),
      p('NED_19','Brian Brobbey','FWD',19,81), p('NED_21','Joshua Zirkzee','FWD',21,81), p('NED_25','Steven Bergwijn','FWD',25,80),
      p('NED_20','Ian Maatsen','DEF',20,82), p('NED_17','Daley Blind','DEF',17,79),
    ]
  },

  // 23. SUECIA
  {
    id: 'SWE', name: 'Suecia', nameEn: 'Sweden', flag: '🇸🇪', continent: 'Europa',
    kitHome: { shirt: '#FFD700', shorts: '#003087', socks: '#FFD700' },
    kitAway: { shirt: '#003087', shorts: '#003087', socks: '#003087' },
    coach: 'Jon Dahl Tomasson', rating: 4.1,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SWE_1','Robin Olsen','GK',1,81), p('SWE_12','Viktor Johansson','GK',12,78), p('SWE_23','Kristoffer Nordfeldt','GK',23,76),
      p('SWE_3','Victor Lindelöf','DEF',3,82), p('SWE_4','Isak Hien','DEF',4,80), p('SWE_2','Emil Krafth','DEF',2,78),
      p('SWE_6','Ludwig Augustinsson','DEF',6,78), p('SWE_5','Emil Holm','DEF',5,77), p('SWE_15','Carl Starfelt','DEF',15,79),
      p('SWE_13','Ken Sema','DEF',13,77), p('SWE_25','Linus Wahlqvist','DEF',25,76), p('SWE_18','Jens Cajuste','MID',18,79),
      p('SWE_14','Anton Salétros','MID',14,78), p('SWE_19','Mattias Svanberg','MID',19,79), p('SWE_8','Jesper Karlström','MID',8,77),
      p('SWE_20','Kristoffer Olsson','MID',20,78), p('SWE_21','Dejan Kulusevski','MID',21,83), p('SWE_10','Emil Forsberg','MID',10,81),
      p('SWE_11','Anthony Elanga','FWD',11,81), p('SWE_9','Alexander Isak','FWD',9,85), p('SWE_17','Viktor Gyökeres','FWD',17,84),
      p('SWE_22','Gustaf Nilsson','FWD',22,77), p('SWE_7','Gabriel Gudmundsson','MID',7,76), p('SWE_24','Edvin Kurtulus','DEF',24,75),
      p('SWE_26','Yasin Ayari','MID',26,75), p('SWE_16','Hugo Larsson','MID',16,79),
    ]
  },

  // 24. TÚNEZ
  {
    id: 'TUN', name: 'Túnez', nameEn: 'Tunisia', flag: '🇹🇳', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    coach: 'Montasser Louhichi', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('TUN_22','Bechir Ben Said','GK',22,78), p('TUN_16','Aymen Dahmen','GK',16,77), p('TUN_1','Mouez Hassen','GK',1,76),
      p('TUN_3','Montassar Talbi','DEF',3,81), p('TUN_4','Yassine Meriah','DEF',4,79), p('TUN_21','Wajdi Kechrida','DEF',21,78),
      p('TUN_2','Ali Abdi','DEF',2,78), p('TUN_20','Yan Valery','DEF',20,76), p('TUN_12','Ali Maaloul','DEF',12,79),
      p('TUN_5','Oussama Haddadi','DEF',5,77), p('TUN_6','Nader Ghandri','DEF',6,76), p('TUN_17','Ellyes Skhiri','MID',17,82),
      p('TUN_14','Aïssa Laïdouni','MID',14,80), p('TUN_15','Mohamed Ali Ben Romdhane','MID',15,79), p('TUN_8','Hamza Rafia','MID',8,77),
      p('TUN_10','Anis Ben Slimane','MID',10,78), p('TUN_25','Houssem Tka','MID',25,75), p('TUN_13','Samy Chouchane','MID',13,74),
      p('TUN_7','Youssef Msakni','FWD',7,80), p('TUN_18','Elias Achouri','FWD',18,79), p('TUN_11','Seifeddine Jaziri','FWD',11,78),
      p('TUN_9','Haythem Jouini','FWD',9,76), p('TUN_23','Naïm Sliti','FWD',23,79), p('TUN_19','Sayfallah Ltaief','FWD',19,77),
      p('TUN_24','Saifeddine Ltaief','FWD',24,76), p('TUN_26','Elias Saad','FWD',26,75),
    ]
  },
  // ── GRUPO G ────────────────────────────────────────────

  // 25. BÉLGICA
  {
    id: 'BEL', name: 'Bélgica', nameEn: 'Belgium', flag: '🇧🇪', continent: 'Europa',
    kitHome: { shirt: '#CE1126', shorts: '#000000', socks: '#FFD700' },
    kitAway: { shirt: '#87CEFA', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Domenico Tedesco', rating: 4.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BEL_1','Koen Casteels','GK',1,83), p('BEL_12','Matz Sels','GK',12,79), p('BEL_13','Thomas Kaminski','GK',13,78),
      p('BEL_2','Zeno Debast','DEF',2,79), p('BEL_3','Arthur Theate','DEF',3,80), p('BEL_4','Wout Faes','DEF',4,81),
      p('BEL_5','Maxim De Cuyper','DEF',5,78), p('BEL_21','Timothy Castagne','DEF',21,81), p('BEL_15','Thomas Meunier','DEF',15,79),
      p('BEL_25','Koni De Winter','DEF',25,77), p('BEL_26','Ameen Al-Dakhil','DEF',26,76), p('BEL_6','Amadou Onana','MID',6,83),
      p('BEL_8','Youri Tielemans','MID',8,82), p('BEL_7','Kevin De Bruyne','MID',7,88), p('BEL_18','Orel Mangala','MID',18,79),
      p('BEL_24','Arthur Vermeeren','MID',24,78), p('BEL_16','Aster Vranckx','MID',16,77), p('BEL_20','Charles De Ketelaere','MID',20,81),
      p('BEL_9','Leandro Trossard','FWD',9,83), p('BEL_10','Romelu Lukaku','FWD',10,85), p('BEL_11','Yannick Carrasco','FWD',11,81),
      p('BEL_22','Jérémy Doku','FWD',22,84), p('BEL_19','Johan Bakayoko','FWD',19,82), p('BEL_14','Dodi Lukebakio','FWD',14,80),
      p('BEL_23','Loïs Openda','FWD',23,83), p('BEL_17','Michy Batshuayi','FWD',17,79),
    ]
  },

  // 26. EGIPTO
  {
    id: 'EGY', name: 'Egipto', nameEn: 'Egypt', flag: '🇪🇬', continent: 'África',
    kitHome: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#000000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Hossam Hassan', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('EGY_1','Mohamed El Shenawy','GK',1,81), p('EGY_16','Mohamed Abou Gabal','GK',16,78), p('EGY_23','Mahmoud Gad','GK',23,75),
      p('EGY_2','Ali Gabr','DEF',2,77), p('EGY_3','Mohamed Hany','DEF',3,78), p('EGY_4','Omar Kamal','DEF',4,77),
      p('EGY_6','Ahmed Hegazy','DEF',6,79), p('EGY_13','Ahmed Abou El Fotouh','DEF',13,78), p('EGY_24','Mohamed Abdelmonem','DEF',24,80),
      p('EGY_12','Mohamed Hamdi','DEF',12,76), p('EGY_15','Yasser Ibrahim','DEF',15,77), p('EGY_5','Hamdi Fathi','MID',5,79),
      p('EGY_8','Emam Ashour','MID',8,80), p('EGY_17','Mohamed Elneny','MID',17,79), p('EGY_14','Marwan Attia','MID',14,78),
      p('EGY_21','Zizo','MID',21,80), p('EGY_20','Mahmoud Hamada','MID',20,76), p('EGY_25','Ahmed Nabil Koka','MID',25,75),
      p('EGY_10','Mohamed Salah','FWD',10,88), p('EGY_7','Trézéguet','FWD',7,81), p('EGY_22','Omar Marmoush','FWD',22,82),
      p('EGY_11','Kahraba','FWD',11,78), p('EGY_19','Mostafa Mohamed','FWD',19,81), p('EGY_9','Ahmed Hassan Kouka','FWD',9,77),
      p('EGY_18','Mostafa Fathi','FWD',18,78), p('EGY_26','Ahmed Yasser Rayyan','FWD',26,76),
    ]
  },

  // 27. IRÁN
  {
    id: 'IRN', name: 'Irán', nameEn: 'Iran', flag: '🇮🇷', continent: 'Asia',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    coach: 'Amir Ghalenoei', rating: 3.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('IRN_1','Alireza Beiranvand','GK',1,81), p('IRN_12','Payam Niazmand','GK',12,77), p('IRN_22','Hossein Hosseini','GK',22,78),
      p('IRN_2','Sadegh Moharrami','DEF',2,78), p('IRN_3','Ehsan Hajsafi','DEF',3,79), p('IRN_4','Shojae Khalilzadeh','DEF',4,78),
      p('IRN_5','Milad Mohammadi','DEF',5,77), p('IRN_13','Hossein Kanaani','DEF',13,78), p('IRN_19','Majid Hosseini','DEF',19,79),
      p('IRN_23','Ramin Rezaeian','DEF',23,79), p('IRN_24','Aria Yousefi','DEF',24,75), p('IRN_6','Saeid Ezatolahi','MID',6,79),
      p('IRN_14','Saman Ghoddos','MID',14,79), p('IRN_15','Rouzbeh Cheshmi','MID',15,77), p('IRN_8','Omid Ebrahimi','MID',8,77),
      p('IRN_16','Mehdi Torabi','MID',16,78), p('IRN_21','Mohammad Mohebi','MID',21,78), p('IRN_7','Alireza Jahanbakhsh','FWD',7,80),
      p('IRN_9','Mehdi Taremi','FWD',9,84), p('IRN_10','Karim Ansarifard','FWD',10,77), p('IRN_20','Sardar Azmoun','FWD',20,83),
      p('IRN_11','Reza Asadi','FWD',11,76), p('IRN_17','Ali Gholizadeh','FWD',17,78), p('IRN_18','Mehdi Ghayedi','FWD',18,79),
      p('IRN_25','Shahriyar Moghanlou','FWD',25,76), p('IRN_26','Saeid Saharkhizan','FWD',26,74),
    ]
  },

  // 28. NUEVA ZELANDA
  {
    id: 'NZL', name: 'Nueva Zelanda', nameEn: 'New Zealand', flag: '🇳🇿', continent: 'Oceanía',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#000000' },
    coach: 'Darren Bazeley', rating: 2.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NZL_1','Oliver Sail','GK',1,75), p('NZL_12','Max Crocombe','GK',12,73), p('NZL_21','Alex Paulsen','GK',21,74),
      p('NZL_2','Tim Payne','DEF',2,73), p('NZL_3','Lukas Kelly-Heald','DEF',3,71), p('NZL_4','Nando Pijnaker','DEF',4,74),
      p('NZL_5','Michael Boxall','DEF',5,75), p('NZL_13','Liberato Cacace','DEF',13,78), p('NZL_14','Finn Surman','DEF',14,73),
      p('NZL_15','Tommy Smith','DEF',15,74), p('NZL_22','Tyler Bindon','DEF',22,73), p('NZL_6','Joe Bell','MID',6,75),
      p('NZL_8','Marko Stamenic','MID',8,77), p('NZL_10','Sarpreet Singh','MID',10,76), p('NZL_16','Alex Rufer','MID',16,73),
      p('NZL_19','Matthew Garbett','MID',19,75), p('NZL_23','Clayton Lewis','MID',23,74), p('NZL_20','Ben Old','MID',20,73),
      p('NZL_7','Kosta Barbarouses','FWD',7,74), p('NZL_9','Chris Wood','FWD',9,81), p('NZL_11','Elijah Just','FWD',11,75),
      p('NZL_17','Callum McCowatt','FWD',17,74), p('NZL_18','Ben Waine','FWD',18,74), p('NZL_24','Max Mata','FWD',24,73),
      p('NZL_25','Oskar van Hattum','FWD',25,71), p('NZL_26','Alex Greive','FWD',26,72),
    ]
  },

  // ── GRUPO H ────────────────────────────────────────────

  // 29. CABO VERDE
  {
    id: 'CVE', name: 'Cabo Verde', nameEn: 'Cape Verde', flag: '🇨🇻', continent: 'África',
    kitHome: { shirt: '#003893', shorts: '#FFFFFF', socks: '#CF2027' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003893', socks: '#FFFFFF' },
    coach: 'Bubista', rating: 2.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CVE_1','Vozinha','GK',1,77), p('CVE_12','Márcio da Rosa','GK',12,73), p('CVE_22','Dylan Silva','GK',22,72),
      p('CVE_2','Stopira','DEF',2,75), p('CVE_3','Logan Costa','DEF',3,79), p('CVE_4','Pico','DEF',4,76),
      p('CVE_5','Edilson Borges','DEF',5,74), p('CVE_16','Dylan Tavares','DEF',16,75), p('CVE_23','Steven Moreira','DEF',23,76),
      p('CVE_26','João Correia','DEF',26,74), p('CVE_6','Patrick Andrade','MID',6,76), p('CVE_8','João Paulo','MID',8,75),
      p('CVE_10','Jamiro Monteiro','MID',10,77), p('CVE_14','Deroy Duarte','MID',14,75), p('CVE_18','Kenny Rocha Santos','MID',18,76),
      p('CVE_21','Kevin Pina','MID',21,78), p('CVE_25','Laros Duarte','MID',25,75), p('CVE_7','Jovane Cabral','FWD',7,79),
      p('CVE_9','Gilson Benchimol','FWD',9,74), p('CVE_11','Garry Rodrigues','FWD',11,78), p('CVE_17','Willy Semedo','FWD',17,76),
      p('CVE_19','Bryan Teixeira','FWD',19,75), p('CVE_20','Ryan Mendes','FWD',20,78), p('CVE_24','Bebé','FWD',24,77),
      p('CVE_15','Dailon Livramento','FWD',15,73), p('CVE_13','Diogo Mendes','MID',13,72),
    ]
  },

  // 30. ARABIA SAUDÍ
  {
    id: 'KSA', name: 'Arabia Saudí', nameEn: 'Saudi Arabia', flag: '🇸🇦', continent: 'Asia',
    kitHome: { shirt: '#006233', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#006233', socks: '#006233' },
    coach: 'Roberto Mancini', rating: 3.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('KSA_1','Mohammed Al-Rubaie','GK',1,76), p('KSA_21','Mohammed Al-Owais','GK',21,79), p('KSA_22','Ahmed Al-Kassar','GK',22,77),
      p('KSA_2','Fawaz Al-Sqoor','DEF',2,75), p('KSA_3','Awn Al-Saluli','DEF',3,74), p('KSA_4','Ali Lajami','DEF',4,77),
      p('KSA_5','Ali Al-Bulaihi','DEF',5,78), p('KSA_12','Saud Abdulhamid','DEF',12,80), p('KSA_13','Hassan Kadesh','DEF',13,76),
      p('KSA_25','Mohammed Al-Breik','DEF',25,77), p('KSA_17','Hassan Al-Tambakti','DEF',17,78), p('KSA_6','Eid Al-Muwallad','MID',6,74),
      p('KSA_8','Abdulellah Al-Malki','MID',8,77), p('KSA_10','Salem Al-Dawsari','MID',10,81), p('KSA_15','Abdullah Al-Khaibari','MID',15,76),
      p('KSA_16','Sami Al-Najei','MID',16,77), p('KSA_23','Mohamed Kanno','MID',23,79), p('KSA_24','Nasser Al-Dawsari','MID',24,76),
      p('KSA_7','Mukhtar Ali','MID',7,75), p('KSA_18','Abdulrahman Ghareeb','FWD',18,78), p('KSA_9','Firas Al-Buraikan','FWD',9,79),
      p('KSA_11','Saleh Al-Shehri','FWD',11,78), p('KSA_20','Abdullah Radif','FWD',20,75), p('KSA_14','Talal Haji','FWD',14,73),
      p('KSA_19','Fahad Al-Muwallad','FWD',19,77), p('KSA_26','Ayman Yahya','FWD',26,75),
    ]
  },

  // 31. ESPAÑA
  {
    id: 'ESP', name: 'España', nameEn: 'Spain', flag: '🇪🇸', continent: 'Europa',
    kitHome: { shirt: '#CE1126', shorts: '#003087', socks: '#CE1126' },
    kitAway: { shirt: '#FFFF00', shorts: '#FFFF00', socks: '#FFFF00' },
    coach: 'Luis de la Fuente', rating: 4.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ESP_1','Unai Simón','GK',1,86), p('ESP_13','David Raya','GK',13,84), p('ESP_23','Álex Remiro','GK',23,83),
      p('ESP_2','Dani Carvajal','DEF',2,87), p('ESP_3','Robin Le Normand','DEF',3,84), p('ESP_4','Dani Vivian','DEF',4,82),
      p('ESP_14','Aymeric Laporte','DEF',14,85), p('ESP_12','Alejandro Grimaldo','DEF',12,84), p('ESP_22','Marc Cucurella','DEF',22,83), 
      p('ESP_15','Pau Cubarsí','DEF',15,81), p('ESP_24','Pedro Porro','DEF',24,82), p('ESP_16','Rodri Hernández','MID',16,91),
      p('ESP_6','Martin Zubimendi','MID',6,84), p('ESP_8','Fabián Ruiz','MID',8,85), p('ESP_10','Dani Olmo','MID',10,87),
      p('ESP_20','Pedri','MID',20,86), p('ESP_18','Mikel Merino','MID',18,83), p('ESP_21','Álex Baena','MID',21,82),
      p('ESP_26','Gavi','MID',26,85), p('ESP_7','Álvaro Morata','FWD',7,83), p('ESP_9','Joselu','FWD',9,81), 
      p('ESP_11','Nico Williams','FWD',11,87), p('ESP_19','Lamine Yamal','FWD',19,90), p('ESP_25','Mikel Oyarzabal','FWD',25,83), 
      p('ESP_17','Ferran Torres','FWD',17,81), p('ESP_5','Ayoze Pérez','FWD',5,80),
    ]
  },

  // 32. URUGUAY
  {
    id: 'URY', name: 'Uruguay', nameEn: 'Uruguay', flag: '🇺🇾', continent: 'Sudamérica',
    kitHome: { shirt: '#003087', shorts: '#000000', socks: '#000000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Marcelo Bielsa', rating: 4.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('URY_1','Sergio Rochet','GK',1,82), p('URY_23','Santiago Mele','GK',23,79), p('URY_12','Franco Israel','GK',12,77),
      p('URY_2','José María Giménez','DEF',2,84), p('URY_3','Sebastián Cáceres','DEF',3,80), p('URY_4','Ronald Araújo','DEF',4,86),
      p('URY_16','Mathías Olivera','DEF',16,81), p('URY_17','Matías Viña','DEF',17,80), p('URY_22','Nicolás Marichal','DEF',22,78),
      p('URY_13','Guillermo Varela','DEF',13,78), p('URY_24','Lucas Olaza','DEF',24,77), p('URY_5','Manuel Ugarte','MID',5,83),
      p('URY_6','Rodrigo Bentancur','MID',6,83), p('URY_7','Nicolás de la Cruz','MID',7,82), p('URY_8','Nahitan Nández','MID',8,80),
      p('URY_15','Federico Valverde','MID',15,88), p('URY_10','Giorgian de Arrascaeta','MID',10,82), p('URY_21','Emiliano Martínez','MID',21,77),
      p('URY_14','Agustín Canobbio','MID',14,79), p('URY_11','Facundo Pellistri','FWD',11,80), p('URY_20','Maximiliano Araújo','FWD',20,81),
      p('URY_9','Luis Suárez','FWD',9,81), p('URY_19','Darwin Núñez','FWD',19,85), p('URY_18','Brian Rodríguez','FWD',18,79),
      p('URY_25','Cristian Olivera','FWD',25,78), p('URY_26','Brian Ocampo','FWD',26,77),
    ]
  },
  // ── GRUPO I ────────────────────────────────────────────

  // 33. FRANCIA
  {
    id: 'FRA', name: 'Francia', nameEn: 'France', flag: '🇫🇷', continent: 'Europa',
    kitHome: { shirt: '#003087', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003087', socks: '#FFFFFF' },
    coach: 'Didier Deschamps', rating: 5.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('FRA_1','Mike Maignan','GK',1,87), p('FRA_16','Brice Samba','GK',16,81), p('FRA_23','Alphonse Areola','GK',23,82),
      p('FRA_2','Benjamin Pavard','DEF',2,83), p('FRA_3','Ferland Mendy','DEF',3,83), p('FRA_4','Dayot Upamecano','DEF',4,84),
      p('FRA_5','Jules Koundé','DEF',5,85), p('FRA_17','William Saliba','DEF',17,87), p('FRA_22','Théo Hernández','DEF',22,86),
      p('FRA_21','Jonathan Clauss','DEF',21,81), p('FRA_24','Ibrahima Konaté','DEF',24,84), p('FRA_6','Eduardo Camavinga','MID',6,85),
      p('FRA_8','Aurélien Tchouaméni','MID',8,86), p('FRA_13','N\'Golo Kanté','MID',13,85), p('FRA_14','Adrien Rabiot','MID',14,84),
      p('FRA_18','Warren Zaïre-Emery','MID',18,81), p('FRA_19','Youssouf Fofana','MID',19,82), p('FRA_7','Antoine Griezmann','FWD',7,87),
      p('FRA_9','Olivier Giroud','FWD',9,82), p('FRA_10','Kylian Mbappé','FWD',10,92), p('FRA_11','Ousmane Dembélé','FWD',11,85),
      p('FRA_12','Randal Kolo Muani','FWD',12,82), p('FRA_15','Marcus Thuram','FWD',15,83), p('FRA_20','Kingsley Coman','FWD',20,84),
      p('FRA_25','Bradley Barcola','FWD',25,82), p('FRA_26','Moussa Diaby','FWD',26,83),
    ]
  },

  // 34. IRAK
  {
    id: 'IRQ', name: 'Irak', nameEn: 'Iraq', flag: '🇮🇶', continent: 'Asia',
    kitHome: { shirt: '#006233', shorts: '#FFFFFF', socks: '#000000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#006233', socks: '#FFFFFF' },
    coach: 'Jesús Casas', rating: 2.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('IRQ_1','Fahad Talib','GK',1,74), p('IRQ_12','Jalal Hassan','GK',12,76), p('IRQ_22','Ahmed Basil','GK',22,73),
      p('IRQ_2','Rebin Sulaka','DEF',2,75), p('IRQ_3','Hussein Ali','DEF',3,74), p('IRQ_4','Saad Natiq','DEF',4,75),
      p('IRQ_5','Frans Putros','DEF',5,74), p('IRQ_6','Ali Adnan','DEF',6,76), p('IRQ_15','Zaid Tahseen','DEF',15,73),
      p('IRQ_23','Merchas Doski','DEF',23,75), p('IRQ_24','Mustafa Nadhim','DEF',24,72), p('IRQ_7','Safaa Hadi','MID',7,74),
      p('IRQ_8','Ibrahim Bayesh','MID',8,76), p('IRQ_11','Zidane Iqbal','MID',11,78), p('IRQ_13','Bashar Resan','MID',13,75),
      p('IRQ_14','Amir Al-Ammari','MID',14,75), p('IRQ_16','Amjad Attwan','MID',16,74), p('IRQ_19','Osama Rashid','MID',19,74),
      p('IRQ_20','Ahmad Allee','MID',20,73), p('IRQ_21','Ahmad Farhan','MID',21,72), p('IRQ_9','Aymen Hussein','FWD',9,77),
      p('IRQ_10','Mohanad Ali','FWD',10,75), p('IRQ_17','Ali Al-Hamadi','FWD',17,76), p('IRQ_18','Ali Jasim','FWD',18,75),
      p('IRQ_25','Pashang Abdulla','FWD',25,72), p('IRQ_26','Youssef Amyn','FWD',26,73),
    ]
  },

  // 35. NORUEGA
  {
    id: 'NOR', name: 'Noruega', nameEn: 'Norway', flag: '🇳🇴', continent: 'Europa',
    kitHome: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#00205B' },
    kitAway: { shirt: '#FFFFFF', shorts: '#00205B', socks: '#FFFFFF' },
    coach: 'Ståle Solbakken', rating: 3.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NOR_1','Ørjan Nyland','GK',1,78), p('NOR_12','Mathias Dyngeland','GK',12,75), p('NOR_23','Egil Selvik','GK',23,74),
      p('NOR_3','Kristoffer Ajer','DEF',3,80), p('NOR_4','Stefan Strandberg','DEF',4,77), p('NOR_5','Birger Meling','DEF',5,78),
      p('NOR_14','Julian Ryerson','DEF',14,80), p('NOR_15','Leo Østigård','DEF',15,79), p('NOR_17','Fredrik Bjørkan','DEF',17,77),
      p('NOR_21','Andreas Hanche-Olsen','DEF',21,78), p('NOR_2','Marcus Holmgren Pedersen','DEF',2,77), p('NOR_6','Patrick Berg','MID',6,79),
      p('NOR_8','Sander Berge','MID',8,81), p('NOR_10','Martin Ødegaard','MID',10,87), p('NOR_16','Hugo Vetlesen','MID',16,78),
      p('NOR_18','Kristian Thorstvedt','MID',18,78), p('NOR_24','Oscar Bobb','MID',24,80), p('NOR_25','Aron Dønnum','MID',25,76),
      p('NOR_7','Antonio Nusa','FWD',7,79), p('NOR_9','Erling Haaland','FWD',9,91), p('NOR_11','Mohamed Elyounoussi','FWD',11,79),
      p('NOR_19','Alexander Sørloth','FWD',19,83), p('NOR_20','Jørgen Strand Larsen','FWD',20,80), p('NOR_22','Ola Solbakken','FWD',22,77),
      p('NOR_13','Bård Finne','FWD',13,76), p('NOR_26','Osame Sahraoui','FWD',26,77),
    ]
  },

  // 36. SENEGAL
  {
    id: 'SEN', name: 'Senegal', nameEn: 'Senegal', flag: '🇸🇳', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#00853F', shorts: '#00853F', socks: '#00853F' },
    coach: 'Aliou Cissé', rating: 4.2,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SEN_1','Seny Dieng','GK',1,78), p('SEN_16','Édouard Mendy','GK',16,83), p('SEN_23','Mory Diaw','GK',23,76),
      p('SEN_2','Fodé Ballo-Touré','DEF',2,77), p('SEN_3','Kalidou Koulibaly','DEF',3,84), p('SEN_4','Abdou Diallo','DEF',4,80),
      p('SEN_12','Formose Mendy','DEF',12,77), p('SEN_14','Ismail Jakobs','DEF',14,78), p('SEN_19','Moussa Niakhaté','DEF',19,79),
      p('SEN_21','Youssouf Sabaly','DEF',21,79), p('SEN_22','Abdoulaye Seck','DEF',22,77), p('SEN_5','Idrissa Gueye','MID',5,81),
      p('SEN_6','Nampalys Mendy','MID',6,78), p('SEN_8','Cheikhou Kouyaté','MID',8,79), p('SEN_11','Pathé Ciss','MID',11,77),
      p('SEN_15','Krépin Diatta','MID',15,78), p('SEN_17','Pape Matar Sarr','MID',17,82), p('SEN_25','Lamine Camara','MID',25,79),
      p('SEN_26','Pape Gueye','MID',26,79), p('SEN_7','Nicolas Jackson','FWD',7,82), p('SEN_9','Boulaye Dia','FWD',9,80),
      p('SEN_10','Sadio Mané','FWD',10,86), p('SEN_13','Iliman Ndiaye','FWD',13,80), p('SEN_18','Ismaïla Sarr','FWD',18,81),
      p('SEN_20','Habib Diallo','FWD',20,79), p('SEN_24','Abdallah Sima','FWD',24,78),
    ]
  },

  // ── GRUPO J ────────────────────────────────────────────

  // 37. ARGELIA
  {
    id: 'ALG', name: 'Argelia', nameEn: 'Algeria', flag: '🇩🇿', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#006233', shorts: '#006233', socks: '#006233' },
    coach: 'Vladimir Petković', rating: 4.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ALG_1','Moustapha Zeghba','GK',1,76), p('ALG_16','Anthony Mandrea','GK',16,78), p('ALG_23','Raïs M\'Bolhi','GK',23,77),
      p('ALG_2','Aïssa Mandi','DEF',2,81), p('ALG_3','Kevin Van Den Kerkhof','DEF',3,77), p('ALG_4','Mohamed Amine Tougai','DEF',4,76),
      p('ALG_5','Ahmed Touba','DEF',5,77), p('ALG_15','Rayan Aït-Nouri','DEF',15,82), p('ALG_20','Youcef Atal','DEF',20,80),
      p('ALG_21','Ramy Bensebaini','DEF',21,81), p('ALG_25','Zineddine Belaïd','DEF',25,75), p('ALG_6','Ramiz Zerrouki','MID',6,79),
      p('ALG_8','Youcef Belaïli','MID',8,79), p('ALG_10','Sofiane Feghouli','MID',10,78), p('ALG_11','Houssem Aouar','MID',11,81),
      p('ALG_14','Hicham Boudaoui','MID',14,79), p('ALG_19','Nabil Bentaleb','MID',19,80), p('ALG_22','Ismaël Bennacer','MID',22,83),
      p('ALG_26','Fares Chaïbi','MID',26,79), p('ALG_7','Riyad Mahrez','FWD',7,84), p('ALG_9','Baghdad Bounedjah','FWD',9,79),
      p('ALG_12','Adam Ounas','FWD',12,78), p('ALG_13','Islam Slimani','FWD',13,77), p('ALG_17','Amine Gouiri','FWD',17,81),
      p('ALG_18','Mohamed Amoura','FWD',18,80), p('ALG_24','Saïd Benrahma','FWD',24,80),
    ]
  },

  // 38. ARGENTINA
  {
    id: 'ARG', name: 'Argentina', nameEn: 'Argentina', flag: '🇦🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#43A1D5', shorts: '#000000', socks: '#FFFFFF' },
    kitAway: { shirt: '#000033', shorts: '#000033', socks: '#000033' },
    coach: 'Lionel Scaloni', rating: 5.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ARG_23','Emiliano Martínez','GK',23,88), p('ARG_1','Franco Armani','GK',1,80), p('ARG_12','Gerónimo Rulli','GK',12,82),
      p('ARG_2','Lucas Martínez Quarta','DEF',2,81), p('ARG_3','Nicolás Tagliafico','DEF',3,82), p('ARG_4','Gonzalo Montiel','DEF',4,81),
      p('ARG_6','Germán Pezzella','DEF',6,80), p('ARG_8','Marcos Acuña','DEF',8,82), p('ARG_13','Cristian Romero','DEF',13,87),
      p('ARG_19','Nicolás Otamendi','DEF',19,84), p('ARG_25','Lisandro Martínez','DEF',25,85), p('ARG_26','Nahuel Molina','DEF',26,83),
      p('ARG_5','Leandro Paredes','MID',5,83), p('ARG_7','Rodrigo De Paul','MID',7,85), p('ARG_14','Exequiel Palacios','MID',14,83),
      p('ARG_16','Giovani Lo Celso','MID',16,84), p('ARG_18','Guido Rodríguez','MID',18,81), p('ARG_20','Alexis Mac Allister','MID',20,86),
      p('ARG_24','Enzo Fernández','MID',24,86), p('ARG_9','Julián Álvarez','FWD',9,86), p('ARG_10','Lionel Messi','FWD',10,93),
      p('ARG_11','Ángel Di María','FWD',11,85), p('ARG_15','Nicolás González','FWD',15,82), p('ARG_17','Alejandro Garnacho','FWD',17,82),
      p('ARG_21','Valentín Carboni','FWD',21,79), p('ARG_22','Lautaro Martínez','FWD',22,87),
    ]
  },

  // 39. AUSTRIA
  {
    id: 'AUT', name: 'Austria', nameEn: 'Austria', flag: '🇦🇹', continent: 'Europa',
    kitHome: { shirt: '#ED2939', shorts: '#FFFFFF', socks: '#ED2939' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Ralf Rangnick', rating: 4.1,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('AUT_1','Heinz Lindner','GK',1,78), p('AUT_12','Niklas Hedl','GK',12,75), p('AUT_13','Patrick Pentz','GK',13,79),
      p('AUT_2','Maximilian Wöber','DEF',2,80), p('AUT_3','Gernot Trauner','DEF',3,78), p('AUT_4','Kevin Danso','DEF',4,81),
      p('AUT_5','Stefan Posch','DEF',5,80), p('AUT_15','Philipp Lienhart','DEF',15,80), p('AUT_16','Phillipp Mwene','DEF',16,78),
      p('AUT_21','Flavius Daniliuc','DEF',21,76), p('AUT_26','Leopold Querfeld','DEF',26,75), p('AUT_6','Nicolas Seiwald','MID',6,80),
      p('AUT_8','Alexander Prass','MID',8,77), p('AUT_9','Marcel Sabitzer','MID',9,84), p('AUT_10','Florian Grillitsch','MID',10,80),
      p('AUT_17','Florian Kainz','MID',17,78), p('AUT_18','Romano Schmid','MID',18,79), p('AUT_19','Christoph Baumgartner','MID',19,82),
      p('AUT_20','Konrad Laimer','MID',20,83), p('AUT_22','Matthias Seidl','MID',22,76), p('AUT_23','Patrick Wimmer','MID',23,79),
      p('AUT_7','Marko Arnautović','FWD',7,82), p('AUT_11','Michael Gregoritsch','FWD',11,80), p('AUT_14','Andreas Weimann','FWD',14,77),
      p('AUT_24','Maximilian Entrup','FWD',24,76), p('AUT_25','Marco Grüll','FWD',25,78),
    ]
  },

  // 40. JORDANIA
  {
    id: 'JOR', name: 'Jordania', nameEn: 'Jordan', flag: '🇯🇴', continent: 'Asia',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    coach: 'Hussein Ammouta', rating: 2.7,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('JOR_1','Yazid Abu Layla','GK',1,75), p('JOR_12','Abdallah Al-Fakhouri','GK',12,72), p('JOR_22','Ahmad Al-Juaidi','GK',22,70),
      p('JOR_2','Mohammad Abu Hasheesh','DEF',2,73), p('JOR_3','Abdallah Nasib','DEF',3,74), p('JOR_4','Bara\' Marei','DEF',4,72),
      p('JOR_5','Yazan Al-Arab','DEF',5,75), p('JOR_16','Feras Shelbaieh','DEF',16,73), p('JOR_17','Salem Al-Ajalin','DEF',17,73),
      p('JOR_19','Anas Bani Yaseen','DEF',19,72), p('JOR_23','Ihsan Haddad','DEF',23,74), p('JOR_6','Mohannad Abu Taha','MID',6,71),
      p('JOR_8','Noor Al-Rawabdeh','MID',8,74), p('JOR_14','Rajaei Ayed','MID',14,73), p('JOR_15','Ibrahim Sadeh','MID',15,72),
      p('JOR_18','Saleh Ratib','MID',18,73), p('JOR_21','Nizar Al-Rashdan','MID',21,74), p('JOR_24','Mahmoud Shawkat','MID',24,71),
      p('JOR_25','Anas Al-Awadat','MID',25,72), p('JOR_26','Fadi Awad','MID',26,71), p('JOR_7','Ali Olwan','FWD',7,76),
      p('JOR_9','Ali Iyad Olwan','FWD',9,75), p('JOR_10','Musa Al-Taamari','FWD',10,79), p('JOR_11','Yazan Al-Naimat','FWD',11,77),
      p('JOR_13','Mahmoud Al-Mardi','FWD',13,75), p('JOR_20','Hamza Al-Dardour','FWD',20,74),
    ]
  },
  // ── GRUPO K ────────────────────────────────────────────

  // 41. COLOMBIA
  {
    id: 'COL', name: 'Colombia', nameEn: 'Colombia', flag: '🇨🇴', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#003087', socks: '#CE1126' },
    kitAway: { shirt: '#1E1E1E', shorts: '#1E1E1E', socks: '#1E1E1E' },
    coach: 'Néstor Lorenzo', rating: 4.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('COL_1','David Ospina','GK',1,81), p('COL_12','Camilo Vargas','GK',12,83), p('COL_22','Álvaro Montero','GK',22,78),
      p('COL_2','Carlos Cuesta','DEF',2,80), p('COL_3','Jhon Lucumí','DEF',3,81), p('COL_4','Santiago Arias','DEF',4,79),
      p('COL_13','Yerry Mina','DEF',13,80), p('COL_17','Johan Mojica','DEF',17,80), p('COL_21','Daniel Muñoz','DEF',21,82),
      p('COL_23','Davinson Sánchez','DEF',23,82), p('COL_26','Deiver Machado','DEF',26,79), p('COL_5','Kevin Castaño','MID',5,78),
      p('COL_6','Richard Ríos','MID',6,82), p('COL_8','Jorge Carrascal','MID',8,80), p('COL_10','James Rodríguez','MID',10,85),
      p('COL_11','Jhon Arias','MID',11,83), p('COL_15','Mateus Uribe','MID',15,80), p('COL_16','Jefferson Lerma','MID',16,82),
      p('COL_20','Juan Fernando Quintero','MID',20,81), p('COL_25','Yaser Asprilla','MID',25,79), p('COL_7','Luis Díaz','FWD',7,87),
      p('COL_9','Miguel Borja','FWD',9,81), p('COL_14','Jhon Durán','FWD',14,80), p('COL_18','Luis Sinisterra','FWD',18,80),
      p('COL_19','Rafael Santos Borré','FWD',19,81), p('COL_24','Jhon Córdoba','FWD',24,82),
    ]
  },

  // 42. REPÚBLICA DEMOCRÁTICA DEL CONGO
  {
    id: 'COD', name: 'R.D. Congo', nameEn: 'DR Congo', flag: '🇨🇩', continent: 'África',
    kitHome: { shirt: '#00AEEF', shorts: '#CE1126', socks: '#F7D116' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Sébastien Desabre', rating: 3.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('COD_1','Lionel Mpasi','GK',1,78), p('COD_16','Dimitry Bertaud','GK',16,75), p('COD_23','Timothy Fayulu','GK',23,73),
      p('COD_2','Henoc Inonga','DEF',2,76), p('COD_5','Dylan Batubinsika','DEF',5,77), p('COD_12','Joris Kayembe','DEF',12,75),
      p('COD_22','Chancel Mbemba','DEF',22,83), p('COD_24','Gédéon Kalulu','DEF',24,78), p('COD_26','Arthur Masuaku','DEF',26,79),
      p('COD_4','Brian Bayeye','DEF',4,74), p('COD_15','Rocky Bushiri','DEF',15,73), p('COD_6','Aaron Tshibola','MID',6,75),
      p('COD_8','Samuel Moutoussamy','MID',8,77), p('COD_10','Théo Bongonda','MID',10,79), p('COD_13','Meschak Elia','MID',13,80),
      p('COD_14','Gaël Kakuta','MID',14,78), p('COD_18','Charles Pickel','MID',18,77), p('COD_25','Omenuke Mfulu','MID',25,75),
      p('COD_7','Grady Diangana','MID',7,78), p('COD_9','Fiston Mayele','FWD',9,76), p('COD_11','Silas Katompa Mvumpa','FWD',11,80),
      p('COD_17','Cédric Bakambu','FWD',17,81), p('COD_19','Fily Dabo','FWD',19,74), p('COD_20','Yoane Wissa','FWD',20,81),
      p('COD_21','Simon Banza','FWD',21,79), p('COD_3','Edo Kayembe','MID',3,77),
    ]
  },

  // 43. PORTUGAL
  {
    id: 'POR', name: 'Portugal', nameEn: 'Portugal', flag: '🇵🇹', continent: 'Europa',
    kitHome: { shirt: '#CE1126', shorts: '#006233', socks: '#CE1126' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Roberto Martínez', rating: 4.9,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('POR_22','Diogo Costa','GK',22,86), p('POR_1','Rui Patrício','GK',1,81), p('POR_12','José Sá','GK',12,80),
      p('POR_2','Nélson Semedo','DEF',2,81), p('POR_3','António Silva','DEF',3,83), p('POR_4','Rúben Dias','DEF',4,87),
      p('POR_5','Diogo Dalot','DEF',5,84), p('POR_14','Gonçalo Inácio','DEF',14,83), p('POR_19','Nuno Mendes','DEF',19,85),
      p('POR_20','João Cancelo','DEF',20,85), p('POR_24','Toti Gomes','DEF',24,79), p('POR_6','João Palhinha','MID',6,85),
      p('POR_8','Bruno Fernandes','MID',8,88), p('POR_10','Bernardo Silva','MID',10,87), p('POR_13','Danilo Pereira','MID',13,81),
      p('POR_15','João Neves','MID',15,83), p('POR_16','Matheus Nunes','MID',16,81), p('POR_18','Rúben Neves','MID',18,82),
      p('POR_23','Vitinha','MID',23,85), p('POR_7','Cristiano Ronaldo','FWD',7,86), p('POR_9','Gonçalo Ramos','FWD',9,83),
      p('POR_11','João Félix','FWD',11,83), p('POR_17','Rafael Leão','FWD',17,86), p('POR_21','Diogo Jota','FWD',21,84),
      p('POR_25','Pedro Neto','FWD',25,82), p('POR_26','Francisco Conceição','FWD',26,81),
    ]
  },

  // 44. UZBEKISTÁN
  {
    id: 'UZB', name: 'Uzbekistán', nameEn: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia',
    kitHome: { shirt: '#0099FF', shorts: '#FFFFFF', socks: '#0099FF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#0099FF', socks: '#FFFFFF' },
    coach: 'Srečko Katanec', rating: 2.8,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('UZB_1','Utkir Yusupov','GK',1,76), p('UZB_12','Abduvohid Nematov','GK',12,73), p('UZB_16','Botirali Ergashev','GK',16,72),
      p('UZB_2','Abdukodir Khusanov','DEF',2,76), p('UZB_3','Khojiakbar Alijonov','DEF',3,74), p('UZB_4','Farrukh Sayfiev','DEF',4,75),
      p('UZB_5','Rustam Ashurmatov','DEF',5,74), p('UZB_13','Sherzod Nasrullaev','DEF',13,73), p('UZB_15','Umar Eshmurodov','DEF',15,74),
      p('UZB_23','Husniddin Aliqulov','DEF',23,75), p('UZB_26','Zafarmurod Abdurakhmatov','DEF',26,71), p('UZB_6','Diyor Kholmatov','MID',6,73),
      p('UZB_7','Otabek Shukurov','MID',7,76), p('UZB_8','Jamshid Iskanderov','MID',8,75), p('UZB_9','Odiljon Hamrobekov','MID',9,76),
      p('UZB_10','Jaloliddin Masharipov','MID',10,78), p('UZB_11','Oston Urunov','MID',11,77), p('UZB_14','Jamshid Boltaboev','MID',14,73),
      p('UZB_18','Abdulla Abdullaev','MID',18,74), p('UZB_19','Azizbek Turgunboev','MID',19,75), p('UZB_20','Khojimat Erkinov','MID',20,74),
      p('UZB_22','Abbosbek Fayzullaev','MID',22,78), p('UZB_17','Bobur Abdikholikov','FWD',17,74), p('UZB_21','Igor Sergeev','FWD',21,75),
      p('UZB_24','Azizbek Amonov','FWD',24,73), p('UZB_14','Eldor Shomurodov','FWD',14,80),
    ]
  },

  // ── GRUPO L ────────────────────────────────────────────

  // 45. CROACIA
  {
    id: 'CRO', name: 'Croacia', nameEn: 'Croatia', flag: '🇭🇷', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#00205B', shorts: '#00205B', socks: '#00205B' },
    coach: 'Zlatko Dalić', rating: 4.5,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CRO_1','Dominik Livaković','GK',1,84), p('CRO_12','Nediljko Labrović','GK',12,78), p('CRO_23','Ivica Ivušić','GK',23,79),
      p('CRO_2','Josip Stanišić','DEF',2,81), p('CRO_3','Marin Pongračić','DEF',3,80), p('CRO_4','Joško Gvardiol','DEF',4,86),
      p('CRO_5','Martin Erlić','DEF',5,79), p('CRO_6','Josip Šutalo','DEF',6,81), p('CRO_19','Borna Sosa','DEF',19,80),
      p('CRO_21','Domagoj Vida','DEF',21,78), p('CRO_22','Josip Juranović','DEF',22,80), p('CRO_7','Lovro Majer','MID',7,83),
      p('CRO_8','Mateo Kovačić','MID',8,85), p('CRO_10','Luka Modrić','MID',10,87), p('CRO_11','Marcelo Brozović','MID',11,84),
      p('CRO_13','Nikola Vlašić','MID',13,80), p('CRO_15','Mario Pašalić','MID',15,81), p('CRO_25','Luka Sučić','MID',25,80),
      p('CRO_26','Martin Baturina','MID',26,79), p('CRO_9','Andrej Kramarić','FWD',9,83), p('CRO_14','Ivan Perišić','FWD',14,81),
      p('CRO_16','Ante Budimir','FWD',16,81), p('CRO_17','Bruno Petković','FWD',17,80), p('CRO_18','Luka Ivanušec','FWD',18,79),
      p('CRO_20','Marko Pjaca','FWD',20,78), p('CRO_24','Marco Pašalić','FWD',24,78),
    ]
  },

  // 46. INGLATERRA
  {
    id: 'ENG', name: 'Inglaterra', nameEn: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#003087', socks: '#FFFFFF' },
    kitAway: { shirt: '#1A1C20', shorts: '#1A1C20', socks: '#1A1C20' },
    coach: 'Lee Carsley', rating: 4.9,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ENG_1','Jordan Pickford','GK',1,84), p('ENG_13','Aaron Ramsdale','GK',13,82), p('ENG_23','Dean Henderson','GK',23,80),
      p('ENG_2','Kyle Walker','DEF',2,84), p('ENG_3','Luke Shaw','DEF',3,82), p('ENG_5','John Stones','DEF',5,85),
      p('ENG_6','Marc Guéhi','DEF',6,83), p('ENG_12','Kieran Trippier','DEF',12,82), p('ENG_14','Ezri Konsa','DEF',14,81),
      p('ENG_15','Lewis Dunk','DEF',15,80), p('ENG_22','Joe Gomez','DEF',22,81), p('ENG_4','Declan Rice','MID',4,87),
      p('ENG_8','Trent Alexander-Arnold','MID',8,84), p('ENG_10','Jude Bellingham','MID',10,91), p('ENG_16','Conor Gallagher','MID',16,81),
      p('ENG_25','Adam Wharton','MID',25,78), p('ENG_26','Kobbie Mainoo','MID',26,82), p('ENG_7','Bukayo Saka','FWD',7,88),
      p('ENG_9','Harry Kane','FWD',9,90), p('ENG_11','Phil Foden','FWD',11,88), p('ENG_17','Ivan Toney','FWD',17,82),
      p('ENG_18','Anthony Gordon','FWD',18,83), p('ENG_19','Ollie Watkins','FWD',19,84), p('ENG_20','Jarrod Bowen','FWD',20,82),
      p('ENG_21','Eberechi Eze','FWD',21,81), p('ENG_24','Cole Palmer','FWD',24,85),
    ]
  },

  // 47. GHANA
  {
    id: 'GHA', name: 'Ghana', nameEn: 'Ghana', flag: '🇬🇭', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    coach: 'Otto Addo', rating: 3.6,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GHA_1','Richard Ofori','GK',1,76), p('GHA_12','Jojo Wollacott','GK',12,74), p('GHA_16','Lawrence Ati-Zigi','GK',16,77),
      p('GHA_2','Alidu Seidu','DEF',2,76), p('GHA_3','Denis Odoi','DEF',3,75), p('GHA_4','Nicholas Opoku','DEF',4,74),
      p('GHA_6','Mohammed Salisu','DEF',6,79), p('GHA_14','Gideon Mensah','DEF',14,75), p('GHA_18','Daniel Amartey','DEF',18,77),
      p('GHA_23','Alexander Djiku','DEF',23,79), p('GHA_5','Thomas Partey','MID',5,83), p('GHA_8','Majeed Ashimeru','MID',8,76),
      p('GHA_15','Elisha Owusu','MID',15,75), p('GHA_20','Mohammed Kudus','MID',20,84), p('GHA_21','Salis Abdul Samed','MID',21,78),
      p('GHA_22','Richmond Lamptey','MID',22,73), p('GHA_26','Iddrisu Baba','MID',26,76), p('GHA_7','Ransford-Yeboah Königsdörffer','FWD',7,75),
      p('GHA_9','Jordan Ayew','FWD',9,78), p('GHA_10','André Ayew','FWD',10,77), p('GHA_11','Osman Bukari','FWD',11,76),
      p('GHA_13','Joseph Paintsil','FWD',13,77), p('GHA_19','Iñaki Williams','FWD',19,81), p('GHA_24','Ernest Nuamah','FWD',24,78),
      p('GHA_25','Antoine Semenyo','FWD',25,79), p('GHA_17','Jonathan Mensah','DEF',17,75),
    ]
  },

  // 48. PANAMÁ
  {
    id: 'PAN', name: 'Panamá', nameEn: 'Panama', flag: '🇵🇦', continent: 'CONCACAF',
    kitHome: { shirt: '#CE1126', shorts: '#CE1126', socks: '#CE1126' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Thomas Christiansen', rating: 3.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('PAN_22','Orlando Mosquera','GK',22,76), p('PAN_1','Luis Mejía','GK',1,75), p('PAN_12','César Samudio','GK',12,74),
      p('PAN_3','José Córdoba','DEF',3,77), p('PAN_4','Eduardo Anderson','DEF',4,74), p('PAN_25','Roderick Miller','DEF',25,75),
      p('PAN_15','Eric Davis','DEF',15,76), p('PAN_23','Michael Amir Murillo','DEF',23,78), p('PAN_2','César Blackman','DEF',2,75),
      p('PAN_19','Iván Anderson','DEF',19,73), p('PAN_24','Edgardo Fariña','DEF',24,73), p('PAN_8','Adalberto Carrasquilla','MID',8,79),
      p('PAN_20','Aníbal Godoy','MID',20,76), p('PAN_6','Cristian Martínez','MID',6,74), p('PAN_5','Abdiel Ayarza','MID',5,74),
      p('PAN_16','Carlos Harvey','MID',16,73), p('PAN_14','Jovani Welch','MID',14,72), p('PAN_10','Édgar Bárcenas','MID',10,77),
      p('PAN_7','José Luis Rodríguez','MID',7,76), p('PAN_21','César Yanis','MID',21,73), p('PAN_26','Kahiser Lenis','MID',26,71),
      p('PAN_17','José Fajardo','FWD',17,76), p('PAN_11','Ismael Díaz','FWD',11,75), p('PAN_9','Eduardo Guerrero','FWD',9,74),
      p('PAN_13','Freddy Góndola','FWD',13,73), p('PAN_18','Cecilio Waterman','FWD',18,74),
    ]
  }
];


