import { ServiceBroker } from 'moleculer';
const broker = new ServiceBroker();

const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};
const users = [];

broker.createService({
  name: 'user',
  actions: {
    async createUser(ctx) {
      const { userName, email } = ctx.params;
      const newUser = { id: generateId(), userName, email };
      users.push(newUser);
      return newUser;
    },
    async getUsers(ctx) {
      return users;
    },
  },
});

export default broker;
