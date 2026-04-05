import { Truck, Shield, RefreshCw, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "توصيل مجاني للطلبات فوق 200 ر.س",
  },
  {
    icon: Shield,
    title: "دفع آمن",
    description: "حماية كاملة لبياناتك المالية",
  },
  {
    icon: RefreshCw,
    title: "إرجاع سهل",
    description: "إمكانية الإرجاع خلال 14 يوم",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "فريق دعم متاح على مدار الساعة",
  },
]

export function Features() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
