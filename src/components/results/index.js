import React from 'react';

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
import Loading from '../loading/Loading'
function Results(props) {
  return (
    <section>
      <pre data-testid="results">{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading /> }</pre>
    </section>
  );
}

export default Results
