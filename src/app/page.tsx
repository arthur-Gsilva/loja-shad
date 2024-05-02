import { Header } from "@/components/Header";
import { ProductsTab } from "@/components/products/Tab";
import { TabSkeleton } from "@/components/products/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button"
import { Suspense } from "react";

const Page = () => {
    return(
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <div className="mx-3">
                <Suspense fallback={<TabSkeleton />}>
                    <ProductsTab />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default Page;