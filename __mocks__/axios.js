

const mockGet = {
  get:
      jest.fn(() => Promise.resolve({data:[{name: "myRepo"}, {name: "Hush"}]}))
};
module.exports = mockGet;