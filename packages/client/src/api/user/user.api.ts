import RequestTransport from '../../service/request/request';
import { IBadResponse, IPasswordData, IProfileData, ProfileResponse } from './interfaces';


export class UserAPI extends RequestTransport {
  constructor() {
    super('/user');
  }

  changeProfile(data: IProfileData) {
    return this.put('/profile', { data }) as Promise<ProfileResponse>;
  }

  changePassword(data: IPasswordData) {
    return this.put('/password', {
      data,
    }) as Promise<"OK" | IBadResponse>;
  }

  changeAvatar(data: FormData) {
    return this.put('/profile/avatar', {
      data,
    }) as Promise<ProfileResponse>;
  }

  getUserById(id: string) {
    return this.get(`/${id}`);
  }

  searchUser(login: string) {
    return this.post('/search', {
      data: { login },
    });
  }
}

export default new UserAPI();