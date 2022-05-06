export function apis_user() {
  return {
    login: () => {
      return Promise.resolve({
        name: 'Aaron Colby',
        email: 'acolby@live.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        loggedIn: true,
      });
    },
    logout: () => {
      return Promise.resolve({
        name: '',
        email: '',
        imageUrl: '',
        loggedIn: false,
      });
    },
  };
}
