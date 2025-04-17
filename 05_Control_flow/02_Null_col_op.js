// leftExpression ?? rightExpression

// With logical OR (||)
const orExample1 = 0 || 'default';  // 'default' (0 is falsy)
const orExample2 = '' || 'default'; // 'default' (empty string is falsy)

// With nullish coalescing (??)
const nullishExample1 = 0 ?? 'default';  // 0
const nullishExample2 = '' ?? 'default'; // ''

const age = 20;
const message = age >= 18 ? 'Adult' : 'Minor';
console.log(message); // 'Adult'