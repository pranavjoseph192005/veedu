# /app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .calculate import estimate_loan_range
from .models import EstimateRequest, EstimateResponse

app = FastAPI(
    title="Loan Estimate API",
    version="1.0"
)

# CORS settings so Next.js can call it locally or in production
origins = [
    "http://localhost:3000",  # your Next.js dev server
    "https://your-frontend-domain.com"  # your production URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/calculate", response_model=EstimateResponse)
def calculate_estimate(request: EstimateRequest):
    """
    Calculate estimated loan range.
    """
    result = estimate_loan_range(
        annual_income=request.annual_income,
        monthly_debt=request.monthly_debt,
        down_payment=request.down_payment,
        interest_rate=request.interest_rate,
        loan_term_years=request.loan_term_years,
        taxes_insurance_monthly=request.taxes_insurance_monthly
    )
    return result
