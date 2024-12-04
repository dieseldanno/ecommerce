export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(
        `An error occurred in fetchData - ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred in fetchData ${error}`);
  }
};
