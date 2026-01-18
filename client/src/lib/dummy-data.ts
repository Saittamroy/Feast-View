import heroImg from '@assets/generated_images/hyderabadi_chicken_biryani_in_clay_pot.png';
import paneerImg from '@assets/generated_images/paneer_tikka_masala_in_copper_bowl.png';
import chickenImg from '@assets/generated_images/tandoori_chicken_platter.png';
import riceImg from '@assets/generated_images/jeera_rice_bowl.png';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'Rice' | 'Chicken' | 'Vegetarian' | 'Dessert';
  isSpicy?: boolean;
  isVegetarian?: boolean;
  preparationTime?: string;
  calories?: number;
}

export const heroDish: MenuItem = {
  id: 'h1',
  name: 'Royal Hyderabadi Dum Biryani',
  description: 'Fragrant basmati rice slow-cooked with tender marinated chicken, saffron, and aromatic spices in a sealed clay pot. Served with cooling raita and mirchi ka salan.',
  price: 18.99,
  rating: 4.9,
  reviews: 1240,
  image: heroImg,
  category: 'Rice',
  isSpicy: true,
  preparationTime: '25-30 min',
  calories: 850
};

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Paneer Tikka Masala',
    description: 'Fresh cottage cheese cubes simmered in a rich, creamy tomato and onion gravy with fenugreek.',
    price: 14.99,
    originalPrice: 16.99,
    rating: 4.8,
    reviews: 856,
    image: paneerImg,
    category: 'Vegetarian',
    isVegetarian: true,
    calories: 620
  },
  {
    id: 'm2',
    name: 'Tandoori Chicken Platter',
    description: 'Half chicken marinated in yogurt and spices, roasted to perfection in our traditional clay oven.',
    price: 16.50,
    rating: 4.7,
    reviews: 642,
    image: chickenImg,
    category: 'Chicken',
    isSpicy: true,
    calories: 580
  },
  {
    id: 'm3',
    name: 'Jeera Basmati Rice',
    description: 'Fluffy long-grain basmati rice tempered with royal cumin seeds and clarified butter.',
    price: 6.99,
    originalPrice: 8.50,
    rating: 4.6,
    reviews: 320,
    image: riceImg,
    category: 'Rice',
    isVegetarian: true,
    calories: 310
  },
  // Duplicates for grid fulness
  {
    id: 'm4',
    name: 'Butter Chicken',
    description: 'Boneless chicken morsels in a velvety tomato cream sauce.',
    price: 15.99,
    rating: 4.9,
    reviews: 2100,
    image: paneerImg, // Reusing similar looking image for mockup
    category: 'Chicken',
    calories: 750
  },
  {
    id: 'm5',
    name: 'Veggie Biryani',
    description: 'Seasonal vegetables cooked with aromatic basmati rice and herbs.',
    price: 13.99,
    originalPrice: 15.50,
    rating: 4.5,
    reviews: 180,
    image: heroImg, // Reusing similar looking image for mockup
    category: 'Vegetarian',
    isVegetarian: true,
    calories: 550
  },
  {
    id: 'm6',
    name: 'Chicken Tikka',
    description: 'Boneless chicken chunks marinated in spices and yogurt, roasted in tandoor.',
    price: 13.50,
    rating: 4.7,
    reviews: 420,
    image: chickenImg, // Reusing similar looking image for mockup
    category: 'Chicken',
    isSpicy: true,
    calories: 450
  }
];
