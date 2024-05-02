import { CartSideBar } from "./cart/SideBar"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
    return(
        <header className="w-full my-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="text-xl">Loja <span className="font-bold">Shad</span></div>
                <ThemeToggle />
            </div>

            <div>
                <CartSideBar />
            </div>
        </header>
    )
}