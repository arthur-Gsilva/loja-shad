"use client"

import { Product } from "@/types/Product"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "../ui/toast"
import { useCartStore } from "@/stores/cart-store"

type Props = {
    item: Product
}

export const ProductItem = ({ item }: Props) => {

    const {toast} = useToast()
    const { upsertCartItem } = useCartStore(state => state)

    const addButton = () => {
        upsertCartItem(item, 1)
        toast({
            title: 'Adicionado ao carrinho!',
            description: item.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        })
    }

    return(
        <div>
            <div className="w-full flex flex-col gap-1">
                <img src={item.image} alt={item.name} className="rounded-md"/>
                <p>{item.name}</p>
                <p>R$ {item.price.toFixed(2)}</p>
                <Button 
                    className="w-full"
                    variant={"outline"}
                    onClick={addButton}
                    >
                        Adicionar
                </Button>
            </div>
        </div>
    )
}