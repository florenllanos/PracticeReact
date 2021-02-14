/* Another way:
const Content = (props) => <p>{props.part} {props.exercises}</p>
*/
import Part from './Part.js'

const Content = (props) => {    
    return (
        <Part part={props.part} exercises={props.exercises} />
    );
}

export default Content;