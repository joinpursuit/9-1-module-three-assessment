const get = async (resource) => {
  const res = await fetch(`./${resource}.json`);
  const data = await res.json();
  return data;
};

export { get };
