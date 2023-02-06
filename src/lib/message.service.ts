import { observable } from 'mobx';
import { delay, inject, injectable } from 'tsyringe';
import { IUserService, UserService } from './user.service';

interface IMessageService {
  testMessage: string;
  getMessage(): string;
  setTestMessage(value: string): void;
}

const MessageServiceSymbol: symbol = Symbol('MessageService');

@injectable()
class MessageService implements IMessageService {
  @observable
  testMessage: string = 'hello there';

  constructor(@inject(delay(() => UserService)) public userService: IUserService) {}

  getMessage(): string {
    return `Hello, ${this.userService.getUsername()}!`;
  }

  setTestMessage(value: string) {
    this.testMessage = value;
  }
}

export { MessageService, MessageServiceSymbol, IMessageService };
