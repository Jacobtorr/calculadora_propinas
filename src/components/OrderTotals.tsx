import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);

  return (
    <>
        <div className=" space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        
        <button
            className="bg-black w-full p-3 text-white font-bold uppercase hover:bg-gray-900 transition-all rounded-lg mt-10 disabled:opacity-10"
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}