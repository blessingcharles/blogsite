export const getCategories = async () => {
    const categories = [
      {
        slug: 'webdev',
        name: 'Web Development',
      },
      {
        slug: 'linux',
        name: 'Linux',
      },
      {
        slug: 'python',
        name: 'Python',
      },
      {
        slug: 'Infosex',
        name: 'Information Security',
      },
      {
        slug: 'binsec',
        name: 'Binary Exploitation',
      },
      {
        slug: 'dsa',
        name: 'Data Structures and Algorithms',
      },
    ];
  
    return categories;
  };