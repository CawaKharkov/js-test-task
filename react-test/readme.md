###  Необходимо реализовать функцию вида (на языке TypeScript): `getMessageFromTemplate(vars, template)`:
  - где vars объект типа {[key: string]: number}
  - template - объект типа
```
interface IIfThenElse {
  if: string;
  then: IIfThenElse | string;
  else: IIfThenElse | string;
}
```

### Нужно получить результирующую строку.
Ветка then выполняется, если выражение в if === true, иначе выполняется ветка else.
Выражение в if - это строка, имеющая вид: (a > 5 && b ==3 ... n), где а, b ... n это переменные из объекта vars, 
а в скобках любое логическое выражение на языке JS.
Пример:
```
template = {
  if: '(mark >= 4)',
  then: 'Good work!',
  else: {
    if: '(lesson === "english")',
    then: 'Learn grammar',
    else: 'You needed more training',
  },
};
```

```
vars = { mark: 3, lesson: 'any' }
getMessageFromTemplate(vars, template) -> You needed more training
```

```
vars = { mark: 3, lesson: 'english' }
getMessageFromTemplate(vars, template) -> Learn grammar
```
```
vars = { mark: 4, lesson: 'english' }
getMessageFromTemplate(vars, template) -> Good work!
```

**Вложенность условий не ограничена. Тесты приветствуются.**
