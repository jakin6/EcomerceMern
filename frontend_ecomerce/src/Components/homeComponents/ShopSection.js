import React, { useEffect} from 'react'
import { Pagination } from './Pagination'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../app/Actions/ProductActions'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'
// import axios from 'axios'
export const ShopSection = () => {
    // const [products, setProducts] = useState([])
    const dispatch=useDispatch()
    // useEffect(() => {
    //     const fetchproducts = async () => {
    //         const res = await axios.get("/api/products")
    //         setProducts(res.data)
    //     }
    //     fetchproducts();
    // }, [])
    // console.log(products);
  const productList=useSelector((state)=>state.productList)
    const { loading, error, products } = productList;
    useEffect(() => {
      dispatch(listProduct())
  },[dispatch])
    console.log(products);
    return (
      <>
          <div className='container'>
              <div className='section'>
                  <div className='row'>
                      <div className='col-lg-12 col-md-12 article'>
                            <div className='shopcontainer row'>
                                {
                                    loading ? (
                                        <div className='mb-5'>
                                            <Loading />
                                        </div>
                                        ) : error ? (<Message variant="alert-danger">{error}</Message>)
                                    :(
                                            <>
                                                {products && products.map((product) => {
                                                    return (
                                                        <div className='shop col-lg-4 col-md-6 col-sm-6' key={product._id}>
                                                            <div className='border-product'>
                                                                <Link to={`/products/${product._id}`}>
                                                                    <div className='shopBack'>
                                                                        <img src={product.image} alt={product.name} />
                                                                    </div>
                                                                </Link>

                                                                <div className='shoptetxt'>
                                                                    <p>
                                                                        <Link to={`/products/${product._id}`}>
                                                                            {product.name}
                                                                        </Link>
                                                                    </p>
                                                                </div>
                                                                <Rating
                                                                    value={product.rating}
                                                                    text={`${product.numReviews} reviews`}
                                                                />
                                                                <h3>${product.price}</h3>
                                                            </div>
                                                        </div>
                                                    )
                                                })}   
                                        </>
                                    )
                                }

                              </div>

                              {/* Pagination */}
                              <Pagination/>
                          </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default ShopSection
