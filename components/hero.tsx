import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              عروض حصرية
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              تسوق بأناقة
              <br />
              <span className="text-accent">واستمتع بالتوفير</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              اكتشف مجموعة واسعة من المنتجات المميزة بأسعار لا تُقاوم. 
              جودة عالية وتوصيل سريع لباب منزلك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                تسوق الآن
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border"
              >
                استعرض العروض
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">+5000</p>
                <p className="text-sm text-muted-foreground mt-1">منتج متوفر</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">+10K</p>
                <p className="text-sm text-muted-foreground mt-1">عميل سعيد</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">دعم فني</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="تسوق إلكتروني"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">خصم 50%</p>
                    <p className="text-sm text-muted-foreground">على منتجات مختارة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
