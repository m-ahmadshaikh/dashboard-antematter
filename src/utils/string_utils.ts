const makeShort = (str: string) => {
  return str.slice(0, 5) + '...' + str.slice(-3);
};

export { makeShort };
