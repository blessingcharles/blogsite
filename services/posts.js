const posts = [
  {
    title:
      'Testing things 1 junker junker junker junker junker hey junker is it ?',
    description:
      'this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..',
    imgSrc:
      'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    url: '/hello',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04xddddddddddddddddddddddd',
  },
  {
    title: 'Testing things 2',
    description: 'this is post 2 possible junk ..',
    imgSrc:
      'https://www.theinspiringjournal.com/ezoimgfmt/i0.wp.com/www.theinspiringjournal.com/wp-content/uploads/2020/11/motivational-quotes-with-images.jpg?w=640&ssl=1&ezimgfmt=ng:webp/ngcb1',
    url: '/',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04x',
  },
  {
    title: 'Testing things 3',
    description: 'this is post 3 possible junk ..',
    url: '/',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: '1649256517683',
    authorName: 'th3h04x',
  },
]

export const getNewPosts = async () => {
  return posts
}

export const getSimilarPosts = async (slug , categories) => {
  return posts
}

export const getFeaturedPosts = async () => {
  return posts
}

export const getCategories = async () =>{

  const categories = [

  ]

  return categories 
}