export default interface ClarifaiResp {
  status: {
    code: number;
    description: string;
    req_id: string;
  };
  outputs: Array<any>;
  rawData: any;
}
