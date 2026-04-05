"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          const categoryMap: Record<string, string> = {
            electronics: "إلكترونيات",
            fashion: "أزياء",
            accessories: "إكسسوارات",
            shoes: "أحذية",
            perfumes: "عطور",
          }
          return product.category === categoryMap[selectedCategory]
        })

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            منتجاتنا المميزة
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من المنتجات عالية الجودة بأسعار تنافسية
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`gap-2 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span>{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">لا توجد منتجات في هذه الفئة</p>
          </div>
        )}
      </div>
    </section>
  )
}
