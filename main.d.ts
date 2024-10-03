declare module 'esc-get-data-from-json-file' {
  export type OnErrorType = 'exit' | 'throw' | null | object | any[];

  export interface GetDataFromJsonFileParams {
    label: string;
    filePath: string;
    onError?: OnErrorType;
  }

  export function getDataFromJsonFile(params: GetDataFromJsonFileParams): null | object | any[];
  export default getDataFromJsonFile;
}
