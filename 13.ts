type BigPost = {
    title: string;
    description: string;
    longText: string;
  };
    
  // Копируем всё, кроме `longText` и `description`.
  type ShortPost = Omit<BigPost, 'longText' | 'description'>;
    
  const myShortPost: ShortPost = {
    title: 'Test',
  };

  Конечно, никто не ограничивает возможность удалить только одно свойство. Можно больше. Для этого передадим несколько полей и воспользуемся оператором |.