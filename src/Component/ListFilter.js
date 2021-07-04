import '../css/style.min.css';
import React, { useState, useEffect, useContext } from 'react';
import useCollapse from '../Hooks/useCollapse'
import dropdown from '../img/icon/dropdown.png';
import { BonusContext } from "../Context/BonusContext";

function ListFilter(props) {
  const {collapse, toggleCollapse} = useCollapse(true);
  const {category, setCategory} = useContext(BonusContext);

  const dropdown_list = props.list.map((ele,index)=>
    <span key={index} onClick={() => {
      setCategory(ele);
      toggleCollapse()
    }}>
      {ele}
    </span>
  );

  useEffect(()=>{
    setCategory(category)
  },[category])


  return (
    <div className="list_filter col">
      <div className="filter_bar shadow row" onClick={() => toggleCollapse()}>
        <span>{category}</span>
        <img src={dropdown} alt="dropdown"/>
      </div>
      <div className="filter_dropdown shadow col" style={{'display':collapse? 'none' : 'flex'}}>
        {dropdown_list}
      </div>

    </div>
  );


}

export default ListFilter;
