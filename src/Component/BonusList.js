import '../css/style.min.css';
import React, { useState, useEffect } from 'react';
import ListFilter from './ListFilter';
import Bonus from './Bonus';
import { BonusContext } from "../Context/BonusContext";

function BonusList(props) {

  const uniqueCat = ['All Bonuses',...new Set(props.list.map(x => x.categories).flat())] // get Distinct category
  const [category,setCategory] = useState('All Bonuses')


  const bonus_list = props.list.map((ele,index)=>{

    if(category ==='All Bonuses'){
      return <Bonus info={ele} key={index}/>
    }

    else if(ele.categories.includes(category)){
      return <Bonus info={ele} key={index}/>
    }

  }

  );




  return (
    <div className="bonus_list section col">

        <div className="content col">

          <BonusContext.Provider value={{category,setCategory}}>
            <ListFilter list={uniqueCat} defaultValue={uniqueCat[0]} />
          </BonusContext.Provider>
          <div className="bonus_grid">
            {bonus_list}
          </div>
        </div>

    </div>);
}

export default BonusList;
