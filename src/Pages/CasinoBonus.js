import './../css/style.min.css';
import React, {useState, useEffect} from 'react';
import BonusList from './../Component/BonusList';
import firebase from "./../firebase";
import useBonus from '../Hooks/useBonus'

function CasinoBonus() {
  const {bonus, getBonus} = useBonus('casino_bonuses');
  const [loading, setLoading] = useState([]);


  return (
      <>
        <div className="section col">
          <div className="content col page_title">
            <h1>Best Casino Bonuses UK 2021</h1>
            <p>If you're looking for the best online casino bonus in the UK, you've come to the right place. Casino players in the United Kingdom get to play at the best online casino sites with bonuses. BonusFinder UK presents the best casino bonus guide with exclusive online casino bonuses, giving you more money to play real money casino games. Here you’ll find the best casino bonuses of July 2021. »</p>
          </div>
        </div>
        <BonusList list={bonus} />
      </>
  );
}

export default CasinoBonus;
