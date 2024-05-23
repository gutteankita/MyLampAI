// import React, { Component } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Home from './components/Home';

// import Explore from './components/Explore';




// class App extends Component {
//   render() {
//     return (
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/explore" element={<Explore />} />

//         {/* Define more routes here */}

//       </Routes>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Explore from './components/Explore';

class App extends Component {
  state = {
    inputData: [] // Initialize inputData state
  };

  

  render() {
    const { inputData } = this.state;

    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Pass inputData to Explore component */}
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
    );
  }
}

export default App;
