// import logo from './logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import uuid from 'uuid'; // added npm modules
import 'bootstrap/dist/css/bootstrap.min.css'; //Added in the npm modules


//test 
import { faAtom } from '@fortawesome/free-solid-svg-icons'; //✅ individual import style
import {faBicycle} from '@fortawesome/free-solid-svg-icons';
  // got it from https://stackoverflow.com/questions/42522233/react-fontawesome-not-displaying-icons 

//functional component
const TestFontAwesome = () => {
  const element = <FontAwesomeIcon icon={faAtom} />
  return(
    <>
      <h4>FontAwesome testing component</h4>
      <FontAwesomeIcon icon={icon({name: 'user-secret'})}  ></FontAwesomeIcon>  {/* dynamic import style */}
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> 
      <span className='btn-color'>
        <FontAwesomeIcon icon={icon({name:'rectangle-xmark', style:'regular' })} />
      </span>
        <p>{element}</p> {/* ✅ */}
        <FontAwesomeIcon icon={faBicycle} beat /> {/* ✅ */}
      <h4>End FontAwesome testing component</h4>
    </>
  );
}

function App() {

  return (
    <div >
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-4 bg-warning">
            hello world!
          </div>✅*/}
          {/* <div className="col-6 justify-content-center align-items-center"> */}
          <div className="col-8 bg-primary text-center  ">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
