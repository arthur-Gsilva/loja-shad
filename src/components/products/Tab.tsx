import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/products"
import { Product } from "@/types/Product"
import { Empty } from "./Empty"
import { ProductItem } from "./Item"

type Tab = {
    tiel: string,
    value: string,
    product: Product[]
}

export const ProductsTab = async () => {

    const products = await getAllProducts()

    const tabs = [
        {
            title: 'Sushi',
            value: 'sushi',
            product: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            product: products.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            product: products.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            product: products.filter(item => item.category === 'beverage')
        },
    ]

    return(
        <Tabs defaultValue="sushi">
            <TabsList className="flex">

                {tabs.map((item) => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex-1"
                    >
                        {item.title}
                    </TabsTrigger>
                ))}

                
            </TabsList>
            {tabs.map((item) => (
                <TabsContent value={item.value} key={item.value} className="mt-6">
                    {item.product.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.product.map((product) => (
                                <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }

                    {item.product.length === 0 && <Empty />}
                </TabsContent>
            ))}
        </Tabs>
    )
}