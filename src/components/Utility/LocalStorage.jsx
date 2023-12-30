const getStoredBookData = () => {
  const storedDonateData = localStorage.getItem("save-Donate-Data");

  if (storedDonateData) {
    return JSON.parse(storedDonateData);
  }

  return [];
};

const saveBookData = (id) => {
  const storedDonateData = getStoredBookData();

  const exists = storedDonateData.find((donateId) => donateId === id);

  if (!exists) {
    storedDonateData.push(id);
    localStorage.setItem("save-Donate-Data", JSON.stringify(storedDonateData));
  }
};

export { saveBookData, getStoredBookData };
