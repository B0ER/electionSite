export class Speaker {
  public id: number;
  public FIO: string;
  public post: string;
  public short_descriptions: string;
  public checked: boolean;
  public id_session: number;

  constructor(speaker?: Speaker) {
    if(speaker !== undefined) {
      this.id = speaker.id;
      this.FIO = speaker.FIO;
      this.post = speaker.post;
      this.short_descriptions = speaker.short_descriptions;
      this.checked = speaker.checked;
      this.id_session = speaker.id_session;
    } else {
      this.id = null;
      this.FIO = '';
      this.post = '';
      this.short_descriptions = '';
      this.checked = false;
      this.id_session = null;
    }
  }
}
