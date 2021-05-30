export type searchParaseFunc = (search: string) => Object;

const searchParase: searchParaseFunc = (search) => {
  const [_, c] = search.split("?");
  console.log(1, c);

  const res = c.split("&");
  console.log(res, "res");

  const obj: {
    [k in string]: any;
  } = {};

  res.forEach((item) => {
    const [k, v] = item.split("=");
    obj[k] = v;
  });

  return obj;
};

export default searchParase;
