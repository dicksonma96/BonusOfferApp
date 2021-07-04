import '../css/style.min.css';
import mastercard from '../img/icon/mastercard.png';
import paypal from '../img/icon/paypal.png';
import visa from '../img/icon/visa.png';


function Bonus(props) {

  const offer_list = props.info.offers.map((ele,index)=>{
    return (
      <div className="offer_item row" key={index}>
        <b>&#x2714;</b>
        <div className="col">
          <h3>{ele.title}</h3>
          <p>{ele.des}</p>
        </div>
      </div>
    )
  })

  const rating = [];
  for (let i=0; i<5; i++) {
    if((Math.floor(props.info.star) - i)>0)
      rating.push('★')
    else{
      rating.push('☆')
    }
  }

  return (
    <div className="bonus_item col shadow">

      <div className="bonus_top col">
        <img className="bonus_logo" src={props.info.img} alt="bonus_logo"/>

          <div className="row bonus_title">
            <div className="casino_name">{props.info.name}</div>
            <div className="stars row">
              {rating} {props.info.star}
            </div>
          </div>

            <div className="offers col">
              {offer_list}
            </div>

            <a href={props.info.apply_url} target="_blank" className="apply_btn col">
              <b>GET THIS BONUS</b>
              18+ T&C Apply
            </a>
            <div className="row payment">
                <img src={visa} alt="visa"/>
                <img src={mastercard} alt="mastercard"/>
                <img src={paypal} alt="paypal"/>
            </div>
      </div>

      <div className="cotm" style={{'display':props.info.cotm? 'flex' : 'none'}}>★ CASINO OF THE MONTH</div>

      <div className="tac">
        <b>{props.info.tac.title}</b>
        <p>{props.info.tac.des}</p>
      </div>


    </div>
  );
}

Bonus.defaultProps ={
  apply_url:"-",
  categories:[],
  cotm:false,
  img:'',
  name:'-',
  offers:[{},{}],
  payment:[],
  star:0,
  tac:{
    title:'',
    des:''
  },
}

export default Bonus;
