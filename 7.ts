type SmallPost = {
    title: string;
  };
  
  type BigPost = {
    longText: string;
  };
  
  const mySmallPost: SmallPost = {title: 'Test'};
  const myMegaPost: BigPost = {longText: 'defe'};
  const posts = [mySmallPost, myMegaPost];
  
  const firstPost = posts[0];
  // Значение какого типа в firstPost? (SmallPost | BigPost)

  При написании кода на TypeScript всегда есть вероятность столкнуться с необходимостью преобразования типов. Конечно, настоящего преобразования не происходит, так как TypeScript работает до выполнения кода. Правильней сказать, что может потребоваться принудительно утвердить тип. В буквальном смысле это означает, что мы берём ответственность на себя и просим TypeScript поверить в нашу правду. Рассмотрим пример.