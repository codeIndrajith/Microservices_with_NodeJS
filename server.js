import { ServiceBroker } from 'moleculer';
const broker = new ServiceBroker();

// Greeter service
broker.createService({
  name: 'greeter',
  actions: {
    sayHello(ctx) {
      return `"Hello ${ctx.params.name}`;
    },
  },
});

async function startApp() {
  await broker.start();
  const res = await broker.call('greeter.sayHello', { name: 'Indrajith' });
  console.log(res);
  broker.stop();
}

startApp();
