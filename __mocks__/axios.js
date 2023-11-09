// __mocks__/axios.js
export default {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // ... other methods like put, delete, etc.
    create: jest.fn(function () {
      return this;
    }),
    // You can add other methods and properties as needed
  };
  