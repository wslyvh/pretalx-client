import { IndexableString } from 'types/base';
import { Answer, Speaker } from 'types';

export interface Submission {
  code: string;
  speakers: Array<Speaker>;
  created: Date;
  title: string;
  submission_type: IndexableString;
  track: IndexableString | null;
  state: string;
  abstract: string;
  description: string;
  duration: number | null;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot | null;
  slot_count: number;
  image: string;
  answers: Array<Answer>;
  notes: string;
  internalNotes: string;
  resources: IndexableString;
}

export interface Slot {
  room: IndexableString;
  start: Date;
  end: Date;
}
