import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/Cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const Quantity = ({ cartItem }: Props) => {

    const { upsertCartItem } = useCartStore(state => state)

    const plusQt = () => {
        upsertCartItem(cartItem.product, 1)
    }

    const minusQt = () => {
        upsertCartItem(cartItem.product, -1)
    }

    return(
        <div className="flex items-center gap-2">
            <Button
                onClick={plusQt}
                variant={'outline'}
                size={'icon'}
                className="size-5"
            >
                <PlusIcon className="size-3"/>
            </Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button
                onClick={minusQt}
                variant={'outline'}
                size={'icon'}
                className="size-5"
            >
                <MinusIcon className="size-3"/>
            </Button>
        </div>
    )
}