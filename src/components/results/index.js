
// class Results extends React.Component {
  //   render() {
    //     return (
      //       <section>
      //         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

// import React from 'react';
import React from 'react';
import Loading from '../loading/Loading';

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function Results(props) {
  return (
    <section>
     { props.data ?<JSONPretty data-testid="results"data={props.data}></JSONPretty>  :  <Loading/>}
    </section>
  );
}

export default Results
