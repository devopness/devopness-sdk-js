import { AxiosResponse } from 'axios'
import parseLinkHeader from 'parse-link-header'

interface ApiLinks {
    last: {
        page: number;
    }
}

export class ApiResponse<T>{
    actionId?: number;
    data: T;
    pageCount?: number;
    status: number;

    constructor(axiosResp: AxiosResponse<T>) {
        this.status = axiosResp.status;
        this.data = axiosResp.data;

        if (axiosResp.headers) {
            const linkHeader = parseLinkHeader(axiosResp.headers?.link) as ApiLinks | null;
            this.pageCount = Number(linkHeader?.last?.page) || undefined;
            this.actionId = axiosResp.headers['X-Devopness-Action-Id'];
        }
    }
}
