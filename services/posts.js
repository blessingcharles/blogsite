const posts = [
  {
    title:
      'Testing things 1 junker junker junker junker junker hey junker is it ?',
    description:
      'this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..',
    imgSrc:
      'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    slug: 'post1',
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
    slug: 'post2',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04x',
  },
  {
    title:
      'Testing things 1 junker junker junker junker junker hey junker is it ?',
    description:
      'this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..',
    imgSrc:
      'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    slug: 'post3',
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
    slug: 'post3',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04x',
  },
];

export const getNewPosts = async () => {
  return posts;
};

export const getAllPosts = async () => {
  return posts;
}
export const getSimilarPosts = async (slug, categories) => {
  return posts;
};

export const getFeaturedPosts = async () => {
  return posts;
};

export const getPostDetails = async (slug) => {
  
  console.log(slug)
  let post = {
    slug: slug,
    title: 'Testing Post',
    description:
      'this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..',
    imgSrc:
      'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04xddddddddddddddddddddddd',
    content:
      '## How Life is Going on , You need a rrrfhu jebfueerf bfibqeqf ehfiqbrfbight doesn\'t you \n' + 
      'Enjoying *hey sinamike*\n' + 
      '![Ref](https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80)' +
      'Context\n' +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 

  };

  return post;
};
