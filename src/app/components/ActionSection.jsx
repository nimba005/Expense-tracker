import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
export default function ActionSection({ clearExpenses }) {
  return (
    <div className='flex justify-between items-center p-3 '>
      <button onClick={clearExpenses} className='border-2 w-32 border-textColor text-textColor rounded-lg p-2 hover:cursor-pointer hover'>
        Clear All
      </button>
    </div>
  );
}