export interface PoliceCode {
  id: number;
  code: string;
  title: string;
  description: string;
  example: string;
  category: string;
}

export type CategoryType = "all" | "10-codes" | "11-codes" | "response-codes" | "penal-codes";

export const categoryLabels: Record<CategoryType, string> = {
  "all": "All Codes",
  "10-codes": "10-Codes",
  "11-codes": "11-Codes",
  "response-codes": "Response Codes",
  "penal-codes": "Penal Codes"
};
