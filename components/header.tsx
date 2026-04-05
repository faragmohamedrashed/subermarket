"use client"

import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface HeaderProps {
  onCartClick: () => void
  onSearch: (query: string) => void
}

export function Header({ onCartClick, onSearch }: HeaderProps) {
  const { totalItems, totalPrice } = useCart()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary/80">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl lg:text-2xl font-bold">سوبر ماركت الخير</h1>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-4 pl-12 bg-primary-foreground text-foreground rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute left-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={onCartClick}
              className="flex items-center gap-2 text-primary-foreground hover:bg-primary/80 px-3"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:block font-semibold">{totalPrice.toFixed(2)} ج.م</span>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSearch} className="md:hidden pb-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-4 pl-12 bg-primary-foreground text-foreground rounded-full"
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute left-1 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </header>
  )
}
