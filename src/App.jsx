import Products from './compenents/Products';
import Cart from './compenents/Cart';
import CartRouters from './compenents/CartRouters';


function App() {

  

  
  return (
    <div className='bg-zinc-400 p-11'>
         {/* <Cart/> */}\

         <CartRouters/>
        
      <br /><br />
      <Products/>

    </div>
  );
}

export default App;
