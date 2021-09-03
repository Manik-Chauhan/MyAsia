import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [userCountry, setuserCountry] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const getuserCountry = () => {
    setLoading(true);
    fetch('https://restcountries.eu/rest/v2/region/asia')
      .then(res => res.json())
      .then(res => {
        setuserCountry(res);
        setLoading(false);
      });
  }
 
  return (
    <div className="container App">
 
      <h4 className="d-inline-block">My Asia</h4>
    
      <button type="button" style={{margin: "20px"}} className="btn btn-primary"
        onClick={getuserCountry}
        disabled={loading}>
        {loading ? 'Loading...' : 'Show'}
      </button>
      

      <div className="clearfix"></div>
 
      <table class="table mt-3">
        <thead class="thead-dark">
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Subregion</th>
          <th>Population</th>
          <th>Borders</th>
          <th>Languages</th>
          <th>Flag</th>
        </thead>
        <tbody>
          {userCountry.map((x,borders,languages) => <tr>
            <td>{x.name}</td>
            <td>{x.capital}</td>
            <td>{x.region}</td>
            <td>{x.subregion}</td>
            <td>{x.population}</td>
            <td >{x.borders.join(', ')}</td>
            <td>{x.languages[0].name}</td>
            <td><img src={x.flag} width="50" height="50" /></td>
          </tr>)}
          {userCountry.length === 0 && <tr>
            <td className ="text-center" colSpan="8">
              <b>No data found to display.</b>
            </td>
          </tr>}
        </tbody>
      </table>
 
    </div>
  );
}
 
export default App;