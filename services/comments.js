export const submitComment = async (name, email, comment, slug) => {};

export const getSlugComments = async () => {
  const comments = [
    {
      name: 'jerry',
      email: 'jerry@gmail.com',
      comment:
        "ns of Lorem Ipsum.Lorem Ipsum is simply dummy , and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh",
      commentedAt:"Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)"
    },
    {
      name: 'somerandombigguynamewantstobreaksite',
      commentedAt:"Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)",
      email: 'bigboynamewhereeveverhewants@gmail.com',
      comment:
        "ns of Lorem Ipsum not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh",
    },
    {
      name: 'jerry',
      commentedAt:"Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)",
      email: 'jerry@gmail.com',
      comment: 'ns of s standard dummy text ever since the 1500s, wh',
    },
  ];

  return comments;
};
