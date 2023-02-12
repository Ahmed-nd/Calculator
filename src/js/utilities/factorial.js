function factorial(value, table = []) {
  if (value == 0 || value == 1) return 1;
  if (table[value] > 0) return table[value];
  return (table[value] = fun(value - 1, table) * value);
}
