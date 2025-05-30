const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/server-info', (req, res) => {
  console.log("Received request for /api/server-info");
  const fullInfo = {
    name: "RC3 BaseMaps",
    map: "Siege of Shanghai",
    players: 60,
    maxPlayers: 64,
    ping: "104",
    tickrate: "60",
    settings: {
      region: "Europe - DE",
      punkbuster: "On",
      fairfight: "Off",
      preset: "Normal"
    },
    advanced: {
      minimap: "On",
      "only squad leader spawn": "off",
      vehicles: "on",
      "team balance": "on",
      "minimap spotting": "on",
      hud: "on",
      "3p vehicle cam": "on",
      "regenerative health": "on",
      "kill cam": "on",
      "friendly fire": "off",
      "3d spotting": "on",
      "enemy name tags": "on"
    },
    rules: {
    tickets: 400,
    "vehicle spawn delay": 25,
    "bullet damage": 100,
    "kick after team kills": 5,
    "player health":100,
    "player respawn time": 100,
    "kick after idle": 300,
    "ban after kicks":3
        }
  };
  console.log("Sending full server info:", fullInfo);
  res.json(fullInfo);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
