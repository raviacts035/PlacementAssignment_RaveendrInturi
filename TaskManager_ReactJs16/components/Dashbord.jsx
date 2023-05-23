import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

const Dashbord = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // Submit Handler function
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert('Please enter a todo list');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert('Item Name Updated');
    } else {
      showAlert('Item Added to the List');
      const newItem = { id: new Date().getTime().toString(), title: name, };
      setList([...list, newItem]);
      setName('');
    }
  };

  // Show Alert Function
  const showAlert = (msg = '') => {
    setAlert(msg);
  };

  // Remove Item function
  const removeItem = (id) => {
    showAlert('Item Removed from the List');
    setList(list.filter((item) => item.id !== id));
  };

  // Edit Item Function
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  // Clear List Function
  const clearList = () => {
    showAlert('Cleared the Todo List');
    setList([]);
  };

  return (
    <section className="flex flex-col items-center bg-red-200 rounded-xl sm:w-[70%] m-auto">
      <form className='flex flex-col items-center p-6 m-2' onSubmit={submitHandler}>
        {alert && <Alert alert={alert} removeAlert={showAlert} list={list} />}
        <h3 className='text-xl'>
          Task Manager App
        </h3>
        <div className="flex mt-4 gap-6 justify-center">
          <input
            type="text"
            className="border-2 border-slate-200 shadow-xl rounded-lg p-1 px-10"
            placeholder="e.g, Complete Assignment"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            type="submit"
            className="p-2 bg-blue-400 shadow-xl rounded-lg"
            
          >
            {isEditing ? 'Save' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='w-full '>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="mx-auto w-fit p-6">
            <button className="bg-red-400 px-6 py-2" onClick={clearList}>
              Clear All
            </button>
          </div>
        </div>
      )}
    </section>
  );
};



export default Dashbord