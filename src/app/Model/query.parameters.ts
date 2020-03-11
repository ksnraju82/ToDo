export class clsGETMessageDetails {
        
    public QueryParameters: clsQueryParameter[] = new Array();
    public SortOrder: clsQueryParameter[] = new Array();
    public RecordOffset: number;
    public NoRecords: number;
    public Filters: clsQueryParameter[] = new Array();
    
    constructor() {}

}

export class clsPUTMessageDetails {
        
  public QueryParameters: clsQueryParameter[] = new Array();
  
  constructor() {}

}

export class clsQueryParameter {    

    public Key: string;
    public Value: any;

    constructor(Key: string, Value: any) {
        this.Key = Key;
        this.Value = Value;
    }

}

export class clsReturnDetails {
  
  public ReturnValues: clsReturnValues[] = new Array();
  public Error: clsErrors;

  constructor(res: any) {
    for (let _count in res.ReturnValues) {
      if (res.ReturnValues.hasOwnProperty(_count)) {
        this.ReturnValues.push(new clsReturnValues(res.ReturnValues[_count]));
      }
    }
    this.Error = res.Error;
  }

}

export class clsReturnValues {

  public Key: string;
  public Value: string;
  public Type: string;

  constructor(res: any) {
    this.Key = res.Key;
    this.Value = res.Value;
    this.Type = res.Type;

  }

}

export class clsReturnStatus {

  public _body: string;
  public status: number;
  public ok: boolean;
  public statusText: string;
  public headers: string;
  public type: number;
  public url: string;

  constructor(res: any) {
    this._body = res._body;
    this.status = res.status;
    this.ok = res.ok;
    this.statusText = res.statusText;
    this.headers = res.headers;
    this.type = res.type;
    this.url = res.url;
  }

}

export class clsErrors {

  public LogID: string;
  public Message: string;
  public MessageID: number;
  public ExceptionType: string;  

  constructor(res: any) {
    this.LogID = res.LogID;
    this.Message = res.Message;
    this.MessageID = res.MessageID;
    this.ExceptionType = res.ExceptionType;    
  }

}
