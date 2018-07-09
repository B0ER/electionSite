export class User {
  public id: number;
  public imya: string;
  public fam: string;
  public otch: string;
  public consignment: string;
  public MAC: string;
  public checked: boolean;

  constructor() {
    this.id = null;
    this.imya = '';
    this.fam = '';
    this.otch = '';
    this.consignment = '';
    this.MAC = '';
    this.checked = false;
  }
}
