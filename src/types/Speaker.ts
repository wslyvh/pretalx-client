import { Submission } from 'types';
import { IndexableString } from 'types/base';

export interface Speaker {
  code: string;
  name: string;
  biography: string;
  submissions: Array<Submission>;
  avatar: string;
  email: string;
  availabilities: IndexableString;
}
