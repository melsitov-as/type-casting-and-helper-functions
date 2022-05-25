type SmallPost = {
    title: string;
  };
  
  type BigPost = {
    longText: string;
  };
  
  const mySmallPost: SmallPost = { title: 'Test'};
  const myMegaPost: BigPost = {longText: 'defe'};
  const posts = [mySmallPost, myMegaPost];
  
  const firstPost = posts[0] as SmallPost; // firstPost: SmallPost.

  То же самое можно сделать при помощи оператора as: ТипИсточник as ТипНазначения. Например, posts[0] as SmallPost.