# /app/models.py

from pydantic import BaseModel

class EstimateRequest(BaseModel):
    uid: int
    annual_income: float
    monthly_debt: float
    down_payment: float
    interest_rate: float = 0.07
    loan_term_years: int = 30
    taxes_insurance_monthly: float = 350.0

class EstimateResponse(BaseModel):
    estimatedLoanLow: float
    meanLoan: float
    estimatedLoanHigh: float
    monthlyPayment: float
    note: str
