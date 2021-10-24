type Hello = {
  name: string;
};
const main = {
  hello({ name }: Hello) {
    return { name: `my name is ${name}` };
  },
};
const abe = () => {
  console.log('a');
};

export { main, abe };
