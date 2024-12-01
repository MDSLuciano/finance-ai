import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"

export const TRANSACTION_CATEGORIES_LABELS = {
  EDUCATION :"Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outro",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
}

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outro",
  PIX: "PIX",
}

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
    [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
    [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
    [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
    [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
    [TransactionPaymentMethod.CASH]: "money.svg",
    [TransactionPaymentMethod.PIX]: "pix.svg",
    [TransactionPaymentMethod.OTHER]: "other.svg",
}

export const TRANSACTION_TYPES_OPTIONS = [{
    value: TransactionType.DEPOSIT,
    label: "Depósito",
}, {
    value: TransactionType.EXPENSE,
    label: "Despesa",
}, {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
}]

export const PAYMENT_METHODS_OPTIONS = [{
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.PIX,
}, {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_TRANSFER,
}, {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_SLIP,
}, {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CASH,
}, {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CREDIT_CARD,
}, {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.DEBIT_CARD,
},{
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.OTHER,
}]

export const TRANSACTION_CATEGORIES_OPTIONS = [{
    value: TransactionCategory.EDUCATION, 
    label: TRANSACTION_CATEGORIES_LABELS.EDUCATION,
}, {
    value: TransactionCategory.ENTERTAINMENT, 
    label: TRANSACTION_CATEGORIES_LABELS.ENTERTAINMENT,
}, {
    value: TransactionCategory.FOOD, 
    label: TRANSACTION_CATEGORIES_LABELS.FOOD,
}, {
    value: TransactionCategory.HEALTH, 
    label: TRANSACTION_CATEGORIES_LABELS.HEALTH,
}, {
    value: TransactionCategory.HOUSING, 
    label: TRANSACTION_CATEGORIES_LABELS.HOUSING,
  }, {
    value: TransactionCategory.SALARY, 
    label: TRANSACTION_CATEGORIES_LABELS.SALARY,
  }, {
    value: TransactionCategory.TRANSPORTATION, 
    label: TRANSACTION_CATEGORIES_LABELS.TRANSPORTATION,
  }, {
    value: TransactionCategory.UTILITY, 
    label: TRANSACTION_CATEGORIES_LABELS.UTILITY,
  }, {
      value: TransactionCategory.OTHER, 
      label: TRANSACTION_CATEGORIES_LABELS.OTHER,
}]