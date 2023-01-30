import React from 'react';
import Counter from '../Home/Counter';

const Career = () => {
    return (
        <div className='mb-20'>
            <div className="bg-[url('/src/Component/About/Images/bgcareer.jpg')] bg-cover bg-no-repeat h-[50rem] bg-fixed text-white  ">
             <div className='grid grid-cols-4 mx-32'>
             <div className='bg-yellow-600   border-r border-slate-500 '>
                <div className=' mt-5 ml-[10%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-2xl mb-16 max-w-[220px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quis!</p>
               
                </div>

                    </div>
                    <div className='bg-yellow-600   border-r border-slate-500 '>
                <div className=' mt-5 ml-[10%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-2xl mb-16 max-w-[220px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quis!</p>
                </div>

                    </div>

                    <div className='bg-yellow-600   border-r border-slate-500 '>
                <div className=' mt-5 ml-[10%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-2xl mb-16 max-w-[220px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quis!</p>
                </div>

                    </div>

                    <div className='bg-yellow-600   border-r border-slate-500 '>
                <div className=' mt-5 ml-[10%] font-semibold text-white'>
                <p >Contact</p>
                <p className='mt-5 text-2xl mb-16 max-w-[220px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quis!</p>
                </div>

                    </div>
                </div>
            

                <div className='mx-32 '>
                    <p className='text-white mt-10 font-medium'>About</p>
                    <h2 className='text-[38px]  font-serif font-bold mt-10 '>
                        Our Career
                    </h2>
                    <h2 className='text-[38px]  font-serif font-bold mt-10 '>
                        Our mission is to provide best service
                    </h2>
                    <div className='grid grid-cols-2  gap-10 '>
                        <p className=' mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos delectus consequuntur earum? Deserunt architecto magni, temporibus aut aperiam consequatur tempore? Magnam corporis corrupti voluptatum officiis fuga voluptate quis ipsa consequatur aut facere quasi odit eum impedit laboriosam, quod cupiditate vel esse! Labore nisi consequatur deleniti in ab aspernatur voluptate itaque!</p>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut debitis, voluptatem voluptate quos quas sed provident cupiditate aspernatur, vel dolore quae laudantium laborum expedita ipsa nesciunt. Consequatur maiores minima debitis eos voluptatum vel? Sed eum, voluptatem ratione libero pariatur provident perspiciatis! Est hic eligendi a tenetur officiis sit!</p>

                    </div>
                </div>

        </div>
        <Counter/>
        </div>
    );
};

export default Career;