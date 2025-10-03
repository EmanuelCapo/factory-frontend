export interface SaleRequest {
  country: string;
  amount: number;
}

export interface SaleResponse {
  country:string;
  baseAmount:number;
  vatRate:number;
  finalAmount:number;
}