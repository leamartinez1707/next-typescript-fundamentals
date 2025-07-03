import { WidgetItem } from '@/components'
import TitleSpan from '@/components/TitleSpan'
import { products, type Product } from '@/products/data/products'
import { ItemCard } from '@/shopping-cart/components/ItemCard'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { format } from 'path'
import React from 'react'

export const metadata: Metadata = {
    title: 'My Cart',
    description: 'Your shopping cart page',
}

interface ProductsInCardProps {
    product: Product
    quantity: number
}
const getProductsInCart = (cart: { [id: string]: number }) => {
    const productsInCart: ProductsInCardProps[] = []
    for (const id of Object.keys(cart)) {
        const product = products.find(p => p.id === id)
        if (product) {
            productsInCart.push({
                product,
                quantity: cart[id]
            })
        }
    }
    return productsInCart;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
        amount,
    )
}

const CartPage = async () => {

    const cookiesStore = await cookies()
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number }
    const productsInCart = getProductsInCart(cart)

    const totalCart = productsInCart.reduce((prev, curr) => (curr.product.price * curr.quantity) + prev, 0)
    return (
        <div>
            <TitleSpan title="My items in cart" />
            <hr className='mb-2' />
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <div className='flex flex-col gap-2 w-full sm:w-8/12'>

                    {productsInCart.map((item) => (
                        <ItemCard key={item.product.id} product={item.product} quantity={item.quantity} />
                    ))}

                </div>
                <div className='flex flex-col w-full sm:w-4/12'>
                    <WidgetItem title='Total to pay'>
                        <p className='font-medium text-lg'>Subtotal: {formatCurrency(totalCart)}</p>
                        <p className='font-medium text-lg'>Taxes: {formatCurrency(totalCart * 0.15)}</p>
                        <span className='font-bold text-2xl'>Total: {formatCurrency((totalCart * 1.15))}</span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    )
}

export default CartPage