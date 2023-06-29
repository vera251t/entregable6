import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderImg from "../components/ProductId/SliderImg"
import './styles/ProductIdPage.css'
const ProductIdPage = () => {

    const { id } = useParams() //parametros de ruta se captura con useParams y retorna un objeto

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [ product, getProductById ] = useFetch(baseUrl)

    useEffect(() => {
        getProductById(`/products/${id}`)
    }, [id])

  return (
    <div>
      <div className="productPage__container">
        <SliderImg 
          product={product}
        />
        <ProductInfo
          product={product}
        />
      </div>
        <SimilarProducts
          product={product}
        />
    </div>
  )
}

export default ProductIdPage