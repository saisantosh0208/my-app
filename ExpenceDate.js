import moment from 'moment';
import './ExpenceDate.css';

function ExpenceDate(props) {
    const month =moment(props.date).format('MMMM');
    const day = moment(props.date).format('DD');
    const year = moment(props.date).format('YYYY');
    return(
             <div className="expense-date" style={{display:'flex',flexDirection:'column'}}>
                <div className="expense-date__day"> {day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year"> {year}</div>
            </div>

        )
}
export default ExpenceDate;