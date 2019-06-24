export interface BoletoProps {
  payerName?: string;
  payerEmail?: string;
  value?: number;
  phoneDDI?: string;
  phoneDDD?: string;
  phoneNumber?: string;
  CPFCNPJ?: string;
  dueDate?: string;
  sendEmail?: boolean;
  addTax?: boolean;
  observation?: string;
  fines?: boolean;
  latePaymentFine?: number;
  perDayInterest?: boolean;
}
