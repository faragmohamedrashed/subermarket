"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-right">
            <ShoppingBag className="h-5 w-5" />
            سلة التسوق
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg font-medium">السلة فارغة</p>
              <p className="text-sm text-muted-foreground mt-1">
                ابدأ بإضافة منتجات إلى سلتك
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              تصفح المنتجات
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-accent font-bold mt-1">
                        {item.price} ر.س
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 mr-auto text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>المجموع</span>
                <span className="text-accent">{totalPrice.toFixed(2)} ر.س</span>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                إتمام الشراء
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                إفراغ السلة
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
