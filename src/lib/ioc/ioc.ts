import { container } from 'tsyringe';

import { MessageService } from '~/lib/message.service';
import { IMessageService, MessageServiceSymbol } from '../message.service';
import { IUserService, UserService, UserServiceSymbol } from '../user.service';

export function setup() {
  container.register<IUserService>(UserServiceSymbol, UserService);
  container.register<IMessageService>(MessageServiceSymbol, MessageService);
}

setup();
export default container;
