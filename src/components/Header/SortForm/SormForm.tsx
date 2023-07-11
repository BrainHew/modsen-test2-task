import React from 'react';

const SortForm: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row items-center ml-[50px] mb-3 mt-3 '>
            <span className='text-white mr-3 mb-3 md:mb-0 md:mr-6'>Sorting by:</span>
            <div className='relative w-[120px] md:w-[200px] lg:w-[200px]'>
                <input type='text' className='border py2 px-4 w-full h-[37px]' placeholder='Sorting...' />
            </div>
        </div>
    );
};

export default SortForm;