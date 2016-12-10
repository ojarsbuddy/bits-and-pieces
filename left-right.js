const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  insert: () => 'Right(${x})'
})
const Left = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => f(x),
  insert: () => 'Left(${x})'
})
const result = Left(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
console.log(result)
