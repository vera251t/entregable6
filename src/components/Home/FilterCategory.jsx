import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'

const FilterCategory = () => {

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [ categories, getAllCategories ] = useFetch(baseUrl)

    useEffect(() => {
        getAllCategories('/categories')
    }, [])

    const dispatch = useDispatch()
    const handleFilterCategory = (id) => {
        if(id) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    }

  return (
    <article className="category__container">
        <h3>Categories</h3>
        <hr/>
        <ul>
            <li className="category__ul" onClick={() => handleFilterCategory()}>All Categories</li>
            {
                categories?.map( category=> (
                    <li className="category__ul" onClick={() => handleFilterCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory