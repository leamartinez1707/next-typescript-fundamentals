// https://tailwindcomponents.com/component/e-commerce-product-card
'use client'

import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import type { Product } from "../data/products"
import ProductStar from "./ProductStar"
import { addProductToCart, removeProductFromCart } from "@/shopping-cart/actions/actions"
import { useRouter } from "next/navigation"


export const ProductCard = ({ product }: { product: Product }) => {

    const router = useRouter()

    const handleRemoveFromCart = () => {
        removeProductFromCart(product.id)
        router.refresh()
    }

    const handleAddToCart = () => {
        addProductToCart(product.id)
        router.refresh()
    }
    return (
        <div className="bg-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100 shadow-md hover:shadow-lg shadow-black transition-all hover:scale-105 duration-300 ease-in-out">

            {/* Product Image */}
            <div className="p-2">
                <Image
                    width={500}
                    height={500}
                    className="rounded"
                    src={product.image}
                    alt={product.name} />
            </div>

            {/* Title */}
            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{product.name}</h3>
                </a>
                <div className="flex items-center mt-2.5 mb-5">


                    {/* Stars */}
                    {Array(product.rating).fill(0).map((_, index) => (
                        <ProductStar key={index} />
                    ))}

                    {/* Rating Number */}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {product.rating}
                    </span>
                </div>


                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>

                    <div className="flex">
                        <button
                            onClick={handleAddToCart}
                            className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <IoAddCircleOutline size={25} />
                        </button>
                        <button
                            onClick={handleRemoveFromCart}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <IoTrashOutline size={20} />
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}