"use client"

import { categories } from "@/lib/data"

interface CategoriesProps {
  selected: string | null
  onSelect: (category: string | null) => void
}

export function Categories({ selected, onSelect }: CategoriesProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm p-4 mb-6">
      <h2 className="text-lg font-bold mb-4 text-foreground">الأقسام</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === null
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          الكل
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              selected === cat.name
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
