const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${url} fetch not ok.`);
  }

  return res.json();
};

export { fetcher };
