export class User {
  constructor(
    private user_id: number,
    private username: string,
    private imgProfile: string,
    private link: string,
    private email: string,
    private password: string,
    private blocked: boolean,
    private blockedReason: string
  ) {
  }


}
