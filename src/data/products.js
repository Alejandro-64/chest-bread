

export const categories = [
  { id: 1, name: "Burgers", slug: "burgers" },
  { id: 2, name: "Hot Dogs", slug: "hot-dogs" },
  { id: 3, name: "Drinks", slug: "drinks" },
  { id: 4, name: "Fries", slug: "fries" },
];

export const products = [
  // --- BURGERS ---
  {
    id: 1,
    name: "Classic Burger",
    slug: "classic-burger",
    description:
      "Juicy beef patty, lettuce, tomato, onion and our secret sauce.",
    price: 12.9,
    image:
      "/images/product-1.webp",
    category: "burgers",
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Double Smash",
    slug: "double-smash",
    description: "Double smashed patty, double cheddar cheese and pickles.",
    price: 16.9,
    image:
      "/images/product-2.webp",
    category: "burgers",
    available: true,
    featured: false,
  },
  {
    id: 3,
    name: "BBQ Bacon Burger",
    slug: "bbq-bacon-burger",
    description: "Beef patty, crispy bacon, BBQ sauce and onion rings.",
    price: 17.5,
    image:
      "/images/product-3.webp",
    category: "burgers",
    available: true,
    featured: false,
  },
  {
    id: 4,
    name: "Spicy Burger",
    slug: "spicy-burger",
    description: "Beef patty, jalapeños, hot sauce and pepper jack cheese.",
    price: 15.9,
    image:
      "/images/product-4.webp",
    category: "burgers",
    available: false,
    featured: false,
  },

  // --- HOT DOGS ---
  {
    id: 5,
    name: "Classic Hot Dog",
    slug: "classic-hot-dog",
    description: "Smoked sausage, mustard, ketchup and onion.",
    price: 8.9,
    image:
      "/images/product-5.webp",
    category: "hot-dogs",
    available: true,
    featured: true,
  },
  {
    id: 6,
    name: "Chicago Style",
    slug: "chicago-style",
    description: "Sausage, pickles, tomato, yellow mustard and celery salt.",
    price: 10.9,
    image:
      "/images/product-6.webp",
    category: "hot-dogs",
    available: true,
    featured: false,
  },
  {
    id: 7,
    name: "Bacon Dog",
    slug: "bacon-dog",
    description: "Bacon-wrapped sausage with melted cheddar cheese.",
    price: 11.9,
    image:
      "/images/product-7.webp",
    category: "hot-dogs",
    available: true,
    featured: false,
  },

  // --- DRINKS ---
  {
    id: 8,
    name: "Coca-Cola",
    slug: "coca-cola",
    description: "Classic cold soda, 500ml.",
    price: 3.9,
    image:
      "/images/product-8.webp",
    category: "drinks",
    available: true,
    featured: false,
  },
  {
    id: 9,
    name: "Lemonade",
    slug: "lemonade",
    description: "Fresh lemonade with mint and ice.",
    price: 4.5,
    image:
      "/images/product-9.webp",
    category: "drinks",
    available: true,
    featured: false,
  },
  {
    id: 10,
    name: "Milkshake",
    slug: "milkshake",
    description: "Creamy milkshake in vanilla, chocolate or strawberry.",
    price: 6.9,
    image:
      "/images/product-10.webp",
    category: "drinks",
    available: true,
    featured: true,
  },

  // --- FRIES ---
  {
    id: 11,
    name: "Classic Fries",
    slug: "classic-fries",
    description: "Crispy golden fries with sea salt.",
    price: 4.9,
    image:
      "/images/product-11.webp",
    category: "fries",
    available: true,
    featured: false,
  },
  {
    id: 12,
    name: "Loaded Fries",
    slug: "loaded-fries",
    description: "Fries topped with cheddar cheese, bacon and chives.",
    price: 7.9,
    image:
      "/images/product-12.webp",
    category: "fries",
    available: true,
    featured: true,
  },
];
