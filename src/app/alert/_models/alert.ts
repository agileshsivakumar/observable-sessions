export interface Alert {
  message: string;
  type: AlertType;
}

export enum AlertType {
  success,
  error,
  info
}
