import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [serverInfo, setServerInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/server-info')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setServerInfo(data);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error fetching data: {error}</div>;
  if (!serverInfo) return <div>Loading...</div>;

  return (
    
    <div className="app-container">
      <div className="app-content">
        {/* Top Section: Title and Buttons */}
        <div className="top-header">
          

  
          <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
  <img src="/images/back.png" alt="icon" style={{ width: '20px', height: '20px' }} />
  <span>Multiplayer / Server Browser /</span>
</div>

          <div className="title" style={{ fontSize: '46px', fontWeight: '600' }}>Server Info</div>


          {/* New server description inserted here */}
          <div className="server-description">
  <div style={{ fontSize: '36px', fontWeight: '600' }}>
    #1| NASA | Noobs Welcome | Conquest 40Hz
  </div>

  {/* Image and sentence on same line */}
  <div style={{ display: 'flex', alignItems: 'center', fontSize: '18px', fontWeight: '600' }}>
    <img src="/images/german_flag.png" alt="conquest" style={{ width: '20px', marginRight: '8px' }} />
    conquest large - siege of shanghai - normal - 40 hz
  </div>

  <div style={{ fontSize: '18px', fontWeight: '600' }}>
    Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord "https://discord.gg/3r5NK4d"
  </div>
</div>

            
           


           
          <div className="action-buttons">
            <div className="action-box">Join</div>
            <div className="action-box">Spectate</div>
            <div className="action-box">Join as Commander</div>
            <div className="action-box">
              <img src="/images/favorite.png" alt="players" style={{ width: '20px', marginRight: '8px' }} />
               13672</div>
               </div>
           </div>

        <div className="container">
          {/* Top row: Players, Ping, Tickrate */}
          <div className="info-row">
            <div className="info-item">
              <div className="label">Players</div>
              <div className="value">{serverInfo.players}/{serverInfo.maxPlayers}</div>
            </div>
            <div className="info-item">
              <div className="label">Ping</div>
              <div className="value">{serverInfo.ping}ms</div>
            </div>
            <div className="info-item">
              <div className="label">Tickrate</div>
              <div className="value">{serverInfo.tickrate} Hz</div>
            </div>
          </div>

          {/* Bottom row: Settings, Advanced, Rules */}
          <div className="sections-row">
            <div className="section">
              <h2>Settings</h2>
              <ul className="plain-list">
                {serverInfo.settings && Object.entries(serverInfo.settings).map(([key, value]) => (
                  <li key={key}>
                    <span className="key-value">
                      <strong className="key">{key}</strong>
                      <span className="value">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h2>Advanced</h2>
              <ul className="plain-list">
                {serverInfo.advanced && Object.entries(serverInfo.advanced).map(([key, value]) => (
                  <li key={key}>
                    <span className="key-value">
                      <strong className="key">{key}</strong>
                      <span className="value">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h2>Rules</h2>
              <ul className="plain-list">
                {serverInfo.rules && Object.entries(serverInfo.rules).map(([key, value]) => (
                  <li key={key}>
                    <span className="key-value">
                      <strong className="key">{key}</strong>
                      <span className="value">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
