const burgerData = [
    {
      id: '1',
      image: require('../images/ChikenDouble.png'),
      title: 'Chicken Double Patty Burger',
      weight: '540 gr',
      rating: '5.0',
      price: 3.99,
      sizeName: 'Medium',
      sizeNumber: 14,
      crust: 'Thin Crust',
      deliveryTime: 30,
      ingredients: [
        {
          id: '1',
          name: ' two spicy and crispy Chicken Patty',
          image: require('../images/ham.png'),
        },
        {
          id: '2',
          name: 'Chipotle Sauce',
          image: require('../images/tomato.png'),
        },
        {
          id: '3',
          name: 'Tomatos',
          image: require('../images/cheese.png'),
        },
        {
          id: '4',
          name: 'Lettuce & Jalapenos',
          image: require('../images/garlic.png'),
        },
      ],
    },
    {
      id: '2',
      image: require('../images/DoublePatty.png'),
      title: 'Chiken Double Patty Burger',
      weight: '450 gr',
      rating: '4.0',
      price: 5.99,
      sizeName: 'Small',
      sizeNumber: 10,
      crust: 'Thick Crust',
      deliveryTime: 40,
      ingredients: [
        {
          id: '1',
          name: ' creamy mayonnaise ',
          image: require('../images/cheese.png'),
        },
        {
          id: '2',
          name: 'crunchy lettuce ',
          image: require('../images/garlic.png'),
        },
      ],
    },
    {
      id: '3',
      image: require('../images/AlooTikki.png'),
      title: 'Aloo Tikki Double Patty Burger',
      weight: '700 gr',
      rating: '5.0',
      price: 9.99,
      sizeName: 'Large',
      sizeNumber: 18,
      crust: 'Thin Crust',
      deliveryTime: 20,
      ingredients: [
        {
          id: '1',
          name: 'Crunchy potato',
          image: require('../images/tomato.png'),
        },
        {
          id: '2',
          name: 'peas ',
          image: require('../images/cheese.png'),
        },
        {
          id: '3',
          name: 'Tom Mayo ',
          image: require('../images/cheese.png'),
        },
        {
          id: '4',
          name: 'tomatoes and onions ',
          image: require('../images/cheese.png'),
        },
      ],
    },
  ];
  
  export default burgerData;
  