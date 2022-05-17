export const uuid = () => {
  //   return Math.floor((1 + Math.random()) * 0x10000)
  //     .toString(16)
  //     .substring(1);

  return Math.random().toString(36).substring(2, 15);
};
