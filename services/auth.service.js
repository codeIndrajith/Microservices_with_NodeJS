import { ServiceBroker } from 'moleculer';
const broker = new ServiceBroker();

broker.createService({
  name: 'auth',
  actions: {
    async authUser(ctx) {
      const { userName, password } = ctx.params;

      if (userName === 'admin' && password === 'password') {
        return {
          success: true,
          message: 'Auth was successful',
        };
      } else {
        return {
          success: false,
          message: 'Auth fail',
        };
      }
    },
  },
});

export default broker;
