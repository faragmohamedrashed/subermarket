import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">سوق</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              وجهتك المثالية للتسوق الإلكتروني. نقدم لك أفضل المنتجات بأسعار منافسة
              وخدمة عملاء متميزة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  العروض
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                support@souq.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                +966 12 345 6789
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">النشرة البريدية</h4>
            <p className="text-sm text-primary-foreground/70 mb-3">
              اشترك للحصول على آخر العروض والتخفيضات
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0"
              >
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© 2026 سوق. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
