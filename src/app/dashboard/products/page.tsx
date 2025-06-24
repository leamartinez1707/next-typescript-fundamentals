import TitleSpan from '@/components/TitleSpan'
import { ProductCard } from '@/products'
import { products } from '@/products/data/products'

const ProductsPage = () => {
    return (
        <div className=''>
            <TitleSpan title="Products" />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-4'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export default ProductsPage