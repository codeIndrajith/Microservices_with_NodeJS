import UserService from './services/auth.service.js';

const startApp = async () => {
  // Start services
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      userName: 'Indrajith',
      email: 'indrajith@test.com',
    });
    console.log('New user created: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users: ', users);
  } catch (error) {
    console.log('Error', error);
  } finally {
    await UserService.stop();
  }
};

startApp();
