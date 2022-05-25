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

  С одной стороны задача решена, но давайте взглянем на другой способ решения. Вернёмся к варианту с дженериками. Мы можем указать верхнюю границу для типа с помощью ключевого слова extends прямо при определении переменной типа.

В этом примере в качестве ограничения мы указываем тип Item. Таким образом, TypeScript сможет понять, каких именно типов могут быть значения. Следовательно, ошибка пропадёт.