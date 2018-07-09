export class Speaker {
  public id: number;
  public FIO: string;
  public post: string;
  public short_descriptions: string;
  public checked: boolean;

  constructor() {
    this.id = null;
    this.FIO = '';
    this.post = '';
    this.short_descriptions = '';
    this.checked = false;
  }
}
