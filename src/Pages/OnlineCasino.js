import './../css/style.min.css';
import React, {useState, useEffect} from 'react';
import BonusList from './../Component/BonusList';
import firebase from "./../firebase";
import useBonus from '../Hooks/useBonus'

function OnlineCasino() {
  const {bonus, getBonus} = useBonus('online_casino');
  const [loading, setLoading] = useState([]);


  return (
      <>
        <div className="section col">
          <div className="content col page_title">
            <h1>Best UK Online Casinos List 2021</h1>
            <p>If you’re looking for the best casinos UK in 2021, you’ve come to the right place! We list the top 20 online casinos in the UK and explain what you can expect from these casino sites. Choose one from our UK online casinos list for an incredible online gaming experience! »</p>
          </div>
        </div>
        <BonusList list={bonus} />
      </>
  );
}

export default OnlineCasino;
