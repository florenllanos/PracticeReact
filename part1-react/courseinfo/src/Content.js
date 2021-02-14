/* Another way:
const Content = (props) => <p>{props.part} {props.exercises}</p>
*/


const Content = (props) => {

    
    return (
            <p>
                {props.part} {props.exercises}
            </p>
    );
}

export default Content;