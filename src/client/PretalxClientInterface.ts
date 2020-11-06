import { ClientResponse } from 'types/base';
import { Event } from 'types';

export interface PretalxClientInterface {
  GetEvents(): Promise<ClientResponse<Event[]>>;
  GetEvent(event: string): Promise<ClientResponse<Event>>;
}
