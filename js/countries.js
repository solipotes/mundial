// ══════════════════════════════════════════════════════════
//  COUNTRIES — 32 Selecciones con jugadores históricos
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
    coach: 'Luis Aragonés', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ESP_1','Iker Casillas','GK',1,92), p('ESP_12','Santiago Cañizares','GK',12,80), p('ESP_23','Pepe Reina','GK',23,78),
      p('ESP_2','Michel Salgado','DEF',2,76), p('ESP_3','Roberto Carlos','DEF',3,85), p('ESP_4','Gerard Piqué','DEF',4,84),
      p('ESP_5','Sergio Ramos','DEF',5,90), p('ESP_6','Carles Puyol','DEF',6,88), p('ESP_15','Fernando Hierro','DEF',15,86),
      p('ESP_16','Juanfran','DEF',16,77), p('ESP_20','Álvaro Arbeloa','DEF',20,76),
      p('ESP_7','David Villa','MID',7,88), p('ESP_8','Xavi Hernández','MID',8,94), p('ESP_10','Andrés Iniesta','MID',10,93),
      p('ESP_11','Pedro Rodríguez','MID',11,80), p('ESP_18','Sergio Busquets','MID',18,89), p('ESP_19','Marcos Senna','MID',19,79),
      p('ESP_9','Raúl González','FWD',9,91), p('ESP_13','Fernando Torres','FWD',13,88), p('ESP_14','Emilio Butragueño','FWD',14,83),
      p('ESP_17','Álvaro Morata','FWD',17,79), p('ESP_21','Carlos Marchena','FWD',21,75), p('ESP_22','Juan Mata','FWD',22,82),
    ]
  },

  // ── 2. ALEMANIA ───────────────────────────────────────
  {
    id: 'GER', name: 'Alemania', nameEn: 'Germany', flag: '🇩🇪', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#000000' },
    coach: 'Jürgen Klinsmann', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GER_1','Manuel Neuer','GK',1,93), p('GER_12','Sepp Maier','GK',12,87), p('GER_23','Oliver Kahn','GK',23,91),
      p('GER_2','Philipp Lahm','DEF',2,89), p('GER_3','Paul Breitner','DEF',3,83), p('GER_4','Franz Beckenbauer','DEF',4,95),
      p('GER_5','Mats Hummels','DEF',5,86), p('GER_6','Berti Vogts','DEF',6,82), p('GER_15','Per Mertesacker','DEF',15,82),
      p('GER_16','Jérôme Boateng','DEF',16,84), p('GER_20','Stefan Reuter','DEF',20,78),
      p('GER_7','Bastian Schweinsteiger','MID',7,89), p('GER_8','Lothar Matthäus','MID',8,94), p('GER_10','Michael Ballack','MID',10,91),
      p('GER_11','Thomas Müller','MID',11,87), p('GER_18','Mesut Özil','MID',18,85), p('GER_19','Toni Kroos','MID',19,88),
      p('GER_9','Gerd Müller','FWD',9,95), p('GER_13','Miroslav Klose','FWD',13,88), p('GER_14','Karl-Heinz Rummenigge','FWD',14,90),
      p('GER_17','Jürgen Klinsmann','FWD',17,85), p('GER_21','Max Morlock','FWD',21,78), p('GER_22','Rudi Völler','FWD',22,84),
    ]
  },

  // ── 3. BRASIL ─────────────────────────────────────────
  {
    id: 'BRA', name: 'Brasil', nameEn: 'Brazil', flag: '🇧🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#000080', socks: '#FFD700' },
    kitAway: { shirt: '#007FFF', shorts: '#007FFF', socks: '#FFFFFF' },
    coach: 'Zagallo', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BRA_1','Dida','GK',1,85), p('BRA_12','Gilmar','GK',12,84), p('BRA_23','Marcos','GK',23,82),
      p('BRA_2','Cafu','DEF',2,90), p('BRA_3','Roberto Carlos','DEF',3,92), p('BRA_4','Aldair','DEF',4,82),
      p('BRA_5','Lúcio','DEF',5,85), p('BRA_6','Mauro Silva','DEF',6,79), p('BRA_15','Júnior','DEF',15,83),
      p('BRA_16','David Luiz','DEF',16,82), p('BRA_20','Branco','DEF',20,80),
      p('BRA_7','Garrincha','MID',7,93), p('BRA_8','Sócrates','MID',8,90), p('BRA_10','Zico','MID',10,93),
      p('BRA_11','Falcão','MID',11,91), p('BRA_18','Rivaldo','MID',18,91), p('BRA_19','Ronaldinho','MID',19,93),
      p('BRA_9','Pelé','FWD',9,98), p('BRA_13','Ronaldo','FWD',13,96), p('BRA_14','Romário','FWD',14,93),
      p('BRA_17','Bebeto','FWD',17,88), p('BRA_21','Tostão','FWD',21,85), p('BRA_22','Jairzinho','FWD',22,87),
    ]
  },

  // ── 4. ARGENTINA ──────────────────────────────────────
  {
    id: 'ARG', name: 'Argentina', nameEn: 'Argentina', flag: '🇦🇷', continent: 'Sudamérica',
    kitHome: { shirt: '#74ACDF', shorts: '#FFFFFF', socks: '#74ACDF' },
    kitAway: { shirt: '#000080', shorts: '#FFFFFF', socks: '#000080' },
    coach: 'Carlos Bilardo', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ARG_1','Sergio Goycochea','GK',1,84), p('ARG_12','Ubaldo Fillol','GK',12,85), p('ARG_23','Hugo Gatti','GK',23,81),
      p('ARG_2','Jorge Olarticoechea','DEF',2,78), p('ARG_3','Oscar Ruggeri','DEF',3,85), p('ARG_4','Daniel Passarella','DEF',4,88),
      p('ARG_5','Roberto Ayala','DEF',5,84), p('ARG_6','Juan Zanetti','DEF',6,87), p('ARG_15','Gabriel Heinze','DEF',15,81),
      p('ARG_16','Walter Samuel','DEF',16,82), p('ARG_20','Néstor Clausen','DEF',20,77),
      p('ARG_7','Jorge Valdano','MID',7,84), p('ARG_8','Javier Mascherano','MID',8,87), p('ARG_10','Diego Maradona','MID',10,98),
      p('ARG_11','Osvaldo Ardiles','MID',11,85), p('ARG_18','Juan Román Riquelme','MID',18,89), p('ARG_19','Angel Di María','MID',19,86),
      p('ARG_9','Lionel Messi','FWD',9,97), p('ARG_13','Gabriel Batistuta','FWD',13,93), p('ARG_14','Mario Kempes','FWD',14,90),
      p('ARG_17','Leopoldo Luque','FWD',17,82), p('ARG_21','Claudio Caniggia','FWD',21,87), p('ARG_22','Sergio Agüero','FWD',22,89),
    ]
  },

  // ── 5. FRANCIA ────────────────────────────────────────
  {
    id: 'FRA', name: 'Francia', nameEn: 'France', flag: '🇫🇷', continent: 'Europa',
    kitHome: { shirt: '#003189', shorts: '#FFFFFF', socks: '#FF0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003189', socks: '#FFFFFF' },
    coach: 'Aimé Jacquet', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('FRA_1','Fabien Barthez','GK',1,90), p('FRA_12','Gaël Clichy','GK',12,76), p('FRA_23','Yoann Lloris','GK',23,85),
      p('FRA_2','Lilian Thuram','DEF',2,89), p('FRA_3','Marcel Desailly','DEF',3,88), p('FRA_4','Laurent Blanc','DEF',4,86),
      p('FRA_5','Marius Trésor','DEF',5,82), p('FRA_6','Raphaël Varane','DEF',6,86), p('FRA_15','Bixente Lizarazu','DEF',15,85),
      p('FRA_16','William Gallas','DEF',16,82), p('FRA_20','Patrick Battiston','DEF',20,80),
      p('FRA_7','Michel Platini','MID',7,95), p('FRA_8','Didier Deschamps','MID',8,84), p('FRA_10','Zinedine Zidane','MID',10,96),
      p('FRA_11','Kylian Mbappé','MID',11,93), p('FRA_18','Patrick Vieira','MID',18,88), p('FRA_19','Paul Pogba','MID',19,86),
      p('FRA_9','Thierry Henry','FWD',9,93), p('FRA_13','Just Fontaine','FWD',13,88), p('FRA_14','Eric Cantona','FWD',14,89),
      p('FRA_17','Karim Benzema','FWD',17,90), p('FRA_21','David Trezeguet','FWD',21,85), p('FRA_22','Frank Ribéry','FWD',22,87),
    ]
  },

  // ── 6. ITALIA ─────────────────────────────────────────
  {
    id: 'ITA', name: 'Italia', nameEn: 'Italy', flag: '🇮🇹', continent: 'Europa',
    kitHome: { shirt: '#003399', shorts: '#003399', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#003399' },
    coach: 'Marcello Lippi', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ITA_1','Gianluigi Buffon','GK',1,95), p('ITA_12','Dino Zoff','GK',12,93), p('ITA_23','Walter Zenga','GK',23,83),
      p('ITA_2','Mauro Tassotti','DEF',2,81), p('ITA_3','Paolo Maldini','DEF',3,96), p('ITA_4','Franco Baresi','DEF',4,95),
      p('ITA_5','Fabio Cannavaro','DEF',5,91), p('ITA_6','Alessandro Costacurta','DEF',6,88), p('ITA_15','Gianluca Zambrotta','DEF',15,83),
      p('ITA_16','Claudio Gentile','DEF',16,82), p('ITA_20','Gaetano Scirea','DEF',20,87),
      p('ITA_7','Gennaro Gattuso','MID',7,84), p('ITA_8','Andrea Pirlo','MID',8,93), p('ITA_10','Roberto Baggio','MID',10,93),
      p('ITA_11','Gianni Rivera','MID',11,89), p('ITA_18','Marco Tardelli','MID',18,83), p('ITA_19','Daniele De Rossi','MID',19,84),
      p('ITA_9','Francesco Totti','FWD',9,91), p('ITA_13','Alessandro Del Piero','FWD',13,91), p('ITA_14','Paolo Rossi','FWD',14,89),
      p('ITA_17','Luca Toni','FWD',17,82), p('ITA_21','Gianfranco Zola','FWD',21,85), p('ITA_22','Christian Vieri','FWD',22,88),
    ]
  },

  // ── 7. PORTUGAL ───────────────────────────────────────
  {
    id: 'POR', name: 'Portugal', nameEn: 'Portugal', flag: '🇵🇹', continent: 'Europa',
    kitHome: { shirt: '#006600', shorts: '#FF0000', socks: '#FF0000' },
    kitAway: { shirt: '#FF0000', shorts: '#FF0000', socks: '#006600' },
    coach: 'Luiz Felipe Scolari', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('POR_1','Ricardo','GK',1,82), p('POR_12','Vitor Baía','GK',12,85), p('POR_23','Rui Patrício','GK',23,84),
      p('POR_2','Paulo Ferreira','DEF',2,78), p('POR_3','Fernando Couto','DEF',3,84), p('POR_4','Pepe','DEF',4,85),
      p('POR_5','Jorge Costa','DEF',5,80), p('POR_6','João Cancelo','DEF',6,82), p('POR_15','Nélson Semedo','DEF',15,79),
      p('POR_16','Ricardo Carvalho','DEF',16,84), p('POR_20','Vítor Paneira','DEF',20,76),
      p('POR_7','Luís Figo','MID',7,93), p('POR_8','Rui Costa','MID',8,90), p('POR_10','Bruno Fernandes','MID',10,86),
      p('POR_11','Bernardo Silva','MID',11,87), p('POR_18','João Moutinho','MID',18,83), p('POR_19','Deco','MID',19,88),
      p('POR_9','Cristiano Ronaldo','FWD',9,96), p('POR_13','Eusébio','FWD',13,95), p('POR_14','Pauleta','FWD',14,83),
      p('POR_17','Nuno Gomes','FWD',17,82), p('POR_21','Hélder Postiga','FWD',21,78), p('POR_22','Hugo Almeida','FWD',22,77),
    ]
  },

  // ── 8. INGLATERRA ─────────────────────────────────────
  {
    id: 'ENG', name: 'Inglaterra', nameEn: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FF0000' },
    kitAway: { shirt: '#FF0000', shorts: '#FF0000', socks: '#FF0000' },
    coach: 'Sven-Göran Eriksson', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ENG_1','Gordon Banks','GK',1,92), p('ENG_12','Peter Shilton','GK',12,90), p('ENG_23','Joe Hart','GK',23,81),
      p('ENG_2','Gary Neville','DEF',2,82), p('ENG_3','Ashley Cole','DEF',3,85), p('ENG_4','Bobby Moore','DEF',4,93),
      p('ENG_5','Rio Ferdinand','DEF',5,86), p('ENG_6','Terry Butcher','DEF',6,82), p('ENG_15','John Terry','DEF',15,86),
      p('ENG_16','Stuart Pearce','DEF',16,81), p('ENG_20','Phil Neal','DEF',20,79),
      p('ENG_7','David Beckham','MID',7,88), p('ENG_8','Bobby Charlton','MID',8,93), p('ENG_10','Paul Gascoigne','MID',10,88),
      p('ENG_11','Frank Lampard','MID',11,87), p('ENG_18','Steven Gerrard','MID',18,89), p('ENG_19','Bryan Robson','MID',19,86),
      p('ENG_9','Gary Lineker','FWD',9,89), p('ENG_13','Michael Owen','FWD',13,85), p('ENG_14','Jimmy Greaves','FWD',14,89),
      p('ENG_17','Wayne Rooney','FWD',17,87), p('ENG_21','Geoff Hurst','FWD',21,86), p('ENG_22','Alan Shearer','FWD',22,88),
    ]
  },

  // ── 9. HOLANDA ────────────────────────────────────────
  {
    id: 'NED', name: 'Holanda', nameEn: 'Netherlands', flag: '🇳🇱', continent: 'Europa',
    kitHome: { shirt: '#FF6600', shorts: '#000000', socks: '#FF6600' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Rinus Michels', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NED_1','Edwin van der Sar','GK',1,90), p('NED_12','Hans van Breukelen','GK',12,83), p('NED_23','Jasper Cillessen','GK',23,80),
      p('NED_2','Wim Suurbier','DEF',2,80), p('NED_3','Ruud Krol','DEF',3,84), p('NED_4','Frank de Boer','DEF',4,85),
      p('NED_5','Virgil van Dijk','DEF',5,89), p('NED_6','Arie Haan','DEF',6,81), p('NED_15','Danny Blind','DEF',15,79),
      p('NED_16','Ronald Koeman','DEF',16,87), p('NED_20','Stefan de Vrij','DEF',20,82),
      p('NED_7','Johan Cruyff','MID',7,97), p('NED_8','Frank Rijkaard','MID',8,88), p('NED_10','Arjen Robben','MID',10,90),
      p('NED_11','Clarence Seedorf','MID',11,87), p('NED_18','Wesley Sneijder','MID',18,88), p('NED_19','Xabi Alonso','MID',19,82),
      p('NED_9','Marco van Basten','FWD',9,96), p('NED_13','Ruud Gullit','FWD',13,93), p('NED_14','Dennis Bergkamp','FWD',14,91),
      p('NED_17','Patrick Kluivert','FWD',17,86), p('NED_21','Robben Jr.','FWD',21,78), p('NED_22','Johnny Rep','FWD',22,82),
    ]
  },

  // ── 10. URUGUAY ───────────────────────────────────────
  {
    id: 'URU', name: 'Uruguay', nameEn: 'Uruguay', flag: '🇺🇾', continent: 'Sudamérica',
    kitHome: { shirt: '#74ACDF', shorts: '#000000', socks: '#000000' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#74ACDF' },
    coach: 'Óscar Tabárez', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('URU_1','Fernando Muslera','GK',1,83), p('URU_12','Rodolfo Rodríguez','GK',12,75), p('URU_23','Ladislao Mazurkiewicz','GK',23,82),
      p('URU_2','Nelson Gutiérrez','DEF',2,77), p('URU_3','Paolo Montero','DEF',3,82), p('URU_4','Diego Lugano','DEF',4,81),
      p('URU_5','Diego Godín','DEF',5,87), p('URU_6','Víctor Rodríguez Andrade','DEF',6,79), p('URU_15','Obdulio Varela','DEF',15,84),
      p('URU_16','José Luis Rodríguez','DEF',16,76), p('URU_20','Marcelo Zalayeta','DEF',20,74),
      p('URU_7','Enzo Francescoli','MID',7,89), p('URU_8','Rubén Marcos','MID',8,78), p('URU_10','Diego Forlán','MID',10,87),
      p('URU_11','Carlos Aguilera','MID',11,78), p('URU_18','Jorge Fossati','MID',18,75), p('URU_19','Nery Pumpido','MID',19,73),
      p('URU_9','Luis Suárez','FWD',9,90), p('URU_13','Edinson Cavani','FWD',13,89), p('URU_14','Juan Alberto Schiaffino','FWD',14,88),
      p('URU_17','Alcides Ghiggia','FWD',17,86), p('URU_21','Álvaro Recoba','FWD',21,82), p('URU_22','Ruben Marcos','FWD',22,76),
    ]
  },

  // ── 11. COLOMBIA ──────────────────────────────────────
  {
    id: 'COL', name: 'Colombia', nameEn: 'Colombia', flag: '🇨🇴', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD700', shorts: '#003087', socks: '#FF0000' },
    kitAway: { shirt: '#003087', shorts: '#003087', socks: '#FFD700' },
    coach: 'Francisco Maturana', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('COL_1','René Higuita','GK',1,83), p('COL_12','Faryd Mondragón','GK',12,80), p('COL_23','David Ospina','GK',23,81),
      p('COL_2','Luis Perea','DEF',2,78), p('COL_3','Andrés Escobar','DEF',3,81), p('COL_4','Iván Córdoba','DEF',4,82),
      p('COL_5','Mario Yepes','DEF',5,80), p('COL_6','Alexis García','DEF',6,76), p('COL_15','Hernán Gaviria','DEF',15,74),
      p('COL_16','Mauricio Cuadrado','DEF',16,75), p('COL_20','Víctor Hugo Aristizábal','DEF',20,76),
      p('COL_7','Leonel Álvarez','MID',7,79), p('COL_8','Iván Valenciano','MID',8,77), p('COL_10','Carlos Valderrama','MID',10,90),
      p('COL_11','James Rodríguez','MID',11,88), p('COL_18','Fredy Rincón','MID',18,84), p('COL_19','Freddy Guarin','MID',19,79),
      p('COL_9','Radamel Falcao','FWD',9,91), p('COL_13','Tino Asprilla','FWD',13,86), p('COL_14','Arnoldo Iguarán','FWD',14,81),
      p('COL_17','Víctor Hugo Aristizábal','FWD',17,80), p('COL_21','Hugo Rodallega','FWD',21,77), p('COL_22','Jackson Martínez','FWD',22,81),
    ]
  },

  // ── 12. MÉXICO ────────────────────────────────────────
  {
    id: 'MEX', name: 'México', nameEn: 'Mexico', flag: '🇲🇽', continent: 'CONCACAF',
    kitHome: { shirt: '#006847', shorts: '#FFFFFF', socks: '#CE1126' },
    kitAway: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#006847' },
    coach: 'Ricardo Ferretti', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MEX_1','Guillermo Ochoa','GK',1,85), p('MEX_12','Jorge Campos','GK',12,83), p('MEX_23','Antonio Carbajal','GK',23,79),
      p('MEX_2','Jorge Davino','DEF',2,74), p('MEX_3','Manuel Vidrio','DEF',3,73), p('MEX_4','Rafael Márquez','DEF',4,86),
      p('MEX_5','Claudio Suárez','DEF',5,81), p('MEX_6','Carlos Salcido','DEF',6,79), p('MEX_15','Alberto Rodríguez','DEF',15,74),
      p('MEX_16','Héctor Moreno','DEF',16,78), p('MEX_20','Pavel Pardo','DEF',20,77),
      p('MEX_7','Cuauhtémoc Blanco','MID',7,85), p('MEX_8','Ramón Ramírez','MID',8,78), p('MEX_10','Luis García','MID',10,80),
      p('MEX_11','Andrés Guardado','MID',11,82), p('MEX_18','Gerardo Torrado','MID',18,78), p('MEX_19','Héctor Herrera','MID',19,80),
      p('MEX_9','Hugo Sánchez','FWD',9,92), p('MEX_13','Javier Hernández','FWD',13,84), p('MEX_14','Carlos Hermosillo','FWD',14,80),
      p('MEX_17','Jared Borgetti','FWD',17,82), p('MEX_21','Carlos Vela','FWD',21,81), p('MEX_22','Francisco Palencia','FWD',22,77),
    ]
  },

  // ── 13. NIGERIA ───────────────────────────────────────
  {
    id: 'NGA', name: 'Nigeria', nameEn: 'Nigeria', flag: '🇳🇬', continent: 'África',
    kitHome: { shirt: '#008000', shorts: '#008000', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#008000' },
    coach: 'Clemens Westerhof', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NGA_1','Vincent Enyeama','GK',1,83), p('NGA_12','Peter Rufai','GK',12,80), p('NGA_23','Ike Shorunmu','GK',23,75),
      p('NGA_2','Emmanuel Babayaro','DEF',2,79), p('NGA_3','Taribo West','DEF',3,82), p('NGA_4','Augustine Eguavoen','DEF',4,78),
      p('NGA_5','Uche Okechukwu','DEF',5,78), p('NGA_6','Chidi Odiah','DEF',6,76), p('NGA_15','Isaac Okoronkwo','DEF',15,75),
      p('NGA_16','Celestine Babayaro','DEF',16,77), p('NGA_20','Nwankwo Kanu','DEF',20,83),
      p('NGA_7','Jay-Jay Okocha','MID',7,90), p('NGA_8','Sunday Oliseh','MID',8,82), p('NGA_10','Garba Lawal','MID',10,78),
      p('NGA_11','Austin Okocha','MID',11,76), p('NGA_18','Mikel Obi','MID',18,80), p('NGA_19','Seun Adelakun','MID',19,73),
      p('NGA_9','Rashidi Yekini','FWD',9,86), p('NGA_13','Daniel Amokachi','FWD',13,82), p('NGA_14','Julius Aghahowa','FWD',14,79),
      p('NGA_17','Victor Ikpeba','FWD',17,81), p('NGA_21','Efan Ekoku','FWD',21,77), p('NGA_22','Emmanuel Amunike','FWD',22,79),
    ]
  },

  // ── 14. SENEGAL ───────────────────────────────────────
  {
    id: 'SEN', name: 'Senegal', nameEn: 'Senegal', flag: '🇸🇳', continent: 'África',
    kitHome: { shirt: '#00853F', shorts: '#FFFFFF', socks: '#FDEF42' },
    kitAway: { shirt: '#FFFFFF', shorts: '#00853F', socks: '#FFFFFF' },
    coach: 'Bruno Metsu', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SEN_1','Édouard Mendy','GK',1,84), p('SEN_12','Tony Sylva','GK',12,78), p('SEN_23','Cheikh Ndiaye','GK',23,72),
      p('SEN_2','Aliou Cissé','DEF',2,79), p('SEN_3','Lamine Diatta','DEF',3,78), p('SEN_4','Kalidou Koulibaly','DEF',4,88),
      p('SEN_5','Pape Bouba Diop','DEF',5,80), p('SEN_6','Moussa Wagué','DEF',6,76), p('SEN_15','Habib Beye','DEF',15,77),
      p('SEN_16','Ferdinand Coly','DEF',16,76), p('SEN_20','Youssou Ndoye','DEF',20,73),
      p('SEN_7','Salif Diao','MID',7,79), p('SEN_8','Henri Camara','MID',8,80), p('SEN_10','Sadio Mané','MID',10,91),
      p('SEN_11','Idrissa Gana Gueye','MID',11,82), p('SEN_18','Moussa Konaté','MID',18,74), p('SEN_19','Cheikhou Kouyaté','MID',19,78),
      p('SEN_9','El-Hadji Diouf','FWD',9,83), p('SEN_13','Papiss Cissé','FWD',13,80), p('SEN_14','Diomansy Kamara','FWD',14,76),
      p('SEN_17','Ismaila Sarr','FWD',17,81), p('SEN_21','Mbaye Diagne','FWD',21,77), p('SEN_22','Dame N\'Doye','FWD',22,75),
    ]
  },

  // ── 15. MARRUECOS ─────────────────────────────────────
  {
    id: 'MAR', name: 'Marruecos', nameEn: 'Morocco', flag: '🇲🇦', continent: 'África',
    kitHome: { shirt: '#C1272D', shorts: '#006233', socks: '#C1272D' },
    kitAway: { shirt: '#006233', shorts: '#C1272D', socks: '#006233' },
    coach: 'Abdelhak Benchikha', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MAR_1','Yassine Bounou','GK',1,85), p('MAR_12','Khalid Fouhami','GK',12,75), p('MAR_23','Badou Zaki','GK',23,76),
      p('MAR_2','Achraf Hakimi','DEF',2,87), p('MAR_3','Noussair Mazraoui','DEF',3,82), p('MAR_4','Romain Saïss','DEF',4,81),
      p('MAR_5','Nayef Aguerd','DEF',5,80), p('MAR_6','Abdelkarim Hadrioui','DEF',6,76), p('MAR_15','Badr Benoun','DEF',15,74),
      p('MAR_16','Abdessalam Ouaddou','DEF',16,75), p('MAR_20','Houssine Kharja','DEF',20,77),
      p('MAR_7','Mustapha Hadji','MID',7,82), p('MAR_8','Youssef Chippo','MID',8,78), p('MAR_10','Hakim Ziyech','MID',10,85),
      p('MAR_11','Sofiane Boufal','MID',11,81), p('MAR_18','Abdelmajid Dolmy','MID',18,76), p('MAR_19','Aziz Bouderbala','MID',19,74),
      p('MAR_9','Youssef En-Nesyri','FWD',9,82), p('MAR_13','Abdelilah Hafidi','FWD',13,75), p('MAR_14','Salaheddine Bassir','FWD',14,77),
      p('MAR_17','Khalid Fouhami','FWD',17,73), p('MAR_21','Ayoub El Kaabi','FWD',21,76), p('MAR_22','Ahmed Faras','FWD',22,74),
    ]
  },

  // ── 16. CAMERÚN ───────────────────────────────────────
  {
    id: 'CMR', name: 'Camerún', nameEn: 'Cameroon', flag: '🇨🇲', continent: 'África',
    kitHome: { shirt: '#007A5E', shorts: '#CE1126', socks: '#FCD116' },
    kitAway: { shirt: '#CE1126', shorts: '#007A5E', socks: '#CE1126' },
    coach: 'Winfried Schäfer', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CMR_1','Carlos Kameni','GK',1,82), p('CMR_12','Thomas N\'Kono','GK',12,83), p('CMR_23','Alioum Boukar','GK',23,73),
      p('CMR_2','Geremi Njitap','DEF',2,83), p('CMR_3','Rigobert Song','DEF',3,82), p('CMR_4','Stephen Tataw','DEF',4,78),
      p('CMR_5','Bill Tchato','DEF',5,77), p('CMR_6','Benoît Assou-Ekotto','DEF',6,79), p('CMR_15','Jean-Noël Aké','DEF',15,75),
      p('CMR_16','Landry N\'Guemo','DEF',16,76), p('CMR_20','Salomon Olembe','DEF',20,77),
      p('CMR_7','Roger Milla','MID',7,86), p('CMR_8','Achille Webo','MID',8,77), p('CMR_10','Samuel Eto\'o','MID',10,91),
      p('CMR_11','Moïse Mbouh','MID',11,74), p('CMR_18','Alexandre Song','MID',18,80), p('CMR_19','Gustave Bahoken','MID',19,73),
      p('CMR_9','Patrick Mboma','FWD',9,85), p('CMR_13','François Omam-Biyik','FWD',13,80), p('CMR_14','Marc-Vivien Foé','FWD',14,81),
      p('CMR_17','Guy N\'dy Assembé','FWD',17,72), p('CMR_21','Adolphe Teikeu','FWD',21,73), p('CMR_22','Jean Makoun','FWD',22,76),
    ]
  },

  // ── 17. BÉLGICA ───────────────────────────────────────
  {
    id: 'BEL', name: 'Bélgica', nameEn: 'Belgium', flag: '🇧🇪', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#000000', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Roberto Martínez', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BEL_1','Thibaut Courtois','GK',1,91), p('BEL_12','Jean-Marie Pfaff','GK',12,86), p('BEL_23','Simon Mignolet','GK',23,80),
      p('BEL_2','Toby Alderweireld','DEF',2,86), p('BEL_3','Jan Vertonghen','DEF',3,86), p('BEL_4','Éric Gerets','DEF',4,83),
      p('BEL_5','Franky Van der Elst','DEF',5,80), p('BEL_6','Thomas Meunier','DEF',6,80), p('BEL_15','Philippe Albert','DEF',15,81),
      p('BEL_16','Daniel Van Buyten','DEF',16,82), p('BEL_20','Marc Wilmots','DEF',20,80),
      p('BEL_7','Eden Hazard','MID',7,91), p('BEL_8','Kevin De Bruyne','MID',8,93), p('BEL_10','Enzo Scifo','MID',10,85),
      p('BEL_11','Axel Witsel','MID',11,83), p('BEL_18','Yannick Carrasco','MID',18,80), p('BEL_19','Dries Mertens','MID',19,82),
      p('BEL_9','Romelu Lukaku','FWD',9,88), p('BEL_13','Jan Ceulemans','FWD',13,84), p('BEL_14','Paul Van Himst','FWD',14,83),
      p('BEL_17','Michy Batshuayi','FWD',17,78), p('BEL_21','Luc Nilis','FWD',21,81), p('BEL_22','Marc Degryse','FWD',22,79),
    ]
  },

  // ── 18. JAPÓN ─────────────────────────────────────────
  {
    id: 'JPN', name: 'Japón', nameEn: 'Japan', flag: '🇯🇵', continent: 'Asia',
    kitHome: { shirt: '#003087', shorts: '#FFFFFF', socks: '#003087' },
    kitAway: { shirt: '#FFFFFF', shorts: '#003087', socks: '#FFFFFF' },
    coach: 'Philippe Troussier', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('JPN_1','Seigo Narazaki','GK',1,79), p('JPN_12','Eiji Kawashima','GK',12,80), p('JPN_23','Yoshikatsu Kawaguchi','GK',23,78),
      p('JPN_2','Yuichi Komano','DEF',2,76), p('JPN_3','Yuto Nagatomo','DEF',3,81), p('JPN_4','Tsuneyasu Miyamoto','DEF',4,78),
      p('JPN_5','Maya Yoshida','DEF',5,79), p('JPN_6','Satoshi Miyahara','DEF',6,74), p('JPN_15','Shinji Ono','DEF',15,76),
      p('JPN_16','Makoto Hasebe','DEF',16,79), p('JPN_20','Yasuhito Endo','DEF',20,80),
      p('JPN_7','Hidetoshi Nakata','MID',7,86), p('JPN_8','Junichi Inamoto','MID',8,79), p('JPN_10','Shinji Kagawa','MID',10,83),
      p('JPN_11','Keisuke Honda','MID',11,84), p('JPN_18','Shunsuke Nakamura','MID',18,82), p('JPN_19','Takashi Inui','MID',19,78),
      p('JPN_9','Kunishige Kamamoto','FWD',9,82), p('JPN_13','Kiyotake Hiroshi','FWD',13,77), p('JPN_14','Takashi Furuhashi','FWD',14,78),
      p('JPN_17','Shinji Okazaki','FWD',17,80), p('JPN_21','Kazuyoshi Miura','FWD',21,79), p('JPN_22','Takumi Minamino','FWD',22,80),
    ]
  },

  // ── 19. CROACIA ───────────────────────────────────────
  {
    id: 'CRO', name: 'Croacia', nameEn: 'Croatia', flag: '🇭🇷', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#003399' },
    kitAway: { shirt: '#003399', shorts: '#003399', socks: '#FFFFFF' },
    coach: 'Miroslav Ćiro Blažević', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CRO_1','Danijel Subašić','GK',1,82), p('CRO_12','Stipe Pletikosa','GK',12,79), p('CRO_23','Dominik Livaković','GK',23,83),
      p('CRO_2','Darijo Srna','DEF',2,83), p('CRO_3','Robert Jarni','DEF',3,80), p('CRO_4','Slaven Bilić','DEF',4,82),
      p('CRO_5','Igor Tudor','DEF',5,79), p('CRO_6','Dejan Lovren','DEF',6,80), p('CRO_15','Josip Šimunić','DEF',15,79),
      p('CRO_16','Domagoj Vida','DEF',16,79), p('CRO_20','Vedran Ćorluka','DEF',20,80),
      p('CRO_7','Zvonimir Boban','MID',7,89), p('CRO_8','Luka Modrić','MID',8,93), p('CRO_10','Ivan Rakitić','MID',10,87),
      p('CRO_11','Niko Kovač','MID',11,79), p('CRO_18','Marcelo Brozović','MID',18,84), p('CRO_19','Ivica Olić','MID',19,79),
      p('CRO_9','Davor Šuker','FWD',9,90), p('CRO_13','Eduardo da Silva','FWD',13,80), p('CRO_14','Ivan Klasnić','FWD',14,79),
      p('CRO_17','Andrej Kramarić','FWD',17,82), p('CRO_21','Mario Mandžukić','FWD',21,84), p('CRO_22','Nikola Kalinić','FWD',22,77),
    ]
  },

  // ── 20. DINAMARCA ─────────────────────────────────────
  {
    id: 'DEN', name: 'Dinamarca', nameEn: 'Denmark', flag: '🇩🇰', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#CC0000', socks: '#FFFFFF' },
    coach: 'Richard Møller Nielsen', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('DEN_1','Peter Schmeichel','GK',1,92), p('DEN_12','Kasper Schmeichel','GK',12,84), p('DEN_23','Thomas Sørensen','GK',23,79),
      p('DEN_2','Marc Rieper','DEF',2,79), p('DEN_3','Jesper Olsen','DEF',3,77), p('DEN_4','Morten Olsen','DEF',4,82),
      p('DEN_5','Simon Kjær','DEF',5,83), p('DEN_6','Jan Heintze','DEF',6,78), p('DEN_15','Søren Busk','DEF',15,75),
      p('DEN_16','Henrik Andersen','DEF',16,76), p('DEN_20','Thomas Helveg','DEF',20,77),
      p('DEN_7','Michael Laudrup','MID',7,92), p('DEN_8','Brian Laudrup','MID',8,89), p('DEN_10','John Jensen','MID',10,79),
      p('DEN_11','Christian Eriksen','MID',11,88), p('DEN_18','Kim Vilfort','MID',18,77), p('DEN_19','Thomas Gravesen','MID',19,79),
      p('DEN_9','Preben Elkjær','FWD',9,89), p('DEN_13','Jon Dahl Tomasson','FWD',13,82), p('DEN_14',"Poul 'Dansen' Jensen",'FWD',14,79),
      p('DEN_17','Martin Jørgensen','FWD',17,78), p('DEN_21','Marcus Ingvartsen','FWD',21,75), p('DEN_22','Flemming Povlsen','FWD',22,80),
    ]
  },

  // ── 21. COREA DEL SUR ─────────────────────────────────
  {
    id: 'KOR', name: 'Corea del Sur', nameEn: 'South Korea', flag: '🇰🇷', continent: 'Asia',
    kitHome: { shirt: '#CC0000', shorts: '#003087', socks: '#CC0000' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Guus Hiddink', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('KOR_1','Lee Woon-jae','GK',1,80), p('KOR_12','Kim Byung-ji','GK',12,77), p('KOR_23','Kim Jin-hyeon','GK',23,78),
      p('KOR_2','Song Chong-gug','DEF',2,77), p('KOR_3','Kim Tae-young','DEF',3,77), p('KOR_4','Hong Myung-bo','DEF',4,82),
      p('KOR_5','Kim Young-gwon','DEF',5,78), p('KOR_6','Lee Young-pyo','DEF',6,80), p('KOR_15','Hwang Sun-hong','DEF',15,76),
      p('KOR_16','Choi Jin-cheul','DEF',16,75), p('KOR_20','Yoon Jong-hwan','DEF',20,74),
      p('KOR_7','Park Ji-sung','MID',7,85), p('KOR_8','Ahn Jung-hwan','MID',8,82), p('KOR_10','Son Heung-min','MID',10,89),
      p('KOR_11','Choi Yong-soo','MID',11,78), p('KOR_18','Lee Chun-soo','MID',18,79), p('KOR_19','Kim Nam-il','MID',19,76),
      p('KOR_9','Cha Bum-kun','FWD',9,87), p('KOR_13','Kim Joo-sung','FWD',13,75), p('KOR_14','Lee Dong-gook','FWD',14,79),
      p('KOR_17','Hwang Hee-chan','FWD',17,80), p('KOR_21','Seol Ki-hyeon','FWD',21,78), p('KOR_22','Cho Kuk-jin','FWD',22,75),
    ]
  },

  // ── 22. TURQUÍA ───────────────────────────────────────
  {
    id: 'TUR', name: 'Turquía', nameEn: 'Turkey', flag: '🇹🇷', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#CC0000', socks: '#FFFFFF' },
    coach: 'Şenol Güneş', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('TUR_1','Rüştü Reçber','GK',1,85), p('TUR_12','Volkan Demirel','GK',12,79), p('TUR_23','Uğurcan Çakır','GK',23,80),
      p('TUR_2','Tayfun Korkut','DEF',2,76), p('TUR_3','Bülent Korkmaz','DEF',3,79), p('TUR_4','Alpay Özalan','DEF',4,80),
      p('TUR_5','Mehmet Topal','DEF',5,78), p('TUR_6','Okan Buruk','DEF',6,77), p('TUR_15','Hami Mandıralı','DEF',15,75),
      p('TUR_16','Gökhan Gönül','DEF',16,78), p('TUR_20','Cüneyt Tanman','DEF',20,73),
      p('TUR_7','Yıldıray Baştürk','MID',7,80), p('TUR_8','Emre Belözoğlu','MID',8,84), p('TUR_10','Arda Turan','MID',10,84),
      p('TUR_11','Tuncay Şanlı','MID',11,79), p('TUR_18','Selçuk İnan','MID',18,79), p('TUR_19','Hamit Altıntop','MID',19,80),
      p('TUR_9','Hakan Şükür','FWD',9,86), p('TUR_13','İlhan Mansız','FWD',13,79), p('TUR_14','Cenk Tosun','FWD',14,80),
      p('TUR_17','Oğuzhan Özyakup','FWD',17,77), p('TUR_21','Sergen Yalçın','FWD',21,80), p('TUR_22','Yıldırım Mısırlıoğlu','FWD',22,74),
    ]
  },

  // ── 23. POLONIA ───────────────────────────────────────
  {
    id: 'POL', name: 'Polonia', nameEn: 'Poland', flag: '🇵🇱', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#CC0000', socks: '#FFFFFF' },
    kitAway: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#CC0000' },
    coach: 'Jerzy Engel', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('POL_1','Jerzy Dudek','GK',1,84), p('POL_12','Jan Tomaszewski','GK',12,82), p('POL_23','Wojciech Szczęsny','GK',23,85),
      p('POL_2','Władysław Żmuda','DEF',2,79), p('POL_3','Marcin Wasilewski','DEF',3,77), p('POL_4','Adam Nawałka','DEF',4,76),
      p('POL_5','Kamil Glik','DEF',5,81), p('POL_6','Jacek Bąk','DEF',6,77), p('POL_15','Maciej Żurawski','DEF',15,75),
      p('POL_16','Tomasz Kłos','DEF',16,76), p('POL_20','Marek Koźmiński','DEF',20,74),
      p('POL_7','Zbigniew Boniek','MID',7,89), p('POL_8','Kazimierz Deyna','MID',8,87), p('POL_10','Robert Lewandowski','MID',10,93),
      p('POL_11','Grzegorz Lato','MID',11,87), p('POL_18','Piotr Zieliński','MID',18,84), p('POL_19','Dariusz Dziekanowski','MID',19,80),
      p('POL_9','Andrzej Szarmach','FWD',9,84), p('POL_13','Włodzimierz Lubański','FWD',13,84), p('POL_14','Arkadiusz Milik','FWD',14,81),
      p('POL_17','Tadeusz Wilimowski','FWD',17,82), p('POL_21','Ernest Pol','FWD',21,78), p('POL_22','Krzysztof Nowak','FWD',22,76),
    ]
  },

  // ── 24. SUIZA ─────────────────────────────────────────
  {
    id: 'SUI', name: 'Suiza', nameEn: 'Switzerland', flag: '🇨🇭', continent: 'Europa',
    kitHome: { shirt: '#CC0000', shorts: '#CC0000', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#CC0000' },
    coach: 'Jakob "Köbi" Kuhn', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SUI_1','Yann Sommer','GK',1,84), p('SUI_12','Pascal Zuberbühler','GK',12,80), p('SUI_23','Diego Benaglio','GK',23,79),
      p('SUI_2','Stephan Lichtsteiner','DEF',2,80), p('SUI_3','Fabian Schär','DEF',3,81), p('SUI_4','Johan Vogel','DEF',4,78),
      p('SUI_5','Manuel Akanji','DEF',5,82), p('SUI_6','Philippe Senderos','DEF',6,78), p('SUI_15','Stéphane Chapuisat','DEF',15,77),
      p('SUI_16','Heinz Hermann','DEF',16,76), p('SUI_20','Ludovic Magnin','DEF',20,74),
      p('SUI_7','Tranquillo Barnetta','MID',7,78), p('SUI_8','Granit Xhaka','MID',8,84), p('SUI_10','Xherdan Shaqiri','MID',10,84),
      p('SUI_11','Hakan Yakin','MID',11,82), p('SUI_18','Gökhan Inler','MID',18,80), p('SUI_19','Pirmin Schwegler','MID',19,76),
      p('SUI_9','Alexander Frei','FWD',9,80), p('SUI_13','Stéphan El Shaarawy','FWD',13,76), p('SUI_14','André Abegglen','FWD',14,78),
      p('SUI_17','Breel Embolo','FWD',17,80), p('SUI_21','Seferovic Haris','FWD',21,78), p('SUI_22','Karl Odermatt','FWD',22,76),
    ]
  },

  // ── 25. AUSTRALIA ─────────────────────────────────────
  {
    id: 'AUS', name: 'Australia', nameEn: 'Australia', flag: '🇦🇺', continent: 'Oceanía',
    kitHome: { shirt: '#FFD700', shorts: '#006233', socks: '#FFD700' },
    kitAway: { shirt: '#006233', shorts: '#FFD700', socks: '#006233' },
    coach: 'Guus Hiddink', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('AUS_1','Mark Schwarzer','GK',1,83), p('AUS_12','Adam Federici','GK',12,77), p('AUS_23','Mat Ryan','GK',23,81),
      p('AUS_2','Craig Moore','DEF',2,79), p('AUS_3','Scott Chipperfield','DEF',3,76), p('AUS_4','Lucas Neill','DEF',4,79),
      p('AUS_5','Ryan McGowan','DEF',5,75), p('AUS_6','Ante Milicic','DEF',6,75), p('AUS_15','Vince Grella','DEF',15,76),
      p('AUS_16','Jason Davidson','DEF',16,74), p('AUS_20','Luke Wilkshire','DEF',20,75),
      p('AUS_7','Stan Lazaridis','MID',7,78), p('AUS_8','Jason Culina','MID',8,77), p('AUS_10','Tim Cahill','MID',10,84),
      p('AUS_11','Josip Skoko','MID',11,75), p('AUS_18','Mile Jedinak','MID',18,79), p('AUS_19','Brett Emerton','MID',19,79),
      p('AUS_9','Harry Kewell','FWD',9,84), p('AUS_13','Mark Viduka','FWD',13,83), p('AUS_14','John Aloisi','FWD',14,77),
      p('AUS_17','Archie Thompson','FWD',17,76), p('AUS_21','Tony Vidmar','FWD',21,74), p('AUS_22','Ross Aloisi','FWD',22,73),
    ]
  },

  // ── 26. GHANA ─────────────────────────────────────────
  {
    id: 'GHA', name: 'Ghana', nameEn: 'Ghana', flag: '🇬🇭', continent: 'África',
    kitHome: { shirt: '#FFD700', shorts: '#000000', socks: '#CC0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFD700' },
    coach: 'Milovan Rajevac', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GHA_1','Richard Kingson','GK',1,78), p('GHA_12','Abubakari Damba','GK',12,75), p('GHA_23','Adam Kwarasey','GK',23,76),
      p('GHA_2','Samuel Osei Kuffour','DEF',2,80), p('GHA_3','John Mensah','DEF',3,79), p('GHA_4','John Paintsil','DEF',4,77),
      p('GHA_5','Daniel Amartey','DEF',5,78), p('GHA_6','Carlos Nortey','DEF',6,74), p('GHA_15','Asamoah Gyan Jr.','DEF',15,75),
      p('GHA_16','Jonathan Mensah','DEF',16,77), p('GHA_20','Shilla Illiasu','DEF',20,73),
      p('GHA_7','Abedi Pelé','MID',7,89), p('GHA_8','Anthony Baffoe','MID',8,77), p('GHA_10','Michael Essien','MID',10,86),
      p('GHA_11','Sulley Muntari','MID',11,81), p('GHA_18','Stephen Appiah','MID',18,83), p('GHA_19','Kevin-Prince Boateng','MID',19,80),
      p('GHA_9','Asamoah Gyan','FWD',9,84), p('GHA_13','Nii Lamptey','FWD',13,80), p('GHA_14','Anthony Yeboah','FWD',14,82),
      p('GHA_17','Jordan Ayew','FWD',17,78), p('GHA_21','André Ayew','FWD',21,80), p('GHA_22','Baffour Gyan','FWD',22,75),
    ]
  },

  // ── 27. COSTA RICA ────────────────────────────────────
  {
    id: 'CRC', name: 'Costa Rica', nameEn: 'Costa Rica', flag: '🇨🇷', continent: 'CONCACAF',
    kitHome: { shirt: '#CC0000', shorts: '#003087', socks: '#FFFFFF' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Jorge Luis Pinto', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CRC_1','Keylor Navas','GK',1,88), p('CRC_12','Erick Lonnis','GK',12,74), p('CRC_23','Patrick Pemberton','GK',23,75),
      p('CRC_2','Cristian Gamboa','DEF',2,77), p('CRC_3','Júnior Díaz','DEF',3,77), p('CRC_4','Óscar Duarte','DEF',4,79),
      p('CRC_5','Giancarlo González','DEF',5,78), p('CRC_6','Michael Umaña','DEF',6,76), p('CRC_15','Jailber Cantillo','DEF',15,73),
      p('CRC_16','Roy Miller','DEF',16,75), p('CRC_20','Mauricio Wright','DEF',20,74),
      p('CRC_7','Álvaro Saborío','MID',7,78), p('CRC_8','Mauricio Solís','MID',8,75), p('CRC_10','Bryan Ruiz','MID',10,82),
      p('CRC_11','Óscar Ramírez','MID',11,74), p('CRC_18','Celso Borges','MID',18,79), p('CRC_19','Christian Bolaños','MID',19,76),
      p('CRC_9','Paulo Wanchope','FWD',9,82), p('CRC_13','Rolando Fonseca','FWD',13,78), p('CRC_14','Ronald González','FWD',14,73),
      p('CRC_17','Hernán Medford','FWD',17,75), p('CRC_21','Joel Campbell','FWD',21,78), p('CRC_22','Marco Ureña','FWD',22,75),
    ]
  },

  // ── 28. ESTADOS UNIDOS ────────────────────────────────
  {
    id: 'USA', name: 'Estados Unidos', nameEn: 'USA', flag: '🇺🇸', continent: 'CONCACAF',
    kitHome: { shirt: '#FFFFFF', shorts: '#003087', socks: '#CC0000' },
    kitAway: { shirt: '#003087', shorts: '#CC0000', socks: '#003087' },
    coach: 'Bruce Arena', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('USA_1','Tim Howard','GK',1,85), p('USA_12','Brad Friedel','GK',12,83), p('USA_23','Kasey Keller','GK',23,81),
      p('USA_2','Steve Cherundolo','DEF',2,78), p('USA_3','Pablo Mastroeni','DEF',3,77), p('USA_4','Carlos Bocanegra','DEF',4,79),
      p('USA_5','Alexi Lalas','DEF',5,79), p('USA_6','Jeff Agoos','DEF',6,76), p('USA_15','Greg Berhalter','DEF',15,74),
      p('USA_16','Tony Meola','DEF',16,75), p('USA_20','John Harkes','DEF',20,77),
      p('USA_7','Tab Ramos','MID',7,79), p('USA_8','Claudio Reyna','MID',8,80), p('USA_10','Landon Donovan','MID',10,84),
      p('USA_11','Clint Dempsey','MID',11,83), p('USA_18','Michael Bradley','MID',18,80), p('USA_19','Earnie Stewart','MID',19,77),
      p('USA_9','Brian McBride','FWD',9,80), p('USA_13','Eric Wynalda','FWD',13,79), p('USA_14','Joe-Max Moore','FWD',14,76),
      p('USA_17','DaMarcus Beasley','FWD',17,78), p('USA_21','Cobi Jones','FWD',21,77), p('USA_22','Roy Wegerle','FWD',22,75),
    ]
  },

  // ── 29. ARGELIA ───────────────────────────────────────
  {
    id: 'ALG', name: 'Argelia', nameEn: 'Algeria', flag: '🇩🇿', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#006233' },
    kitAway: { shirt: '#006233', shorts: '#006233', socks: '#FFFFFF' },
    coach: 'Vahid Halilhodžić', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ALG_1','Raïs M\'Bolhi','GK',1,81), p('ALG_12','Noureddine Moussa','GK',12,74), p('ALG_23','Lounes Gaouaoui','GK',23,72),
      p('ALG_2','Essaïd Belkalem','DEF',2,77), p('ALG_3','Nadir Belhadj','DEF',3,76), p('ALG_4','Mehdi Lacen','DEF',4,77),
      p('ALG_5','Madjid Bougherra','DEF',5,80), p('ALG_6','Rafik Halliche','DEF',6,76), p('ALG_15','Aïssa Mandi','DEF',15,78),
      p('ALG_16','Hilal Soudani','DEF',16,75), p('ALG_20','Djamel Menad','DEF',20,73),
      p('ALG_7','Rabah Madjer','MID',7,85), p('ALG_8','Lakhdar Belloumi','MID',8,83), p('ALG_10','Riyad Mahrez','MID',10,88),
      p('ALG_11','Sofiane Feghouli','MID',11,82), p('ALG_18','Yacine Brahimi','MID',18,82), p('ALG_19','Billal Meghni','MID',19,77),
      p('ALG_9','Islam Slimani','FWD',9,81), p('ALG_13','Salah Assad','FWD',13,78), p('ALG_14','Abdelkader Ghomari','FWD',14,75),
      p('ALG_17','Baghdad Bounedjah','FWD',17,79), p('ALG_21','Djamel Zidane','FWD',21,75), p('ALG_22','Hassen Lalmas','FWD',22,73),
    ]
  },

  // ── 30. ARABIA SAUDÍ ──────────────────────────────────
  {
    id: 'KSA', name: 'Arabia Saudí', nameEn: 'Saudi Arabia', flag: '🇸🇦', continent: 'Asia',
    kitHome: { shirt: '#006233', shorts: '#FFFFFF', socks: '#006233' },
    kitAway: { shirt: '#FFFFFF', shorts: '#006233', socks: '#FFFFFF' },
    coach: 'Nelo Vingada', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('KSA_1','Mohamed Al-Deayea','GK',1,81), p('KSA_12','Waleed Abdullah','GK',12,73), p('KSA_23','Yasser Al-Mosailem','GK',23,72),
      p('KSA_2','Hamzah Idris','DEF',2,73), p('KSA_3','Fahad Al-Ghesheyan','DEF',3,74), p('KSA_4','Mohammed Al-Deayea','DEF',4,75),
      p('KSA_5','Yasser Al-Qahtani','DEF',5,76), p('KSA_6','Redha Tukar','DEF',6,73), p('KSA_15','Mohammed Noor','DEF',15,72),
      p('KSA_16','Abdulaziz Khathran','DEF',16,71), p('KSA_20','Abdullah Zubromawi','DEF',20,70),
      p('KSA_7','Sami Al-Jaber','MID',7,82), p('KSA_8','Abdullah Otayef','MID',8,75), p('KSA_10','Khalid Al-Temyat','MID',10,80),
      p('KSA_11','Mohammed Al-Shalhoub','MID',11,74), p('KSA_18','Saleh Al-Dosari','MID',18,74), p('KSA_19','Abdullah Al-Dosari','MID',19,72),
      p('KSA_9','Yasser Al-Qahtani','FWD',9,78), p('KSA_13','Saeed Al-Owairan','FWD',13,79), p('KSA_14','Mohammed Al-Quwayhes','FWD',14,73),
      p('KSA_17','Nawaf Al-Temyat','FWD',17,72), p('KSA_21','Hatan Al-Tashan','FWD',21,70), p('KSA_22','Faris Al-Harbi','FWD',22,71),
    ]
  },

  // ── 31. IRÁN ──────────────────────────────────────────
  {
    id: 'IRN', name: 'Irán', nameEn: 'Iran', flag: '🇮🇷', continent: 'Asia',
    kitHome: { shirt: '#FFFFFF', shorts: '#006233', socks: '#CC0000' },
    kitAway: { shirt: '#CC0000', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Carlos Queiroz', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('IRN_1','Alireza Beiranvand','GK',1,82), p('IRN_12','Ahmad Reza Abedzadeh','GK',12,78), p('IRN_23','Nima Nakisa','GK',23,73),
      p('IRN_2','Pejman Montazeri','DEF',2,75), p('IRN_3','Jalal Hosseini','DEF',3,78), p('IRN_4','Hossein Kaebi','DEF',4,76),
      p('IRN_5','Ehsan Hajsafi','DEF',5,79), p('IRN_6','Sattar Hamidpour','DEF',6,74), p('IRN_15','Milad Mohammadi','DEF',15,76),
      p('IRN_16','Morteza Pouraliganji','DEF',16,77), p('IRN_20','Masoud Shojaei','DEF',20,78),
      p('IRN_7','Ali Karimi','MID',7,83), p('IRN_8','Mehdi Mahdavikia','MID',8,82), p('IRN_10','Andranik Teymourian','MID',10,79),
      p('IRN_11','Sardar Azmoun','MID',11,84), p('IRN_18','Javad Nekounam','MID',18,79), p('IRN_19','Saman Ghoddos','MID',19,77),
      p('IRN_9','Ali Daei','FWD',9,88), p('IRN_13','Karim Ansarifard','FWD',13,78), p('IRN_14','Hassan Rowshan','FWD',14,75),
      p('IRN_17','Reza Ghoochannejhad','FWD',17,76), p('IRN_21','Vahid Hashemian','FWD',21,76), p('IRN_22','Alireza Jahanbakhsh','FWD',22,80),
    ]
  },

  // ── 32. COSTA DE MARFIL ───────────────────────────────
  {
    id: 'CIV', name: 'Costa de Marfil', nameEn: "Ivory Coast", flag: '🇨🇮', continent: 'África',
    kitHome: { shirt: '#FF8C00', shorts: '#FFFFFF', socks: '#006233' },
    kitAway: { shirt: '#006233', shorts: '#FFFFFF', socks: '#FF8C00' },
    coach: 'Hervé Renard', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CIV_1','Boubacar Barry','GK',1,79), p('CIV_12','Aristide Zogbo','GK',12,73), p('CIV_23','Sylvain Gbohouo','GK',23,75),
      p('CIV_2','Serge Aurier','DEF',2,80), p('CIV_3','Arthur Boka','DEF',3,77), p('CIV_4','Kolo Touré','DEF',4,82),
      p('CIV_5','Emmanuel Eboué','DEF',5,78), p('CIV_6','Siaka Tiéné','DEF',6,75), p('CIV_15','Sol Bamba','DEF',15,76),
      p('CIV_16','Cyrille Domoraud','DEF',16,74), p('CIV_20','Blaise Kouassi','DEF',20,72),
      p('CIV_7','Yaya Touré','MID',7,90), p('CIV_8','Didier Zokora','MID',8,82), p('CIV_10','Gervinho','MID',10,80),
      p('CIV_11','Seydou Doumbia','MID',11,79), p('CIV_18','Salomon Kalou','MID',18,79), p('CIV_19','Marc Zoro','MID',19,74),
      p('CIV_9','Didier Drogba','FWD',9,92), p('CIV_13','Lacina Traoré','FWD',13,77), p('CIV_14','Arouna Koné','FWD',14,78),
      p('CIV_17','Cheick Tioté','FWD',17,76), p('CIV_21','Wilfried Bony','FWD',21,79), p('CIV_22','Trézéguet Camará','FWD',22,74),
    ]
  },


  // ── SWE ───────────────────────────────
  {
    id: 'SWE', name: 'Suecia', nameEn: 'Sweden', flag: '🇸🇪', continent: 'Europa',
    kitHome: { shirt: '#FFD700', shorts: '#005293', socks: '#FFD700' },
    kitAway: { shirt: '#005293', shorts: '#FFD700', socks: '#005293' },
    coach: 'Lars Lagerbäck', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SWE_1', 'Andreas Isaksson', 'GK', 1, 80), p('SWE_12', 'Mikael Nilsson', 'GK', 12, 70), p('SWE_23', 'Anders Andersson', 'GK', 23, 77),
      p('SWE_8', 'Olof Mellberg', 'DEF', 8, 81), p('SWE_9', 'Per Eriksson', 'DEF', 9, 79), p('SWE_10', 'Mikael Eriksson', 'DEF', 10, 79),
      p('SWE_11', 'Mats Andersson', 'DEF', 11, 76), p('SWE_13', 'Anders Larsson', 'DEF', 13, 77), p('SWE_14', 'Mikael Eriksson', 'DEF', 14, 76),
      p('SWE_15', 'Thomas Andersson', 'DEF', 15, 79), p('SWE_16', 'Mats Gustafsson', 'DEF', 16, 77), p('SWE_5', 'Freddie Ljungberg', 'MID', 5, 84),
      p('SWE_6', 'Tomas Brolin', 'MID', 6, 82), p('SWE_7', 'Nils Liedholm', 'MID', 7, 86), p('SWE_17', 'Mats Nilsson', 'MID', 17, 77),
      p('SWE_18', 'Johan Larsson', 'MID', 18, 80), p('SWE_19', 'Johan Andersson', 'MID', 19, 75), p('SWE_2', 'Zlatan Ibrahimović', 'FWD', 2, 91),
      p('SWE_3', 'Henrik Larsson', 'FWD', 3, 87), p('SWE_4', 'Gunnar Nordahl', 'FWD', 4, 88), p('SWE_20', 'Anders Nilsson', 'FWD', 20, 77),
      p('SWE_21', 'Per Olsson', 'FWD', 21, 77), p('SWE_22', 'Lars Svensson', 'FWD', 22, 74),
    ]
  },

  // ── NOR ───────────────────────────────
  {
    id: 'NOR', name: 'Noruega', nameEn: 'Norway', flag: '🇳🇴', continent: 'Europa',
    kitHome: { shirt: '#C8102E', shorts: '#FFFFFF', socks: '#00205B' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Egil Olsen', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NOR_1', 'Erik Thorstvedt', 'GK', 1, 79), p('NOR_12', 'Jan Olsen', 'GK', 12, 77), p('NOR_23', 'Geir Pedersen', 'GK', 23, 74),
      p('NOR_6', 'John Arne Riise', 'DEF', 6, 83), p('NOR_8', 'Brede Hangeland', 'DEF', 8, 80), p('NOR_9', 'Jan Larsen', 'DEF', 9, 76),
      p('NOR_10', 'Jan Jensen', 'DEF', 10, 73), p('NOR_11', 'Kjell Hansen', 'DEF', 11, 73), p('NOR_13', 'Geir Jensen', 'DEF', 13, 79),
      p('NOR_14', 'Tor Olsen', 'DEF', 14, 72), p('NOR_15', 'Svein Olsen', 'DEF', 15, 74), p('NOR_5', 'Martin Ødegaard', 'MID', 5, 87),
      p('NOR_16', 'Arne Pedersen', 'MID', 16, 78), p('NOR_17', 'Svein Karlsen', 'MID', 17, 76), p('NOR_18', 'Jan Johansen', 'MID', 18, 76),
      p('NOR_19', 'Hans Nilsen', 'MID', 19, 73), p('NOR_20', 'Geir Hansen', 'MID', 20, 77), p('NOR_2', 'Erling Haaland', 'FWD', 2, 92),
      p('NOR_3', 'Ole Gunnar Solskjær', 'FWD', 3, 86), p('NOR_4', 'Tore André Flo', 'FWD', 4, 81), p('NOR_7', 'John Carew', 'FWD', 7, 81),
      p('NOR_21', 'Geir Nilsen', 'FWD', 21, 74), p('NOR_22', 'Morten Olsen', 'FWD', 22, 80),
    ]
  },

  // ── SCO ───────────────────────────────
  {
    id: 'SCO', name: 'Escocia', nameEn: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', continent: 'Europa',
    kitHome: { shirt: '#002B5E', shorts: '#FFFFFF', socks: '#002B5E' },
    kitAway: { shirt: '#FFFFFF', shorts: '#002B5E', socks: '#FFFFFF' },
    coach: 'Jock Stein', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SCO_1', 'Jim Leighton', 'GK', 1, 81), p('SCO_12', 'James Brown', 'GK', 12, 71), p('SCO_23', 'David Clark', 'GK', 23, 73),
      p('SCO_7', 'Colin Hendry', 'DEF', 7, 80), p('SCO_8', 'Andy Robertson', 'DEF', 8, 85), p('SCO_9', 'Alexander Campbell', 'DEF', 9, 72),
      p('SCO_10', 'David Campbell', 'DEF', 10, 76), p('SCO_11', 'Thomas Thomson', 'DEF', 11, 79), p('SCO_13', 'John Campbell', 'DEF', 13, 77),
      p('SCO_14', 'John Thomson', 'DEF', 14, 76), p('SCO_15', 'John Thomson', 'DEF', 15, 76), p('SCO_4', 'Graeme Souness', 'MID', 4, 87),
      p('SCO_6', 'Gordon Strachan', 'MID', 6, 83), p('SCO_16', 'Craig Smith', 'MID', 16, 78), p('SCO_17', 'Alexander Thomson', 'MID', 17, 77),
      p('SCO_18', 'James Campbell', 'MID', 18, 73), p('SCO_19', 'Thomas Thomson', 'MID', 19, 73), p('SCO_2', 'Kenny Dalglish', 'FWD', 2, 91),
      p('SCO_3', 'Denis Law', 'FWD', 3, 89), p('SCO_5', 'Ally McCoist', 'FWD', 5, 84), p('SCO_20', 'Robert Wilson', 'FWD', 20, 77),
      p('SCO_21', 'George Murray', 'FWD', 21, 74), p('SCO_22', 'James Brown', 'FWD', 22, 80),
    ]
  },

  // ── WAL ───────────────────────────────
  {
    id: 'WAL', name: 'Gales', nameEn: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', continent: 'Europa',
    kitHome: { shirt: '#D30731', shorts: '#FFFFFF', socks: '#D30731' },
    kitAway: { shirt: '#FFFF00', shorts: '#000000', socks: '#FFFF00' },
    coach: 'Chris Coleman', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('WAL_1', 'Neville Southall', 'GK', 1, 85), p('WAL_12', 'William Lewis', 'GK', 12, 73), p('WAL_23', 'John Thomas', 'GK', 23, 77),
      p('WAL_8', 'Ashley Williams', 'DEF', 8, 80), p('WAL_9', 'James Lewis', 'DEF', 9, 75), p('WAL_10', 'Llywelyn Thomas', 'DEF', 10, 75),
      p('WAL_11', 'James Jones', 'DEF', 11, 76), p('WAL_13', 'Gareth Thomas', 'DEF', 13, 78), p('WAL_14', 'John Evans', 'DEF', 14, 77),
      p('WAL_15', 'David Davies', 'DEF', 15, 73), p('WAL_16', 'Gareth Jones', 'DEF', 16, 76), p('WAL_4', 'Ryan Giggs', 'MID', 4, 90),
      p('WAL_6', 'Gary Speed', 'MID', 6, 83), p('WAL_7', 'Aaron Ramsey', 'MID', 7, 84), p('WAL_17', 'Evan Williams', 'MID', 17, 73),
      p('WAL_18', 'Robert Thomas', 'MID', 18, 74), p('WAL_19', 'Evan Griffiths', 'MID', 19, 75), p('WAL_2', 'Gareth Bale', 'FWD', 2, 91),
      p('WAL_3', 'Ian Rush', 'FWD', 3, 88), p('WAL_5', 'John Charles', 'FWD', 5, 90), p('WAL_20', 'William Morgan', 'FWD', 20, 76),
      p('WAL_21', 'James Griffiths', 'FWD', 21, 81), p('WAL_22', 'Evan Williams', 'FWD', 22, 79),
    ]
  },

  // ── IRL ───────────────────────────────
  {
    id: 'IRL', name: 'Irlanda', nameEn: 'Ireland', flag: '🇮🇪', continent: 'Europa',
    kitHome: { shirt: '#169B62', shorts: '#FFFFFF', socks: '#169B62' },
    kitAway: { shirt: '#FFFFFF', shorts: '#169B62', socks: '#FFFFFF' },
    coach: 'Jack Charlton', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('IRL_1', 'Shay Given', 'GK', 1, 83), p('IRL_12', 'Thomas Walsh', 'GK', 12, 74), p('IRL_23', 'Patrick Murphy', 'GK', 23, 75),
      p('IRL_5', 'Paul McGrath', 'DEF', 5, 85), p('IRL_6', 'Denis Irwin', 'DEF', 6, 85), p('IRL_7', "John O'Shea", 'DEF', 7, 81),
      p('IRL_9', 'John Ryan', 'DEF', 9, 78), p('IRL_10', "James O'Neill", 'DEF', 10, 74), p('IRL_11', 'Patrick Connor', 'DEF', 11, 76),
      p('IRL_13', 'James Smith', 'DEF', 13, 79), p('IRL_14', 'Sean Connor', 'DEF', 14, 74), p('IRL_2', 'Roy Keane', 'MID', 2, 89),
      p('IRL_4', 'Damien Duff', 'MID', 4, 84), p('IRL_15', 'Kevin Ryan', 'MID', 15, 74), p('IRL_16', 'Martin Murphy', 'MID', 16, 74),
      p('IRL_17', 'Michael Byrne', 'MID', 17, 78), p('IRL_18', 'Brian Smith', 'MID', 18, 79), p('IRL_3', 'Robbie Keane', 'FWD', 3, 86),
      p('IRL_8', 'Niall Quinn', 'FWD', 8, 80), p('IRL_19', "Thomas O'Brien", 'FWD', 19, 79), p('IRL_20', 'James Connor', 'FWD', 20, 77),
      p('IRL_21', 'Michael Smith', 'FWD', 21, 75), p('IRL_22', 'Kevin Smith', 'FWD', 22, 74),
    ]
  },

  // ── SRB ───────────────────────────────
  {
    id: 'SRB', name: 'Serbia', nameEn: 'Serbia', flag: '🇷🇸', continent: 'Europa',
    kitHome: { shirt: '#C6363C', shorts: '#C6363C', socks: '#C6363C' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Radomir Antić', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('SRB_1', 'Vladimir Stojković', 'GK', 1, 79), p('SRB_12', 'Dragan Pavlović', 'GK', 12, 77), p('SRB_23', 'Luka Stojanović', 'GK', 23, 74),
      p('SRB_2', 'Nemanja Vidić', 'DEF', 2, 90), p('SRB_4', 'Siniša Mihajlović', 'DEF', 4, 87), p('SRB_9', 'Nemanja Jovanović', 'DEF', 9, 74),
      p('SRB_10', 'Aleksandar Jovanović', 'DEF', 10, 78), p('SRB_11', 'Dragan Ilić', 'DEF', 11, 73), p('SRB_13', 'Stefan Jovanović', 'DEF', 13, 76),
      p('SRB_14', 'Aleksandar Nikolić', 'DEF', 14, 79), p('SRB_15', 'Miloš Marković', 'DEF', 15, 72), p('SRB_3', 'Dejan Stanković', 'MID', 3, 86),
      p('SRB_6', 'Dušan Tadić', 'MID', 6, 85), p('SRB_8', 'Sergej Milinković-Savić', 'MID', 8, 84), p('SRB_16', 'Miloš Milošević', 'MID', 16, 77),
      p('SRB_17', 'Stefan Nikolić', 'MID', 17, 79), p('SRB_18', 'Dragan Marković', 'MID', 18, 76), p('SRB_5', 'Dragan Džajić', 'FWD', 5, 88),
      p('SRB_7', 'Aleksandar Mitrović', 'FWD', 7, 84), p('SRB_19', 'Miloš Ilić', 'FWD', 19, 76), p('SRB_20', 'Luka Petrović', 'FWD', 20, 81),
      p('SRB_21', 'Stefan Jovanović', 'FWD', 21, 78), p('SRB_22', 'Nemanja Marković', 'FWD', 22, 80),
    ]
  },

  // ── CZE ───────────────────────────────
  {
    id: 'CZE', name: 'República Checa', nameEn: 'Czech Republic', flag: '🇨🇿', continent: 'Europa',
    kitHome: { shirt: '#D7141A', shorts: '#11457E', socks: '#D7141A' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Karel Brückner', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CZE_1', 'Petr Čech', 'GK', 1, 90), p('CZE_12', 'Petr Novotný', 'GK', 12, 74), p('CZE_23', 'Martin Černý', 'GK', 23, 73),
      p('CZE_7', 'Marek Jankulovski', 'DEF', 7, 82), p('CZE_8', 'Tomáš Ujfaluši', 'DEF', 8, 81), p('CZE_9', 'Zdeněk Veselý', 'DEF', 9, 73),
      p('CZE_10', 'Jiří Novák', 'DEF', 10, 72), p('CZE_11', 'Jan Horák', 'DEF', 11, 72), p('CZE_13', 'Miroslav Novák', 'DEF', 13, 76),
      p('CZE_14', 'Josef Dvořák', 'DEF', 14, 77), p('CZE_15', 'Jan Horák', 'DEF', 15, 72), p('CZE_2', 'Pavel Nedvěd', 'MID', 2, 91),
      p('CZE_3', 'Tomáš Rosický', 'MID', 3, 86), p('CZE_4', 'Karel Poborský', 'MID', 4, 84), p('CZE_16', 'Petr Horák', 'MID', 16, 75),
      p('CZE_17', 'Petr Veselý', 'MID', 17, 80), p('CZE_18', 'Jaroslav Procházka', 'MID', 18, 73), p('CZE_5', 'Jan Koller', 'FWD', 5, 85),
      p('CZE_6', 'Milan Baroš', 'FWD', 6, 83), p('CZE_19', 'Zdeněk Kučera', 'FWD', 19, 75), p('CZE_20', 'Miroslav Němec', 'FWD', 20, 80),
      p('CZE_21', 'Martin Černý', 'FWD', 21, 81), p('CZE_22', 'Zdeněk Procházka', 'FWD', 22, 75),
    ]
  },

  // ── GRE ───────────────────────────────
  {
    id: 'GRE', name: 'Grecia', nameEn: 'Greece', flag: '🇬🇷', continent: 'Europa',
    kitHome: { shirt: '#005BAE', shorts: '#005BAE', socks: '#005BAE' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Otto Rehhagel', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('GRE_1', 'Antonios Nikopolidis', 'GK', 1, 80), p('GRE_12', 'Kostas Makris', 'GK', 12, 75), p('GRE_23', 'Andreas Dimopoulos', 'GK', 23, 73),
      p('GRE_5', 'Traianos Dellas', 'DEF', 5, 80), p('GRE_8', 'Kostas Manolas', 'DEF', 8, 82), p('GRE_9', 'Giorgos Pappas', 'DEF', 9, 75),
      p('GRE_10', 'Vasilis Dimopoulos', 'DEF', 10, 72), p('GRE_11', 'Christos Vlachos', 'DEF', 11, 77), p('GRE_13', 'Kostas Karagiannis', 'DEF', 13, 75),
      p('GRE_14', 'Dimitris Pappas', 'DEF', 14, 76), p('GRE_15', 'Christos Pappas', 'DEF', 15, 77), p('GRE_2', 'Giorgos Karagounis', 'MID', 2, 82),
      p('GRE_3', 'Theodoros Zagorakis', 'MID', 3, 83), p('GRE_16', 'Dimitris Oikonomou', 'MID', 16, 79), p('GRE_17', 'Kostas Vlachos', 'MID', 17, 78),
      p('GRE_18', 'Kostas Oikonomou', 'MID', 18, 79), p('GRE_19', 'Vasilis Konstantinou', 'MID', 19, 75), p('GRE_4', 'Angelos Charisteas', 'FWD', 4, 81),
      p('GRE_6', 'Georgios Samaras', 'FWD', 6, 79), p('GRE_7', 'Kostas Mitroglou', 'FWD', 7, 78), p('GRE_20', 'Michalis Oikonomou', 'FWD', 20, 80),
      p('GRE_21', 'Christos Oikonomou', 'FWD', 21, 77), p('GRE_22', 'Christos Makris', 'FWD', 22, 80),
    ]
  },

  // ── AUT ───────────────────────────────
  {
    id: 'AUT', name: 'Austria', nameEn: 'Austria', flag: '🇦🇹', continent: 'Europa',
    kitHome: { shirt: '#ED2939', shorts: '#FFFFFF', socks: '#ED2939' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Hugo Meisl', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('AUT_1', 'Friedl Koncilia', 'GK', 1, 79), p('AUT_12', 'Werner Leitner', 'GK', 12, 77), p('AUT_23', 'Werner Steiner', 'GK', 23, 76),
      p('AUT_3', 'David Alaba', 'DEF', 3, 87), p('AUT_9', 'Peter Huber', 'DEF', 9, 77), p('AUT_10', 'Christian Steiner', 'DEF', 10, 76),
      p('AUT_11', 'Michael Steiner', 'DEF', 11, 75), p('AUT_13', 'Josef Moser', 'DEF', 13, 72), p('AUT_14', 'Christian Steiner', 'DEF', 14, 73),
      p('AUT_15', 'Werner Moser', 'DEF', 15, 74), p('AUT_16', 'Josef Hofer', 'DEF', 16, 73), p('AUT_6', 'Andreas Herzog', 'MID', 6, 82),
      p('AUT_7', 'Herbert Prohaska', 'MID', 7, 83), p('AUT_17', 'Thomas Mayer', 'MID', 17, 73), p('AUT_18', 'Josef Huber', 'MID', 18, 74),
      p('AUT_19', 'Thomas Pichler', 'MID', 19, 79), p('AUT_20', 'Werner Hofer', 'MID', 20, 77), p('AUT_2', 'Matthias Sindelar', 'FWD', 2, 90),
      p('AUT_4', 'Hans Krankl', 'FWD', 4, 85), p('AUT_5', 'Toni Polster', 'FWD', 5, 84), p('AUT_8', 'Marko Arnautović', 'FWD', 8, 81),
      p('AUT_21', 'Christian Wagner', 'FWD', 21, 75), p('AUT_22', 'Peter Huber', 'FWD', 22, 81),
    ]
  },

  // ── HUN ───────────────────────────────
  {
    id: 'HUN', name: 'Hungría', nameEn: 'Hungary', flag: '🇭🇺', continent: 'Europa',
    kitHome: { shirt: '#CE2939', shorts: '#FFFFFF', socks: '#477050' },
    kitAway: { shirt: '#FFFFFF', shorts: '#CE2939', socks: '#FFFFFF' },
    coach: 'Gusztáv Sebes', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('HUN_1', 'Gyula Grosics', 'GK', 1, 88), p('HUN_12', 'László Varga', 'GK', 12, 73), p('HUN_23', 'József Szabó', 'GK', 23, 70),
      p('HUN_9', 'István Varga', 'DEF', 9, 78), p('HUN_10', 'János Tóth', 'DEF', 10, 78), p('HUN_11', 'Gábor Molnár', 'DEF', 11, 74),
      p('HUN_13', 'Péter Nagy', 'DEF', 13, 77), p('HUN_14', 'Tibor Horváth', 'DEF', 14, 72), p('HUN_15', 'Péter Balogh', 'DEF', 15, 77),
      p('HUN_16', 'József Nagy', 'DEF', 16, 78), p('HUN_17', 'Tibor Kiss', 'DEF', 17, 78), p('HUN_6', 'József Bozsik', 'MID', 6, 89),
      p('HUN_8', 'Dominik Szoboszlai', 'MID', 8, 83), p('HUN_18', 'Ferenc Kiss', 'MID', 18, 80), p('HUN_19', 'Péter Varga', 'MID', 19, 77),
      p('HUN_20', 'János Horváth', 'MID', 20, 74), p('HUN_21', 'Gábor Tóth', 'MID', 21, 73), p('HUN_2', 'Ferenc Puskás', 'FWD', 2, 96),
      p('HUN_3', 'Sándor Kocsis', 'FWD', 3, 93), p('HUN_4', 'Zoltán Czibor', 'FWD', 4, 88), p('HUN_5', 'Nándor Hidegkuti', 'FWD', 5, 90),
      p('HUN_7', 'Flórián Albert', 'FWD', 7, 89), p('HUN_22', 'József Varga', 'FWD', 22, 77),
    ]
  },

  // ── ROU ───────────────────────────────
  {
    id: 'ROU', name: 'Rumanía', nameEn: 'Romania', flag: '🇷🇴', continent: 'Europa',
    kitHome: { shirt: '#FCD116', shorts: '#FCD116', socks: '#FCD116' },
    kitAway: { shirt: '#002B7F', shorts: '#002B7F', socks: '#002B7F' },
    coach: 'Anghel Iordănescu', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ROU_1', 'Bogdan Stelea', 'GK', 1, 81), p('ROU_12', 'Alexandru Matei', 'GK', 12, 76), p('ROU_23', 'Constantin Marin', 'GK', 23, 76),
      p('ROU_3', 'Gheorghe Popescu', 'DEF', 3, 85), p('ROU_4', 'Dan Petrescu', 'DEF', 4, 84), p('ROU_7', 'Miodrag Belodedici', 'DEF', 7, 83),
      p('ROU_9', 'Mihai Popa', 'DEF', 9, 75), p('ROU_10', 'Constantin Popescu', 'DEF', 10, 77), p('ROU_11', 'Alexandru Stoica', 'DEF', 11, 72),
      p('ROU_13', 'Florin Stoica', 'DEF', 13, 78), p('ROU_14', 'Alexandru Popescu', 'DEF', 14, 74), p('ROU_2', 'Gheorghe Hagi', 'MID', 2, 91),
      p('ROU_6', 'Ilie Dumitrescu', 'MID', 6, 82), p('ROU_8', 'Dorinel Munteanu', 'MID', 8, 80), p('ROU_15', 'Vasile Stan', 'MID', 15, 76),
      p('ROU_16', 'Andrei Matei', 'MID', 16, 75), p('ROU_17', 'Nicolae Ionescu', 'MID', 17, 79), p('ROU_5', 'Adrian Mutu', 'FWD', 5, 84),
      p('ROU_18', 'Florin Popescu', 'FWD', 18, 79), p('ROU_19', 'Nicolae Stoica', 'FWD', 19, 77), p('ROU_20', 'Andrei Matei', 'FWD', 20, 80),
      p('ROU_21', 'Gheorghe Radu', 'FWD', 21, 76), p('ROU_22', 'Nicolae Constantinescu', 'FWD', 22, 75),
    ]
  },

  // ── BUL ───────────────────────────────
  {
    id: 'BUL', name: 'Bulgaria', nameEn: 'Bulgaria', flag: '🇧🇬', continent: 'Europa',
    kitHome: { shirt: '#FFFFFF', shorts: '#00966E', socks: '#D62612' },
    kitAway: { shirt: '#D62612', shorts: '#FFFFFF', socks: '#00966E' },
    coach: 'Dimitar Penev', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BUL_1', 'Borislav Mihaylov', 'GK', 1, 81), p('BUL_12', 'Ivan Vasilev', 'GK', 12, 74), p('BUL_23', 'Todor Stoyanov', 'GK', 23, 76),
      p('BUL_8', 'Trifon Ivanov', 'DEF', 8, 83), p('BUL_9', 'Krasimir Vasilev', 'DEF', 9, 77), p('BUL_10', 'Iliya Dimitrov', 'DEF', 10, 72),
      p('BUL_11', 'Hristo Mihaylov', 'DEF', 11, 72), p('BUL_13', 'Ivan Iliev', 'DEF', 13, 77), p('BUL_14', 'Petar Georgiev', 'DEF', 14, 78),
      p('BUL_15', 'Iliya Dimitrov', 'DEF', 15, 72), p('BUL_16', 'Nikolay Vasilev', 'DEF', 16, 72), p('BUL_4', 'Krasimir Balakov', 'MID', 4, 86),
      p('BUL_5', 'Yordan Letchkov', 'MID', 5, 84), p('BUL_7', 'Stiliyan Petrov', 'MID', 7, 82), p('BUL_17', 'Iliya Dimitrov', 'MID', 17, 77),
      p('BUL_18', 'Hristo Iliev', 'MID', 18, 75), p('BUL_19', 'Krasimir Todorov', 'MID', 19, 78), p('BUL_2', 'Hristo Stoichkov', 'FWD', 2, 92),
      p('BUL_3', 'Dimitar Berbatov', 'FWD', 3, 87), p('BUL_6', 'Emil Kostadinov', 'FWD', 6, 82), p('BUL_20', 'Stefan Stoyanov', 'FWD', 20, 80),
      p('BUL_21', 'Dimitar Dimitrov', 'FWD', 21, 74), p('BUL_22', 'Hristo Petrov', 'FWD', 22, 79),
    ]
  },

  // ── UKR ───────────────────────────────
  {
    id: 'UKR', name: 'Ucrania', nameEn: 'Ukraine', flag: '🇺🇦', continent: 'Europa',
    kitHome: { shirt: '#FFD700', shorts: '#FFD700', socks: '#FFD700' },
    kitAway: { shirt: '#005BBC', shorts: '#005BBC', socks: '#005BBC' },
    coach: 'Andriy Shevchenko', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('UKR_1', 'Oleksandr Shovkovskyi', 'GK', 1, 82), p('UKR_12', 'Viktor Shevchenko', 'GK', 12, 74), p('UKR_23', 'Taras Shevchenko', 'GK', 23, 75),
      p('UKR_4', 'Oleksandr Zinchenko', 'DEF', 4, 83), p('UKR_7', 'Oleh Luzhnyi', 'DEF', 7, 80), p('UKR_9', 'Viktor Bondarenko', 'DEF', 9, 76),
      p('UKR_10', 'Volodymyr Shevchenko', 'DEF', 10, 72), p('UKR_11', 'Viktor Kovalenko', 'DEF', 11, 75), p('UKR_13', 'Taras Tkachuk', 'DEF', 13, 72),
      p('UKR_14', 'Yuriy Kravchenko', 'DEF', 14, 78), p('UKR_15', 'Oleh Tkachenko', 'DEF', 15, 72), p('UKR_5', 'Andriy Yarmolenko', 'MID', 5, 82),
      p('UKR_6', 'Yevhen Konoplyanka', 'MID', 6, 81), p('UKR_8', 'Ruslan Malinovskyi', 'MID', 8, 81), p('UKR_16', 'Taras Melnyk', 'MID', 16, 73),
      p('UKR_17', 'Oleh Tkachuk', 'MID', 17, 79), p('UKR_18', 'Mykola Shevchenko', 'MID', 18, 77), p('UKR_2', 'Andriy Shevchenko', 'FWD', 2, 93),
      p('UKR_3', 'Serhiy Rebrov', 'FWD', 3, 85), p('UKR_19', 'Oleh Bondarenko', 'FWD', 19, 80), p('UKR_20', 'Viktor Shevchenko', 'FWD', 20, 78),
      p('UKR_21', 'Volodymyr Kravchenko', 'FWD', 21, 80), p('UKR_22', 'Oleh Melnyk', 'FWD', 22, 77),
    ]
  },

  // ── RUS ───────────────────────────────
  {
    id: 'RUS', name: 'Rusia', nameEn: 'Russia', flag: '🇷🇺', continent: 'Europa',
    kitHome: { shirt: '#D52B1E', shorts: '#FFFFFF', socks: '#0039A6' },
    kitAway: { shirt: '#FFFFFF', shorts: '#0039A6', socks: '#D52B1E' },
    coach: 'Stanislav Cherchesov', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('RUS_1', 'Lev Yashin', 'GK', 1, 95), p('RUS_12', 'Igor Akinfeev', 'GK', 12, 83), p('RUS_23', 'Aleksandr Kozlov', 'GK', 23, 74),
      p('RUS_5', 'Yuri Zhirkov', 'DEF', 5, 82), p('RUS_7', 'Sergei Ignashevich', 'DEF', 7, 81), p('RUS_8', 'Ivan Kuznetsov', 'DEF', 8, 75),
      p('RUS_9', 'Mikhail Kozlov', 'DEF', 9, 79), p('RUS_10', 'Sergey Novikov', 'DEF', 10, 78), p('RUS_11', 'Aleksey Smirnov', 'DEF', 11, 79),
      p('RUS_13', 'Yuriy Sokolov', 'DEF', 13, 78), p('RUS_14', 'Ivan Novikov', 'DEF', 14, 76), p('RUS_2', 'Andrey Arshavin', 'MID', 2, 86),
      p('RUS_3', 'Valeri Karpin', 'MID', 3, 84), p('RUS_4', 'Aleksandr Mostovoi', 'MID', 4, 85), p('RUS_15', 'Vladimir Kozlov', 'MID', 15, 78),
      p('RUS_16', 'Dmitriy Sokolov', 'MID', 16, 78), p('RUS_17', 'Dmitriy Popov', 'MID', 17, 77), p('RUS_6', 'Roman Pavlyuchenko', 'FWD', 6, 80),
      p('RUS_18', 'Vladimir Popov', 'FWD', 18, 76), p('RUS_19', 'Yuriy Kuznetsov', 'FWD', 19, 75), p('RUS_20', 'Yuriy Ivanov', 'FWD', 20, 74),
      p('RUS_21', 'Sergey Novikov', 'FWD', 21, 77), p('RUS_22', 'Aleksandr Lebedev', 'FWD', 22, 81),
    ]
  },

  // ── ISL ───────────────────────────────
  {
    id: 'ISL', name: 'Islandia', nameEn: 'Iceland', flag: '🇮🇸', continent: 'Europa',
    kitHome: { shirt: '#02529C', shorts: '#02529C', socks: '#02529C' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Lars Lagerbäck', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ISL_1', 'Hannes Þór Halldórsson', 'GK', 1, 78), p('ISL_12', 'Sigurður Guðmundsson', 'GK', 12, 70), p('ISL_23', 'Guðmundur Jónsson', 'GK', 23, 76),
      p('ISL_6', 'Kári Árnason', 'DEF', 6, 76), p('ISL_7', 'Ragnar Sigurðsson', 'DEF', 7, 77), p('ISL_9', 'Jón Ólafsson', 'DEF', 9, 78),
      p('ISL_10', 'Sigurður Stefánsson', 'DEF', 10, 78), p('ISL_11', 'Stefán Magnússon', 'DEF', 11, 75), p('ISL_13', 'Ólafur Jónsson', 'DEF', 13, 73),
      p('ISL_14', 'Magnús Guðmundsson', 'DEF', 14, 79), p('ISL_15', 'Ólafur Jónsson', 'DEF', 15, 77), p('ISL_3', 'Gylfi Sigurðsson', 'MID', 3, 83),
      p('ISL_4', 'Aron Gunnarsson', 'MID', 4, 79), p('ISL_5', 'Birkir Bjarnason', 'MID', 5, 77), p('ISL_16', 'Bjarni Ólafsson', 'MID', 16, 78),
      p('ISL_17', 'Jón Kristjánsson', 'MID', 17, 73), p('ISL_18', 'Ólafur Jónsson', 'MID', 18, 74), p('ISL_2', 'Eidur Gudjohnsen', 'FWD', 2, 85),
      p('ISL_8', 'Kolbeinn Sigþórsson', 'FWD', 8, 77), p('ISL_19', 'Bjarni Jónsson', 'FWD', 19, 74), p('ISL_20', 'Guðmundur Ólafsson', 'FWD', 20, 74),
      p('ISL_21', 'Bjarni Bjarnason', 'FWD', 21, 77), p('ISL_22', 'Ólafur Stefánsson', 'FWD', 22, 80),
    ]
  },

  // ── CHI ───────────────────────────────
  {
    id: 'CHI', name: 'Chile', nameEn: 'Chile', flag: '🇨🇱', continent: 'Sudamérica',
    kitHome: { shirt: '#D52B1E', shorts: '#0039A6', socks: '#FFFFFF' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Marcelo Bielsa', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CHI_1', 'Claudio Bravo', 'GK', 1, 86), p('CHI_12', 'Francisco Muñoz', 'GK', 12, 70), p('CHI_23', 'Francisco González', 'GK', 23, 70),
      p('CHI_2', 'Elías Figueroa', 'DEF', 2, 91), p('CHI_8', 'Gary Medel', 'DEF', 8, 83), p('CHI_9', 'Víctor González', 'DEF', 9, 79),
      p('CHI_10', 'José Martínez', 'DEF', 10, 73), p('CHI_11', 'Manuel Soto', 'DEF', 11, 72), p('CHI_13', 'Manuel Díaz', 'DEF', 13, 77),
      p('CHI_14', 'Carlos Rojas', 'DEF', 14, 74), p('CHI_15', 'Francisco González', 'DEF', 15, 77), p('CHI_6', 'Arturo Vidal', 'MID', 6, 88),
      p('CHI_7', 'Charles Aránguiz', 'MID', 7, 84), p('CHI_16', 'Miguel Muñoz', 'MID', 16, 73), p('CHI_17', 'Jorge Silva', 'MID', 17, 74),
      p('CHI_18', 'Carlos Díaz', 'MID', 18, 75), p('CHI_19', 'Luis Sepúlveda', 'MID', 19, 78), p('CHI_3', 'Marcelo Salas', 'FWD', 3, 88),
      p('CHI_4', 'Iván Zamorano', 'FWD', 4, 88), p('CHI_5', 'Alexis Sánchez', 'FWD', 5, 89), p('CHI_20', 'Pedro Martínez', 'FWD', 20, 77),
      p('CHI_21', 'Pedro Rojas', 'FWD', 21, 80), p('CHI_22', 'Jorge González', 'FWD', 22, 79),
    ]
  },

  // ── PER ───────────────────────────────
  {
    id: 'PER', name: 'Perú', nameEn: 'Peru', flag: '🇵🇪', continent: 'Sudamérica',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#D91023', shorts: '#D91023', socks: '#D91023' },
    coach: 'Ricardo Gareca', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('PER_1', 'Pedro Gallese', 'GK', 1, 80), p('PER_12', 'Manuel Rojas', 'GK', 12, 77), p('PER_23', 'Carlos Sánchez', 'GK', 23, 71),
      p('PER_6', 'Héctor Chumpitaz', 'DEF', 6, 85), p('PER_9', 'Luis Rojas', 'DEF', 9, 75), p('PER_10', 'Carlos Pérez', 'DEF', 10, 74),
      p('PER_11', 'Jorge Pérez', 'DEF', 11, 73), p('PER_13', 'José Chávez', 'DEF', 13, 73), p('PER_14', 'Juan Chávez', 'DEF', 14, 73),
      p('PER_15', 'Pedro Rojas', 'DEF', 15, 75), p('PER_16', 'Roberto García', 'DEF', 16, 75), p('PER_2', 'Teófilo Cubillas', 'MID', 2, 89),
      p('PER_7', 'Nolberto Solano', 'MID', 7, 83), p('PER_17', 'Roberto García', 'MID', 17, 76), p('PER_18', 'Luis González', 'MID', 18, 79),
      p('PER_19', 'Jorge Flores', 'MID', 19, 77), p('PER_20', 'Carlos Flores', 'MID', 20, 79), p('PER_3', 'Claudio Pizarro', 'FWD', 3, 85),
      p('PER_4', 'Paolo Guerrero', 'FWD', 4, 84), p('PER_5', 'Jefferson Farfán', 'FWD', 5, 84), p('PER_8', 'Hugo Sotil', 'FWD', 8, 82),
      p('PER_21', 'Víctor González', 'FWD', 21, 79), p('PER_22', 'Roberto Gómez', 'FWD', 22, 78),
    ]
  },

  // ── ECU ───────────────────────────────
  {
    id: 'ECU', name: 'Ecuador', nameEn: 'Ecuador', flag: '🇪🇨', continent: 'Sudamérica',
    kitHome: { shirt: '#FFD100', shorts: '#00205B', socks: '#EF3340' },
    kitAway: { shirt: '#00205B', shorts: '#FFFFFF', socks: '#00205B' },
    coach: 'Gustavo Alfaro', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('ECU_1', 'José Francisco Cevallos', 'GK', 1, 79), p('ECU_12', 'Carlos Rodríguez', 'GK', 12, 75), p('ECU_23', 'Jorge Zambrano', 'GK', 23, 75),
      p('ECU_6', 'Ulises de la Cruz', 'DEF', 6, 80), p('ECU_9', 'Carlos Pérez', 'DEF', 9, 79), p('ECU_10', 'Juan Rodríguez', 'DEF', 10, 74),
      p('ECU_11', 'Ángel Castro', 'DEF', 11, 73), p('ECU_13', 'Pedro Macías', 'DEF', 13, 74), p('ECU_14', 'Víctor Sánchez', 'DEF', 14, 76),
      p('ECU_15', 'José Zambrano', 'DEF', 15, 77), p('ECU_16', 'Jorge Zambrano', 'DEF', 16, 76), p('ECU_2', 'Antonio Valencia', 'MID', 2, 85),
      p('ECU_3', 'Álex Aguinaga', 'MID', 3, 84), p('ECU_8', 'Moisés Caicedo', 'MID', 8, 82), p('ECU_17', 'Segundo Rodríguez', 'MID', 17, 73),
      p('ECU_18', 'Ángel Mendoza', 'MID', 18, 80), p('ECU_19', 'Luis Cevallos', 'MID', 19, 79), p('ECU_4', 'Agustín Delgado', 'FWD', 4, 82),
      p('ECU_5', 'Iván Kaviedes', 'FWD', 5, 81), p('ECU_7', 'Enner Valencia', 'FWD', 7, 81), p('ECU_20', 'José Macías', 'FWD', 20, 78),
      p('ECU_21', 'Manuel Macías', 'FWD', 21, 75), p('ECU_22', 'Pedro Vera', 'FWD', 22, 74),
    ]
  },

  // ── PAR ───────────────────────────────
  {
    id: 'PAR', name: 'Paraguay', nameEn: 'Paraguay', flag: '🇵🇾', continent: 'Sudamérica',
    kitHome: { shirt: '#D52B1E', shorts: '#0038A8', socks: '#FFFFFF' },
    kitAway: { shirt: '#0038A8', shorts: '#0038A8', socks: '#0038A8' },
    coach: 'Gerardo Martino', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('PAR_1', 'José Luis Chilavert', 'GK', 1, 88), p('PAR_12', 'Jorge Acosta', 'GK', 12, 76), p('PAR_23', 'Ramón Benítez', 'GK', 23, 71),
      p('PAR_3', 'Carlos Gamarra', 'DEF', 3, 86), p('PAR_4', 'Francisco Arce', 'DEF', 4, 83), p('PAR_7', 'Celso Ayala', 'DEF', 7, 82),
      p('PAR_9', 'Víctor González', 'DEF', 9, 74), p('PAR_10', 'Luis Acosta', 'DEF', 10, 73), p('PAR_11', 'Víctor Vera', 'DEF', 11, 73),
      p('PAR_13', 'Julio García', 'DEF', 13, 73), p('PAR_14', 'Luis Benítez', 'DEF', 14, 78), p('PAR_8', 'Miguel Almirón', 'MID', 8, 82),
      p('PAR_15', 'Miguel Acosta', 'MID', 15, 75), p('PAR_16', 'Luis Martínez', 'MID', 16, 73), p('PAR_17', 'Juan Martínez', 'MID', 17, 77),
      p('PAR_18', 'Carlos Acosta', 'MID', 18, 74), p('PAR_19', 'Jorge Duarte', 'MID', 19, 79), p('PAR_2', 'Roque Santa Cruz', 'FWD', 2, 84),
      p('PAR_5', 'Salvador Cabañas', 'FWD', 5, 82), p('PAR_6', 'Óscar Cardozo', 'FWD', 6, 81), p('PAR_20', 'Ramón García', 'FWD', 20, 77),
      p('PAR_21', 'Jorge Giménez', 'FWD', 21, 80), p('PAR_22', 'Víctor Acosta', 'FWD', 22, 79),
    ]
  },

  // ── VEN ───────────────────────────────
  {
    id: 'VEN', name: 'Venezuela', nameEn: 'Venezuela', flag: '🇻🇪', continent: 'Sudamérica',
    kitHome: { shirt: '#800000', shorts: '#800000', socks: '#800000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'César Farías', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('VEN_1', 'Rafael Dudamel', 'GK', 1, 78), p('VEN_12', 'Víctor Martínez', 'GK', 12, 72), p('VEN_23', 'Jesús Fernández', 'GK', 23, 77),
      p('VEN_5', 'José Manuel Rey', 'DEF', 5, 79), p('VEN_7', 'Oswaldo Vizcarrondo', 'DEF', 7, 78), p('VEN_8', 'Roberto Rosales', 'DEF', 8, 78),
      p('VEN_9', 'Jorge Fernández', 'DEF', 9, 77), p('VEN_10', 'Luis Fernández', 'DEF', 10, 76), p('VEN_11', 'Jorge Rodríguez', 'DEF', 11, 75),
      p('VEN_13', 'Víctor Pérez', 'DEF', 13, 76), p('VEN_14', 'José Sánchez', 'DEF', 14, 76), p('VEN_2', 'Juan Arango', 'MID', 2, 85),
      p('VEN_4', 'Tomás Rincón', 'MID', 4, 81), p('VEN_15', 'Pedro Sánchez', 'MID', 15, 80), p('VEN_16', 'Miguel Fernández', 'MID', 16, 76),
      p('VEN_17', 'Carlos Rodríguez', 'MID', 17, 79), p('VEN_18', 'José González', 'MID', 18, 75), p('VEN_3', 'Salomón Rondón', 'FWD', 3, 82),
      p('VEN_6', 'Josef Martínez', 'FWD', 6, 80), p('VEN_19', 'Víctor Fernández', 'FWD', 19, 74), p('VEN_20', 'José Díaz', 'FWD', 20, 76),
      p('VEN_21', 'Pedro Rodríguez', 'FWD', 21, 81), p('VEN_22', 'Jesús López', 'FWD', 22, 77),
    ]
  },

  // ── BOL ───────────────────────────────
  {
    id: 'BOL', name: 'Bolivia', nameEn: 'Bolivia', flag: '🇧🇴', continent: 'Sudamérica',
    kitHome: { shirt: '#007A33', shorts: '#FFFFFF', socks: '#007A33' },
    kitAway: { shirt: '#FFFFFF', shorts: '#007A33', socks: '#FFFFFF' },
    coach: 'Xabier Azkargorta', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('BOL_1', 'Carlos Trucco', 'GK', 1, 78), p('BOL_12', 'José García', 'GK', 12, 76), p('BOL_23', 'Jorge Zeballos', 'GK', 23, 73),
      p('BOL_6', 'Ronald Raldes', 'DEF', 6, 80), p('BOL_7', 'Juan Manuel Peña', 'DEF', 7, 81), p('BOL_9', 'José Condori', 'DEF', 9, 75),
      p('BOL_10', 'Roberto Condori', 'DEF', 10, 76), p('BOL_11', 'Luis Gutiérrez', 'DEF', 11, 72), p('BOL_13', 'Julio Flores', 'DEF', 13, 77),
      p('BOL_14', 'Luis Zeballos', 'DEF', 14, 72), p('BOL_15', 'Miguel Condori', 'DEF', 15, 79), p('BOL_2', 'Marco Etcheverry', 'MID', 2, 84),
      p('BOL_3', 'Julio Baldivieso', 'MID', 3, 82), p('BOL_5', 'Erwin Sánchez', 'MID', 5, 83), p('BOL_16', 'Carlos Mamani', 'MID', 16, 74),
      p('BOL_17', 'José Mendoza', 'MID', 17, 78), p('BOL_18', 'Víctor Mendoza', 'MID', 18, 73), p('BOL_4', 'Marcelo Martins Moreno', 'FWD', 4, 81),
      p('BOL_8', 'Joaquín Botero', 'FWD', 8, 79), p('BOL_19', 'Juan Condori', 'FWD', 19, 80), p('BOL_20', 'Víctor Choque', 'FWD', 20, 81),
      p('BOL_21', 'Juan Mamani', 'FWD', 21, 79), p('BOL_22', 'Jorge Flores', 'FWD', 22, 81),
    ]
  },

  // ── CAN ───────────────────────────────
  {
    id: 'CAN', name: 'Canadá', nameEn: 'Canada', flag: '🇨🇦', continent: 'CONCACAF',
    kitHome: { shirt: '#FF0000', shorts: '#FF0000', socks: '#FF0000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'John Herdman', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CAN_1', 'Milan Borjan', 'GK', 1, 78), p('CAN_12', 'James Taylor', 'GK', 12, 77), p('CAN_23', 'James Smith', 'GK', 23, 70),
      p('CAN_2', 'Alphonso Davies', 'DEF', 2, 86), p('CAN_9', 'Richard Taylor', 'DEF', 9, 79), p('CAN_10', 'John Taylor', 'DEF', 10, 76),
      p('CAN_11', 'David Gagnon', 'DEF', 11, 72), p('CAN_13', 'Kevin Gagnon', 'DEF', 13, 73), p('CAN_14', 'Robert Lee', 'DEF', 14, 78),
      p('CAN_15', 'Thomas Gagnon', 'DEF', 15, 78), p('CAN_16', 'James Martin', 'DEF', 16, 74), p('CAN_4', 'Atiba Hutchinson', 'MID', 4, 81),
      p('CAN_6', 'Dwayne De Rosario', 'MID', 6, 81), p('CAN_7', 'Stephen Eustáquio', 'MID', 7, 80), p('CAN_8', 'Julian de Guzman', 'MID', 8, 79),
      p('CAN_17', 'David Wilson', 'MID', 17, 76), p('CAN_18', 'Michael Brown', 'MID', 18, 77), p('CAN_3', 'Jonathan David', 'FWD', 3, 83),
      p('CAN_5', 'Tomasz Radzinski', 'FWD', 5, 80), p('CAN_19', 'Michael Gagnon', 'FWD', 19, 77), p('CAN_20', 'Richard Martin', 'FWD', 20, 81),
      p('CAN_21', 'Michael Tremblay', 'FWD', 21, 77), p('CAN_22', 'William Gagnon', 'FWD', 22, 74),
    ]
  },

  // ── HON ───────────────────────────────
  {
    id: 'HON', name: 'Honduras', nameEn: 'Honduras', flag: '🇭🇳', continent: 'CONCACAF',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#002B7F', shorts: '#002B7F', socks: '#002B7F' },
    coach: 'Reinaldo Rueda', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('HON_1', 'Noel Valladares', 'GK', 1, 78), p('HON_12', 'Héctor García', 'GK', 12, 70), p('HON_23', 'José Gómez', 'GK', 23, 76),
      p('HON_6', 'Maynor Figueroa', 'DEF', 6, 80), p('HON_8', 'Emilio Izaguirre', 'DEF', 8, 79), p('HON_9', 'Luis Mejía', 'DEF', 9, 78),
      p('HON_10', 'Carlos Hernández', 'DEF', 10, 72), p('HON_11', 'Mario López', 'DEF', 11, 78), p('HON_13', 'Luis López', 'DEF', 13, 78),
      p('HON_14', 'Héctor López', 'DEF', 14, 72), p('HON_15', 'Juan Sánchez', 'DEF', 15, 79), p('HON_4', 'Wilson Palacios', 'MID', 4, 81),
      p('HON_7', 'Amado Guevara', 'MID', 7, 81), p('HON_16', 'Víctor Mejía', 'MID', 16, 80), p('HON_17', 'Héctor Flores', 'MID', 17, 76),
      p('HON_18', 'José López', 'MID', 18, 74), p('HON_19', 'Mario Gómez', 'MID', 19, 73), p('HON_2', 'Carlos Pavón', 'FWD', 2, 82),
      p('HON_3', 'David Suazo', 'FWD', 3, 84), p('HON_5', 'Carlo Costly', 'FWD', 5, 79), p('HON_20', 'Mario Hernández', 'FWD', 20, 78),
      p('HON_21', 'Mario Hernández', 'FWD', 21, 78), p('HON_22', 'Carlos Gómez', 'FWD', 22, 77),
    ]
  },

  // ── PAN ───────────────────────────────
  {
    id: 'PAN', name: 'Panamá', nameEn: 'Panama', flag: '🇵🇦', continent: 'CONCACAF',
    kitHome: { shirt: '#D21034', shorts: '#D21034', socks: '#D21034' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Hernán Darío Gómez', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('PAN_1', 'Jaime Penedo', 'GK', 1, 78), p('PAN_12', 'Ricardo Rodríguez', 'GK', 12, 70), p('PAN_23', 'Roberto Díaz', 'GK', 23, 77),
      p('PAN_4', 'Román Torres', 'DEF', 4, 78), p('PAN_5', 'Felipe Baloy', 'DEF', 5, 79), p('PAN_9', 'Roberto Hernández', 'DEF', 9, 76),
      p('PAN_10', 'Ricardo Díaz', 'DEF', 10, 76), p('PAN_11', 'Víctor Sánchez', 'DEF', 11, 76), p('PAN_13', 'Julio Martínez', 'DEF', 13, 75),
      p('PAN_14', 'Luis Hernández', 'DEF', 14, 72), p('PAN_15', 'Víctor López', 'DEF', 15, 78), p('PAN_6', 'Gabriel Gómez', 'MID', 6, 77),
      p('PAN_7', 'Armando Cooper', 'MID', 7, 76), p('PAN_8', 'Alberto Quintero', 'MID', 8, 76), p('PAN_16', 'Manuel Díaz', 'MID', 16, 76),
      p('PAN_17', 'Roberto Pérez', 'MID', 17, 75), p('PAN_18', 'Ricardo González', 'MID', 18, 78), p('PAN_2', 'Blas Pérez', 'FWD', 2, 80),
      p('PAN_3', 'Luis Tejada', 'FWD', 3, 79), p('PAN_19', 'Manuel Díaz', 'FWD', 19, 81), p('PAN_20', 'Julio Sánchez', 'FWD', 20, 78),
      p('PAN_21', 'Jorge Pérez', 'FWD', 21, 79), p('PAN_22', 'Julio Díaz', 'FWD', 22, 74),
    ]
  },

  // ── JAM ───────────────────────────────
  {
    id: 'JAM', name: 'Jamaica', nameEn: 'Jamaica', flag: '🇯🇲', continent: 'CONCACAF',
    kitHome: { shirt: '#FEE100', shorts: '#000000', socks: '#009B3A' },
    kitAway: { shirt: '#009B3A', shorts: '#FEE100', socks: '#000000' },
    coach: 'René Simões', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('JAM_1', 'Andre Blake', 'GK', 1, 80), p('JAM_12', 'John Thomas', 'GK', 12, 71), p('JAM_23', 'Richard Thomas', 'GK', 23, 77),
      p('JAM_7', 'Ricardo Gardner', 'DEF', 7, 79), p('JAM_8', 'Wes Morgan', 'DEF', 8, 80), p('JAM_9', 'Richard Smith', 'DEF', 9, 76),
      p('JAM_10', 'Paul Brown', 'DEF', 10, 74), p('JAM_11', 'Courtney White', 'DEF', 11, 72), p('JAM_13', 'Peter Brown', 'DEF', 13, 78),
      p('JAM_14', 'Michael White', 'DEF', 14, 76), p('JAM_15', 'Courtney Smith', 'DEF', 15, 72), p('JAM_4', 'Theodore Whitmore', 'MID', 4, 79),
      p('JAM_5', 'Robbie Earle', 'MID', 5, 79), p('JAM_16', 'Courtney Campbell', 'MID', 16, 80), p('JAM_17', 'John Anderson', 'MID', 17, 75),
      p('JAM_18', 'Peter Dixon', 'MID', 18, 79), p('JAM_19', 'Paul Smith', 'MID', 19, 80), p('JAM_2', 'Leon Bailey', 'FWD', 2, 83),
      p('JAM_3', 'Michail Antonio', 'FWD', 3, 82), p('JAM_6', 'Deon Burton', 'FWD', 6, 78), p('JAM_20', 'Mark Campbell', 'FWD', 20, 79),
      p('JAM_21', 'John Gordon', 'FWD', 21, 75), p('JAM_22', 'Courtney Dixon', 'FWD', 22, 77),
    ]
  },

  // ── EGY ───────────────────────────────
  {
    id: 'EGY', name: 'Egipto', nameEn: 'Egypt', flag: '🇪🇬', continent: 'África',
    kitHome: { shirt: '#CE1126', shorts: '#FFFFFF', socks: '#000000' },
    kitAway: { shirt: '#FFFFFF', shorts: '#000000', socks: '#FFFFFF' },
    coach: 'Hassan Shehata', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('EGY_1', 'Essam El-Hadary', 'GK', 1, 85), p('EGY_12', 'Hussein Ibrahim', 'GK', 12, 71), p('EGY_23', 'Khaled Ibrahim', 'GK', 23, 70),
      p('EGY_6', 'Wael Gomaa', 'DEF', 6, 83), p('EGY_9', 'Mohamed Ahmed', 'DEF', 9, 75), p('EGY_10', 'Mohamed Ali', 'DEF', 10, 76),
      p('EGY_11', 'Hassan Sayed', 'DEF', 11, 77), p('EGY_13', 'Mustafa Mohamed', 'DEF', 13, 72), p('EGY_14', 'Mustafa Sayed', 'DEF', 14, 79),
      p('EGY_15', 'Mahmoud Ahmed', 'DEF', 15, 73), p('EGY_16', 'Mustafa Hassan', 'DEF', 16, 72), p('EGY_3', 'Mohamed Aboutrika', 'MID', 3, 88),
      p('EGY_5', 'Ahmed Hassan', 'MID', 5, 84), p('EGY_8', 'Trezeguet', 'MID', 8, 80), p('EGY_17', 'Mustafa Abdullah', 'MID', 17, 79),
      p('EGY_18', 'Khaled Ahmed', 'MID', 18, 78), p('EGY_19', 'Ali Mahmoud', 'MID', 19, 73), p('EGY_2', 'Mohamed Salah', 'FWD', 2, 92),
      p('EGY_4', 'Hossam Hassan', 'FWD', 4, 85), p('EGY_7', 'Mido', 'FWD', 7, 82), p('EGY_20', 'Hassan Mohamed', 'FWD', 20, 75),
      p('EGY_21', 'Hassan Ibrahim', 'FWD', 21, 80), p('EGY_22', 'Mustafa Ahmed', 'FWD', 22, 77),
    ]
  },

  // ── RSA ───────────────────────────────
  {
    id: 'RSA', name: 'Sudáfrica', nameEn: 'South Africa', flag: '🇿🇦', continent: 'África',
    kitHome: { shirt: '#FFB81C', shorts: '#007749', socks: '#FFB81C' },
    kitAway: { shirt: '#007749', shorts: '#FFB81C', socks: '#007749' },
    coach: 'Clive Barker', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('RSA_1', 'Itumeleng Khune', 'GK', 1, 79), p('RSA_12', 'Teboho Nkosi', 'GK', 12, 73), p('RSA_23', 'Michael Nkosi', 'GK', 23, 76),
      p('RSA_3', 'Lucas Radebe', 'DEF', 3, 85), p('RSA_5', 'Mark Fish', 'DEF', 5, 81), p('RSA_9', 'Willem Smit', 'DEF', 9, 72),
      p('RSA_10', 'Thabo Nkosi', 'DEF', 10, 77), p('RSA_11', 'Teboho Mokoena', 'DEF', 11, 74), p('RSA_13', 'John Mokoena', 'DEF', 13, 78),
      p('RSA_14', 'John Mokoena', 'DEF', 14, 72), p('RSA_15', 'Kgotso Mkhize', 'DEF', 15, 74), p('RSA_4', 'Steven Pienaar', 'MID', 4, 82),
      p('RSA_6', 'Siphiwe Tshabalala', 'MID', 6, 80), p('RSA_7', 'Doctor Khumalo', 'MID', 7, 82), p('RSA_16', 'Michael Khumalo', 'MID', 16, 74),
      p('RSA_17', 'Michael Mathebula', 'MID', 17, 75), p('RSA_18', 'Sipho Maseko', 'MID', 18, 73), p('RSA_2', 'Benni McCarthy', 'FWD', 2, 84),
      p('RSA_8', 'Shaun Bartlett', 'FWD', 8, 80), p('RSA_19', 'Johannes Dlamini', 'FWD', 19, 75), p('RSA_20', 'Johannes Ndlovu', 'FWD', 20, 74),
      p('RSA_21', 'David Moyo', 'FWD', 21, 74), p('RSA_22', 'Johannes Mokoena', 'FWD', 22, 75),
    ]
  },

  // ── TUN ───────────────────────────────
  {
    id: 'TUN', name: 'Túnez', nameEn: 'Tunisia', flag: '🇹🇳', continent: 'África',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#E70013', shorts: '#E70013', socks: '#E70013' },
    coach: 'Roger Lemerre', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('TUN_1', 'Ali Boumnijel', 'GK', 1, 78), p('TUN_12', 'Walid Trabelsi', 'GK', 12, 72), p('TUN_23', 'Ahmed Haddad', 'GK', 23, 73),
      p('TUN_2', 'Hatem Trabelsi', 'DEF', 2, 83), p('TUN_4', 'Radhi Jaïdi', 'DEF', 4, 81), p('TUN_8', 'Aymen Abdennour', 'DEF', 8, 79),
      p('TUN_9', 'Mehdi Bouazizi', 'DEF', 9, 78), p('TUN_10', 'Amine Mansour', 'DEF', 10, 79), p('TUN_11', 'Walid Trabelsi', 'DEF', 11, 75),
      p('TUN_13', 'Amine Trabelsi', 'DEF', 13, 73), p('TUN_14', 'Youssef Jelassi', 'DEF', 14, 78), p('TUN_5', 'Youssef Msakni', 'MID', 5, 80),
      p('TUN_7', 'Zoubeir Baya', 'MID', 7, 80), p('TUN_15', 'Karim Gharbi', 'MID', 15, 79), p('TUN_16', 'Sami Dridi', 'MID', 16, 79),
      p('TUN_17', 'Sami Mansour', 'MID', 17, 73), p('TUN_18', 'Youssef Ben Ammar', 'MID', 18, 74), p('TUN_3', 'Wahbi Khazri', 'FWD', 3, 80),
      p('TUN_6', 'Francileudo Santos', 'FWD', 6, 79), p('TUN_19', 'Amine Mansour', 'FWD', 19, 75), p('TUN_20', 'Ali Bouazizi', 'FWD', 20, 74),
      p('TUN_21', 'Mehdi Khmiri', 'FWD', 21, 80), p('TUN_22', 'Youssef Ben Ali', 'FWD', 22, 74),
    ]
  },

  // ── MLI ───────────────────────────────
  {
    id: 'MLI', name: 'Malí', nameEn: 'Mali', flag: '🇲🇱', continent: 'África',
    kitHome: { shirt: '#009A44', shorts: '#FCD116', socks: '#CE1126' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Stephen Keshi', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('MLI_1', 'Soumbeïla Diakité', 'GK', 1, 77), p('MLI_12', 'Mamadou Keita', 'GK', 12, 73), p('MLI_23', 'Adama Touré', 'GK', 23, 72),
      p('MLI_7', 'Molla Wagué', 'DEF', 7, 79), p('MLI_9', 'Moussa Kouma', 'DEF', 9, 76), p('MLI_10', 'Amadou Camara', 'DEF', 10, 72),
      p('MLI_11', 'Ibrahim Kouma', 'DEF', 11, 78), p('MLI_13', 'Adama Diarra', 'DEF', 13, 79), p('MLI_14', 'Ousmane Diallo', 'DEF', 14, 76),
      p('MLI_15', 'Amadou Touré', 'DEF', 15, 77), p('MLI_16', 'Cheick Traoré', 'DEF', 16, 79), p('MLI_3', 'Seydou Keita', 'MID', 3, 86),
      p('MLI_4', 'Mahamadou Diarra', 'MID', 4, 84), p('MLI_6', 'Yves Bissouma', 'MID', 6, 83), p('MLI_17', 'Cheick Kouma', 'MID', 17, 76),
      p('MLI_18', 'Ibrahim Sissoko', 'MID', 18, 77), p('MLI_19', 'Cheick Touré', 'MID', 19, 73), p('MLI_2', 'Frédéric Kanouté', 'FWD', 2, 85),
      p('MLI_5', 'Salif Keïta', 'FWD', 5, 85), p('MLI_8', 'Moussa Marega', 'FWD', 8, 81), p('MLI_20', 'Amadou Traoré', 'FWD', 20, 76),
      p('MLI_21', 'Ousmane Keita', 'FWD', 21, 79), p('MLI_22', 'Ibrahim Camara', 'FWD', 22, 74),
    ]
  },

  // ── NZL ───────────────────────────────
  {
    id: 'NZL', name: 'Nueva Zelanda', nameEn: 'New Zealand', flag: '🇳🇿', continent: 'Oceanía',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#000000', shorts: '#000000', socks: '#000000' },
    coach: 'Ricki Herbert', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('NZL_1', 'Mark Paston', 'GK', 1, 78), p('NZL_12', 'Paul Martin', 'GK', 12, 75), p('NZL_23', 'Simon Brown', 'GK', 23, 77),
      p('NZL_3', 'Ryan Nelsen', 'DEF', 3, 82), p('NZL_7', 'Winston Reid', 'DEF', 7, 81), p('NZL_9', 'Mark Wilson', 'DEF', 9, 76),
      p('NZL_10', 'Paul White', 'DEF', 10, 73), p('NZL_11', 'Michael Smith', 'DEF', 11, 77), p('NZL_13', 'Michael Taylor', 'DEF', 13, 78),
      p('NZL_14', 'Mark White', 'DEF', 14, 78), p('NZL_15', 'David Williams', 'DEF', 15, 77), p('NZL_8', 'Simon Elliott', 'MID', 8, 78),
      p('NZL_16', 'Andrew Wilson', 'MID', 16, 78), p('NZL_17', 'Michael Wilson', 'MID', 17, 74), p('NZL_18', 'Michael Williams', 'MID', 18, 73),
      p('NZL_19', 'Simon Martin', 'MID', 19, 75), p('NZL_20', 'Simon Wilson', 'MID', 20, 76), p('NZL_2', 'Chris Wood', 'FWD', 2, 81),
      p('NZL_4', 'Wynton Rufer', 'FWD', 4, 83), p('NZL_5', 'Shane Smeltz', 'FWD', 5, 79), p('NZL_6', 'Rory Fallon', 'FWD', 6, 77),
      p('NZL_21', 'Mark Smith', 'FWD', 21, 81), p('NZL_22', 'Paul Williams', 'FWD', 22, 79),
    ]
  },

  // ── CHN ───────────────────────────────
  {
    id: 'CHN', name: 'China', nameEn: 'China', flag: '🇨🇳', continent: 'Asia',
    kitHome: { shirt: '#EE1C25', shorts: '#EE1C25', socks: '#EE1C25' },
    kitAway: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    coach: 'Bora Milutinović', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('CHN_1', 'Yan Junling', 'GK', 1, 76), p('CHN_12', 'Qiang Zhou', 'GK', 12, 70), p('CHN_23', 'Peng Wang', 'GK', 23, 71),
      p('CHN_3', 'Sun Jihai', 'DEF', 3, 81), p('CHN_5', 'Fan Zhiyi', 'DEF', 5, 80), p('CHN_9', 'Qiang Zhao', 'DEF', 9, 72),
      p('CHN_10', 'Jian Chen', 'DEF', 10, 76), p('CHN_11', 'Hao Zhao', 'DEF', 11, 76), p('CHN_13', 'Bin Zhang', 'DEF', 13, 72),
      p('CHN_14', 'Peng Huang', 'DEF', 14, 79), p('CHN_15', 'Lei Wang', 'DEF', 15, 74), p('CHN_4', 'Zheng Zhi', 'MID', 4, 82),
      p('CHN_7', 'Li Tie', 'MID', 7, 78), p('CHN_16', 'Peng Zhang', 'MID', 16, 74), p('CHN_17', 'Hao Chen', 'MID', 17, 75),
      p('CHN_18', 'Yong Wu', 'MID', 18, 74), p('CHN_19', 'Lei Zhang', 'MID', 19, 74), p('CHN_2', 'Wu Lei', 'FWD', 2, 80),
      p('CHN_6', 'Hao Haidong', 'FWD', 6, 81), p('CHN_8', 'Yang Chen', 'FWD', 8, 78), p('CHN_20', 'Hao Wang', 'FWD', 20, 77),
      p('CHN_21', 'Qiang Liu', 'FWD', 21, 79), p('CHN_22', 'Jian Zhou', 'FWD', 22, 75),
    ]
  },

  // ── UAE ───────────────────────────────
  {
    id: 'UAE', name: 'Emiratos Árabes', nameEn: 'UAE', flag: '🇦🇪', continent: 'Asia',
    kitHome: { shirt: '#FFFFFF', shorts: '#FFFFFF', socks: '#FFFFFF' },
    kitAway: { shirt: '#00732F', shorts: '#00732F', socks: '#00732F' },
    coach: 'Mahdi Ali', rating: 1.0,
    stats: { wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,points:0,cleanSheets:0,roundsPlayed:0 },
    players: [
      p('UAE_1', 'Ali Khasif', 'GK', 1, 77), p('UAE_12', 'Khaled Al Nuaimi', 'GK', 12, 70), p('UAE_23', 'Mohamed Al Qubaisi', 'GK', 23, 73),
      p('UAE_7', 'Walid Abbas', 'DEF', 7, 78), p('UAE_9', 'Salem Al Suwaidi', 'DEF', 9, 73), p('UAE_10', 'Ahmed Al Qubaisi', 'DEF', 10, 76),
      p('UAE_11', 'Khaled Al Hammadi', 'DEF', 11, 79), p('UAE_13', 'Ahmed Al Kaabi', 'DEF', 13, 78), p('UAE_14', 'Mohamed Al Qubaisi', 'DEF', 14, 74),
      p('UAE_15', 'Ahmed Al Qubaisi', 'DEF', 15, 79), p('UAE_16', 'Khaled Al Shamsi', 'DEF', 16, 73), p('UAE_3', 'Omar Abdulrahman', 'MID', 3, 83),
      p('UAE_8', 'Ismail Al Hammadi', 'MID', 8, 78), p('UAE_17', 'Khaled Al Qubaisi', 'MID', 17, 74), p('UAE_18', 'Mohamed Al Kaabi', 'MID', 18, 75),
      p('UAE_19', 'Abdulla Al Hammadi', 'MID', 19, 80), p('UAE_20', 'Ali Al Hammadi', 'MID', 20, 74), p('UAE_2', 'Ali Mabkhout', 'FWD', 2, 82),
      p('UAE_4', 'Adnan Al Talyani', 'FWD', 4, 81), p('UAE_5', 'Ismail Matar', 'FWD', 5, 80), p('UAE_6', 'Ahmed Khalil', 'FWD', 6, 79),
      p('UAE_21', 'Abdulla Al Mazrouei', 'FWD', 21, 77), p('UAE_22', 'Abdulla Al Hammadi', 'FWD', 22, 77),
    ]
  },
];

// ─── Helpers ──────────────────────────────────────────────
export function getCountryById(id) {
  return COUNTRIES.find(c => c.id === id);
}

export function getCountriesByContinent() {
  return COUNTRIES.reduce((acc, c) => {
    if (!acc[c.continent]) acc[c.continent] = [];
    acc[c.continent].push(c);
    return acc;
  }, {});
}
