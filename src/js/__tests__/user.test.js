import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel() with response status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'Gold' });

  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: Gold');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call getLevel() with bad response status', () => {
  fetchData.mockReturnValue({ status: '', level: '' });

  const response = getLevel(2);
  expect(response).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
