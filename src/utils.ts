function count<Type>(item: Type, xs: Array<Type>): number {
  return xs.filter((i) => item === i).length;
}

export { count };
