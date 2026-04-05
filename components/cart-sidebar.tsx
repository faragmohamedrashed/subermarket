"use client"

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-card shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">سلة التسوق</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8">
              <ShoppingBag className="h-24 w-24 mb-4 opacity-20" />
              <p className="text-lg">السلة فارغة</p>
              <p className="text-sm">أضف منتجات للبدء بالتسوق</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 bg-secondary/50 rounded-lg p-3"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price} ج.م</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-bold w-6 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <span className="font-bold text-sm">
                        {(item.price * item.quantity).toFixed(2)} ج.م
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">الإجمالي:</span>
                  <span className="font-bold text-primary text-xl">{totalPrice.toFixed(2)} ج.م</span>
                </div>
                <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  إتمام الطلب
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  تفريغ السلة
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
