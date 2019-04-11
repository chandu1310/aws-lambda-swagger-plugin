'use strict';

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {
      welcome: {
        usage: 'Helps you start your first Serverless plugin',
        lifecycleEvents: [
          'hello',
          'world',
        ],
        options: {
          message: {
            usage:
              'Specify the message you want to deploy '
              + '(e.g. "--message \'My Message\'" or "-m \'My Message\'")',
            required: true,
            shortcut: 'm',
          },
        },
      },
    };

    this.hooks = {
      'before:welcome:hello': this.beforeWelcomeHello.bind(this),
      'welcome:hello': this.hello.bind(this),
      'after:welcome:hello': this.afterWelcomeHello.bind(this),
      'before:welcome:world': this.beforeWelcomeWorld.bind(this),
      'welcome:world': this.world.bind(this),
      'after:welcome:world': this.afterWelcomeWorld.bind(this),
    };
  }

  beforeWelcomeHello() {
    this.serverless.cli.log('Before Welcome Hello');
  }

  hello() {
    this.serverless.cli.log('Hello');
  }

  afterWelcomeHello() {
    this.serverless.cli.log('After Welcome Hello');
  }

  beforeWelcomeWorld() {
    this.serverless.cli.log('Before Welcome World');
  }

  world() {
    this.serverless.cli.log(`World ${this.options.message}`);
  }

  afterWelcomeWorld() {
    this.serverless.cli.log('After Welcome World');
  }

}

module.exports = ServerlessPlugin;
