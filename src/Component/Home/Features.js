import React from 'react';

const Features = () => {
    
    return (
        <div className='lg:mx-32 mx-[5%] mt-[15%] lg:mt-36 bg-white'>
            {
                ['Helping seniors learn hobbies','Providing best care for seniors','Environment home safety'].map((name,index)=><div className='lg:grid grid-cols-2 mb-2 shadow-sm pb-[5%]' key={index}>
                <div>
                    <p className='text-base font-semibold'>Features / 0{index+1}</p>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>{name}</h1>
                </div>
                <div className='lg:grid grid-cols-2 gap-16'>
                    <div>
                        <p className='text-base text-justify lg:text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquid quasi similique, non alias, consequatur sit expedita magnam obcaecati illum laboriosam ipsum illo commodi laudantium!</p>
                        </div>
                        <div className='my-[15%] lg:mt-0'>
                            <p className='font-serif'>Assited Living</p>
                            <p className='font-serif'>Assited Living</p>
                            <p className='font-serif'>Assited Living</p>
                        </div>
                    

                </div>

            </div>)
            }
            
        </div>
    );
};

export default Features;