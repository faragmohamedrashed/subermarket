"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Categories } from "@/components/categories"
import { ProductCard } from "@/components/product-card"
import { CartSidebar } from "@/components/cart-sidebar"
import { CartProvider } from "@/lib/cart-context"
import { products } from "@/lib/data"
import { Truck, CreditCard, Headphones, Award } from "lucide-react"

function SupermarketContent() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesSearch = !searchQuery || product.name.includes(searchQuery)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const features = [
    { icon: Truck, title: "توصيل سريع", desc: "توصيل لباب بيتك" },
    { icon: CreditCard, title: "دفع آمن", desc: "طرق دفع متعددة" },
    { icon: Headphones, title: "دعم 24/7", desc: "خدمة عملاء متميزة" },
    { icon: Award, title: "جودة عالية", desc: "منتجات طازجة يومياً" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} onSearch={setSearchQuery} />
      
      <div className="bg-gradient-to-l from-primary/10 to-accent/10 py-8 mb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-8">
        <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            {selectedCategory || "جميع المنتجات"}
          </h2>
          <span className="text-muted-foreground text-sm">{filteredProducts.length} منتج</span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">لا توجد منتجات مطابقة للبحث</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-card border-t py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">سوبر ماركت الخير</p>
          <p className="text-sm">جميع الحقوق محفوظة 2024</p>
        </div>
      </footer>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default function SupermarketPage() {
  return (
    <CartProvider>
      <SupermarketContent />
    </CartProvider>
  )
}
