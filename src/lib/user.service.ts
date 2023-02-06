import { injectable } from 'tsyringe';

interface IUserService {
  getUsername(): string;
}

const UserServiceSymbol: symbol = Symbol('UserServiceSymbol');

@injectable()
class UserService implements IUserService {
  getUsername(): string {
    return 'John Doe';
  }
}

export { UserService, UserServiceSymbol, IUserService };
