import { Badge } from './Badge';

export class Activity {
  id!: number;
  imageUrl!: string;
  name!: string;
  websiteUrl!: string;
  address!: string;
  description!: string;
  hourBeginning!: string;
  hourEnding!: string;
  dateBeginning!: string;
  dateEnding!: string;
  badgesDto?: Badge[];
}
