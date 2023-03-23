export interface BaseModel {
  readonly id: string | number; //sólo lectura
  readonly createdAt: Date;
  updatedAt: Date;
}
