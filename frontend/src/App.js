// frontend/src/App.js
import { useState, useEffect } from 'react';
import './App.css';
// external components imported
import InputForm from './components/input/InputForm';
import Card from './components/card/Card';

// url end poit for app
const APIURL = 'http://localhost:3001/getProductByName/';

// Entry point for app
function App() {
  const [orders, setOrders] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  // method to fetch data from server with filter and serch key
  const fetchUsers = () => {
    if (searchKey) {
      fetch(`${APIURL}${searchKey}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data?.output);
        });
    }
  };

  // form submit handler
  const handleSubmit = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <InputForm
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        handleSubmit={handleSubmit}
      />
      <div className="items">
        {orders?.orders?.map((order, index) => {
          console.log(order);
          return <Card key={index} order={order} productId={orders.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
