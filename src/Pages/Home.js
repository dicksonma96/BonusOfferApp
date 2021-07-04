import './../css/style.min.css';
import React, {useState, useEffect} from 'react';
import BonusList from './../Component/BonusList';
import firebase from "./../firebase";
import useBonus from '../Hooks/useBonus'



function Home() {
  const {bonus, getBonus} = useBonus('casino_bonuses');
  const [loading, setLoading] = useState([]);

  return (
      <>
        <div className="section col">
          <div className="content col page_title">
            <h1>Online Gambling Sites UK 2021</h1>
            <p>Welcome to BonusFinder.com UK - the most comprehensive bonus guide for online gambling. We list the best gambling bonuses, so you get more fun out of your money. »</p>
          </div>
        </div>
        <BonusList list={bonus} />
      </>
  );
}

export default Home;
