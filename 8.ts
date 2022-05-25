type SmallPost = {
    title: string;
  };
  
  type BigPost = {
    longText: string;
  };
  
  const mySmallPost: SmallPost = {title: 'Test'};
  const myMegaPost: BigPost = {longText: 'defe'};
  const posts = [mySmallPost, myMegaPost];
  
  const firstPost = <SmallPost>posts[0]; // firstPost: SmallPost.

  TypeScript предоставляет возможность уточнить или утвердить тип. Это можно сделать несколькими способами. Первый: при помощи угловых скобок. Общая схема такая: <ТипНазначения>ТипИсточник. Например: <SmallPost>posts[0].