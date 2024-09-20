import { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, onSubmit, existingExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');

  // Set the values when existingExpense is provided
  useEffect(() => {
    if (existingExpense) {
      setExpenseName(existingExpense.name || '');
      setAmount(existingExpense.amount || '');
      setWallet(existingExpense.wallet || '');
    }
  }, [existingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated expense object
    const updatedExpense = {
      id: existingExpense?.id, // Ensure id is from the existing expense
      name: expenseName,
      amount: parseFloat(amount),
      wallet,
    };

    // Pass the updated expense to the onSubmit handler
    onSubmit(updatedExpense);

    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-5 rounded-lg w-1/2'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center'>
            <div className='bg-background p-2 mr-2 rounded-lg'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5 text-btnColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z' />
              </svg>
            </div>
            <h2 className='text-sm font-extrabold'>Edit Expense</h2>
          </div>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-xs font-bold mb-1'>Expense Name</label>
            <input value={expenseName} onChange={(e) => setExpenseName(e.target.value)} type='text' className='w-full p-2 border rounded focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-indigo-500' placeholder='Enter expense name' />
          </div>

          <div className='flex space-x-4 mb-4'>
            <div className='w-1/2'>
              <label className='block text-gray-700 text-xs font-bold mb-1'>Amount</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' className='w-full p-2 border rounded focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-indigo-500' placeholder='Enter amount' />
            </div>

            <div className='w-1/2'>
              <label className='block text-gray-700 text-xs font-bold mb-1'>Wallet</label>
              <select value={wallet} onChange={(e) => setWallet(e.target.value)} className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                <option value='Cash' className='text-sm'>
                  Cash
                </option>
                <option value='Savings' className='text-sm'>
                  Savings
                </option>
                <option value='Creditcard' className='text-sm'>
                  Credit Card
                </option>
                <option value='Bankaccount' className='text-sm'>
                  Bank Account
                </option>
              </select>
            </div>
          </div>

          <button type='submit' className='w-1/5 bg-btnColor text-white p-2 rounded hover:bg-indigo-600'>
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;