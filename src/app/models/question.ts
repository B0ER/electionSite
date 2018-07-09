export class Question {
  public id: number;
  public name: string;
  public description: string;
  public checked: boolean;

  public id_user: number;
  public imya: string;
  public fam: string;
  public otch: string;

  constructor() {
    this.id = null;
    this.name = '';
    this.description = '';
    this.checked = false;
    this.id_user = null;
    this.imya = '';
    this.fam = '';
    this.otch = '';
  }
}
