// import React from 'react';
// import Image1 from '../assets/ankit.jpg';
// import Image2 from '../assets/pankaj.jpg';
// import Image3 from '../assets/smvdu.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const Gallery = () => {
//   return (
//     <div className="bg-slate-900 rounded-lg p-4 shadow-lg flex flex-col items-center">
//       <div className="flex justify-between items-center w-full mb-4">
//         <h3 className="text-white">Gallery</h3>
//         <div className="flex items-center">
//           <button className="bg-black text-white py-2 px-4 relative rounded-3xl items-center justify-center">
//             + Add Image
//           </button>
//         </div>
//       </div>
//       <div className="relative w-full">
//         <div className="flex justify-center space-x-4">
//           <div className="w-1/3 p-2 flex justify-center">
//             <img src={Image1} alt="Image 1" className="rounded-lg shadow-md" />
//           </div>
//           <div className="w-1/3 p-2 flex justify-center">
//             <img src={Image2} alt="Image 2" className="rounded-lg shadow-md" />
//           </div>
//           <div className="w-1/3 p-2 flex justify-center">
//             <img src={Image3} alt="Image 3" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//         <div className="absolute inset-y-0 right-0 flex items-center space-x-2">
//           <button className="bg-black text-white py-2 px-2 rounded-full">
//             <FontAwesomeIcon icon={faChevronLeft} />
//           </button>
//           <button className="bg-black text-white py-2 px-2 rounded-full">
//             <FontAwesomeIcon icon={faChevronRight} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React from 'react';
import Image1 from '../assets/ankit.jpg';
import Image2 from '../assets/pankaj.jpg';
import Image3 from '../assets/smvdu.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  return (
    <div className="bg-slate-900   rounded-lg p-4 shadow-lg flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h3 className="text-white">Gallery</h3>
        <div className="flex items-center">
          <button className="bg-black text-white py-2 px-4 gap-2 relative rounded-3xl flex items-center justify-center">
            + Add Image
          </button>
          <button className="bg-black text-white py-2 px-2 rounded-full ml-2">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="bg-black text-white py-2 px-2 rounded-full ml-2">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-4 w-full">
        <div className="w-1/3 p-2 flex justify-center">
          <img src={Image1} alt="Image 1" className="rounded-lg shadow-md" />
        </div>
        <div className="w-1/3 p-2 flex justify-center">
          <img src={Image2} alt="Image 2" className="rounded-lg shadow-md" />
        </div>
        <div className="w-1/3 p-2 flex justify-center">
          <img src={Image3} alt="Image 3" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
