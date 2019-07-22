export interface Element {
  Caption: string,
  CategoryId: number,
  ContainsAccEnvData: boolean,
  Keywords: string,
  FullDescription: string,
  Id: string
}
export interface ElementsImpl {
  Items: Element[];
  Count: number;
}
