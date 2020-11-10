import { ClientResponse, PagedResult } from 'types/base';
import { Event, Submission } from 'types';

export interface PretalxClientInterface extends PretalxClientEvents, PretalxClientSubmissions {}

export interface PretalxClientEvents {
  // GET /api/events/
  GetEvents(): Promise<ClientResponse<Event[]>>;

  // GET /api/events/(event)/
  GetEvent(event: string): Promise<ClientResponse<Event>>;
}

export interface PretalxClientSubmissions {
  // GET /api/events/{event}/submissions
  // Query Parameters
  // page – The page number in case of a multi-page result set, default is 1
  // q – Search through submissions by title and speaker name
  // submission_type – Filter submissions by submission type
  // state – Filter submission by state
  GetSubmissions(event: string): Promise<ClientResponse<PagedResult<Submission[]>>>;

  // GET /api/events/(event)/submissions/{code}
  GetSubmission(event: string, code: string): Promise<ClientResponse<Submission>>;
}
