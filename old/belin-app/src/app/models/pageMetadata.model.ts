/**
 * Describes a page content metadata
 */
export interface PageMetadata {
  key : string;
  title : string;
  category : string;
  description : string;
  tags : Array<string>;
  locale : string,
  createdOn : Date;
  latestUpdate : Date;
  wordCount : number;
  pageHeight : number;
  thumbnail : URL;
  source : URL;
}
