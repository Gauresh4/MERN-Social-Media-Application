async function imageToBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (er) => reject(er);
  });

  return data;
}

export { imageToBase64 };
