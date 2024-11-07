import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
 }

export default function OrderContents({order, removeItem} : OrderContentProps) {
  return (
    <div>

        <div className="space-y-3 mt-5">
            {
                order.map(item => (
                    <div 
                        key={item.id} 
                        className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
                    >
                        <div className="">
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="">Cantidad: 
                                <span className="font-black"> 
                                    &nbsp;{item.quantity} - {formatCurrency(item.price * item.quantity) }
                                </span> 
                            </p>
                        </div>

                        <button
                            className="bg-red-600 h-8 w-8 text-white font-bold rounded-full hover:bg-red-800 transition-all"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}