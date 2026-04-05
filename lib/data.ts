export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  unit: string
}

export interface Category {
  id: number
  name: string
  icon: string
}

export const categories: Category[] = [
  { id: 1, name: "خضروات وفواكه", icon: "🥬" },
  { id: 2, name: "لحوم ودواجن", icon: "🍗" },
  { id: 3, name: "ألبان وأجبان", icon: "🧀" },
  { id: 4, name: "مخبوزات", icon: "🍞" },
  { id: 5, name: "مشروبات", icon: "🥤" },
  { id: 6, name: "معلبات", icon: "🥫" },
  { id: 7, name: "منظفات", icon: "🧴" },
  { id: 8, name: "حلويات", icon: "🍫" },
]

export const products: Product[] = [
  { id: 1, name: "طماطم طازجة", price: 8, oldPrice: 12, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 2, name: "خيار بلدي", price: 6, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 3, name: "بطاطس", price: 10, oldPrice: 14, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 4, name: "تفاح أحمر", price: 25, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 5, name: "موز", price: 18, oldPrice: 22, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 6, name: "برتقال بلدي", price: 15, image: "/placeholder.svg?height=200&width=200", category: "خضروات وفواكه", unit: "كيلو" },
  { id: 7, name: "صدور دجاج", price: 85, oldPrice: 95, image: "/placeholder.svg?height=200&width=200", category: "لحوم ودواجن", unit: "كيلو" },
  { id: 8, name: "لحم بقري", price: 180, image: "/placeholder.svg?height=200&width=200", category: "لحوم ودواجن", unit: "كيلو" },
  { id: 9, name: "دجاج كامل", price: 65, oldPrice: 75, image: "/placeholder.svg?height=200&width=200", category: "لحوم ودواجن", unit: "قطعة" },
  { id: 10, name: "حليب طازج", price: 22, image: "/placeholder.svg?height=200&width=200", category: "ألبان وأجبان", unit: "لتر" },
  { id: 11, name: "جبنة بيضاء", price: 45, oldPrice: 55, image: "/placeholder.svg?height=200&width=200", category: "ألبان وأجبان", unit: "كيلو" },
  { id: 12, name: "زبادي", price: 8, image: "/placeholder.svg?height=200&width=200", category: "ألبان وأجبان", unit: "علبة" },
  { id: 13, name: "خبز عربي", price: 5, image: "/placeholder.svg?height=200&width=200", category: "مخبوزات", unit: "ربطة" },
  { id: 14, name: "توست", price: 15, image: "/placeholder.svg?height=200&width=200", category: "مخبوزات", unit: "علبة" },
  { id: 15, name: "كرواسون", price: 8, oldPrice: 10, image: "/placeholder.svg?height=200&width=200", category: "مخبوزات", unit: "قطعة" },
  { id: 16, name: "عصير برتقال", price: 18, image: "/placeholder.svg?height=200&width=200", category: "مشروبات", unit: "لتر" },
  { id: 17, name: "مياه معدنية", price: 5, image: "/placeholder.svg?height=200&width=200", category: "مشروبات", unit: "زجاجة" },
  { id: 18, name: "بيبسي", price: 8, oldPrice: 10, image: "/placeholder.svg?height=200&width=200", category: "مشروبات", unit: "زجاجة" },
  { id: 19, name: "فول مدمس", price: 12, image: "/placeholder.svg?height=200&width=200", category: "معلبات", unit: "علبة" },
  { id: 20, name: "تونة", price: 25, oldPrice: 30, image: "/placeholder.svg?height=200&width=200", category: "معلبات", unit: "علبة" },
  { id: 21, name: "صابون غسيل", price: 35, image: "/placeholder.svg?height=200&width=200", category: "منظفات", unit: "عبوة" },
  { id: 22, name: "معطر جو", price: 28, oldPrice: 35, image: "/placeholder.svg?height=200&width=200", category: "منظفات", unit: "عبوة" },
  { id: 23, name: "شوكولاتة", price: 15, image: "/placeholder.svg?height=200&width=200", category: "حلويات", unit: "قطعة" },
  { id: 24, name: "بسكويت", price: 12, oldPrice: 15, image: "/placeholder.svg?height=200&width=200", category: "حلويات", unit: "علبة" },
]
