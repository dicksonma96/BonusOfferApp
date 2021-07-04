import React, {useState, useEffect} from 'react';
import firebase from "./../firebase";
import bonus_logo from '../img/icon/bonus_logo.png';

function useBonus(collection) {
    const [bonus, setBonus] = useState([])
    const [loading, setLoading] = useState([]);
    const ref = firebase.firestore();
    const bonusDefault = {
      apply_url:"",
      categories:[],
      cotm:false,
      img:bonus_logo,
      name:'Bonus',
      offers:[],
      payment:[],
      star:0,
      tac:{
        title:'Terms And Condition',
        des:'Terms and Condition not found'
      },
    }

      function getBonus(){
        setLoading(true)
        ref.collection(collection).get().then((item) => {
          const items = item.docs.map((doc) =>{
            return Object.assign({},bonusDefault,doc.data());
          });
          setBonus(items)
          setLoading(false)
        })
      }

      useEffect(()=>{
        getBonus()
      },[])

    return {bonus, getBonus}
}

export default useBonus
