import * as query from '../query';

jest.useFakeTimers();

jest.mock('axios', () => ({
  __esModule: true,
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        data: [],
      },
    }),
  ),
  default: jest.fn(() =>
    Promise.resolve({
      data: {
        data: [],
      },
    }),
  ),
}));

jest.mock('Constants/responseMessages', () => ({
  responseMessages: {
    test: 'test',
  },
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: [{}],
    },
    success: true,
    isFetching: false,
  }),
  useMutation: () => ({
    test: 'test',
  }),
  useQueryCache: jest.fn(),
  QueryClient: jest.fn().mockReturnValue({
    invalidateQueries: jest.fn(),
  }),
  useQueryClient: () => ({
    invalidateQueries: jest.fn(),
  }),
  QueryCache: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    toastr: {
      message: '',
      color: 'info',
      isOpen: false,
    },
    setToastr: jest.fn(),
  }),
}));

describe('src/utils/query', () => {
  test('test GetData', async () => {
    const options = {
      key: 'test',
    };
    const result = await query.GetData(options, jest.fn());
    expect(result).toMatchObject({
      data: {
        data: [{}],
      },
      isFetching: false,
      success: true,
    });
  });

  test('test GetDataById', async () => {
    jest.useFakeTimers();
    const options = {
      key: 'test',
    };
    const result = await query.GetDataById('test', options, jest.fn());
    expect(result).toMatchObject({
      data: {
        data: [{}],
      },
      isFetching: false,
      success: true,
    });
    jest.advanceTimersByTime(13000);
  });

  test('test Mutation', async () => {
    const options = {
      key: 'test',
    };
    const result = await query.Mutation(options, jest.fn());
    expect(result).toMatchObject({ test: 'test' });
  });

  test('test excuteFetch', async () => {
    const options = {
      key: 'test',
    };
    const result = await query.excuteFetch({ id: 'test', name: 'test' }, options);
    expect(result).toMatchObject({
      data: [],
    });
  });

  test('test handleError', async () => {
    const error = {
      response: {
        data: {
          message: {
            error: 'err',
          },
        },
      },
    };
    const options = {
      key: 'test',
      message: {
        error: 'err',
      },
    };
    const result = await query.handleError(error, options, jest.fn());
    expect(result).toMatchObject({
      response: {
        data: {
          message: {
            error: 'err',
          },
        },
      },
    });
  });
});

test('test Mutation', async () => {
  const options = {
    key: 'test',
  };
  const result = await query.Mutation({ id: 'test', name: 'test' }, options);
  expect(result).toMatchObject({
    test: 'test',
  });
});

test('test GetDataById', async () => {
  const options = {
    key: 'test',
  };
  const result = await query.GetDataById({ id: 'test', name: 'test' }, options);
  expect(result).toMatchObject({
    data: {
      data: [{}],
    },
  });
});
