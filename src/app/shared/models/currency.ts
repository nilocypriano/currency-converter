export type ICurrencyExchange = {
  [key in 'ARSBRL' | 'CADBRL' | 'GBPBRL']: ICurrency;
};

export interface ICurrency {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
  updatedAt?: Date;
}
