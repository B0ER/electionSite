export class Photo {
  public id: number;
  public image: string;
  public FIO: string;
  public checked: boolean;
  public id_speaker: number;

  constructor() {
    this.id = null;
    this.image = '';
    this.FIO = '';
    this.image = '';
    this.checked = false;
    this.id_speaker = null;
  }
}
