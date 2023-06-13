import ExpenceItem from "./ExpenceItem";
import './Expences.css'
import Card from "./Card";

function Expences(props){
return (
  <Card>
    <ExpenceItem title={props.Items[0].title} amount={props.Items[0].amount} date={props.Items[0].date}/>
    <ExpenceItem title={props.Items[1].title} amount={props.Items[1].amount} date={props.Items[1].date} />
    <ExpenceItem title={props.Items[2].title} amount={props.Items[2].amount} date={props.Items[2].date} />
    <ExpenceItem title={props.Items[3].title} amount={props.Items[3].amount} date={props.Items[3].date} /> 
  </Card>
)
}

export default Expences; 