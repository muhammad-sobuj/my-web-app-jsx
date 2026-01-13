// Coffee shop product data
export const mockItems = [
  {
    id: "1",
    name: "Ethiopian Single Origin",
    description:
      "Premium Ethiopian coffee beans with bright acidity and floral notes. Hand-picked from high-altitude farms for exceptional quality.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    category: "Coffee Beans",
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "2",
    name: "Professional Espresso Machine",
    description:
      "Commercial-grade espresso machine with dual boiler system. Perfect for creating café-quality espresso at home.",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "Equipment",
    inStock: true,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "3",
    name: "Colombian Dark Roast",
    description:
      "Rich and bold Colombian coffee with chocolate undertones. Perfect for those who love a strong, full-bodied cup.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=500&fit=crop",
    category: "Coffee Beans",
    inStock: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "4",
    name: "Ceramic Pour Over Dripper",
    description:
      "Handcrafted ceramic pour-over dripper for the perfect manual brew. Includes spiral ridges for optimal extraction.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    category: "Equipment",
    inStock: false,
    rating: 4.6,
    reviews: 124,
  },
  {
    id: "5",
    name: "French Press Coffee Maker",
    description:
      "Classic French press with borosilicate glass and stainless steel frame. Brews rich, full-flavored coffee in minutes.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&h=500&fit=crop",
    category: "Equipment",
    inStock: true,
    rating: 4.5,
    reviews: 178,
  },
  {
    id: "6",
    name: "Guatemalan Medium Roast",
    description:
      "Smooth Guatemalan coffee with caramel sweetness and nutty finish. Grown in volcanic soil for unique flavor profile.",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=500&fit=crop",
    category: "Coffee Beans",
    inStock: true,
    rating: 4.8,
    reviews: 167,
  },
  {
    id: "7",
    name: "Burr Coffee Grinder",
    description:
      "Precision burr grinder with 40 grind settings. Ensures consistent particle size for optimal coffee extraction.",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop",
    category: "Equipment",
    inStock: true,
    rating: 4.7,
    reviews: 145,
  },
  {
    id: "8",
    name: "Brazilian Espresso Blend",
    description:
      "Specially crafted espresso blend with Brazilian beans. Creates perfect crema and balanced flavor for espresso drinks.",
    price: 26.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop",
    category: "Coffee Beans",
    inStock: true,
    rating: 4.9,
    reviews: 234,
  },
  {
    id: "9",
    name: "Milk Frother Wand",
    description:
      "Professional-grade milk frother for creating perfect microfoam. Essential for lattes, cappuccinos, and macchiatos.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
    category: "Equipment",
    inStock: true,
    rating: 4.4,
    reviews: 98,
  },
  {
    id: "10",
    name: "Costa Rican Light Roast",
    description:
      "Bright and citrusy Costa Rican coffee with honey processing. Perfect for pour-over and filter brewing methods.",
    price: 23.99,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&h=500&fit=crop",
    category: "Coffee Beans",
    inStock: true,
    rating: 4.6,
    reviews: 112,
  },
];

let items = [...mockItems];

export function getAllItems() {
  return items;
}

export function getItemById(id) {
  return items.find((item) => item.id === id);
}

export function addItem(item) {
  const newItem = {
    ...item,
    id: (items.length + 1).toString(),
  };
  items.push(newItem);
  return newItem;
}
