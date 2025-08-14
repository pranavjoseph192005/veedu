# /app/calculate.py

def estimate_loan_range(
    annual_income: float,
    monthly_debt: float,
    down_payment: float,
    interest_rate: float = 0.07,
    loan_term_years: int = 30,
    taxes_insurance_monthly: float = 350.0
) -> dict:
    """
    Calculate estimated loan amount range and monthly payment.
    """

    # 1) Gross monthly income
    gross_monthly_income = annual_income / 12

    # 2) Max housing payment (28-31% of income)
    max_housing_payment = gross_monthly_income * 0.31

    # 3) Max total payment (43% of income - debts)
    max_total_payment = (gross_monthly_income * 0.43) - monthly_debt

    # 4) Take the lower of the two caps
    monthly_budget = min(max_housing_payment, max_total_payment)

    # 5) Subtract estimated taxes & insurance
    principal_interest_budget = monthly_budget - taxes_insurance_monthly
    if principal_interest_budget <= 0:
        return {
            "estimatedLoanLow": 0,
            "estimatedLoanHigh": 0,
            "monthlyPayment": 0,
            "note": "Your current debts and taxes exceed typical affordability."
        }

    # 6) Mortgage formula
    r = interest_rate / 12
    n = loan_term_years * 12

    loan_amount = (principal_interest_budget * ((1 + r)**n - 1)) / (r * (1 + r)**n)

    # 7) Provide a range (+/-10%)
    estimated_loan_low = loan_amount * 0.9
    estimated_loan_high = loan_amount * 1.1

    return {
        "estimatedLoanLow": round(estimated_loan_low, -4),
        "meanLoan": round(loan_amount, -4),
        "estimatedLoanHigh": round(estimated_loan_high, -4),
        "monthlyPayment": round(monthly_budget, -4),
        "note": "This is an estimate only. Actual loan eligibility may vary."
    }
