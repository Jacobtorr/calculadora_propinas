// Item de la db
export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// Item para el state con Cantidad
export type OrderItem = MenuItem & {
    quantity: number
}