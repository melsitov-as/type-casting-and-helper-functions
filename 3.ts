type Item = {
    id: string;
  };
      
  type Post = Item & {
    title: string;
    description: string;
  };
      
  type MegaPost = Post & {
    viewsCount: number;
  };
    
  // Отказались от дженериков в пользу типа объединения
  function printId(post: Item | Post | MegaPost): void {
    console.log(post.id);
  }

  А можно ли как-то уточнить тип или определить какие-то границы для типа, который может быть передан в T? Да, и тут как всегда есть несколько способов.

Самый простой заключается в отказе от дженериков и применении типа объединения или пересечения. Такой способ мы разбирали, но взглянем на него ещё раз.