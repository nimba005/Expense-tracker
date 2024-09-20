'use client';
import React, { useState, createContext } from 'react';
import Header from './Header';
import ActionSection from './ActionSection';
import Body from './Body';
import EditModal from './EditModal';
export const MyFunctionContext = createContext();

export default function AppForm() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null); // Track the expense being edited
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [filteredExpenses, setFilteredExpenses] = useState([]); // To hold filtered expenses
  const [selectedWallet, setSelectedWallet] = useState('All Wallets');

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Function to clear all expenses
  const clearExpenses = () => {
    setExpenses([]); // Reset the expenses array to empty
  };

  // Function to remove a specific expense by id
  const removeExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const openEditModal = (expense) => {
    setEditingExpense(expense);
    setIsModalOpen(true);
  };

  const editExpense = (updatedExpense) => {
    setExpenses(expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense)));
    setIsModalOpen(false); // Close the modal after updating
  };

  return (
    <div className='max-w-4xl w-full bg-white m-auto min-h-96 p-4'>
      <MyFunctionContext.Provider value={addExpense}>
        <Header />
        <ActionSection clearExpenses={clearExpenses} setSelectedWallet={setSelectedWallet} />
        <Body expenses={expenses} removeExpense={removeExpense} openEditModal={openEditModal} />
      </MyFunctionContext.Provider>
      {/* The Modal */}
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={editExpense}
          existingExpense={editingExpense} // Pass editingExpense to the modal
        />
      )}
    </div>
  );
}