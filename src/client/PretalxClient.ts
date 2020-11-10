import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ClientResponse, PagedResult } from 'types/base';
import { Event, Submission } from 'types';
import { PretalxClientInterface } from './PretalxClientInterface';

export default class PretalxClient implements PretalxClientInterface {
  private readonly client: AxiosInstance;
  private readonly accessToken: string = '';

  public constructor(baseUrl: string, accessToken?: string) {
    if (!baseUrl) {
      throw new Error('baseUrl is required');
    }

    this.client = axios.create({
      baseURL: baseUrl.endsWith('/') ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl,
    });

    if (accessToken) {
      this.client.defaults.headers = {
        Authorization: `Token ${accessToken}`,
      };
      this.accessToken = accessToken;
    }
  }

  public async GetEvents(): Promise<ClientResponse<Event[]>> {
    const result = await this.client.get('events');

    return {
      status: result.status,
      message: result.statusText,
      data: result.data ?? null,
    };
  }

  public async GetEvent(event: string): Promise<ClientResponse<Event>> {
    try {
      const result = await this.client.get(`events/${event}`);

      return {
        status: result.status,
        message: result.statusText,
        data: result.data ?? null,
      };
    } catch (ex) {
      const response = ex.response as AxiosResponse;
      return {
        status: response.status,
        message: response.statusText,
        data: null,
      };
    }
  }

  public async GetSubmissions(event: string): Promise<ClientResponse<PagedResult<Submission[]>>> {
    try {
      const result = await this.client.get(`events/${event}/submissions`);

      return {
        status: result.status,
        message: result.statusText,
        data: result.data ?? null,
      };
    } catch (ex) {
      const response = ex.response as AxiosResponse;

      return {
        status: response.status,
        message: response.statusText,
        data: null,
      };
    }
  }

  public async GetSubmission(event: string, code: string): Promise<ClientResponse<Submission>> {
    try {
      const result = await this.client.get(`events/${event}/submissions/${code}`);

      return {
        status: result.status,
        message: result.statusText,
        data: result.data ?? null,
      };
    } catch (ex) {
      const response = ex.response as AxiosResponse;

      return {
        status: response.status,
        message: response.statusText,
        data: null,
      };
    }
  }
}
