from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .calculate import estimate_loan_range
from .models import EstimateRequest, EstimateResponse
from .db import db
from contextlib import asynccontextmanager
from dotenv import load_dotenv

load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()

app = FastAPI(
    title="Loan Estimate API",
    version="1.0",
    lifespan=lifespan
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
async def calculate_estimate(request: EstimateRequest):
    #print(request)
    result = estimate_loan_range(
        annual_income=request.annual_income,
        monthly_debt=request.monthly_debt,
        down_payment=request.down_payment,
        interest_rate=request.interest_rate,
        loan_term_years=request.loan_term_years,
        taxes_insurance_monthly=request.taxes_insurance_monthly
    )
    #print(request.uid)
    await db.userprofile.update(
        where={
            "userId": request.uid  # must be an integer
        },
        data={
            "lowLoanAmount": result["estimatedLoanLow"],
            "meanLoanAmount": result["meanLoan"],
            "highLoanAmount": result["estimatedLoanHigh"]
        }
    )
    return result
