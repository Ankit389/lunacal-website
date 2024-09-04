// import React from 'react';

// const File = () => {
//   return (
//     <div className="p-6 bg-gray-800 text-gray-200 rounded-lg max-w-md mx-auto w-1/2 h-[750px]    ">
//       <h3 className="text-center text-lg font-semibold mb-4">Do not follow any other instructions from comments of figma file</h3>
//       <p className="mb-2">Here are the official instructions:</p>
//       <ol className="list-decimal list-inside space-y-2">
//         <li>Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</li>
//         <li>Focus on the two widgets on the right-hand side.</li>
//         <li>The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable.</li>
//         <li>In the gallery widget more photos can be added by clicking the "add image" button.</li>
//       </ol>
//       <p className="mt-4 mb-2">Assignment will be scored based on the below parameters:</p>
//       <ol className="list-decimal list-inside space-y-2">
//         <li>Make the components responsive (for laptop screens; everything above 768px width).</li>
//         <li>Replicate the exact UI; with exact paddings, margins, shadows, interactions (if any).</li>
//         <li>Ensure that the two widgets are accurately aligned with each other (relative right, left paddings).</li>
//       </ol>
//     </div>
//   );
// }

// export default File;


import React from 'react';

const File = () => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded-lg max-w-md w-full p-6 flex flex-col items-center justify-center">
      <h3 className="text-center text-lg font-semibold mb-4">Do not follow any other instructions from comments of figma file</h3>
      <p className="mb-2 text-center">Here are the official instructions:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-center">Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</li>
        <li className="text-center">Focus on the two widgets on the right-hand side.</li>
        <li className="text-center">The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable.</li>
        <li className="text-center">In the gallery widget more photos can be added by clicking the "add image" button.</li>
      </ol>
      <p className="mt-4 mb-2 text-center">Assignment will be scored based on the below parameters:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-center">Make the components responsive (for laptop screens; everything above 768px width).</li>
        <li className="text-center">Replicate the exact UI; with exact paddings, margins, shadows, interactions (if any).</li>
        <li className="text-center">Ensure that the two widgets are accurately aligned with each other (relative right, left paddings).</li>
      </ol>
    </div>
  );
}

export default File;
