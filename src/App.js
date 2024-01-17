import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import Product1 from './components/Product1';
import Cart from './components/Cart';
import MergeSort from './Merge-Sort/MergeSort';
import MergeSortVisualization from './SecondMethod/secondmethod';
import MergeSortVisualization1 from './MergeSortThird/MergeSort';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<Product1 />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>


      {/* <MergeSort/> */}
      {/* <MergeSortVisualization/> */}
      {/* <MergeSortVisualization1></MergeSortVisualization1> */}


    </>
  );
}


export default App;
