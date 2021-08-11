// import React from 'react';


// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method: 'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;

import React from 'react'
import './form.scss';
import { useState } from 'react';

// import React from 'react'

function Form(props) {
  let [showPostText, setsshowPostText] = useState(false);
  // const [showPutText, setshowPutText] = useState(false);
  let [method, setmethod] = useState('get');
  let [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  let [requestbody, setrequestbody] = useState('https://pokeapi.co/api/v2/pokemon');
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }
  function showPost(e) {
    setsshowPostText(!showPostText);
    setmethod(e.target.id);
  }
  // function showPut() {
  //   setshowPutText(!showPutText)
  // }
  function setMethod(e) {
    setmethod(e.target.id);
  }
  function handlerUrl(e) {
    seturl(e.target.value);
  }
  function handlerRequesrBody(e) {
    setrequestbody(e.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handlerUrl} />
          <button type="submit" data-testid="submitButton">GO!</button>
        </label>
        <label className="methods">
        <button id="hide" type="button"></button>
          <button id="get" onClick={setMethod}>GET</button>
          <button id="post" onClick={showPost}>POST</button>
          <button id="put" onClick={showPost}>PUT</button>
          <button id="delete" onClick={setMethod}>DELETE</button>
        </label>
        {showPostText && <textarea rows='15' cols='30' onChange={handlerRequesrBody} />}
        {/* {showPutText && <textarea name='put' rows='15' cols='30' />} */}
      </form>
    </>
  )
}

export default Form





