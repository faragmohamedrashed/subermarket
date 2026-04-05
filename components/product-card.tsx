"use client"

import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addToCart, updateQuantity } = useCart()
  const cartItem = items.find((item) => item.id === product.id)
  const quantity = cartItem?.quantity || 0

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-square bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
        {product.oldPrice && (
          <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
            خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.unit}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{product.price} ج.م</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                {product.oldPrice} ج.م
              </span>
            )}
          </div>
        </div>
        <div className="mt-3">
          {quantity === 0 ? (
            <Button
              onClick={() => addToCart(product)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Plus className="h-4 w-4 ml-2" />
              أضف للسلة
            </Button>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-secondary rounded-lg p-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-bold text-lg w-8 text-center">{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
