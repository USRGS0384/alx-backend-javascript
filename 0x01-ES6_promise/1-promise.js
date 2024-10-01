export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with success data
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject with an error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
