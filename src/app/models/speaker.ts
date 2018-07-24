export class Speaker {
  public id: number;
  public FIO: string;
  public post: string;
  public short_descriptions: string;
  public checked: boolean;

  constructor(speaker?: Speaker) {
    if(speaker !== undefined) {
      this.id = speaker.id;
      this.FIO = speaker.FIO;
      this.post = speaker.post;
      this.short_descriptions = speaker.short_descriptions;
      this.checked = speaker.checked;
    } else {
      this.id = null;
      this.FIO = '';
      this.post = '';
      this.short_descriptions = '';
      this.checked = false;
    }
  }
}
