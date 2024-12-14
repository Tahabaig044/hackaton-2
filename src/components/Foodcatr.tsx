import Image from 'next/image'
// import React from 'react'
import cate1 from "./public/cate1.png"
import cate2 from "./public/cate2.png"
import cate3 from "./public/cate3.png"
import cate4 from "./public/cate4.png"

const Foodcatr = () => {
  return (
    <div className=''style={{ backgroundImage: "url('https://dashboard.codeparrot.ai/api/assets/Z1U1gu4ZL_Fz8lra')"}}>

 
    <div className='lg:mt-[100px] lg:px-[100px] 'style={{ backgroundImage: "url('https://dashboard.codeparrot.ai/api/assets/Z1U1gu4ZL_Fz8lra')" }}>
    <h1 className='text-bordercoloryello text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Food Category</h1>
    <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>Ch</span>oose Food Iteam</h1>
    <div className='flex lg:flex-row flex-col gap-3 lg:px-[100px] sm:justify-center px-6  pt-[30px]'>
    <Image src={cate1} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
    <Image src={cate2} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    <Image src={cate3} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    <Image src={cate4} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]'/>
    </div>
    {/* <img
        src="https://dashboard.codeparrot.ai/api/assets/Z1U1gu4ZL_Fz8lra"
        alt="Decoration"
        className="absolute right-0 bottom-0 w-[619.34px] h-[553.51px]"
      /> */}
    </div>
    </div>
  )
}

export default Foodcatr
// import React from 'react';
// // import './styles.css';

// const Foodcatr: React.FC = () => {
//   return (
//     <div className="lg:mt-[100px] lg:px-[100px] ">
//       <h2 className="text-center text-orange-500 text-2xl font-great-vibes mb-4">Food Category</h2>
//       <h1 className="text-center text-white text-4xl font-bold mb-8">
//         <span className="text-orange-500">Choose</span> Food Item
//       </h1>
//       <div className="flex justify-center space-x-4 overflow-x-auto scrollbar-hide">
//         <div className=" flex lg:flex-row flex-col gap-3 lg:px-[100px] sm:justify-center px-6  pt-[30px]">
//           <div className="absolute top-4 left-4 bg-white text-black p-2 rounded">
//             Save 30%
//           </div>
//           <div className="absolute bottom-4 left-4 bg-orange-500 text-white p-2 rounded">
//             Fast Food Dish
//           </div>
//         </div>
//           <Image src={cate1} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
//           <Image src={cate2} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
//           <Image src={cate3} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
//           <Image src={cate4} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
//         </div>
//         <img
//         src="https://dashboard.codeparrot.ai/api/assets/Z1U1gu4ZL_Fz8lra"
//         alt="Decoration"
//         className="absolute right-0 bottom-0 w-[619.34px] h-[553.51px]"
//       />
//       </div>
//       );
// };

//       export default Foodcatr;

