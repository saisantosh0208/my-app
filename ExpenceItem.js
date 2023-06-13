import React, {useState} from 'react';
import Card from './Card';
import ExpenceDate from './ExpenceDate'
import './ExpenceItem.css';

function ExpenceItem(props){
   useState()

   let title = props.title;

   function ClickHandler (){
      title = 'Updated!!!';
      console.log(title)
   }
   return (

        <Card className="expense-item">
                <ExpenceDate date={props.date}/>
                 <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                 </div>
                 <button onClick={ClickHandler}>Click Here</button>
       </Card> 
    )
}

export default ExpenceItem;