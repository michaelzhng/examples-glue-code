export async function getUsers() {
  // 这里是模拟数据，真实场景下应该是下面这一行代码
  // return HttpClient.get('/users');
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              name: 'A1',
            },
            {
              name: 'A2',
            },
            {
              name: 'A3',
            },
          ],
          statusCode: 200,
        }),
      1000,
    );
  });
}
