import React, { useEffect, useState } from 'react';

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IPL Points Table...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>IPL 2022 Points Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={thStyle}>Team</th>
            <th style={thStyle}>Matches</th>
            <th style={thStyle}>Won</th>
            <th style={thStyle}>Lost</th>
            <th style={thStyle}>Tied</th>
            <th style={thStyle}>NR</th>
            <th style={thStyle}>Points</th>
            <th style={thStyle}>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.team || index}>
              <td style={tdStyle}>{team.Team}</td>
              <td style={tdStyle}>{team.Matches}</td>
              <td style={tdStyle}>{team.Won}</td>
              <td style={tdStyle}>{team.Lost}</td>
              <td style={tdStyle}>{team.Tied}</td>
              <td style={tdStyle}>{team.NRR}</td>
              <td style={tdStyle}>{team.Points}</td>
              <td style={tdStyle}>{team.NRR.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

export default IplPointsTable;
