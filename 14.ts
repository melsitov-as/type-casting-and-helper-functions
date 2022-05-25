type BigPost = {
    title: string;
    description: string;
    longText: string;
    viewsCount: number;
    isPromo: boolean;
  };
  
  type MegaPost = {
    isPromo: boolean;
    viewsCount: number;
    longText: string;
    description: string;
  };
  
  // Всё из BigPost, кроме того, что в MegaPost
  type ShortPost = Omit<BigPost, keyof MegaPost>;
  
  const myShortPost: ShortPost = {
    title: 'Test',
  };

  Польза от функции Omit очевидна. Она нам пригодится на практике, когда придётся создать первый HOC (High Order Component) в React. Эту функцию удобно совмещать с ключевым словом keyof. Проще рассказать на примере задачи.

Мы всё также хотим создать тип ShortPost, который похож на BigPost, но в нём нет полей, которые есть в MegaPost. Эту задачу можно решить вручную, перечислив все ненужные поля через |. Однако, в реальной жизни таких полей может быть много. Как же тогда быть? Не перечислять же их все вручную. Вот здесь и поможет keyof.