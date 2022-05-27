import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Matt',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Nav',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Astral Radiance Booster Box',
      slug: 'Astral-booster-box',
      category: 'Astral Radiance',
      image: '/images/p1.jpg',
      price: 169,
      countInStock: 1,
      brand: 'Pokemon',
      rating: 5,
      numReviews: 10,
      description: 'New Pokemon Booster Box',
    },
    {
      //_id: '2',
      name: 'Brilliant Stars Booster Box',
      slug: 'Brilliant-booster-box',
      category: 'Brilliant Stars',
      image: '/images/p2.jpg',
      price: 180,
      countInStock: 0,
      brand: 'Pokemon',
      rating: 5,
      numReviews: 30,
      description: 'New Pokemon Booster Box',
    },
    {
      // _id: '3',
      name: 'Fusion Strike Booster Box',
      slug: 'Fusion-booster-box',
      category: 'Fusion Strike',
      image: '/images/p3.jpg',
      price: 150,
      countInStock: 5,
      brand: 'Pokemon',
      rating: 3.5,
      numReviews: 15,
      description: 'New Pokemon Booster Box',
    },
    {
      //_id: '4',
      name: 'Evolving Skies Booster Box',
      slug: 'Evolving-booster-box',
      category: 'Evolving Skies',
      image: '/images/p4.jpg',
      price: 190,
      countInStock: 12,
      brand: 'Pokemon',
      rating: 4,
      numReviews: 6,
      description: 'New Pokemon Booster Box',
    },
  ],
};

export default data;
