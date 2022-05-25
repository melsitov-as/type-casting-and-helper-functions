const someNumber = 5;
const someString = 'Hello world';

// Conversion of type 'number' to type 'string' may be a mistake because neither
// type sufficiently overlaps with the other. If this was intentional, convert
// the expression to 'unknown' first.
const what = someString + (someNumber as string);

Конечно, никакой магии не существует. Если попробовать преобразовать (уточнить) несовместимые типы, то компилятор выдаст ошибку. Например, никак не получиться привести string к number.