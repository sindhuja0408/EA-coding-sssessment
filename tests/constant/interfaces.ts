export interface Band {
  name: string;
  recordLabel: string;
}

export interface Festival {
  name: string;
  bands: Band[];
}
