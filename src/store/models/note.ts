export class Note {
  readonly lastModified: Date;

  constructor(public title: string, public description: string) {
    this.lastModified = new Date();
  }
}