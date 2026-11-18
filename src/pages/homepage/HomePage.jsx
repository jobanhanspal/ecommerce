import axios from 'axios'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { formatMoney } from '../../utils/money'
import ProductsGrid from './ProductsGrid'

const HomePage = ({cart, loadCart}) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getHomeData = async () => {
        const response  = await axios.get('/api/products');
        setProducts(response.data);
    }
    getHomeData();
  }, []);
  
  return (
    <>

      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          <ProductsGrid products={products} loadCart={loadCart} />

        </div>
      </div>
    </>
  )
}

export default HomePage