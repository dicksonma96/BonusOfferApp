import './../css/style.min.css';
import React, {useState, useEffect} from 'react';
import BonusList from './../Component/BonusList';
import firebase from "./../firebase";
import useBonus from '../Hooks/useBonus'

function OnlineCasino() {
  const {bonus, getBonus} = useBonus('free_spins');
  const [loading, setLoading] = useState([]);


  return (
      <>
        <div className="section col">
          <div className="content col page_title">
            <h1>Best Free Spins No Deposit UK 2021</h1>
            <p>If you are looking for free spins no deposit casino UK sites, you've come to the right place! Casino Free spins are the most popular type of welcome bonus, so UK casinos are happy to offer free spins bonuses. BonusFinder is the biggest free spins bonus site in the UK, offering a long list of different free spin bonus offers. »</p>
          </div>
        </div>
        <BonusList list={bonus} />
      </>
  );
}

export default OnlineCasino;
