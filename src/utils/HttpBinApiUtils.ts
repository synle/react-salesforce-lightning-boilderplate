import {
  RestClient,
  RestApi,
  RequestProperty,
  RequestBody,
  PathParam,
  QueryParamProperty,
  QueryParams,
  FormDataBody,
  FileUploadBody,
  ApiResponse,
} from 'restapi-typescript-decorators';



// first define your request and response body
export interface HttpBinRequest {
  [propName: string]: any;
}
export interface HttpBinResponse {
  [propName: string]: any;
}


@RestClient({
  baseUrl: 'https://httpbin.org',
})
class PublicApiDataStore {
  @RestApi('/get')
  doSearch(
    @QueryParamProperty('keyword') _keyword: string,
    @QueryParamProperty('pageSize') _pageSize: number,
  ): ApiResponse<HttpBinResponse> {}
}

export default new PublicApiDataStore();
