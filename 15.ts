type BigPost = {
    title: string;
    description: string;
    longText: string;
    viewsCount: number;
    isPromo: boolean;
  };
    
  // В ShortPost останется только `title` и `isPromo`
  type ShortPost = Pick<BigPost, 'title' | 'isPromo'>;
  
  const myShortPost: ShortPost = {
    title: 'Some title',
    isPromo: true,
  };

  Помимо Omit есть и другие полезные функции. Про них можно прочитать в документации. А пока познакомимся с ещё одной функцией, которая может пригодиться в проектах — Pick.

Она похожа на Omit. Только Omit выбирает из типа всё, позволяя исключить определённые поля, а Pick наоборот, выбирает только определённые поля.