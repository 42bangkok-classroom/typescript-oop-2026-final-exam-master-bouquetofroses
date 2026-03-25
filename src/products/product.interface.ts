export interface Product {
    id: number ,
    customerName: string ,
    purchaseDate: string,
    items: Item
}

export interface Item {
    productId: number,
    quantity: number,
    price: number
}