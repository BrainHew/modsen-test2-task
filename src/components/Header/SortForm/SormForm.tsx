import React from 'react';

const SortForm: React.FC = () => {
    return (
        <div className='flex items-center ml-[50px] mb-3 mt-3 '>
            <span className='text-white mr-3'>Sorting by:</span>
            <div className='relative w-[200px] '>
                <input type='text' className='border py2 px-4 w-full h-[37px]' placeholder='Sorting...' />
            </div>
        </div>
    );
};

export default SortForm;