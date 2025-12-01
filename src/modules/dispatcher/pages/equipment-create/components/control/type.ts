export interface ControlType {
  id?: string;
  name: string;
  mesurement: string;
  plcNodeid: string;
  isValue: boolean;
  isInfo: boolean;
}

export interface ControlModelType {
  id: number,
  name: string,
  mesurement: string,
  plcNodeId: string,
  isCommand: boolean,
  isValue: boolean,
  hardwareId: number
}



export interface ControlTypeCreateMany {
  hardwareId: number;
  nodes: ControlTypeCreate[]
}
export interface ControlTypeCreate {
  name: string;
  mesurement: string;
  plcNodeid: string;
  hardwareId: number;
  isValue: boolean;
}


export interface ControlStateType {
  controlers: ControlType[];
}


