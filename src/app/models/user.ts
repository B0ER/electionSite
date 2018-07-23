export class User {
  public id: number;
  public imya: string;
  public fam: string;
  public otch: string;
  public consignment: string;
  public MAC: string;
  public checked: boolean;

  constructor(user?: User) {
    if(user !== undefined) {
      this.id = user.id;
      this.imya = user.imya;
      this.fam = user.fam;
      this.otch = user.otch;
      this.consignment = user.consignment;
      this.MAC = user.MAC;
      this.checked = user.checked;
    }
    else {
      this.id = null;
      this.imya = '';
      this.fam = '';
      this.otch = '';
      this.consignment = '';
      this.MAC = '';
      this.checked = false;
    }
  }
}
