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
    
  // Вернулись к дженерикам с указанием верхней границы для типа
  function printId<T extends Item>(post: T): void {
    console.log(post.id);
  }
  
  const myItem: Item = {id: '31337nb'};
  const myPost: Post = {id: '3122', description: 'some description', title: 'some title'};
  
  printId<Item>(myItem); // OK. 31337nb
  printId<Post>(myPost); // OK. 3122
  
  // Type 'string' does not satisfy the constraint 'Item'.
  printId<string>('ded'); 

  Указав верхнюю границу типа с помощью extends мы ввели ограничение. Передать значение другого типа не получится.