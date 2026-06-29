// ══════════════════════════════════════════════════════════
//  COUNTRIES CURRENT — Selecciones actuales 2024-2025
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

  // ── 1. ESPAÑA ─────────────────────────────────────────
  {
    id: 'ESP', name: 'España', nameEn: 'Spain', flag: '🇪🇸', continent: 'Europa',
    kitHome: { shirt: '#FF0000', shorts: '#000080', socks: '#FF0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000080', socks: '#FFFFFF' },
    coach: 'Luis de la Fuente', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ESP_1','Unai Simón','GK',1,88), p('ESP_12','David Raya','GK',12,87), p('ESP_23','Álex Remiro','GK',23,86),
      p('ESP_2','Jesús Nacho','DEF',2,84), p('ESP_3','Alejandro Balde','DEF',3,82), p('ESP_4','Pau Torres','DEF',4,85),
      p('ESP_5','Sergio Ramos','DEF',5,83), p('ESP_6','Aymeric Laporte','DEF',6,86), p('ESP_15','Ferran Torres','DEF',15,82),
      p('ESP_16','Aarón Martín','DEF',16,80), p('ESP_20','Fontás','DEF',20,79),
      p('ESP_7','Alejandro Garnacho','MID',7,81), p('ESP_8','Xavi Hernández','MID',8,85), p('ESP_10','Gavi','MID',10,86),
      p('ESP_11','Pedri','MID',11,87), p('ESP_18','Sergio Busquets','MID',18,82), p('ESP_19','Iñigo Martínez','MID',19,84),
      p('ESP_9','Álvaro Morata','FWD',9,85), p('ESP_13','Ferran Torres','FWD',13,85), p('ESP_14','Bruma','FWD',14,80),
      p('ESP_17','José Luis Gayà','FWD',17,81), p('ESP_21','Gorka Guruzeta','FWD',21,79), p('ESP_22','Ansu Fati','FWD',22,83),
    ]
  },

  // ── 2. ALEMANIA ───────────────────────────────────────
  {
    id: 'GER', name: 'Alemania', nameEn: 'Germany', flag: '🇩🇪', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#000000' },
    coach: 'Julian Nagelsmann', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GER_1','Manuel Neuer','GK',1,87), p('GER_12','Marc-André ter Stegen','GK',12,89), p('GER_23','Oliver Baumann','GK',23,84),
      p('GER_2','Antonio Rüdiger','DEF',2,85), p('GER_3','David Raum','DEF',3,83), p('GER_4','Mats Hummels','DEF',4,83),
      p('GER_5','Jonathan Tah','DEF',5,84), p('GER_6','Ruslan Malinovskyi','DEF',6,80), p('GER_15','Thomas Müller','DEF',15,83),
      p('GER_16','Robin Gosens','DEF',16,81), p('GER_20','Thilo Kehrer','DEF',20,82),
      p('GER_7','Florian Wirtz','MID',7,89), p('GER_8','Kai Havertz','MID',8,86), p('GER_10','Jamal Musiala','MID',10,89),
      p('GER_11','Joshua Kimmich','MID',11,86), p('GER_18','Leon Goretzka','MID',18,84), p('GER_19','İlkay Gündoğan','MID',19,85),
      p('GER_9','Serge Gnabry','FWD',9,84), p('GER_13','Niclas Füllkrug','FWD',13,80), p('GER_14','Leroy Sané','FWD',14,85),
      p('GER_17','Thomas Müller','FWD',17,83), p('GER_21','Marco Reus','FWD',21,82), p('GER_22','Kingsley Coman','FWD',22,87),
    ]
  },

  // ── 3. BRASIL ─────────────────────────────────────────
  {
    id: 'BRA', name: 'Brasil', nameEn: 'Brazil', flag: '🇧🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#000080', socks: '#FFD700' },
    kitAway: { shirt: '#007FFF', shorts: '#007FFF', socks: '#FFFFFF' },
    coach: 'Dorival Júnior', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BRA_1','Alisson','GK',1,88), p('BRA_12','Éderson','GK',12,86), p('BRA_23','Lucas Perri','GK',23,81),
      p('BRA_2','Danilo','DEF',2,84), p('BRA_3','Alex Telles','DEF',3,81), p('BRA_4','Thiago Silva','DEF',4,83),
      p('BRA_5','Marquinhos','DEF',5,85), p('BRA_6','Éder Militão','DEF',6,85), p('BRA_15','Bremer','DEF',15,82),
      p('BRA_16','Pedro Guilherme','DEF',16,79), p('BRA_20','Weverton','DEF',20,83),
      p('BRA_7','Neymar','MID',7,88), p('BRA_8','Lucas Paquetá','MID',8,85), p('BRA_10','Vinicius Junior','MID',10,89),
      p('BRA_11','Rodrygo','MID',11,86), p('BRA_18','Fred','MID',18,82), p('BRA_19','João Félix','MID',19,84),
      p('BRA_9','Richarlison','FWD',9,84), p('BRA_13','Gabriel Jesus','FWD',13,84), p('BRA_14','Matheus Cunha','FWD',14,83),
      p('BRA_17','Antony','FWD',17,82), p('BRA_21','Vinícius Júnior','FWD',21,89), p('BRA_22','Raphinha','FWD',22,86),
    ]
  },

  // ── 4. ARGENTINA ──────────────────────────────────────
  {
    id: 'ARG', name: 'Argentina', nameEn: 'Argentina', flag: '🇦🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#74ACDF', shorts: '#FFFFFF', socks: '#74ACDF' },
    kitAway: { shirt: '#000080', shorts: '#FFFFFF', socks: '#000080' },
    coach: 'Lionel Scaloni', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ARG_1','Franco Armani','GK',1,86), p('ARG_12','Gerónimo Rulli','GK',12,85), p('ARG_23','Juan Musso','GK',23,84),
      p('ARG_2','Gonzalo Montiel','DEF',2,82), p('ARG_3','Lisandro Martínez','DEF',3,84), p('ARG_4','Nicolás Otamendi','DEF',4,84),
      p('ARG_5','Cristian Romero','DEF',5,85), p('ARG_6','Juan Foyth','DEF',6,82), p('ARG_15','Javier Mascherano','DEF',15,81),
      p('ARG_16','Tagliafico','DEF',16,81), p('ARG_20','Rojo','DEF',20,79),
      p('ARG_7','Alejandro Garnacho','MID',7,84), p('ARG_8','Lautaro Martínez','MID',8,86), p('ARG_10','Lionel Messi','MID',10,91),
      p('ARG_11','Éver Banega','MID',11,81), p('ARG_18','Leandro Paredes','MID',18,83), p('ARG_19','Enzo Fernández','MID',19,86),
      p('ARG_9','Sergio Agüero','FWD',9,82), p('ARG_13','Sergio Agüero','FWD',13,82), p('ARG_14','Mario Kempes','FWD',14,80),
      p('ARG_17','Pablo Dybala','FWD',17,85), p('ARG_21','Julián Álvarez','FWD',21,84), p('ARG_22','Ángel Di María','FWD',22,84),
    ]
  },

  // ── 5. FRANCIA ────────────────────────────────────────
  {
    id: 'FRA', name: 'Francia', nameEn: 'France', flag: '🇫🇷', continent: 'Europa',
    kitHome: { shirt: '#003189', shorts: '#FFFFFF', socks: '#FF0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003189', socks: '#FFFFFF' },
    coach: 'Didier Deschamps', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('FRA_1','Hugo Lloris','GK',1,85), p('FRA_12','Alphonse Areola','GK',12,84), p('FRA_23','Steve Mandanda','GK',23,81),
      p('FRA_2','Jules Koundé','DEF',2,85), p('FRA_3','Benjamin Pavard','DEF',3,84), p('FRA_4','Dayot Upamecano','DEF',4,84),
      p('FRA_5','William Saliba','DEF',5,84), p('FRA_6','Raphaël Varane','DEF',6,84), p('FRA_15','Léo Dubois','DEF',15,80),
      p('FRA_16','Noël Le Graët','DEF',16,79), p('FRA_20','Lucas Hernández','DEF',20,83),
      p('FRA_7','Kylian Mbappé','MID',7,93), p('FRA_8','N\'Golo Kanté','MID',8,84), p('FRA_10','Aurélien Tchouaméni','MID',10,85),
      p('FRA_11','Eduardo Camavinga','MID',11,84), p('FRA_18','Adrien Rabiot','MID',18,83), p('FRA_19','Dayot Upamecano','MID',19,84),
      p('FRA_9','Karim Benzema','FWD',9,83), p('FRA_13','Ousmane Dembélé','FWD',13,86), p('FRA_14','Antoine Griezmann','FWD',14,85),
      p('FRA_17','Olivier Giroud','FWD',17,83), p('FRA_21','Christophe Dugarry','FWD',21,80), p('FRA_22','Thierry Henry','FWD',22,84),
    ]
  },

  // ── 6. ITALIA ─────────────────────────────────────────
  {
    id: 'ITA', name: 'Italia', nameEn: 'Italy', flag: '🇮🇹', continent: 'Europa',
    kitHome: { shirt: '#003399', shorts: '#003399', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#003399' },
    coach: 'Luciano Spalletti', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ITA_1','Gianluigi Donnarumma','GK',1,88), p('ITA_12','Matteo Perin','GK',12,84), p('ITA_23','Salvatore Sirigu','GK',23,82),
      p('ITA_2','Alessandro Florenzi','DEF',2,82), p('ITA_3','Luca Digne','DEF',3,82), p('ITA_4','Alessandro Bastoni','DEF',4,85),
      p('ITA_5','Giorgio Chiellini','DEF',5,83), p('ITA_6','Matteo Bonucci','DEF',6,84), p('ITA_15','Giovanni Di Lorenzo','DEF',15,82),
      p('ITA_16','Leonardo Bonucci','DEF',16,84), p('ITA_20','Gianluca Mancini','DEF',20,82),
      p('ITA_7','Davide Frattesi','MID',7,83), p('ITA_8','Nicolò Barella','MID',8,86), p('ITA_10','Marco Verratti','MID',10,84),
      p('ITA_11','Simone Inzaghi','MID',11,82), p('ITA_18','Stefano Sensi','MID',18,81), p('ITA_19','Bryan Cristante','MID',19,81),
      p('ITA_9','Ciro Immobile','FWD',9,84), p('ITA_13','Federico Chiesa','FWD',13,84), p('ITA_14','Giancarlo Antognoni','FWD',14,81),
      p('ITA_17','Luca Toni','FWD',17,80), p('ITA_21','Matteo Politano','FWD',21,82), p('ITA_22','Insigne','FWD',22,83),
    ]
  },

  // ── 7. PORTUGAL ───────────────────────────────────────
  {
    id: 'POR', name: 'Portugal', nameEn: 'Portugal', flag: '🇵🇹', continent: 'Europa',
    kitHome: { shirt: '#006600', shorts: '#FF0000', socks: '#FF0000' },
    kitAway: { shirt: '#FF0000', shorts: '#FF0000', socks: '#006600' },
    coach: 'Carlos Queiroz', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('POR_1','Rui Patrício','GK',1,85), p('POR_12','José Sá','GK',12,84), p('POR_23','Pepe Reina','GK',23,82),
      p('POR_2','João Cancelo','DEF',2,85), p('POR_3','Pepe','DEF',3,84), p('POR_4','Rúben Dias','DEF',4,85),
      p('POR_5','Nélson Semedo','DEF',5,83), p('POR_6','João Virgínia','DEF',6,80), p('POR_15','Gonçalo Inácio','DEF',15,82),
      p('POR_16','Tomás Tavares','DEF',16,79), p('POR_20','Ricardo Carvalho','DEF',20,81),
      p('POR_7','Bruma','MID',7,84), p('POR_8','Rúben Neves','MID',8,84), p('POR_10','Bruno Fernandes','MID',10,88),
      p('POR_11','Bernardo Silva','MID',11,86), p('POR_18','Moutinho','MID',18,81), p('POR_19','João Palhinha','MID',19,84),
      p('POR_9','Cristiano Ronaldo','FWD',9,88), p('POR_13','Gonçalo Guedes','FWD',13,82), p('POR_14','Pauleta','FWD',14,80),
      p('POR_17','Ricardo Horta','FWD',17,81), p('POR_21','Fábio Silva','FWD',21,80), p('POR_22','Rui Fonte','FWD',22,79),
    ]
  },

  // ── 8. INGLATERRA ─────────────────────────────────────
  {
    id: 'ENG', name: 'Inglaterra', nameEn: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FF0000' },
    kitAway: { shirt: '#FF0000', shorts: '#FF0000', socks: '#FF0000' },
    coach: 'Gareth Southgate', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ENG_1','Jordan Pickford','GK',1,85), p('ENG_12','Aaron Ramsdale','GK',12,83), p('ENG_23','Dean Henderson','GK',23,81),
      p('ENG_2','Reece James','DEF',2,84), p('ENG_3','Luke Shaw','DEF',3,82), p('ENG_4','Harry Maguire','DEF',4,83),
      p('ENG_5','John Stones','DEF',5,83), p('ENG_6','Kyle Walker','DEF',6,84), p('ENG_15','Phil Jones','DEF',15,79),
      p('ENG_16','Kieran Trippier','DEF',16,82), p('ENG_20','Aaron Wan-Bissaka','DEF',20,81),
      p('ENG_7','Bukayo Saka','MID',7,86), p('ENG_8','Jude Bellingham','MID',8,87), p('ENG_10','Harry Kane','MID',10,88),
      p('ENG_11','Declan Rice','MID',11,85), p('ENG_18','Mason Mount','MID',18,82), p('ENG_19','Phil Foden','MID',19,87),
      p('ENG_9','Dominic Solanke','FWD',9,83), p('ENG_13','Jack Grealish','FWD',13,86), p('ENG_14','Ollie Watkins','FWD',14,84),
      p('ENG_17','Marcus Rashford','FWD',17,85), p('ENG_21','Danny Welbeck','FWD',21,81), p('ENG_22','Raheem Sterling','FWD',22,85),
    ]
  },

  // ── 9. HOLANDA ────────────────────────────────────────
  {
    id: 'NED', name: 'Holanda', nameEn: 'Netherlands', flag: '🇳🇱', continent: 'Europa',
    kitHome: { shirt: '#FF6600', shorts: '#000000', socks: '#FF6600' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Ronald Koeman', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NED_1','Maarten Paes','GK',1,82), p('NED_12','Justin Bijlow','GK',12,84), p('NED_23','Jerzy Dudek','GK',23,80),
      p('NED_2','Stefan de Vrij','DEF',2,84), p('NED_3','Virgil van Dijk','DEF',3,86), p('NED_4','Tyrell Malacia','DEF',4,81),
      p('NED_5','Lutsharel Basile','DEF',5,80), p('NED_6','Daley Blind','DEF',6,82), p('NED_15','Jeroen Zoet','DEF',15,79),
      p('NED_16','Nathan Aké','DEF',16,83), p('NED_20','Owen Wijndal','DEF',20,80),
      p('NED_7','Wout Weghorst','MID',7,83), p('NED_8','Frenkie de Jong','MID',8,87), p('NED_10','Mathias de Ligt','MID',10,84),
      p('NED_11','Denzel Dumfries','MID',11,83), p('NED_18','Georginio Wijnaldum','MID',18,83), p('NED_19','Davy Klaassen','MID',19,81),
      p('NED_9','Memphis Depay','FWD',9,84), p('NED_13','Steven Bergwijn','FWD',13,82), p('NED_14','Cody Gakpo','FWD',14,85),
      p('NED_17','Teun Koopmeiners','FWD',17,82), p('NED_21','Jurgen Locadia','FWD',21,78), p('NED_22','Bas Dost','FWD',22,81),
    ]
  },

  // ── 10. BÉLGICA ───────────────────────────────────────
  {
    id: 'BEL', name: 'Bélgica', nameEn: 'Belgium', flag: '🇧🇪', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#000000', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Domenico Tedesco', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BEL_1','Thibaut Courtois','GK',1,87), p('BEL_12','Simon Mignolet','GK',12,82), p('BEL_23','Matz Sels','GK',23,81),
      p('BEL_2','Toby Alderweireld','DEF',2,83), p('BEL_3','Jan Vertonghen','DEF',3,82), p('BEL_4','Axel Witsel','DEF',4,84),
      p('BEL_5','Thomas Meunier','DEF',5,82), p('BEL_6','Wout Faes','DEF',6,81), p('BEL_15','Philippe Albert','DEF',15,79),
      p('BEL_16','Denayer','DEF',16,81), p('BEL_20','Zeno Debast','DEF',20,80),
      p('BEL_7','Eden Hazard','MID',7,83), p('BEL_8','Kevin De Bruyne','MID',8,89), p('BEL_10','Enzo Scifo','MID',10,82),
      p('BEL_11','Yannick Carrasco','MID',11,83), p('BEL_18','Maddison','MID',18,84), p('BEL_19','Dries Mertens','MID',19,83),
      p('BEL_9','Romelu Lukaku','FWD',9,85), p('BEL_13','Michy Batshuayi','FWD',13,81), p('BEL_14','Luc Nilis','FWD',14,78),
      p('BEL_17','Leandro Trossard','FWD',17,84), p('BEL_21','Thorgan Hazard','FWD',21,82), p('BEL_22','Charles De Ketelaere','FWD',22,81),
    ]
  },

  // ── 11. JAPÓN ─────────────────────────────────────────
  {
    id: 'JPN', name: 'Japón', nameEn: 'Japan', flag: '🇯🇵', continent: 'Asia',
    kitHome: { shirt: '#003087', shorts: '#FFFFFF', socks: '#003087' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003087', socks: '#FFFFFF' },
    coach: 'Moriyasu Hajime', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('JPN_1','Shuichi Gonda','GK',1,83), p('JPN_12','Eiji Kawashima','GK',12,82), p('JPN_23','Daiya Maekawa','GK',23,80),
      p('JPN_2','Hiroki Sakai','DEF',2,81), p('JPN_3','Yuta Nagatomo','DEF',3,83), p('JPN_4','Kira Tosu','DEF',4,80),
      p('JPN_5','Mitsuki Saito','DEF',5,81), p('JPN_6','Akira Nishino','DEF',6,79), p('JPN_15','Shinichi Gonda','DEF',15,83),
      p('JPN_16','Kou Itou','DEF',16,79), p('JPN_20','Masahiro Yoshida','DEF',20,82),
      p('JPN_7','Reo Hatate','MID',7,84), p('JPN_8','Ritsu Doan','MID',8,85), p('JPN_10','Takumi Minamino','MID',10,85),
      p('JPN_11','Makoto Hasebe','MID',11,82), p('JPN_18','Gaku Shibasaki','MID',18,81), p('JPN_19','Daichi Kamada','MID',19,84),
      p('JPN_9','Kaoru Mitoma','FWD',9,83), p('JPN_13','Marcus Marcus','FWD',13,80), p('JPN_14','Maya Yoshida','FWD',14,79),
      p('JPN_17','Takehiro Tomiyasu','FWD',17,82), p('JPN_21','Ryo Miyaichi','FWD',21,80), p('JPN_22','Yuki Soma','FWD',22,78),
    ]
  },

  // ── 12. COREA DEL SUR ─────────────────────────────────
  {
    id: 'KOR', name: 'Corea del Sur', nameEn: 'South Korea', flag: '🇰🇷', continent: 'Asia',
    kitHome: { shirt: '#CC0000', shorts: '#003087', socks: '#CC0000' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Jurgen Klinsmann', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('KOR_1','Kim Seung-gyu','GK',1,83), p('KOR_12','Jo Hyeon-woo','GK',12,81), p('KOR_23','Lee Beom-jun','GK',23,79),
      p('KOR_2','Kim Moon-hwan','DEF',2,80), p('KOR_3','Yoon Jong-gyu','DEF',3,82), p('KOR_4','Kim Young-gwon','DEF',4,82),
      p('KOR_5','Lee Young-pyo','DEF',5,83), p('KOR_6','Kim Jin-su','DEF',6,81), p('KOR_15','Min-jae Kim','DEF',15,84),
      p('KOR_16','Kim Min-woo','DEF',16,79), p('KOR_20','Lim Young-yong','DEF',20,80),
      p('KOR_7','Park Ji-sung','MID',7,84), p('KOR_8','Ahn Jung-hwan','MID',8,82), p('KOR_10','Son Heung-min','MID',10,90),
      p('KOR_11','Lee Jae-sung','MID',11,84), p('KOR_18','Hwang In-beom','MID',18,83), p('KOR_19','Jeong Woo-yeong','MID',19,82),
      p('KOR_9','Hwang Hee-chan','FWD',9,83), p('KOR_13','Lee Kang-in','FWD',13,83), p('KOR_14','Oh Se-hun','FWD',14,80),
      p('KOR_17','Cho Gue-sung','FWD',17,82), p('KOR_21','Kwon Chang-hoon','FWD',21,79), p('KOR_22','Paik Seung-ho','FWD',22,81),
    ]
  },

  // ── 13. DINAMARCA ─────────────────────────────────────
  {
    id: 'DEN', name: 'Dinamarca', nameEn: 'Denmark', flag: '🇩🇰', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#CC0000', socks: '#FFFFFF' },
    coach: 'Kasper Hjulmand', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('DEN_1','Kasper Schmeichel','GK',1,85), p('DEN_12','Oliver Christensen','GK',12,82), p('DEN_23','Daniel Iversen','GK',23,80),
      p('DEN_2','Jens Stryger Larsen','DEF',2,81), p('DEN_3','Rasmus Nissen','DEF',3,80), p('DEN_4','Simon Kjær','DEF',4,83),
      p('DEN_5','Andersen','DEF',5,82), p('DEN_6','Mads Jørgensen','DEF',6,80), p('DEN_15','Henrik Andersen','DEF',15,79),
      p('DEN_16','Joachim Andersen','DEF',16,83), p('DEN_20','Jacob Bruus Bruun','DEF',20,79),
      p('DEN_7','Mikkel Damsgaard','MID',7,84), p('DEN_8','Morten Hjulmand','MID',8,83), p('DEN_10','Christian Eriksen','MID',10,87),
      p('DEN_11','Pierre-Emile Højbjerg','MID',11,85), p('DEN_18','Sander Coopman','MID',18,80), p('DEN_19','Nampalys Mendy','MID',19,81),
      p('DEN_9','Andreas Skov Olsen','FWD',9,82), p('DEN_13','Kasper Dolberg','FWD',13,80), p('DEN_14','Yussuf Poulsen','FWD',14,81),
      p('DEN_17','Jens Jønsson','FWD',17,79), p('DEN_21','Martin Braithwaite','FWD',21,81), p('DEN_22','Rasmus Falk','FWD',22,80),
    ]
  },

  // ── 14. SUECIA ────────────────────────────────────────
  {
    id: 'SWE', name: 'Suecia', nameEn: 'Sweden', flag: '🇸🇪', continent: 'Europa',
    kitHome: { shirt: '#FFD700', shorts: '#005293', socks: '#FFD700' },
    kitAway: { shirt: '#005293', shorts: '#FFD700', socks: '#005293' },
    coach: 'Jon Dahl Tomasson', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SWE_1', 'Robin Olsen', 'GK', 1, 84), p('SWE_12', 'Kristoffer Nordfeldt', 'GK', 12, 81), p('SWE_23', 'Isac Lidholm', 'GK', 23, 79),
      p('SWE_8', 'Pontus Jansson', 'DEF', 8, 82), p('SWE_9', 'Victor Nilsson Lindelöf', 'DEF', 9, 84), p('SWE_10', 'Carl Starfelt', 'DEF', 10, 82),
      p('SWE_11', 'August Erlingmark Preuß', 'DEF', 11, 79), p('SWE_13', 'Jens Cajuste', 'DEF', 13, 83), p('SWE_14', 'Mikael Lustig', 'DEF', 14, 81),
      p('SWE_15', 'Ludwig Augustinsson', 'DEF', 15, 81), p('SWE_16', 'Matteo Guidetti', 'DEF', 16, 80), p('SWE_5', 'Kristoffer Olsson', 'MID', 5, 81),
      p('SWE_6', 'Sebastian Larsson', 'MID', 6, 83), p('SWE_7', 'Emil Forsberg', 'MID', 7, 85), p('SWE_17', 'Jesper Karlström', 'MID', 17, 82),
      p('SWE_18', 'Albin Ekdal', 'MID', 18, 82), p('SWE_19', 'Ken Sema', 'MID', 19, 81), p('SWE_2', 'Alexander Isak', 'FWD', 2, 87),
      p('SWE_3', 'Marcus Berg', 'FWD', 3, 83), p('SWE_4', 'Zlatan Ibrahimović', 'FWD', 4, 84), p('SWE_20', 'Vinícius Souza', 'FWD', 20, 80),
      p('SWE_21', 'Rasmus Elm', 'FWD', 21, 80), p('SWE_22', 'Sander Berghuis', 'FWD', 22, 82),
    ]
  },

  // ── 15. MÉXICO ────────────────────────────────────────
  {
    id: 'MEX', name: 'México', nameEn: 'Mexico', flag: '🇲🇽', continent: 'CONCACAF',
    kitHome: { shirt: '#006847', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#006847' },
    coach: 'Jaime Lozano', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MEX_1','Guillermo Ochoa','GK',1,86), p('MEX_12','Alfredo Talavera','GK',12,84), p('MEX_23','Jesús Corona','GK',23,83),
      p('MEX_2','Julio Domínguez','DEF',2,79), p('MEX_3','Hugo Ayala','DEF',3,81), p('MEX_4','Rafael Márquez','DEF',4,82),
      p('MEX_5','Carlos Salcido','DEF',5,80), p('MEX_6','Héctor Moreno','DEF',6,82), p('MEX_15','Gerardo Arteaga','DEF',15,80),
      p('MEX_16','Gilberto Sepúlveda','DEF',16,79), p('MEX_20','Kevin Alvarez','DEF',20,78),
      p('MEX_7','Hirving Lozano','MID',7,85), p('MEX_8','Edson Álvarez','MID',8,84), p('MEX_10','Héctor Herrera','MID',10,83),
      p('MEX_11','Luis Chávez','MID',11,82), p('MEX_18','Rodrigo Huescas','MID',18,81), p('MEX_19','Alexis Vega','MID',19,82),
      p('MEX_9','Raúl Jiménez','FWD',9,84), p('MEX_13','Santiago Giménez','FWD',13,84), p('MEX_14','Guillermo Martínez','FWD',14,80),
      p('MEX_17','Julián Araujo','FWD',17,80), p('MEX_21','Carlos Vela','FWD',21,83), p('MEX_22','Alexis Vega','FWD',22,82),
    ]
  },

  // ── 16. MARRUECOS ─────────────────────────────────────
  {
    id: 'MAR', name: 'Marruecos', nameEn: 'Morocco', flag: '🇲🇦', continent: 'África',
    kitHome: { shirt: '#C1272D', shorts: '#006233', socks: '#C1272D' },
    kitAway: { shirt: '#006233', shorts: '#C1272D', socks: '#006233' },
    coach: 'Walid Regragui', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MAR_1','Yassine Bounou','GK',1,86), p('MAR_12','Ahmed Reda Tagnaouti','GK',12,82), p('MAR_23','Khalid Fouhami','GK',23,79),
      p('MAR_2','Achraf Hakimi','DEF',2,86), p('MAR_3','Noussair Mazraoui','DEF',3,84), p('MAR_4','Romain Saïss','DEF',4,82),
      p('MAR_5','Nayef Aguerd','DEF',5,83), p('MAR_6','Abdelkarim Hadrioui','DEF',6,80), p('MAR_15','Badr Benoun','DEF',15,78),
      p('MAR_16','Yahya Attiyat Allah','DEF',16,79), p('MAR_20','Houssine Kharja','DEF',20,80),
      p('MAR_7','Sofyan Amrabat','MID',7,85), p('MAR_8','Yahya Attiyat Allah','MID',8,79), p('MAR_10','Hakim Ziyech','MID',10,84),
      p('MAR_11','Sofiane Boufal','MID',11,83), p('MAR_18','Bilal El Khannouss','MID',18,82), p('MAR_19','Abdelhamid Sabiri','MID',19,81),
      p('MAR_9','Youssef En-Nesyri','FWD',9,84), p('MAR_13','Sofiane Boufal','FWD',13,83), p('MAR_14','Zakaria Aboukhlal','FWD',14,80),
      p('MAR_17','Anass Zaroury','FWD',17,82), p('MAR_21','Abdelhamid Sabiri','FWD',21,81), p('MAR_22','Ilias Chair','FWD',22,81),
    ]
  },

  // ── 17. SENEGAL ───────────────────────────────────────
  {
    id: 'SEN', name: 'Senegal', nameEn: 'Senegal', flag: '🇸🇳', continent: 'África',
    kitHome: { shirt: '#00853F', shorts: '#FFFFFF', socks: '#FDEF42' },
    kitAway: { shirt: '#FFFFFF', shorts: '#00853F', socks: '#FFFFFF' },
    coach: 'Aliou Cissé', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SEN_1','Édouard Mendy','GK',1,85), p('SEN_12','Seny Dieng','GK',12,82), p('SEN_23','Cheikh Ndiaye','GK',23,80),
      p('SEN_2','Aliou Cissé','DEF',2,81), p('SEN_3','Kalidou Koulibaly','DEF',3,86), p('SEN_4','Abdou Diallo','DEF',4,83),
      p('SEN_5','Salif Sané','DEF',5,83), p('SEN_6','Boubakary Soumaré','DEF',6,82), p('SEN_15','Habib Beye','DEF',15,80),
      p('SEN_16','Saliou Ciss','DEF',16,79), p('SEN_20','Youssou Ndoye','DEF',20,80),
      p('SEN_7','Sadio Mané','MID',7,87), p('SEN_8','Idrissa Gana Gueye','MID',8,84), p('SEN_10','Cheikhou Kouyaté','MID',10,82),
      p('SEN_11','Pape Guéye','MID',11,81), p('SEN_18','Moussa Wagué','MID',18,80), p('SEN_19','Mamadou Lamine Niang','MID',19,81),
      p('SEN_9','Ismaila Sarr','FWD',9,84), p('SEN_13','Sadio Mané','FWD',13,87), p('SEN_14','Sada Thioub','FWD',14,79),
      p('SEN_17','Dia Baba','FWD',17,81), p('SEN_21','Habib Habibou','FWD',21,80), p('SEN_22','Moussa Sarr','FWD',22,78),
    ]
  },

  // ── 18. ESTADOS UNIDOS ────────────────────────────────
  {
    id: 'USA', name: 'Estados Unidos', nameEn: 'USA', flag: '🇺🇸', continent: 'CONCACAF',
    kitHome: { shirt: '#FFFFFF', shorts: '#003087', socks: '#CC0000' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Gregg Berhalter', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('USA_1','Matt Turner','GK',1,82), p('USA_12','Ethan Horvath','GK',12,80), p('USA_23','Sean Johnson','GK',23,79),
      p('USA_2','Sergiño Dest','DEF',2,81), p('USA_3','Antonee Robinson','DEF',3,81), p('USA_4','Walker Zimmerman','DEF',4,82),
      p('USA_5','Joe Scally','DEF',5,83), p('USA_6','Luca de la Torre','DEF',6,79), p('USA_15','Tyler Adams','DEF',15,83),
      p('USA_16','Jorge Villafaña','DEF',16,78), p('USA_20','Jude Shawcross','DEF',20,77),
      p('USA_7','Weston McKennie','MID',7,84), p('USA_8','Yunus Musah','MID',8,84), p('USA_10','Christian Pulisic','MID',10,87),
      p('USA_11','Gio Reyna','MID',11,85), p('USA_18','Tyler Adams','MID',18,83), p('USA_19','Luca de la Torre','MID',19,81),
      p('USA_9','Folarin Balogun','FWD',9,83), p('USA_13','Joe Scally','FWD',13,83), p('USA_14','Cameron Carter-Vickers','FWD',14,81),
      p('USA_17','Antonio Valencia','FWD',17,80), p('USA_21','Gregg Berhalter','FWD',21,79), p('USA_22','DeAndre Yedlin','FWD',22,82),
    ]
  },

  // ── 19. URUGUAY ───────────────────────────────────────
  {
    id: 'URU', name: 'Uruguay', nameEn: 'Uruguay', flag: '🇺🇾', continent: 'Sudamérica',
    kitHome: { shirt: '#74ACDF', shorts: '#000000', socks: '#000000' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#74ACDF' },
    coach: 'Diego Alonso', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('URU_1','Fernando Muslera','GK',1,84), p('URU_12','Sergio Rochet','GK',12,82), p('URU_23','Agustín Rossi','GK',23,81),
      p('URU_2','Nelson Gutiérrez','DEF',2,80), p('URU_3','Matías Vecino','DEF',3,81), p('URU_4','Diego Godín','DEF',4,84),
      p('URU_5','Rosario Central','DEF',5,79), p('URU_6','Lucas Vázquez','DEF',6,80), p('URU_15','Giorgian de Arrascaeta','DEF',15,83),
      p('URU_16','Diego Reyes','DEF',16,79), p('URU_20','Santiago Mele','DEF',20,80),
      p('URU_7','Giorgian de Arrascaeta','MID',7,84), p('URU_8','Carlos Valverde','MID',8,85), p('URU_10','Diego Forlán','MID',10,82),
      p('URU_11','Fede Valverde','MID',11,87), p('URU_18','Manuel Ugarte','MID',18,84), p('URU_19','Mariano Rodríguez','MID',19,80),
      p('URU_9','Luis Suárez','FWD',9,83), p('URU_13','Edinson Cavani','FWD',13,84), p('URU_14','Joaquín Correa','FWD',14,81),
      p('URU_17','Maximiliano Araújo','FWD',17,80), p('URU_21','Álvaro Recoba','FWD',21,79), p('URU_22','Facundo Pellistri','FWD',22,80),
    ]
  },

  // ── 20. COLOMBIA ──────────────────────────────────────
  {
    id: 'COL', name: 'Colombia', nameEn: 'Colombia', flag: '🇨🇴', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#003087', socks: '#FF0000' },
    kitAway: { shirt: '#003087', shorts: '#003087', socks: '#FFD700' },
    coach: 'Néstor Lorenzo', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('COL_1','David Ospina','GK',1,85), p('COL_12','Álvaro Montero','GK',12,81), p('COL_23','Camilo Vargas','GK',23,82),
      p('COL_2','Gonzalo Fuentes','DEF',2,80), p('COL_3','Andres Murillo','DEF',3,81), p('COL_4','Carlos Cuesta','DEF',4,82),
      p('COL_5','Moya','DEF',5,80), p('COL_6','Santiago Arias','DEF',6,82), p('COL_15','Yerry Mina','DEF',15,84),
      p('COL_16','Gerenew','DEF',16,79), p('COL_20','Héctor Moreno','DEF',20,81),
      p('COL_7','Jefferson Lerma','MID',7,83), p('COL_8','Mateus Uribe','MID',8,84), p('COL_10','James Rodríguez','MID',10,86),
      p('COL_11','Juan Guillermo Cuadrado','MID',11,83), p('COL_18','Yairo Moreno','MID',18,80), p('COL_19','Kvin','MID',19,82),
      p('COL_9','Radamel Falcao','FWD',9,82), p('COL_13','Duván Zapata','FWD',13,84), p('COL_14','Miguel Borja','FWD',14,83),
      p('COL_17','Luis Díaz','FWD',17,85), p('COL_21','Luis Muriel','FWD',21,84), p('COL_22','Rafael Santos Borré','FWD',22,82),
    ]
  },

];
