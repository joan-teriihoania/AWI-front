export class User {
  get user_id(): number {
    return this._user_id;
  }

  get username(): string {
    return this._username;
  }

  get imgProfile(): string {
    return this._imgProfile;
  }

  get link(): string {
    return this._link;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get blocked(): boolean {
    return this._blocked;
  }

  get blockedReason(): string {
    return this._blockedReason;
  }

  constructor(
    private _user_id: number,
    private _username: string,
    private _imgProfile: string,
    private _link: string,
    private _email: string,
    private _password: string,
    private _blocked: boolean,
    private _blockedReason: string
  ) {
  }


}
