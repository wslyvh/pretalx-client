import { IndexableString } from 'types/base';

export interface Event {
  name: IndexableString;
  slug: string;
  is_public: boolean;
  date_from: Date;
  date_to: Date;
  timezone: string;
  urls: IndexableString;
}
