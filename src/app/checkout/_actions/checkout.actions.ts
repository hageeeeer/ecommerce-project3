'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth"


type shippingAddressType = {

    "details": string,
    "phone": string,
    "city": string
}

export async function checkoutOnline(cartId: string, shippingAddress: shippingAddressType) {

    const token = await getTokenAuth()
    if (!token)
        throw new Error('login first')

    const res = await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token
        },
        body: JSON.stringify({ shippingAddress })
    })

    const payload = await res.json()
    return payload
}