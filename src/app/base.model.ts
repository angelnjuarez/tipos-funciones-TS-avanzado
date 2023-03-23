export interface BaseModel {
  readonly id: string; //sólo lectura
  readonly createdAt: Date;
  updatedAt: Date;
}
