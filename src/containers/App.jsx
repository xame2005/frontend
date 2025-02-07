/* eslint-disable arrow-parens */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data').then(resp => {
      setData(resp);
    });
  }, []);

  return (
    <>
      <Header {...data}>
        <About {...data} />
      </Header>
      <Profile {...data} />
      <Experience {...data} />
      <div className="two-columns">
        <Academic {...data} />
        <Skills {...data} />
      </div>
      <div className="two-columns">
        <Interest {...data} />
        <Languages {...data} />
      </div>
    </>
  );
};

export default App;
