const intersectionObserverMock = () => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
