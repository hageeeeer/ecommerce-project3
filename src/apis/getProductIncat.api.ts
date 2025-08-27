

export async function getProductSInCat(CatId:string)
{
    const res = await fetch(`${process.env.API}/products?category[in]=${CatId}`)
    const {data} = await res.json()
    return data
}