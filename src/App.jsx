// import React from 'react';
// import File from './components/File';
// import Tabs from './components/Tabs';
// import Gallery from './components/Gallery';

// import './App.css'

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="flex w-4/5 h-[90vh] bg-gray-700 rounded-xl p-8">
//         {/* Left empty space */}
//         <div className="w-2/3 bg-gray-800 rounded-lg mr-8"></div>
        
//         {/* Right side content */}
//         <div className="flex flex-col w-1/3 justify-between space-y-6">

//           <Tabs />
//           <Gallery />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App;
import React from 'react';
import File from './components/File';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-4/5 h-[90vh]  items-center   justify-center  bg-gray-700 rounded-xl p-8">
        {/* Left empty space */}
        <div className="w-1/2 bg-gray-800 rounded-2xl mr-8 ">
          <File /> {/* Adding the File component in the left empty space */}
        </div>
        
        {/* Right side content */}
        <div className="flex flex-col w-1/2 justify-between space-y-6  top-auto ">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  )
}

export default App;
