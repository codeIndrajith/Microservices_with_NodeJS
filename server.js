import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

const startApp = async () => {
  // Start services
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      userName: 'Indrajith',
      email: 'indrajith@test.com',
    });
    console.log('New user created: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users: ', users);

    // Simulate sending email
    const emailResult = await EmailService.call('email.sendEmail', {
      recipient: newUser.email,
      subject: 'Microservice with Node',
      content:
        'This is a my first microservice in node js application. with molecular.js to use',
    });
    console.log(emailResult);

    // Simulate auth user
    const authResult = await AuthService.call('auth.authUser', {
      userName: newUser.userName,
      password: 'password',
    });
    console.log(authResult);
  } catch (error) {
    console.log('Error', error);
  } finally {
    await UserService.stop();
  }
};

startApp();
