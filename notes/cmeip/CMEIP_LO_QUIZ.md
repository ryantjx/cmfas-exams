# CM-EIP — 149-question mock quiz (learning-objective mapped)

**In this repo:** the 149 questions below also live in the question bank
(`notes/cmeip/CMEIP_QUESTIONS.md`, bank numbers 29–39, 81–87, 131–136, 179–188, 229–239, 307–315, 397–422, 496–522, 607–621, 646–650, 697–704 and 735–748), so they can be drawn in mock exams, and as the
interactive quiz at `/practice/cmeip/?type=lo` ("Learning-objective quiz")
on the study site.

**Source:** `ryantjx/cmfas-exams`, guide files in `notes/cmeip/guide/` (main branch). Exam format verified in `scripts/lib/exams.mjs` and `notes/cmeip/CMEIP.md`: **90 MCQ, 2.5 hours, 70% to pass (63/90)**, including 3 case studies (9 questions). Non-programmable financial calculator allowed; formulae sheet provided. 365-day convention for Singapore Government Securities, 360-day for everything else.

**Status: FINAL — checked 2026-11-15: 149 questions, 149 answer lines, answer-key table cross-checked mechanically against the question bodies with zero mismatches (A ×38, B ×37, C ×38, D ×36).** Added to the repo 2026-11-15 as `notes/cmeip/CMEIP_LO_QUIZ.md`; the questions are in the bank (`CMEIP_QUESTIONS.md` 29–39, 81–87, 131–136, 179–188, 229–239, 307–315, 397–422, 496–522, 607–621, 646–650, 697–704, 735–748) and served as the interactive learning-objective quiz. Written for Ryan's CM-EIP sitting Thu 19 Nov 2026, 09:30 SGT.

**Split:** Ch 1: 11, Ch 2: 7, Ch 3: 6, Ch 4: 10, Ch 5: 11, Ch 6: 9, Ch 7: 26, Ch 8: 27, Ch 9: 15, Ch 10: 5, Ch 11: 8, Ch 12: 14.
**Pass mark for this quiz:** 105/149 (70%, the real paper's pass mark). Untimed learning mode: the answer and rationale appear as soon as you answer each question.
**Answer key:** A ×38, B ×37, C ×38, D ×36. "All of the above" is never the correct answer (and is not used at all in this draft).

**How this draft was built:** every explicit "Learning Objectives" block was extracted verbatim from the twelve guide chapters (145 objectives in total); every objective is tested at least once. The existing 629-question bank (`CMEIP_QUESTIONS.md`) was used only for de-duplication: no stem or option set was copied from it, and none of the guide's worked examples or case studies was reused (new clients, companies, names and figure sets throughout). Standard threshold numbers are tested with original stems. One structural note: Chapter 12 questions are tagged `CM-EIP §12 — Case Studies` (no dotted number) deliberately — the mock exam draws its Section 2 case studies as whole §12.x triples, and extra questions in those groups would break the draw.

---

## PART A — LEARNING-OBJECTIVE COVERAGE MAP

"Stated" = verbatim LO block in the chapter file. All 145 objectives below are stated; none is derived.

### Chapter 1

| LO | Objective | Tested by |
|---|---|---|
| LO1.1 | Definition and needs of different types of investors | Q1 |
| LO1.2 | What makes up the financial markets | Q2 |
| LO1.3 | Definition of "financial assets" | Q3 |
| LO1.4 | Financial assets vs real assets | Q4 |
| LO1.5 | Types of money market securities | Q5 |
| LO1.6 | Types of capital market securities | Q6 |
| LO1.7 | Primary market vs secondary market | Q7 |
| LO1.8 | Characteristics of a good financial market | Q8 |
| LO1.9 | Money market vs capital market | Q9 |
| LO1.10 | Bond, equity, and options/futures markets broadly | Q10 |
| LO1.11 | Inter-market relationships and how the economy is sustained by financial markets | Q11 |

### Chapter 2

| LO | Objective | Tested by |
|---|---|---|
| LO2.1 | Concepts of risk and return in investment management | Q12 |
| LO2.2 | Risk-return trade-off | Q13 |
| LO2.3 | Components of total return; compute expected return | Q14 |
| LO2.4 | Statistical measures of risk | Q15 |
| LO2.5 | Standard deviation and coefficient of variation | Q16 |
| LO2.6 | Various risks associated with investments | Q17 |
| LO2.7 | Present and future value of a single cash flow | Q18 |

### Chapter 3

| LO | Objective | Tested by |
|---|---|---|
| LO3.1 | Key drivers of asset values and market movement | Q19 |
| LO3.2 | How key economic factors affect market movement and asset values | Q20 |
| LO3.3 | Economic calendar; leading, coincident and lagging indicators | Q21 |
| LO3.4 | Industry and company-specific factors and market value | Q22 |
| LO3.5 | How market factors affect asset prices | Q23 |
| LO3.6 | How investment behaviour influences decisions, movements and prices | Q24 |

### Chapter 4

| LO | Objective | Tested by |
|---|---|---|
| LO4.1 | Features of the foreign exchange market | Q25 |
| LO4.2 | How foreign exchange rates are quoted | Q26 |
| LO4.3 | Direct vs indirect quotations and cross quotations | Q27 |
| LO4.4 | Cross rates from indirect quotes in USD against other currencies | Q28 |
| LO4.5 | Bid-offer spread | Q29 |
| LO4.6 | Spot vs forward transaction | Q30 |
| LO4.7 | How forward rates are determined; calculate forward points | Q31 |
| LO4.8 | Interest rate parity and covered interest arbitrage | Q32 |
| LO4.9 | Non-deliverable forwards and their use | Q33 |
| LO4.10 | Risks in foreign exchange and methods of managing them | Q34 |

### Chapter 5

| LO | Objective | Tested by |
|---|---|---|
| LO5.1 | Company analysis in the context of fundamental analysis | Q35 |
| LO5.2 | The three major financial statements | Q36 |
| LO5.3 | Financial performance analysis using financial ratios | Q37 |
| LO5.4 | Liquidity: current, quick and cash ratios | Q38 |
| LO5.5 | Financial risk and leverage: debt-to-equity, total debt to total assets, interest coverage, total fixed charge coverage | Q39 |
| LO5.6 | Operating efficiency: asset/inventory/receivables turnover, days to sell, collection period | Q40 |
| LO5.7 | Profitability: gross/operating/net margins, ROA, ROE, EPS | Q41 |
| LO5.8 | Valuation ratios in estimating the value of a share | Q42 |
| LO5.9 | Quality of financial statements and quality of earnings | Q43 |
| LO5.10 | Comparative and trend analysis | Q44 |
| LO5.11 | Limitations in the use of financial ratios | Q45 |

### Chapter 6

| LO | Objective | Tested by |
|---|---|---|
| LO6.1 | Characteristics of equity securities: ordinary and preference shares | Q46 |
| LO6.2 | Blue-chip, growth, income, cyclical, defensive equities; high NTA backing | Q47 |
| LO6.3 | Absolute vs relative valuation approaches | Q48 |
| LO6.4 | Relative price, firm valuation and yield-oriented ratios (DY, P/E, P/B, P/S, P/CF, EV/EBITDA) and their relevance | Q49 |
| LO6.5 | Composition and computation of equity market indices | Q50 |
| LO6.6 | Rights and bonus issue calculations | Q51 |
| LO6.7 | Discounted cash flow in estimating fair (intrinsic) value | Q52 |
| LO6.8 | Relative valuation ratios in comparing stocks | Q49 |
| LO6.9 | Reading and analysing IPO prospectuses | Q53 |
| LO6.10 | Depositary receipts as a means of investing in foreign markets | Q54 |

### Chapter 7

| LO | Objective | Tested by |
|---|---|---|
| LO7.1 | Different ways we use cash | Q55, Q56 |
| LO7.2 | Basic money market instruments | Q57 |
| LO7.3 | Characteristics of a fixed-income instrument (bond) | Q58 |
| LO7.4 | Terminology used in fixed-income securities | Q59 |
| LO7.5 | Credit risk in holding bonds | Q60 |
| LO7.6 | Issuers and their motivation in issuing bonds | Q61 |
| LO7.7 | Primary and secondary bond markets | Q62 |
| LO7.8 | How prices are quoted in bond trading | Q63 |
| LO7.9 | Special features in bond issuance and their significance | Q64 |
| LO7.10 | High-yield bonds and their implied bond rating | Q65 |
| LO7.11 | Asset-backed fixed-income instruments | Q66 |
| LO7.12 | Internal and external bond markets, and the Eurobond market | Q67 |
| LO7.13 | Differences among grades of debt rating | Q68 |
| LO7.14 | Risks a fixed-income investor is exposed to | Q69 |
| LO7.15 | Calculate the value of a bond | Q70, Q71 |
| LO7.16 | Bond equivalent yield for bonds paying interest more than once a year | Q72 |
| LO7.17 | Coupon rate, market yield, required yield and bond price | Q73 |
| LO7.18 | Why bond prices converge to par on maturity | Q73 |
| LO7.19 | Duration and convexity and their implications for price risk | Q74 |
| LO7.20 | Price value of a basis point and monitoring portfolio price risk | Q75 |
| LO7.21 | Yield measures: current yield and yield to maturity | Q76, Q77 |
| LO7.22 | Reinvestment risk and how coupon rate and maturity affect it | Q78 |
| LO7.23 | Term structure: expectations and liquidity preference theories | Q79 |
| LO7.24 | Convertible bonds: conversion parity price and conversion premium | Q80 |

### Chapter 8

| LO | Objective | Tested by |
|---|---|---|
| LO8.1 | Levels of market efficiency under the EMH | Q81 |
| LO8.2 | Active vs passive portfolio management | Q82 |
| LO8.3 | How investment portfolios are constructed and managed | Q83 |
| LO8.4 | Diversification and portfolio risk principles | Q84 |
| LO8.5 | Systematic vs non-systematic risk, and hedging each | Q85 |
| LO8.6 | Correlation coefficient and the extent of diversification | Q86 |
| LO8.7 | Portfolio return and risk | Q87 |
| LO8.8 | International diversification of portfolio risk | Q88 |
| LO8.9 | CAPM and the risk-free rate | Q89 |
| LO8.10 | Capital Market Line and the portfolio risk-return trade-off | Q90 |
| LO8.11 | Security Market Line and the portfolio risk-return trade-off | Q90 |
| LO8.12 | SML: overvalued vs undervalued securities | Q91 |
| LO8.13 | Arbitrage Pricing Theory vs CAPM | Q92 |
| LO8.14 | Portfolio management process | Q93 |
| LO8.15 | How investment policies are established | Q94 |
| LO8.16 | Investment objectives in the investment policy statement | Q95 |
| LO8.17 | Contents of a typical investment policy statement | Q96 |
| LO8.18 | Investment constraints in portfolio management | Q97 |
| LO8.19 | Asset allocation: strategic vs tactical | Q98 |
| LO8.20 | Investment returns across cash-flow assumptions and portfolio movements | Q99 |
| LO8.21 | Dollar-weighted rate of return | Q100 |
| LO8.22 | Time-weighted rate of return | Q101 |
| LO8.23 | Dollar-weighted vs time-weighted: advantages and disadvantages | Q102 |
| LO8.24 | Modified Dietz method | Q103 |
| LO8.25 | Global Investment Performance Standards | Q104 |
| LO8.26 | Risk-adjusted measures: Sharpe, Treynor, Jensen's alpha | Q105, Q106 |
| LO8.27 | Performance attribution vs an established benchmark | Q107 |

### Chapter 9

| LO | Objective | Tested by |
|---|---|---|
| LO9.1 | Exchange-traded funds (ETFs) | Q108 |
| LO9.2 | Role of ETFs in investments | Q109 |
| LO9.3 | Advantages and risks of investing in ETFs | Q110 |
| LO9.4 | Unit trusts: definition and features | Q111 |
| LO9.5 | Unit trusts vs investment trusts | Q112 |
| LO9.6 | Advantages of investing in unit trusts | Q113 |
| LO9.7 | Major types of unit trusts | Q114 |
| LO9.8 | Evaluation of unit trusts | Q115 |
| LO9.9 | Charges and fees in unit trusts | Q116 |
| LO9.10 | Bid and offer prices of unit trusts | Q117 |
| LO9.11 | Real Estate Investment Trusts (REITs) | Q118 |
| LO9.12 | REITs vs business trusts and their differences | Q119 |
| LO9.13 | Stapled securities | Q120 |
| LO9.14 | Alternative investments: hedge funds, insurance and annuities | Q121 |
| LO9.15 | CPF Investment Scheme | Q122 |

### Chapter 10

| LO | Objective | Tested by |
|---|---|---|
| LO10.1 | Features of stock warrants | Q123 |
| LO10.2 | Warrant valuation: intrinsic value, conversion price, warrant premium | Q124 |
| LO10.3 | Gearing ratio in warrant pricing | Q125 |
| LO10.4 | Determinants of the minimum and maximum values of warrants | Q126 |
| LO10.5 | How the warrant premium is influenced by the underlying price, life, exercise price, volatility, dividend, leverage, interest rates and issue size | Q127 |

### Chapter 11

| LO | Objective | Tested by |
|---|---|---|
| LO11.1 | Philosophy and assumptions of technical analysis | Q128 |
| LO11.2 | Challenges to technical analysis | Q129 |
| LO11.3 | Technical indicators | Q130 |
| LO11.4 | Support vs resistance levels | Q131 |
| LO11.5 | Share price and volume analysis techniques | Q132 |
| LO11.6 | Chart patterns: head and shoulders, double tops/bottoms, rectangles, triangles, flags/pennants, wedges, gaps | Q133 |
| LO11.7 | Elliott Wave Theory | Q134 |
| LO11.8 | Essentials of quantitative analysis | Q135 |

### Chapter 12

| LO | Objective | Tested by |
|---|---|---|
| LO12.1 | Investor-classification framework applied to a named client | Q136 |
| LO12.2 | Expected return, standard deviation, coefficient of variation, real future value | Q137, Q149 |
| LO12.3 | Economic indicators and business-cycle phases; asset-class selection | Q138 |
| LO12.4 | Behavioural driver of a price fall | Q139 |
| LO12.5 | Carry trade gain under three exchange-rate scenarios | Q140, Q141, Q142 |
| LO12.6 | Prospective P/E, EPS growth, PEG — and acting on the result | Q143 |
| LO12.7 | DCF steps and enterprise value | Q144 |
| LO12.8 | Bond prices, yields and duration; interest-rate sensitivity | Q145 |
| LO12.9 | Strategic asset allocation matched to objectives and constraints | Q146 |
| LO12.10 | Warrant intrinsic value, minimum gain, reading an FX quote | Q147 |
| LO12.11 | Unit trusts, business trusts and REITs; vehicle for an income objective | Q148 |

---

## PART B — THE 149 QUESTIONS

**Instructions to the candidate:** 149 questions, one best answer each. Pass mark 105/149 (70%). Learning mode: the answer and explanation appear as soon as you answer each question.

### Chapter 1 — Questions 1–11

**Q1. [LO1.1 | CM-EIP §1.1.1]**
A state-owned fund is set up to invest a country's surplus resource revenues so that future generations benefit from them, rather than to meet pension payments or insurance claims. Which type of institutional investor is this, and what is the purpose of its funds?
A. A pension fund, providing retirement income.
B. A sovereign wealth fund, saving for future generations (or stabilising the national economy).
C. An insurance fund, meeting expected claims.
D. An endowment fund, satisfying philanthropic spending commitments.
**Answer: B.** Institutional investors are classified by the purpose of the money: pension funds provide retirement income, insurance funds meet expected claims, endowment funds satisfy philanthropic spending commitments, and sovereign wealth funds stabilise the national economy or save for future generations. A state fund investing surplus resource revenues for future generations is a sovereign wealth fund.

**Q2. [LO1.2 | CM-EIP §1.3]**
A market report lists the participants in the financial markets: retail and institutional investors, issuers, broker/dealer firms, regulators, electronic exchanges, financial institutions that underwrite IPOs — and a clearing house. Which role does the clearing house play?
A. It is an issuer of securities to the public.
B. It is a broker/dealer matching buyers and sellers.
C. It is a regulator setting listing rules.
D. It is an infrastructure provider, alongside central depositories, communications networks and trade repositories.
**Answer: D.** The guide lists infrastructure providers as clearing houses, central depositories, communications networks and trade repositories. Issuers are public and private sector companies; intermediaries are broker/dealer firms and market makers; regulators are a separate participant category.

**Q3. [LO1.3 | CM-EIP §1.2]**
Which of the following is a financial asset?
A. A corporate bond issued by a listed company.
B. A directly owned industrial warehouse.
C. A bar of physical gold held in a vault.
D. A painting held as a collectible.
**Answer: A.** Financial assets are paper or electronic claims on an issuer — here a corporation — and are broadly classified into debt, equity and derivative instruments. A warehouse is real estate, gold is a commodity and a painting is a collectible: all three are real, physical assets, not claims on an issuer.

**Q4. [LO1.4 | CM-EIP §1.1.3]**
A client owns four holdings: units in a listed real estate investment trust (REIT), shares in a listed property developer, a directly owned shophouse, and a portfolio of listed bonds. Which holding is a real asset rather than a financial asset?
A. The units in the listed REIT.
B. The shares in the listed property developer.
C. The directly owned shophouse.
D. The portfolio of listed bonds.
**Answer: C.** Real estate held directly — commercial, residential, industrial or agricultural property — is a real, physical asset. REIT units, shares and bonds are all paper or electronic claims on an issuer and are therefore financial assets, even when the underlying exposure is to property.

**Q5. [LO1.5 | CM-EIP §1.2.2]**
A large corporation needs short-term funding for 60 days and issues a short-term unsecured promissory note sold at a discount to its face value. Which money market security is this?
A. A certificate of deposit, which is quoted on an interest-bearing basis.
B. Commercial paper, a short-term unsecured promissory note issued by a corporation and sold on a discounted basis like a treasury bill.
C. A banker's acceptance, a time draft drawn on a bank to facilitate trade.
D. A repurchase agreement, a sale of a security with a commitment to buy it back.
**Answer: B.** Commercial paper is a short-term unsecured promissory note issued by a corporation and is a discounted money market instrument, like a treasury bill. Certificates of deposit are quoted on an interest-bearing basis, not a discount basis; a banker's acceptance is a time draft drawn on a bank; a repo is a form of borrowing by the seller of a security.

**Q6. [LO1.6 | CM-EIP §1.2.2]**
Which of the following is a capital market security?
A. A treasury bill maturing in 30 days.
B. Commercial paper maturing in 90 days.
C. An overnight repurchase agreement.
D. A five-year fixed-rate corporate bond.
**Answer: D.** Money market instruments have maturities from 1 day to 1 year (often less than 90 days); capital market securities have maturities over 1 year, principally bonds and equities. A five-year fixed-rate bond is a long-term debt security — a capital market security — while the treasury bill, commercial paper and overnight repo are all money market instruments.

**Q7. [LO1.7 | CM-EIP §1.3.1, §1.3.2]**
A company issues new shares to the public for the first time and receives the subscription cash. Six months later, an early investor sells those shares on the exchange to another investor. Who receives the cash from the second transaction?
A. The selling investor, not the original issuer.
B. The original issuer, as it created the shares.
C. The exchange, which holds the proceeds for the issuer.
D. The underwriter, which must return the cash to the issuer.
**Answer: A.** In the primary market new securities are issued and sold to the public and the issuer receives the cash, creating financial claims that did not previously exist. In the secondary market those securities trade between investors, and the proceeds go to the selling investor, not the original issuer. The secondary market provides the liquidity essential to the proper functioning of capital markets.

**Q8. [LO1.8 | CM-EIP §1.3.3]**
An investor can sell a large block of shares quickly at a price barely different from the previous transaction price, in a market with numerous buyers and sellers willing to trade at current prices. Which characteristic of a good financial market does this best demonstrate?
A. Information efficiency, because prices adjust quickly to new information.
B. Low transaction costs, because brokerage is cheap.
C. Liquidity — marketability plus price continuity, supported by depth.
D. Price discovery, because the price is transparent.
**Answer: C.** Liquidity is the ability to buy or sell quickly at prices not substantially different from previous transactions, absent new information. Marketability (likelihood of a quick sale) is necessary but not sufficient; price continuity (prices do not change much between transactions) is the other component, and a continuous market requires depth — numerous buyers and sellers willing to trade at current prices.

**Q9. [LO1.9 | CM-EIP §1.2.2, §1.5]**
A fund holds two debt instruments: a 270-day treasury bill and a 7-year government bond. Which statement correctly distinguishes them?
A. Both are money market securities, because both are issued by a government.
B. The 270-day treasury bill is a money market security and the 7-year bond is a capital market security: money market maturities run from 1 day to 1 year, while capital market securities mature in more than 1 year.
C. The 270-day treasury bill is a capital market security and the 7-year bond is a money market security.
D. Both are capital market securities, because both pay a fixed return.
**Answer: B.** Money market instruments are relatively low-risk, highly liquid, short-term debt instruments with maturities of 1 day to 1 year, often less than 90 days; capital market securities are long-term, with maturities over 1 year. The issuer alone does not decide the classification — maturity does.

**Q10. [LO1.10 | CM-EIP §1.3.4]**
Which statement about the bond markets is correct?
A. Most bond trading takes place on organised stock exchanges.
B. US Treasury notes and bonds have maturities of less than 1 year.
C. Corporate bonds are listed on exchanges but are never traded over-the-counter.
D. Bond trading is mostly over-the-counter through bond dealers, which are mostly banks and large investment banking firms.
**Answer: D.** Although many corporate bonds are listed on major exchanges such as the NYSE, bond trading is mostly OTC through bond dealers, which are mostly banks and large investment banking firms. US Treasury notes and bonds have maturities greater than 1 year (treasury bills are the sub-1-year instrument), and dealing and settlement in the Eurobond market are governed by the rules of the Association of International Bond Dealers (AIBD).

**Q11. [LO1.11 | CM-EIP §1.3]**
Why does a liquid secondary market matter to the primary market and to the economy?
A. Because a liquid secondary market lets investors who subscribe to new issues sell them later, which sustains new capital raising — capital seekers reach wholesale capital providers through arrangers and intermediaries, who in turn serve retail capital providers.
B. Because secondary-market trading sends the trading proceeds to the issuer, funding its next project.
C. Because a liquid secondary market removes the need for underwriters and distributors in a new issue.
D. Because secondary-market liquidity guarantees that every new issue is priced above its fair value.
**Answer: A.** Secondary markets provide the liquidity essential to the proper functioning of capital markets: investors will subscribe to new issues in the primary market only if they can later trade out of them. The flow runs from capital seekers (issuers of stocks and bonds), through arrangers and intermediaries (investment banks, underwriters, distributors, brokerages), to wholesale capital providers (banks, hedge and pension funds, insurance companies), who in turn serve retail capital providers (individuals, small firms). Secondary proceeds go to the selling investor, not the issuer. ---

### Chapter 2 — Questions 12–18

**Q12. [LO2.1 | CM-EIP §2.1]**
An adviser tells a client that every equity is riskier than every bond, because equities are the riskier asset class. Which statement best corrects this?
A. The adviser is right: asset class alone determines the risk of a security.
B. Risk is a property of the instrument, not the asset class — a CCC-rated junk bond is much riskier than a AAA-rated blue-chip corporate bond, and the blue-chip company's stock may be safer than the CCC bond if its business and financial profile is conservative.
C. The adviser is right for bonds but wrong for equities, because all bonds carry the same credit risk.
D. Risk is a property of the asset class, but only for derivatives, which are always the safest instruments.
**Answer: B.** Risk is a property of the instrument, not the asset class. A CCC-rated (junk or speculative grade) bond is much riskier than a AAA-rated blue-chip corporate bond, and the blue-chip company's stock may be safer than the CCC bond if its business and financial profile is conservative, even though equities are generally the riskier asset class. Derivatives sit at the upper end of the risk-return continuum, though some are capital guaranteed and safer than some equities.

**Q13. [LO2.2 | CM-EIP §2.1]**
Two clients describe their attitudes to risk. Mei fears losing any part of her capital; Johan is prepared to lose some — even all — of his capital in pursuit of higher return. Which pairing follows the risk-return trade-off?
A. Mei should consider equities and Johan should consider money market instruments.
B. Both should consider the same portfolio, because risk appetite does not affect asset choice.
C. Mei should consider relatively safe money market instruments offering a steady flow of interest income, while Johan should consider riskier securities such as equities in expectation of higher return.
D. Mei should consider leveraged derivatives and Johan should consider cash deposits.
**Answer: C.** The risk-return principle holds that rational investors demand higher potential returns when they take on more risk, and do not demand as high a rate of return when risk is lower. An investor with a low appetite for risk fears losing any part of capital and considers relatively safe money market instruments offering a steady flow of interest income; an investor with a higher appetite is prepared to lose some — in some cases all — of capital, and considers riskier securities such as equities in expectation of higher return.

**Q14. [Calculation] [LO2.3 | CM-EIP §2.2.2]**
An analyst assigns three scenarios to a share over the next year: a boom with a 30% return and probability 0.30, stable conditions with a 12% return and probability 0.50, and a downturn with a −18% return and probability 0.20. What is the expected rate of return?
A. 9.0%
B. 14.0%
C. 8.0%
D. 11.4%
**Answer: D.** Expected return is the probability-weighted average of possible returns, E(R) = Σ rᵢpᵢ: E(R) = (0.30 × 30%) + (0.50 × 12%) + (0.20 × −18%) = 9.0% + 6.0% − 3.6% = 11.4%. The probabilities sum to 1.00 (0.30 + 0.50 + 0.20), so the weighting is complete.

**Q15. [Calculation] [LO2.4 | CM-EIP §2.3.3]**
A portfolio has an expected annual return of 8% with a standard deviation of 10%. Assuming returns are normally distributed, what is the approximate probability of a loss in a given year (a return below 0%)?
A. 16%
B. 21%
C. 29%
D. 31%
**Answer: B.** The Z-score expresses how many standard deviations a return deviates from the expected return: Z = (X − E(r)) / σ = (0% − 8%) / 10% = −0.80. The standard normal table gives Φ(0.80) = 0.7881, the cumulative probability to the left of +0.80. By symmetry, the probability of a return below 0% is 1 − 0.7881 = 0.2119, approximately 21%. (The guide's worked example uses E(r) 6% and σ 12%, giving Z = −0.5 and a 31% chance of loss; the method, not the numbers, is reused here.)

**Q16. [Calculation] [LO2.5 | CM-EIP §2.3.1, §2.3.2]**
A fund has three possible annual returns: 20% with probability 0.25, 10% with probability 0.50, and −10% with probability 0.25. What is its coefficient of variation?
A. 1.45
B. 1.09
C. 0.69
D. 1.60
**Answer: A.** First the expected return: E(R) = (0.25 × 20%) + (0.50 × 10%) + (0.25 × −10%) = 5.0% + 5.0% − 2.5% = 7.5%. Next the variance, σ² = Σ pᵢ[rᵢ − E(R)]²: = 0.25 × (20% − 7.5%)² + 0.50 × (10% − 7.5%)² + 0.25 × (−10% − 7.5%)² = 0.25 × (0.125)² + 0.50 × (0.025)² + 0.25 × (−0.175)² = 0.25 × 0.015625 + 0.50 × 0.000625 + 0.25 × 0.030625 = 0.00390625 + 0.0003125 + 0.00765625 = 0.011875. Standard deviation σ = √0.011875 = 0.1090 = 10.90%. Coefficient of variation CV = σ / E(R) = 10.90% / 7.5% = 1.45. CV measures risk per unit of expected return, letting investments with different returns and risks be compared.

**Q17. [LO2.6 | CM-EIP §2.4]**
A client manages his own money and holds 85% of his portfolio in the shares of a single company, with no formal diversification strategy. Which risk does this best illustrate?
A. Issuer risk, because the company may default on its bonds.
B. Liquidity risk, because the shares cannot be sold at all.
C. Concentration risk (a management risk) — failure to diversify, leading to excessive risk exposure, higher volatility and larger losses.
D. Execution risk, because the trades were placed in error.
**Answer: C.** Concentration risk, or lack of diversification, is a management risk: fund managers normally ensure proper diversification and minimal concentration, but clients managing their own money may end up highly concentrated in specific securities, industries or markets because there is no formal diversification strategy. Remaining concentrated can be a deliberate client choice, but the representative has a responsibility to advise diversification for the longer term.

**Q18. [Calculation] [LO2.7 | CM-EIP §2.5.2]**
An investor places $2,000 in an account paying 6% compounded annually. What is the future value after 5 years?
A. $2,600.00
B. $2,676.45
C. $2,763.00
D. $2,500.00
**Answer: B.** FVₙ = PV(1 + k)ⁿ = $2,000 × (1.06)⁵. (1.06)² = 1.1236; (1.06)⁴ = 1.1236² = 1.262477; (1.06)⁵ = 1.262477 × 1.06 = 1.338226. FV₅ = $2,000 × 1.338226 = $2,676.45. (Simple interest would give only $2,000 + 5 × $120 = $2,600.00 — option A — because it ignores interest on interest.) ---

### Chapter 3 — Questions 19–24

**Q19. [LO3.1 | CM-EIP §3.1.1]**
A share falls sharply in a day of rumour-driven panic selling, although the company's earnings outlook and the economic data are unchanged. Which group of drivers best explains this move?
A. Investment behaviour — herd instinct driven by greed and fear, which can drive asset values well above or below the levels justified by fundamentals.
B. Fundamental factors, because earnings determine the share price.
C. Market-driven factors, because a new IPO has drained funds from the market.
D. Fiscal policy, because government spending has changed.
**Answer: A.** Three groups of influence act on market price: fundamental factors (economic, industry and company-specific), market-driven factors (liquidity and funds flow, new issues, derivatives influence, market structure) and investment behaviour (herd instinct, loss aversion, cognitive bias). A panic sell-off with unchanged fundamentals is behavioural: the herd instinct kicks in especially when information is scarce and threats seem imminent, and can drive values well above or below fundamental levels.

**Q20. [LO3.2 | CM-EIP §3.2.3]**
A government announces a major programme of infrastructure development projects — new roads, rail lines and hospitals — to lift economic growth. Which component of GDP does this measure directly raise?
A. Consumption (C), because households spend more.
B. Private investment (I), because companies buy equipment.
C. Government spending (G), because infrastructure is government investment and consumption expenditure.
D. Net exports (NE), because exports rise immediately.
**Answer: C.** GDP = C + I + G + NE, where G is government spending — both investment and consumption, including education, defence, capital investment, infrastructure and health services. More infrastructure development projects raise G directly. (Tax incentives for relocating factories raise I, lowering personal income tax raises C, and tariffs are intended to improve NE.) The spending then ripples through the economy via the multiplier effect — raising demand for materials, equipment, services and labour, then wages, profits and further consumption.

**Q21. [LO3.3 | CM-EIP §3.2.7]**
Which of the following is a lagging economic indicator — one whose peaks and troughs follow the aggregate economy and which is useful for confirming a turning point after it has occurred?
A. The Purchasing Managers' Index (PMI), a leading indicator; a reading of 50 or higher suggests expansion and below 50 indicates contraction.
B. Nonfarm payroll employment, a coincident indicator that moves in tandem with the economy.
C. Housing starts and building permits, a component of the Composite Leading Economic Index.
D. The average prime rate charged by banks.
**Answer: D.** Lagging indicators peak and trough after the aggregate economy and are useful for confirming turning points, typically lagging by a few quarters. The Conference Board's index of lagging indicators comprises seven components, including the average prime rate charged by banks (alongside the average duration of employment, the inventory-to-sales ratio, the change in labour cost per unit of output, outstanding commercial and industrial loans, consumer credit relative to personal income, and the change in CPI for services). The PMI is leading, nonfarm payrolls are coincident, and housing starts are a leading-indicator component.

**Q22. [LO3.4 | CM-EIP §3.2.10]**
An industry's sales growth is still above average at 12–20%, but it is no longer accelerating. New competitors are attracted by the industry's high historic margins, margins are declining, and companies with dominant share and established brands keep growing. Which stage of the industry life cycle is this?
A. Mature growth.
B. Early development, where sales are modest and margins very small or negative.
C. Rapid expansion, where earnings compound at 30–50%.
D. Decline, where sales growth cannot keep pace with the economy and investors should avoid the industry.
**Answer: A.** The five industry life-cycle stages are early development, rapid expansion, mature growth, stabilisation and market maturity, and deceleration of growth and decline. In mature growth, demand is largely satisfied, sales growth stays above average (12–20%) but no longer accelerates, performance varies more between companies, new competition emerges attracted by high historic margins, margins decline, and companies with dominant share and established brands keep growing.

**Q23. [LO3.5 | CM-EIP §3.3.2]**
A government issues an unusually large volume of treasury bills and bonds of one particular maturity, and at the same time two of the largest regular buyers of its bonds sharply reduce their purchases. What is the likely short-term market effect, and which market-driven factor is it?
A. Excess liquidity, where cash piles up and drives a rally.
B. A derivatives-driven downward spiral from futures and put-option selling.
C. Hot money flowing in temporarily to exploit an arbitrage opportunity.
D. New securities issues — excessive issuance creates an oversupply in that maturity tranche, so bond prices may dip briefly to offer better yields for that tranche.
**Answer: D.** The same oversupply logic that applies to equities applies in fixed income: excessive issuance of government T-bills and bonds of a particular maturity creates an oversupply in that maturity tranche, so bond prices may dip briefly to offer better yields for that tranche. The same occurs if there is a sudden reduction of interest by regular buyers of US Treasuries — if China or Japan decided to buy fewer US Treasury bonds, that would suddenly create excess supply. (For equities, several major IPOs at once similarly absorb funds at the expense of similar stocks already trading, as some investors take profit on existing stocks to participate.)

**Q24. [LO3.6 | CM-EIP §3.4.2]**
An investor is offered a choice between a certain gain of $500 and a 50/50 gamble that pays $1,000 or nothing — and chooses the certain $500. Offered a choice between a certain loss of $500 and a 50/50 gamble that loses $1,000 or nothing, the same investor chooses the gamble. Which behavioural bias does this pattern illustrate?
A. Herd instinct, following the crowd without independent decision-making.
B. Confirmation bias, seeking views aligned with her own.
C. Loss aversion — associated with prospect theory, preferring less uncertainty for gains and more uncertainty for losses, with a potential double negative impact.
D. The Efficient Market Hypothesis, which says price equals fair value.
**Answer: C.** Loss aversion is associated with prospect theory: individuals prefer less uncertainty for gains and more uncertainty for losses. The investor takes the certain gain (avoiding uncertainty over a gain) but gambles to avoid a certain loss (accepting uncertainty over a loss). In portfolios this shows up as selling profitable holdings to lock in positive returns while holding on to book losses on poorer performers in the hope of a rebound — the profitable securities sold may actually have more upside, while the losers may fall deeper into the red, a potential double negative impact. ---

### Chapter 4 — Questions 25–34

**Q25. [LO4.1 | CM-EIP §4.3]**
A Singapore fund manager notes that she can trade USD/SGD at almost any hour, that there is no single exchange building where all FX trading takes place, and that the US dollar appears on one side of most trades. Which statement best describes the foreign exchange market?
A. It is a single centralised exchange that trades only during London hours, and the euro is the dominant vehicle currency.
B. It is a decentralised, over-the-counter market operating round the clock through Sydney, Tokyo, Singapore/Hong Kong, London, New York and San Francisco, with the USD on one side of 88% of trades (BIS, April 2019) and average daily turnover of USD 6.6 trillion.
C. It is a centralised market in which spot trading is the largest segment, at about half of all turnover.
D. It trades only spot transactions, because forwards and swaps are dealt on stock exchanges.
**Answer: B.** The FX market is not confined to a specific geographical location; dealing runs continuously across the centres listed, the USD is on one side of 88% of trades, and BIS April 2019 daily turnover was USD 6.6 trillion. FX swaps (USD 3.2 trillion) — not spot (USD 2 trillion) — are almost half of turnover.

**Q26. [LO4.2 | CM-EIP §4.1, §4.4]**
A dealer quotes USD/SGD 1.3400. A client asks what the quotation means and what a "pip" is. Which answer is correct?
A. USD 1 = SGD 1.3400, with USD the base currency and SGD the counter (term) currency; a pip is 0.0001, the fourth decimal place and the smallest unit of price movement.
B. SGD 1 = USD 1.3400, with SGD the base currency; a pip is 0.01.
C. USD 1 = SGD 1.3400, with SGD the base currency; a pip is one basis point of the interest rate.
D. USD 1 = SGD 0.7463, because the quoted figure is always the reciprocal of the rate paid.
**Answer: A.** In USD/SGD the first-listed currency is the base and the second is the counter/term currency, so USD 1 = SGD 1.3400. A pip is 0.0001 (fourth decimal place), the FX equivalent of a basis point. Option D confuses the quote with its reciprocal (1/1.3400 = 0.7463 is the indirect SGD/USD quote).

**Q27. [LO4.3 | CM-EIP §4.4.2, §4.4.3]**
A Singapore-based adviser and a London-based adviser both look at the pound against the US dollar. In Singapore the quote is USD/GBP; in London it is GBP/USD 1.6816. Which statement is correct?
A. Direct and indirect quotes are fixed labels for a currency pair and never change with location.
B. GBP/USD is always a direct quote everywhere, because the pound is always the foreign currency.
C. GBP/USD 1.6816 means USD 1 = GBP 1.6816.
D. The London quote GBP/USD 1.6816 is an indirect quote in the UK — GBP is the domestic currency there, so 1 GBP = USD 1.6816 — while the same pair quoted as USD/GBP in Singapore would be a direct quote; whether a quote is direct or indirect depends on which currency is domestic, and the indirect quote is the reciprocal of the direct quote.
**Answer: D.** A direct quote expresses one unit of foreign currency in domestic currency (foreign/domestic); an indirect quote expresses one unit of domestic currency in foreign currency (domestic/foreign). GBP, AUD, NZD and EUR are quoted as base against the USD (the sterling-bloc / American convention), so GBP/USD is indirect in the UK; the label depends on the home currency, and the indirect quote is the reciprocal of the direct quote.

**Q28. [Calculation] [LO4.4 | CM-EIP §4.4.4]**
A dealer quotes USD/SGD 1.3400/1.3420 and USD/JPY 148.20/148.40. What is the SGD/JPY cross rate (bid/ask)?
A. 110.43/110.75 — calculated by dividing the USD/JPY bid by the USD/SGD ask for the bid, and the USD/JPY ask by the USD/SGD bid for the ask.
B. 110.75/110.43 — the bid must always be higher than the ask.
C. 198.59/199.19 — calculated by multiplying the two bids and the two asks.
D. 110.60/110.60 — a cross rate has no spread.
**Answer: A.** The rule is: divide the term currency on the same side of the spread by the base currency on the opposite side. SGD/JPY bid = USD/JPY bid ÷ USD/SGD ask = 148.20 / 1.3420 = 110.43. SGD/JPY ask = USD/JPY ask ÷ USD/SGD bid = 148.40 / 1.3400 = 110.75. (Multiplying would apply only where the common currency, USD, is the term currency in both quotes.)

**Q29. [LO4.5 | CM-EIP §4.4.1]**
A bank quotes USD/SGD 1.3400–1.3405. A client wants to buy USD 1 million and later sell USD 1 million. Which statement is correct?
A. The client buys at 1.3400 and sells at 1.3405, because the bid is always the higher price.
B. The client buys at the offer of 1.3405 and sells at the bid of 1.3400; the spread is 0.0005 (5 pips) and is the dealer's profit, widening when uncertainty and volatility rise.
C. The spread is 5 basis points of the interest rate, and it narrows when volatility rises.
D. The price taker always buys at the bid and sells at the offer.
**Answer: B.** The bid is where the dealer buys and the offer (ask) is where the dealer sells. The price taker always buys at the offer and sells at the bid — the price is always against the price taker. Spread = 1.3405 − 1.3400 = 0.0005 = 5 pips; the spread varies with market conditions and transaction size and widens with greater uncertainty and volatility.

**Q30. [LO4.6 | CM-EIP §4.1, §4.4.5]**
On Monday, a treasurer agrees to exchange SGD for USD for settlement on Wednesday, and separately agrees a rate today for an exchange that will settle in three months. Which statement is correct?
A. The Wednesday exchange is a spot transaction (settlement in two working days, value spot); the three-month exchange is a forward transaction, a contract to exchange at a future date later than spot at a rate fixed on the trade date.
B. Both are spot transactions, because both rates were agreed today.
C. The Wednesday exchange is a forward transaction, and the three-month exchange is a spot transaction.
D. A spot transaction settles the same day (value today) only; settlement in two working days is a forward.
**Answer: A.** Most FX transactions are spot deals for delivery in two working days (value spot); value today (same day) and value tomorrow (next day) also exist. A forward is a contract to exchange one currency for another at a future date later than spot, at a rate determined on the trade date, fixing the cost of exchange for a known future commitment.

**Q31. [Calculation] [LO4.7 | CM-EIP §4.5.1, §4.5.2]**
Spot USD/SGD is 1.3400. The 90-day USD interest rate is 4.00% p.a. and the 90-day SGD rate is 2.00% p.a. (n/360 convention). What are the 90-day forward points and the outright forward rate?
A. +66 points; forward 1.3466, because the lower-rate currency trades at a discount.
B. −133 points; forward 1.3267.
C. −66 points; forward 1.3334 — the USD, the higher-interest-rate currency, trades at a forward discount.
D. 0 points; forward 1.3400, because forward points are a forecast of the future spot rate.
**Answer: C.** Forward points = S × (Rc − Rb) × n/360 ÷ [1 + Rb × n/360], where S = 1.3400, Rc (counter, SGD) = 2.00%, Rb (base, USD) = 4.00%, n = 90. Numerator: 1.3400 × (0.02 − 0.04) × 90/360 = 1.3400 × (−0.02) × 0.25 = −0.0067. Denominator: 1 + 0.04 × 0.25 = 1.01. Forward points = −0.0067 / 1.01 = −0.0066 (about −66 points). Forward rate = 1.3400 − 0.0066 = 1.3334. The higher-interest-rate currency trades at a forward discount; forward points reflect only relative interest rates, not a forecast of the future spot rate.

**Q32. [Calculation] [LO4.8 | CM-EIP §4.5.3]**
Spot GBP/USD is 1.2500. The 1-year USD rate is 4% and the 1-year GBP rate is 2%. The 1-year forward is quoted at USD 1.2700 per GBP. An arbitrageur borrows GBP 1,000,000 for one year. What is the interest-rate-parity forward rate, and what risk-free profit does covered interest arbitrage earn?
A. Parity forward 1.2745; profit USD 4,600.
B. Parity forward 1.2700; no profit, because the quoted forward equals parity.
C. Parity forward 1.2255; profit USD 4,600 by borrowing USD instead.
D. Parity forward 1.2745; loss USD 4,600.
**Answer: A.** Interest rate parity: F = S × [(1 + Rc × n/360) / (1 + Rb × n/360)]. Here GBP is the base and USD the counter, so F = 1.2500 × (1.04 / 1.02) = 1.2745. The quoted 1.2700 is below parity, so arbitrage works: (1) borrow GBP 1,000,000 at 2%, repayment due GBP 1,020,000; (2) sell at spot 1.2500, receiving USD 1,250,000; (3) invest at 4% for one year, receiving USD 1,300,000; (4) buy GBP 1,020,000 forward at 1.2700, paying USD 1,295,400; (5) profit = 1,300,000 − 1,295,400 = USD 4,600, with the net position closed out. Arbitrageurs' actions force rates back into alignment.

**Q33. [LO4.9 | CM-EIP §4.5.5]**
A Singapore importer must pay a supplier in Vietnamese dong in six months but cannot freely trade VND offshore because of capital controls. Which instrument fits, and how does it settle?
A. A spot transaction, which fixes the rate for six months.
B. An outright deliverable forward, which requires physical delivery of VND offshore.
C. A non-deliverable forward (NDF): a cash-settled, short-term forward contract, typically quoted with USD as the reference currency and tenor of 1 month to 1 year, with no physical delivery of the restricted currency and no exchange of the notional — only the difference between the contracted NDF rate and the spot rate at settlement is paid.
D. An NDF, which exchanges the full notional in VND at maturity and is used only for freely traded currencies.
**Answer: C.** An NDF is used to hedge exposure to currencies that are not internationally traded or whose trade is limited by capital controls (the guide names China, Taiwan, Vietnam and Indonesia). It is an OTC, cash-settled, short-term forward (normal tenor 1 month to 1 year), typically quoted with USD as reference; there is no physical delivery or exchange of the domestic currency and no exchange of the notional — only the difference between the agreed NDF rate and the spot rate at settlement is settled. NDFs also provide arbitrage opportunities and allow speculative positions.

**Q34. [LO4.10 | CM-EIP §4.6, §4.7]**
Which pairing of FX risk and management method is correct?
A. A carry trade eliminates FX risk, because the interest differential is always larger than any exchange-rate move.
B. Credit risk in FX equals the full transaction amount, because an FX deal is an outright extension of credit.
C. Price liquidity risk affects only less-traded currencies and can never affect major currencies.
D. Market risk (movement and volatility of FX rates) is managed by hedging with forwards, options or swaps, or by borrowing in the currency of the investment as a natural hedge; settlement/delivery risk — counterparty failure to pay on time, arising in the period just before settlement (2 days before payment) — has been significantly reduced by Continuous Linked Settlement (CLS).
**Answer: D.** The four FX risks are market risk, price liquidity (in less-traded currencies, and even in major currencies during an extreme event such as a major power failure), credit risk, and settlement/delivery risk. Credit risk is only a fraction of the transaction amount because the transaction is an exchange, not a loan. Settlement risk arises 2 days before payment and CLS has reduced it significantly. Hedging tools include forwards, futures, options and swaps, plus borrowing in the investment currency as a natural hedge. A carry trade does not eliminate risk: an adverse FX move can wipe out the interest differential (the guide's JPY/AUD example failed in 2008, 2011 and 2015).

### Chapter 5 — Questions 35–45

**Q35. [LO5.1 | CM-EIP §5.1, §5.2]**
An analyst is asked why company analysis matters for a bond investor, and whether ratios alone are enough. Which answer is correct?
A. Company analysis is relevant only to equity investors; bondholders need only the coupon rate.
B. Company analysis is equally relevant to credit analysis of bonds and any security whose payments depend on the issuer's continuing viability; it divides into qualitative and quantitative analysis, asset prices move on future prospects, qualitative factors drive performance and precede the numbers, and an excellent company can look expensive yet still be a good investment if sustainable earnings growth catches up with valuation.
C. Historical statements determine current value, so future prospects need not be considered.
D. Qualitative analysis is a check done after the ratios; buying heavily sold-down loss-making companies is the safest long-term strategy.
**Answer: B.** Company analysis serves equity and credit work alike. The three governing principles are: prices move on future prospects (history is a reference point for forecasts, not the value itself); qualitative factors drive performance and precede quantitative outcomes; and excellent companies with strong models and sustainable growth may see price run ahead of earnings near-term yet remain good investments as earnings catch up. Buying weaker or loss-making companies that have been heavily sold down brings at best short-term trading opportunities and at worst traps investors as prospects keep deteriorating.

**Q36. [LO5.2 | CM-EIP §5.3, §5.4, §5.8, §5.9]**
Which statement correctly describes the three major financial statements?
A. The balance sheet covers a period, while the income statement is a snapshot.
B. All three statements are snapshots at a point in time.
C. The balance sheet shows financial condition at a point in time (typically year-end): Assets = Liabilities + Shareholders' Equity (US presentation); the income statement shows revenue and expenses over a period; the cash flow statement shows changes in cash over a period in three parts — operating, investing and financing.
D. The cash flow statement has two parts — operating and financing — and depreciation is a cash outflow shown in it.
**Answer: C.** The balance sheet is a snapshot (assets, liabilities, shareholders' equity = share capital + retained earnings − treasury shares); the income statement and cash flow statement cover a period. The cash flow statement has three parts (operating, investing, financing); depreciation is added back in operating cash flow because it is a non-cash accounting cost, not a cash outflow. Financial statements must be audited, and qualified reports are issued when auditors are not completely satisfied.

**Q37. [LO5.3 | CM-EIP §5.11]**
A junior analyst says a company's interest coverage ratio of 2 times proves it is safe, without comparing it with anything else. What is wrong with this?
A. Nothing — a ratio of 2 times is safe in every industry.
B. Used in isolation, ratios are meaningless: a coverage ratio of 2 times may be low for some industries and very high for others, so findings must be compared and benchmarked against companies in the same industry; ratio analysis diagnoses financial health across four categories — liquidity, leverage, operating efficiency/activity and profitability.
C. Ratios are only meaningful for banks.
D. Interest coverage is a profitability ratio, so it cannot be used for solvency.
**Answer: B.** Ratio analysis evaluates financial strength, quality of earnings and performance, but in isolation ratios are meaningless and must be benchmarked against same-industry peers. The four categories examined are liquidity, leverage, operating efficiency/activity, and profitability; solvency questions are answered by debt-to-equity, debt-to-total-assets, interest coverage, current and quick ratios.

**Q38. [Calculation] [LO5.4 | CM-EIP §5.11.1]**
Meridian Ltd reports current assets of $900,000 (cash $150,000, marketable securities $50,000, accounts receivable $200,000, inventories $300,000, other current assets $200,000) and current liabilities of $450,000. What are its current, quick and cash ratios?
A. Current 2.00, quick 0.89, cash 0.44.
B. Current 2.00, quick 1.33, cash 0.44.
C. Current 1.00, quick 0.89, cash 0.33.
D. Current 2.00, quick 0.89, cash 2.00.
**Answer: A.** Current ratio = current assets / current liabilities = 900,000 / 450,000 = 2.00 (the conventional benchmark, though lower ratios are now normal as working capital is managed more efficiently). Quick (acid-test) ratio = (cash + marketable securities + accounts receivable) / current liabilities = (150,000 + 50,000 + 200,000) / 450,000 = 400,000 / 450,000 = 0.89 — inventories are excluded as less liquid. Cash ratio = (cash + near-cash) / current liabilities = (150,000 + 50,000) / 450,000 = 0.44. A supermarket's quick ratio may be as low as 0.2 without concern, because its inventory is fast-moving and supplier-financed.

**Q39. [Calculation] [LO5.5 | CM-EIP §5.11.2, §5.11.3]**
Halcyon Ltd has EBIT of $600,000, interest expense of $100,000, annual lease payments of $80,000, preferred dividends of $30,000 and a tax rate of 20%. What is its total fixed charge coverage?
A. 2.76 times — (EBIT) ÷ (interest + lease payments + preferred dividend ÷ (1 − tax rate)).
B. 3.13 times — (EBIT + lease payments) ÷ (interest expense + lease payments + preferred dividend ÷ (1 − tax rate)).
C. 3.78 times — (EBIT + lease payments) ÷ (interest expense + lease payments).
D. 6.00 times — EBIT ÷ interest expense, which is the fixed charge coverage.
**Answer: B.** Fixed charge coverage = Earnings Before Interest, Taxes and Lease Payments ÷ [Interest Expense + Lease Payments + Preferred Dividend / (1 − Tax Rate)]. Numerator: 600,000 + 80,000 = 680,000. Denominator: 100,000 + 80,000 + 30,000 / (1 − 0.20) = 180,000 + 37,500 = 217,500. Coverage = 680,000 / 217,500 = 3.13 times. The preferred dividend is grossed up by 1/(1 − tax) because it is paid out of after-tax earnings. Option D (6.00) is the interest coverage ratio (EBIT / interest), a different ratio.

**Q40. [Calculation] [LO5.6 | CM-EIP §5.11.4]**
Northgate Retail has annual sales of $2,400,000, average total assets of $1,200,000, average inventory of $300,000 and average accounts receivable of $200,000. What is its collection period for accounts receivable?
A. 46 days — 365 ÷ inventory turnover.
B. 60 days — the industry average, which is always the answer.
C. 30 days — receivables turnover is 12 times, so 365 ÷ 12 = 30.4 days.
D. 91 days — 365 ÷ total asset turnover.
**Answer: C.** Receivables turnover = sales / average accounts receivable = 2,400,000 / 200,000 = 12 times. Collection period = 365 / receivables turnover = 365 / 12 = 30.4 days (equivalently average receivables ÷ (sales / 365)). For context, total asset turnover = 2,400,000 / 1,200,000 = 2.0 times, inventory turnover = 2,400,000 / 300,000 = 8 times and days to sell inventory = 365 / 8 = 45.6 days. Efficiency ratios use average balances because sales are generated over the period. A collection period should be compared with the firm's credit policy and the industry average (the guide's benchmark example is 60 days; 70 days would indicate slow payers).

**Q41. [Calculation] [LO5.7 | CM-EIP §5.11.5]**
Alder Manufacturing reports sales of $2,000,000, gross profit of $800,000, EBIT of $300,000, pre-tax income of $240,000, interest of $60,000, net income of $180,000, average common equity of $900,000 and average total assets of $2,000,000. Which pair is correct?
A. Gross margin 40% and net margin 15%.
B. Operating margin 9% and ROE 15%.
C. ROE 20% and ROA 15%.
D. ROE 20% and ROA 20%.
**Answer: C.** Gross profit margin = 800,000 / 2,000,000 = 40%; operating profit margin = EBIT / sales = 300,000 / 2,000,000 = 15%; net profit margin = 180,000 / 2,000,000 = 9%. ROE = net income / average common equity = 180,000 / 900,000 = 20%. ROA = (pre-tax income + interest) / average total assets = (240,000 + 60,000) / 2,000,000 = 15% — ROA is normally computed before interest to separate operating from financing decisions and allow comparison across capital structures. Beware the ROE trap: a high ROE can reflect a depleted equity base from prior losses rather than better earnings.

**Q42. [LO5.8 | CM-EIP §5.10, §5.11]**
An analyst computes book value per share, earnings per share and dividend per share for the same company. Which share count does each use?
A. Fully diluted EPS ignores convertibles, because they may never be exercised.
B. All three use the weighted average number of shares.
C. BVPS uses the weighted average, EPS uses year-end shares, and DPS uses shares at the annual general meeting.
D. BVPS uses shares outstanding at the financial year-end (the balance sheet is a snapshot); EPS uses the weighted average number of shares (earnings were generated over the whole year); DPS uses shares outstanding as at the ex-dividend date; fully diluted EPS assumes all derivatives and convertibles outstanding are exercised and converted.
**Answer: D.** BVPS = shareholders' equity / shares outstanding at year-end; EPS = net earnings / weighted average shares; DPS = dividends paid / shares outstanding at the ex-dividend date. Fully diluted EPS assumes all derivatives and convertibles are exercised/converted and is the basis on which future EPS forecasts should be calculated for comparability. Valuation ratios (Chapter 6) then build on these: the forward P/E is the price paid for future EPS and price-to-book is another common comparison.

**Q43. [LO5.9 | CM-EIP §5.11.6]**
Which combination best indicates good quality of financial statements and good quality of earnings?
A. Heavy reliance on external debt, aggressive revenue recognition, large off-balance-sheet liabilities and frequent speculative financial activity.
B. Limited or lower use of debt relative to the industry, higher liquidity than competitors, assets carried below market values, conservative revenue recognition with adequate provisioning for losses, absence of off-balance-sheet activities, discipline in keeping to the core business, realistic recognition of bad debts, and steady, sustainable revenue and earnings growth from existing businesses.
C. Intangible assets capitalised aggressively, costs deferred into amortisation schedules, and provisions written back to smooth earnings.
D. High cash balances alone, regardless of how revenue is recognised or debt is used.
**Answer: B.** Quality depends on good accounting practice, conservative revenue recognition, limited reliance on external debt, understating rather than overstating asset values, and including all financial liabilities including off-balance-sheet items. Most telling is transparency and treatment of accounts and losses when conditions are poor and the industry is at its cyclical trough — not how management reports when business is rosy. Good-quality earnings are realistic and repeatable. High cash alone is not enough: cash not invested is an underutilised asset.

**Q44. [LO5.10 | CM-EIP §5.3.3, §5.11.7]**
An analyst reviews only the latest year's ratios for a property developer at the peak of a boom and concludes it is a strong company. What is the flaw, and what does the guide prescribe?
A. No flaw — one good year is sufficient evidence.
B. Only the balance sheet needs trend analysis; the income statement does not.
C. Trend analysis is unnecessary if the current year is audited.
D. Trend analysis must cover at least one full business cycle, using the 5-year or 10-year summary of key statistics in annual reporting; otherwise the analysis may mislead, showing a company doing well when it is simply at the crest of a cycle about to turn down. Comparisons should also be made with other companies in the same industry or league, and fair value estimated relative to similar companies and general market conditions.
**Answer: D.** The four review steps are: examine key ratios over time and explain performance and financial health; forecast future performance from the economy/industry outlook, key drivers and management/industry interviews; compare financial health and projected performance with same-industry peers; and estimate fair value given future earnings potential relative to similar companies and market conditions. Business cycles affect all companies, so covering at least one full cycle (via the 5- or 10-year summary) is essential.

**Q45. [LO5.11 | CM-EIP §5.11.8]**
Which is a genuine limitation in the use of financial ratios?
A. Ratios are meaningless unless the company is in an emerging sector, where they work best.
B. Different accounting policies across companies require adjustments to make figures comparable; consolidated accounts make it hard to determine one company within a group; year-end figures may not be representative (e.g. inventory drawn down abnormally low); ratios can be manipulated — for example high ROE from reducing equity in prior years — so prior years' accounts must be read; and asset-light models whose value rests on brand or the founder are especially hard to analyse by ratio.
C. Ratios cannot be compared across time, only across companies.
D. Inflation improves trend analysis, and footnotes contain no useful information.
**Answer: B.** The guide's limitations include: differing accounting policies; consolidated group accounts; unrepresentative year-end figures; special situations (e.g. R&D depressing profitability); inflation and general economic conditions affecting trends; the need to read footnotes; comparability requiring similar industry sector and size; manipulation (the ROE trap); emerging sectors lacking comparable reliable information; and asset-light business models. Ratios are only meaningful over time and against peers or benchmarks.

### Chapter 6 — Questions 46–54

**Q46. [LO6.1 | CM-EIP §6.2.3, §6.2.4]**
Which statement correctly distinguishes ordinary shares from preference shares?
A. Ordinary shareholders have a residual claim (paid last in liquidation, after bondholders, suppliers, other creditors, employees and deferred taxes) and limited liability (maximum loss is the original investment); preference shares are a hybrid — fixed dividend specified in advance, infinite life, ranked above ordinary shares but below bonds, dividends that may be omitted without default, and no voting rights except in financial distress.
B. Ordinary shareholders are paid first in liquidation and have unlimited liability.
C. Preference shareholders always have voting rights and their dividends, if omitted, constitute default like bond interest.
D. Ordinary dividends are guaranteed, while preference dividends are discretionary and paid after ordinary dividends.
**Answer: A.** The two defining features of an ordinary share are residual claim and limited liability. Ordinary dividends are at management's discretion and not guaranteed. Preference shares resemble fixed income (fixed, specified dividend, income stream like a bond continuing indefinitely unless called/retired) but are equity with an infinite life; most are callable (typically with about 5 years' call protection), non-callable ones carry a lower return, and cumulative preference shares (now rare) require all past unpaid preference dividends to be paid before any ordinary dividend.

**Q47. [LO6.2 | CM-EIP §6.3]**
A client wants steady dividends and safety, another wants high growth, and a third asks about a food company whose earnings hold up in a recession. Which classification fits each?
A. Safety/steady dividends: blue-chip companies — major conglomerates with great financial strength, long consistent earnings records, able to pay steady dividends in good and bad years; high growth: companies generating high double-digit (e.g. more than 20% compounded) sales and earnings growth over several years, typically high P/E and high beta with small dividends; recession-resilient food company: defensive stock (pharmaceuticals, food, utilities, transportation — e.g. Nestlé, Coca-Cola).
B. All three are cyclical stocks.
C. Blue chips never pay dividends; growth stocks pay the highest dividends.
D. Defensive stocks are those that benefit most in a boom and fall hardest in a downturn.
**Answer: A.** Blue chips suit safety and stability (Singapore examples in the guide: DBS, OCBC, UOB, SIA, Keppel, CapitaLand). Growth companies are high P/E, high beta, retain most earnings so pay small dividends, and are re-rated down when growth slows. Income stocks (high dividend yield) appeal to retirees and funds, with price support from yield if dividends are dependable. Cyclical stocks (e.g. autos; property and banking in Singapore/Hong Kong) benefit most in a boom and are hit first in a downturn — the opposite of defensive stocks. Companies with high net tangible asset backing are valued substantially on tangible assets (see also Q25/Q28 context on net asset valuation).

**Q48. [LO6.3 | CM-EIP §6.5, §6.7, §6.8, §6.8.7]**
What is the difference between absolute and relative valuation?
A. DCF is exact and needs no assumptions, while relative valuation is always wrong.
B. Absolute valuation compares a stock with its peers; relative valuation discounts its cash flows.
C. Relative valuation needs no comparable companies.
D. Absolute valuation (discounted cash flow) derives intrinsic value from projected cash flows — discounting future free cash flow to the firm at the WACC, adding discounted terminal value, subtracting debt and preferred shares and dividing by shares outstanding; relative valuation derives value by comparison with companies in the same industry using ratios such as P/E, P/BV and EV/EBITDA. Net asset valuation (book, liquidation, revised net asset value) is a third, balance-sheet approach.
**Answer: D.** DCF is the absolute approach: intrinsic value comes from projected cash flows, is conceptually tied to earnings/cash flows due to the firm over time and is flexible on growth rates — but depends heavily on the terminal value, which varies significantly with WACC and growth assumptions, and requires the discount rate to exceed the growth rate. Relative valuation allows easy comparison and is intuitive, but market sentiment/cycles influence it and a comparable set of entities is needed. In practice DCF is used in conjunction with relative valuation.

**Q49. [LO6.4, LO6.8 | CM-EIP §6.8.1, §6.8.2, §6.8.8]**
Meridian Ltd trades at $20.00 with EPS of $1.25 and expected EPS growth of 20% p.a. Halcyon Ltd trades at $30.00 with EPS of $2.50 and expected EPS growth of 8% p.a. Which statement is correct?
A. Meridian's P/E is 16.0x and its PEG is 0.8; Halcyon's P/E is 12.0x and its PEG is 1.5 — so although Halcyon looks cheaper on P/E alone, Meridian is cheaper after controlling for expected growth, and a PEG below 1 is attractive but typically hard to find.
B. Meridian's P/E is 12.0x and Halcyon's is 16.0x, so Meridian is cheaper on every measure.
C. PEG is P/E multiplied by growth, so Meridian's PEG is 320.
D. A low P/E always means undervaluation and a high P/E always means overvaluation, so Halcyon must be bought.
**Answer: A.** P/E = market price per share / EPS. Meridian: 20.00 / 1.25 = 16.0x; Halcyon: 30.00 / 2.50 = 12.0x. PEG = P/E ÷ % growth in EPS (typically prospective growth compounded over 3 years). Meridian: 16.0 / 20 = 0.8; Halcyon: 12.0 / 8 = 1.5. PEG controls for growth: a low PEG indicates an undervalued share, and below 1 is attractive but rare. P/E must also be read against the company's historical range, peers, and qualitative reasons for a premium or discount — low P/E may mean poorer expected growth, not undervaluation. (For reference, dividend yield = DPS / price × 100; e.g. $0.10 on a $2.00 price = 5%.)

**Q50. [Calculation] [LO6.5 | CM-EIP §6.4.1, §6.4.2, §6.4.3]**
An index contains two shares. On Day 1, A has 2,000,000 shares at $4.00 and B has 1,000,000 shares at $10.00; the index base value is 100. On Day 2, A is $4.40 and B is $10.50. What is the value-weighted index value on Day 2?
A. 100.0 — a value-weighted index never changes.
B. 105.0 — the simple average of the two price rises.
C. 110.0 — the price-weighted result.
D. 107.2 — total market value rises from $18,000,000 to $19,300,000.
**Answer: D.** Value-weighted: total market value = shares outstanding × price. Day 1: A 2,000,000 × 4.00 = $8,000,000; B 1,000,000 × 10.00 = $10,000,000; total $18,000,000 = index 100. Day 2: A 2,000,000 × 4.40 = $8,800,000; B 1,000,000 × 10.50 = $10,500,000; total $19,300,000. New index = 19,300,000 / 18,000,000 × 100 = 107.2. A value-weighted index automatically adjusts for bonus and rights issues (price fall offset by more shares) and gives high-capitalisation shares more weight. By contrast a price-weighted index (e.g. DJIA, 30 shares) averages prices, so a high-priced share carries more weight and a split reduces its weight; an equal-weighted index gives every share equal weight regardless of price or size.

**Q51. [Calculation] [LO6.6 | CM-EIP §6.2.5]**
Harbour Ltd has 200 million shares outstanding trading at $3.00. It announces a 1-for-4 rights issue of 50 million shares at $2.40. What is the theoretical ex-rights price (TERP)?
A. $2.40 — the rights price becomes the market price.
B. $2.88 — (200m × $3.00 + 50m × $2.40) ÷ 250m shares.
C. $3.00 — a rights issue never changes the share price.
D. $2.40 — the same as the theoretical ex-bonus price for a 1-for-4 bonus issue.
**Answer: B.** Before the issue, market capitalisation is 200m × $3.00 = $600m. New capital is 50m × $2.40 = $120m, so theoretical market capitalisation after the issue is $720m over 250m shares: $720m / 250m = $2.88. A rights issue raises new capital and is first offered to existing shareholders to prevent dilution; rights may be renounceable (tradable) or non-renounceable, and pro-rata renounceable rights of up to 100% of share capital may now be issued (up from 50%). By contrast a 1-for-4 bonus issue on the same $600m / 200m base would give 250m shares with no new capital, so the theoretical ex-bonus price would be $600m / 250m = $2.40 — sharply lower — and a stock split likewise raises no capital.

**Q52. [Calculation] [LO6.7 | CM-EIP §6.7.1, §6.7.2]**
An analyst values a company by DCF. The risk-free rate is 3%, the market return is 9%, beta is 1.2, the after-tax cost of debt is 4% (5% pre-tax at a 20% tax rate), debt is $200 million and equity is $800 million (market values). What is the WACC, the discount rate for free cash flow to the firm?
A. 7.20% — the cost of equity alone.
B. 10.20% — the cost of equity, ignoring debt.
C. 8.96% — cost of equity 10.20% weighted 80%, plus after-tax cost of debt 4.00% weighted 20%.
D. 6.29% — the worked WACC from the guide's P&G illustration, which applies to every company.
**Answer: C.** Cost of equity by CAPM: R = Rf + β(Rm − Rf) = 3% + 1.2 × (9% − 3%) = 3% + 7.2% = 10.20%. Total capital = $200m + $800m = $1,000m; debt weight 20%, equity weight 80%. WACC = (1 − tax) × cost of debt × debt weight + cost of equity × equity weight = 4.00% × 0.20 + 10.20% × 0.80 = 0.80% + 8.16% = 8.96%. DCF then projects FCFF over typically 10 years, estimates terminal value at year 10 as E(FCFF11) / (WACC − gc), discounts both at the WACC to get enterprise value, subtracts the market value of net debt and preferred shares, and divides by shares outstanding for intrinsic value per share. The terminal value usually dominates the result and the discount rate must exceed the growth rate.

**Q53. [LO6.9 | CM-EIP §6.9]**
A retail investor reads a prospectus for a Singapore IPO. Which statement about IPOs and prospectuses is correct?
A. Vendor share sales are always a sign of confidence, and the Greenshoe option forces the price up.
B. Catalist has stricter quantitative requirements than the Mainboard.
C. Mainboard listing requires fulfilling SGX listing requirements, while Catalist is sponsor-supervised with no quantitative requirements; the prospectus is lodged on MAS's OPERA portal, the offer typically opens for at least 2 market days, trading begins the next business day after allocation on a T+2 basis, and risks to watch include vendor share sales (mitigated by a lock-up moratorium), deferred shares/options that dilute EPS, the Greenshoe over-allotment option, and claw-back reallocation between institutional and retail tranches.
D. A rights issue after listing requires a full prospectus, not an Offer Information Statement.
**Answer: C.** The issuer engages a lead manager/sponsor and underwriters (management fees to the lead manager, underwriting fees to underwriters); lawyers draft the prospectus and accountants prepare audited reports. Once SGX approves the draft prospectus it is lodged on OPERA. IPOs are usually distributed in two tranches — a private placement (institutional/accredited, usually the larger portion) and a public retail tranche (smaller, widely distributed). Prospectus checks also cover the business model, use of proceeds (repaying debt or buying out existing shareholders leaves little for expansion), management track record, financial analysis (e.g. inventory growing faster than sales, falling free cash flow), lock-up period, conflicts of interest, and secondary offerings. A post-listing rights issue lodges an Offer Information Statement (OIS), not a prospectus.

**Q54. [LO6.10 | CM-EIP §6.11]**
A Singapore investor wants exposure to a US-listed foreign company without trading on its home exchange, and is offered a Level 2 ADR and a non-voting depositary receipt (NVDR). Which statement is correct?
A. Depositary receipts eliminate currency risk and counterparty risk.
B. Level 1, 2 and 3 ADRs all raise new capital.
C. GDRs are issued in the US and listed only on the NYSE.
D. A Level 2 ADR is listed on a US exchange such as the NYSE or NASDAQ but raises no new capital; only a Level 3 ADR programme offers new shares to US investors and raises capital; an NVDR carries no voting rights, so the holder cannot participate in corporate decisions, which enables foreign investment where ownership restrictions would otherwise prohibit it.
**Answer: D.** Depositary receipts are equity securities trading in the investor's home market representing an underlying security in the foreign issuer's home market, overcoming inefficient cross-border settlement, imperfect information flow and unfamiliar practices. ADR levels: Level 1 trades OTC (not listed, no capital raising); Level 2 is exchange-listed (no capital raising); Level 3 is a listed programme used to offer new shares (capital raising). Sponsored Level 2/3 ADRs are issued under a deposit agreement with the company; unsponsored ADRs are issued without one. GDRs are generally issued offshore from the US, commonly listed in London and Luxembourg. DR risks include currency risk, price risk (ADRs often trade at a premium to underlying shares), counterparty risk of the depositary bank/custodian, single-listed ADR illiquidity, and limited two-way fungibility. ---

### Chapter 7 — Questions 55–80

**Q55. [LO7.1 | CM-EIP §7.2]**
Mei, an entrepreneur, receives a lump-sum distribution from her business. She sets aside one portion for her household's daily spending, ploughs a second portion back into the business, keeps a third portion as a buffer for family emergencies and life's risks, and invests the remainder in financial assets. Which statement correctly describes how the guide classifies her uses of cash?
A. The buffer for emergencies is "excess cash", and the amount ploughed back into the business is "consumption".
B. The four uses are consumption, savings, speculation, and excess cash — the emergency buffer counts as savings, not reserves.
C. All four portions are "excess cash", because any money not spent immediately is excess.
D. The four uses are consumption, reinvestment into the business, reserves, and excess cash — the emergency buffer is reserves, and only the remainder invested in financial assets is excess cash.
**Answer: D.** For individuals, income and monies received fall into four categories: money for consumption; reinvestment into the business (for entrepreneurs); reserves set aside for family needs, life's risks and unfortunate eventualities; and excess cash. Reserves and excess cash can be invested in personal assets such as property and in financial assets, or held as cash and cash equivalents for liquidity.

**Q56. [Calculation] [LO7.1 | CM-EIP §7.2.1]**
Hassan holds all of the following with a single SDIC-member bank: a Singapore-dollar current account of S$25,000, a Singapore-dollar savings account of S$45,000, a Singapore-dollar fixed deposit of S$110,000, a CPFIS deposit of S$60,000, and a US-dollar deposit of S$150,000 equivalent. The bank fails. How much of his money is insured under the Deposit Insurance Scheme?
A. S$160,000
B. S$100,000
C. S$240,000
D. S$390,000
**Answer: A.** The scheme covers only Singapore-dollar deposits, up to S$100,000 of the aggregate balance across accounts with one bank: S$25,000 + S$45,000 + S$110,000 = S$180,000 of S$ deposits, so only S$100,000 is insured. CPFIS monies are aggregated and separately insured up to S$100,000, so the S$60,000 CPFIS deposit is fully insured. Foreign currency deposits are not insured. Total insured = S$100,000 + S$60,000 = S$160,000. (B forgets the separate CPFIS cover; C forgets the S$100,000 cap on S$ deposits; D insures everything, including the US-dollar deposit.)

**Q57. [LO7.2 | CM-EIP §7.4, §7.4.3, §7.4.4]**
A fund manager needs to park S$300,000 for four months while waiting for a better entry point into equities. Which statement about money market instruments is correct?
A. Money market instruments mature in under one year and typically carry a minimum denomination of S$250,000 and above, so the S$300,000 can be placed — but the short maturity means the proceeds will soon need reinvesting, so reinvestment risk is high.
B. Commercial paper is a secured instrument, so any corporation can issue it to raise four-month funding.
C. A repurchase agreement is an unsecured loan, so it carries no collateral protection.
D. Money market instruments carry almost no reinvestment risk, because their short maturity locks in the return.
**Answer: A.** Money market instruments are debt instruments with maturities of less than one year; the minimum denomination is usually large, S$250,000 and above. Although they carry almost no risk of principal loss, they are subject to reinvestment risk — the risk that proceeds cannot be reinvested at equivalent rates — and short-term instruments carry more reinvestment risk because proceeds must be reinvested each time the instrument matures. (B is wrong: commercial paper is unsecured, so only corporations with very strong credit ratings can issue it. C is wrong: a repo is effectively a collateralised short-term loan, with the money market instrument as collateral. D reverses the guide: short maturities mean more, not less, reinvestment risk.)

**Q58. [LO7.3 | CM-EIP §7.5]**
A company issues two new debt securities: a 7-year note and a 15-year bond. Both pay a fixed coupon on specified dates and repay principal at maturity. Which statement is correct?
A. The 7-year note is a money market instrument and the 15-year bond is a medium-term note.
B. The 7-year note is a long-term bond, because any maturity above five years is long-term.
C. Both are fixed-income securities providing periodic payments at a rate known in advance with eventual return of principal; the 7-year note is a medium-term note (more than one year and up to 10 years) and the 15-year bond is a long-term bond (longer than 10 years).
D. Neither is a fixed-income security, because fixed-income securities must pay a floating coupon.
**Answer: C.** A fixed-income security provides periodic payments at an interest rate known in advance, with eventual return of principal at maturity. By original maturity: money market instruments mature within one year; medium-term notes run more than one year and up to 10 years; long-term bonds run longer than 10 years.

**Q59. [LO7.4 | CM-EIP §7.5.2]**
Which statement about fixed-income terminology is correct?
A. Par value is the same as market value: a bond with a par value of $1,000 always trades at $1,000.
B. Singapore Government bonds are bearer bonds, because ownership is shown by holding the physical certificate.
C. The longer the maturity, the less volatile the bond price, so conservative investors prefer long maturities.
D. Term bonds have a single maturity date, while serial bonds are bundles of bonds issued at the same time with a series of different maturity dates.
**Answer: D.** Par value (face value) is the redemption value repaid at maturity — for most bonds $1,000 — and is not the same as market value, which rises or falls with factors affecting required return. Term bonds have a single maturity date (most corporate bonds); serial bonds have a series of maturity dates. Singapore Government bonds are scripless: ownership is reflected as electronic book entries, and few bearer bonds are issued today given the security risk. The longer the maturity, the more volatile the bond price.

**Q60. [LO7.5 | CM-EIP §7.11, §7.11.2]**
Two 10-year bonds are compared: a US Treasury yielding 3% and a corporate bond of the same maturity yielding 5.5%. Which statement is correct?
A. The 250 basis point difference is the credit spread — the extra yield investors demand for the corporate issuer's credit (default) risk — and if the issuer's default risk rises, its bond price falls and its spread widens.
B. The corporate bond is free of credit risk, because all 10-year bonds carry the same risk as the Treasury.
C. The 250 basis point difference measures inflation risk, not credit risk.
D. A higher yield means the corporate bond is safer, because investors are paid more for holding it.
**Answer: A.** Credit (default) risk is the risk that the issuer cannot make timely principal and interest payments as agreed. Most corporate bonds pay a higher yield than comparable US Treasury securities, which are regarded as free of credit risk. A credit spread is the rate difference, usually in basis points, between two bonds of the same maturity but different credit quality: here 5.5% − 3.0% = 2.5% = 250 basis points. As the issuer's default risk increases, its bond price falls and its spread widens; spreads widen during crises and narrow when conditions and risk appetite improve.

**Q61. [LO7.6 | CM-EIP §7.5.3, §7.7.1]**
Which pairing of bond issuer and motivation is correct?
A. A corporation issues bonds to diversify its funding beyond equity and bank loans; the corporate sector provides the most diverse issues in type and quality.
B. The Singapore Government issues Singapore Government Securities mainly to finance a budget deficit.
C. Government-linked corporations in Singapore source their funding directly from the government rather than tapping the bond market.
D. Governments issue bonds only to refinance existing debt, never to pay for infrastructure, healthcare or education.
**Answer: A.** Governments issue bonds to pay for projects such as infrastructure and essential services like healthcare and education. In Singapore, government-linked corporations tap the bond market rather than sourcing directly from the government, and the corporate sector provides the most diverse issues in type and quality. The Singapore Government itself operates a balanced budget policy and often enjoys surpluses, so SGS issuance serves primarily to build a liquid SGS market and establish a benchmark yield curve for pricing Singapore-dollar private debt, encourage an active secondary market, and attract issuers and investors — not to finance expenditure.

**Q62. [LO7.7 | CM-EIP §7.7.3]**
Which statement about the primary and secondary bond markets is correct?
A. Bonds are issued to the public in the secondary market, and SGS are sold at auctions through Primary Dealers in the primary market.
B. Once issued, bonds trade only on the exchange where they are listed; there is no over-the-counter secondary trading in bonds.
C. The secondary market is a place to buy and sell issued bonds — on the listing exchange for retail issues or over the counter — and it benchmarks market values and yields, including the spread of a corporate bond's yield over the yield on Government issues of similar maturity.
D. The secondary market's only function is to let issuers raise new capital.
**Answer: C.** Bonds are issued to the public in the primary market (SGS are sold at auctions through Primary Dealers; a company raising funds appoints an investment bank). Once issued, bonds trade in the secondary market — the listing exchange for retail issues or the OTC market. Beyond trading, the secondary market benchmarks market values and yields of traded bonds, which is needed to value bond portfolios and establish benchmark yield curves for bonds of different credit ratings; of particular interest is the spread over the yield on Government issues of similar maturity.

**Q63. [Calculation] [LO7.8 | CM-EIP §7.6.2]**
A 6% bond with a par value of $1,000 pays semi-annual interest on 1 February and 1 August. It is sold on 1 May. How much accrued interest is the seller entitled to?
A. $7.50
B. $15.00
C. $30.00
D. $60.00
**Answer: B.** All fixed-income securities trade on an accrued interest basis: the buyer pays the price plus interest earned since the last coupon date. The annual coupon is 6% × $1,000 = $60. The seller held the bond for three months since the 1 February coupon (February, March, April), so accrued interest = $60 × 3/12 = $15.00. ($30 is one semi-annual coupon, payable only after a full six months; $60 is the full annual coupon; $7.50 would be only six weeks' accrual.)

**Q64. [LO7.9 | CM-EIP §7.9.1–7.9.4]**
Which statement about special features in bond issuance is correct?
A. A call provision gives the bondholder the right to sell the bond back to the issuer at par on designated dates.
B. Callable bonds carry lower yields than equivalent non-callable bonds, because the call feature benefits the investor.
C. Subordinated (junior) bonds rank ahead of secured (senior) bonds in the claim on income and assets.
D. A sinking-fund provision requires the issuer to retire a certain amount of debt each year — by buying bonds in the open market if the price is below par, or paying the trustee, who calls bonds for redemption by lottery — and its purpose is to reduce credit risk.
**Answer: D.** A call provision gives the issuer (not the holder) the right to retire the debt before maturity; it is unattractive to investors, who risk losing a high-coupon bond when rates decline, and callable bonds therefore carry higher yields than equivalent non-callable bonds. A put provision gives the bondholder the right to sell back at par, limiting downside risk, and the investor pays for it with a lower yield. A sinking fund retires part of the debt each year and reduces credit risk; the doubling option lets the issuer retire twice the required amount. On claims, secured (senior) bonds have first rights over the pledged asset, subordinated (junior) bonds rank after secured debt and main creditors, and income bonds are junior debt on which the issuer can omit or delay interest if earnings are too low; bondholders as creditors rank above ordinary and preferred shareholders.

**Q65. [LO7.10 | CM-EIP §7.8.5, §7.8.6]**
A fund manager is offered a BB-rated bond issued to finance a leveraged buyout, with interest deferred for the first five years. Which statement is correct?
A. The bond is investment grade, because BB is above BBB.
B. The bond is a high-yield (junk) bond: bonds rated below BBB are high-yield, and they trade primarily on their creditworthiness rather than the level of interest rates.
C. A deferred-interest structure pays a low coupon for the first three to seven years and then steps up.
D. High-yield bonds are free of credit risk, because their high coupon compensates for any default.
**Answer: B.** Bonds rated below BBB are high-yield or junk bonds. They trade primarily on their creditworthiness rather than the level of interest rates, and their high yields reflect factors such as the small size of the company or a lack of credit history. Deferred-interest bonds — the most common deferred-coupon structure, used in leveraged buyout financing — sell at a deep discount and pay no interest for an initial period, typically three to seven years. (A low coupon that later steps up is a step-up bond, not a deferred-interest bond; a high coupon compensates for credit risk but does not remove it.)

**Q66. [LO7.11 | CM-EIP §7.10, §7.10.1]**
Which statement about asset-backed fixed-income instruments is correct?
A. Mortgage-backed securities are created by pooling non-mortgage assets, while asset-backed securities are created by pooling mortgages.
B. Asset-backed securities are issued directly by the original lender with no intermediary vehicle, and the underlying assets stay on the lender's balance sheet.
C. Before the sub-prime crisis, mortgage-backed securities made up only a negligible share of US collateralised debt obligations.
D. A collateralised loan obligation (CLO) is backed by a pool of loans and a collateralised bond obligation (CBO) is backed by a pool of bonds; both are typically issued by a special purpose vehicle (SPV) and are effectively a type of asset-backed security.
**Answer: D.** The primary difference between ABS and MBS is the underlying asset: MBS are created from pooling mortgages, while ABS evolved from MBS and are created from pooling non-mortgage assets such as auto loans and leases, consumer loans, credit card receivables and royalty payments. A CDO is structured by pooling cash-flow-generating assets, repackaged and sold to investors, typically issued by an SPV and secured by the acquired assets: a CBO is backed by a pool of bonds and a CLO by a pool of loans. During the sub-prime crisis, 40–50% of US CDOs were made up of MBS.

**Q67. [LO7.12 | CM-EIP §7.7, §7.7.2]**
Which statement about the internal, external and Eurobond markets is correct?
A. A Eurobond is issued in the domestic market of the country whose currency it is denominated in, under that country's rules.
B. A yen-denominated Eurobond is a Euroyen bond and a US-dollar-denominated Eurobond is a Eurodollar bond; a Eurobond is underwritten by an international syndicate, offered simultaneously to investors in a number of countries, and issued outside the jurisdiction of any single country.
C. The internal bond market comprises the domestic market and the Eurobond market.
D. In Singapore, the foreign bond market refers to Singapore companies issuing bonds abroad.
**Answer: B.** The bond market divides into the internal bond market (domestic plus foreign) and the external bond market, popularly the Eurobond market. In Singapore, the domestic market comprises Singapore Government Securities and corporate bonds issued by Singapore companies, while the foreign bond market refers to foreign issuers issuing bonds in the Singapore market. A Eurobond is underwritten by an international syndicate, offered at issuance simultaneously to investors in a number of countries, and issued outside the jurisdiction of any single country; the market is divided by currency of denomination — USD-denominated Eurobonds are Eurodollar bonds and yen-denominated ones are Euroyen bonds.

**Q68. [LO7.13 | CM-EIP §7.11.1]**
Which statement about credit ratings is correct?
A. A bond rated BB+ by S&P is investment grade, because it is only one notch below BBB−.
B. An S&P rating of SD means the obligor has failed to pay all of its financial obligations — a general default.
C. An S&P short-term rating of A-1 indicates vulnerable capacity with significant speculative characteristics.
D. Baa3 (Moody's) / BBB− (S&P and Fitch) is the lowest investment-grade rating; a BB+ bond is below investment grade and therefore high-yield.
**Answer: D.** Ratings range from AAA/Aaa (highest, extremely strong capacity) to D (failed to pay). Investment grade is BBB−/Baa3 and above: Baa3/BBB− indicates adequate capacity, while Ba1/BB+ indicates the obligor is less vulnerable in the near term than other lower-rated obligors but faces major ongoing uncertainties — below investment grade, hence high-yield. SD is selective default on a specific issue or class while continuing to meet other obligations; D is general default. The highest S&P short-term category is A-1 (strong capacity, with a plus sign indicating extremely strong capacity); B is the vulnerable category.

**Q69. [LO7.14 | CM-EIP §7.12]**
Which pairing of an event and the fixed-income risk it illustrates is correct?
A. A government declares a withholding tax on a bond's interest payments — political (or legal) risk.
B. A takeover seriously impairs the issuer's ability to pay interest and principal — sector risk.
C. A bond's bid-offer spread is very wide, so it can only be sold well below fair value — inflation (purchasing power) risk.
D. The value of a bond's embedded option changes because expected interest-rate volatility rises — exchange rate (currency) risk.
**Answer: A.** Political or legal risk is the possibility of political or legal actions adversely affecting a security's value — for example a government declaring withholding taxes, declaring a tax-exempt bond taxable, or imposing capital controls on remittance. The other pairings are wrong: a takeover or restructuring impairing the issuer's ability to pay is event risk (sector risk is an event hitting many companies in one industry at once); a wide bid-offer spread indicates marketability (liquidity) risk; and a change in an embedded option's value from expected interest-rate volatility is volatility (vega) risk. The other risks in the guide's list of ten are interest rate (delta) risk, reinvestment risk, timing (call) risk, inflation risk and currency risk.

**Q70. [Calculation] [LO7.15 | CM-EIP §7.13]**
A 5-year bond has a par value of $1,000, an annual coupon rate of 7% and a required market yield of 5%. What is the value of the bond today?
A. $1,000.00
B. $1,043.29
C. $1,086.59
D. $1,127.50
**Answer: C.** The value of a bond is the present value of its expected cash flows — coupons plus principal — discounted at the required rate of return. Annual coupon = 7% × $1,000 = $70. Price = 70 × annuity factor (5%, 5 years) + 1,000 × discount factor: annuity factor = [1 − 1.05^(−5)] / 0.05 = 4.32948; discount factor = 1.05^(−5) = 0.78353. Price = 70 × 4.32948 + 1,000 × 0.78353 = $303.06 + $783.53 = $1,086.59. Because the coupon rate (7%) exceeds the required yield (5%), the bond trades at a premium to par. ($1,000.00 would be the price if yield equalled the coupon; $1,043.29 and $1,127.50 do not match the discounted cash flows.)

**Q71. [Calculation] [LO7.15 | CM-EIP §7.13.1]**
A zero-coupon bond matures in 10 years with a par value of $1,000. The required return is 8%. What is the price of the bond?
A. $315.24
B. $389.00
C. $463.19
D. $456.39
**Answer: D.** A zero-coupon bond has only the maturity value as a cash flow, so its price is the present value of the maturity amount. Using the semi-annual convention (to stay consistent with semi-annual coupon bonds): P = M / (1 + k/2)^(2n) = 1,000 / (1.04)^20 = 1,000 / 2.19112 = $456.39. (C, $463.19, is the price using annual compounding, 1,000 / 1.08^10 — the guide's formula uses the semi-annual rate and doubled periods; A and B do not match either convention.)

**Q72. [Calculation] [LO7.16 | CM-EIP §7.19.2]**
A bond's yield to maturity is 3.50% per half-year. What are its bond-equivalent yield and its effective annual yield?
A. Bond-equivalent yield 7.00%; effective annual yield 7.12%
B. Bond-equivalent yield 7.12%; effective annual yield 7.00%
C. Bond-equivalent yield 7.00%; effective annual yield 7.00%
D. Bond-equivalent yield 3.50%; effective annual yield 7.12%
**Answer: A.** Market convention annualises a semi-annual yield by doubling it, giving the bond-equivalent yield: 2 × 3.50% = 7.00%. The proper annualisation is the effective annual yield, which compounds the half-year rate: (1 + 0.035)^2 − 1 = 1.071225 − 1 = 7.12%. The effective annual yield is higher than the bond-equivalent yield because of compounding within the year.

**Q73. [LO7.17, LO7.18 | CM-EIP §7.15, §7.18]**
Bond P has an 8% coupon and a market yield of 6%. Bond D has a 5% coupon and a market yield of 7%. Both have 10 years to maturity. Which statement is correct?
A. Bond P trades at a discount and its price will rise toward par as maturity approaches; Bond D trades at a premium and its price will fall toward par.
B. Both bonds trade at par, because their coupons are fixed for life.
C. Bond P trades at a premium and its price will fall toward par as maturity approaches; Bond D trades at a discount and its price will rise toward par.
D. Bond P trades at a premium and its price will keep rising above par as maturity approaches; Bond D trades at a discount and its price will keep falling.
**Answer: C.** Coupon rate above market yield → premium; coupon rate below market yield → discount; coupon equal to yield → par. Bond P's 8% coupon exceeds its 6% yield, so it trades at a premium; Bond D's 5% coupon is below its 7% yield, so it trades at a discount. Holding all else constant, a bond's price must converge to par as maturity approaches because it will be redeemed at par: a discount bond's price increases and a premium bond's price declines over time, and a bond selling at par stays at par.

**Q74. [LO7.19 | CM-EIP §7.17]**
Bond A has a 5% coupon and Bond B a 9% coupon; both have 10 years to maturity and the same yield. A portfolio manager expects interest rates to fall. Which statement is correct?
A. Bond B has the higher duration and the higher convexity, and the manager should decrease portfolio duration.
B. Bond A has the higher duration and the higher convexity; if rates are expected to fall, the manager should increase portfolio duration to maximise price sensitivity.
C. Duration is higher for higher coupons and higher yields, so Bond B is the more rate-sensitive bond.
D. Convexity is irrelevant when rates fall, because duration alone determines the price change for large rate moves.
**Answer: B.** All else equal, duration is higher for bonds with lower coupons, lower yields and longer maturities — so the lower-coupon Bond A has the higher duration. Convexity is directly related to the coupon rate and remaining term: the lower the coupon, the higher the convexity (zero-coupon bonds have the highest convexity). A higher duration implies greater price movement up or down, so anticipating falling rates a manager should increase duration to maximise sensitivity, and anticipating rising rates should decrease it. Duration is a linear approximation valid only for small rate changes (not more than 1% or 100 basis points); convexity captures the curvature, and with positive convexity price appreciation exceeds price depreciation for large moves — investors should seek greater convexity whether rates rise or fall.

**Q75. [Calculation] [LO7.20 | CM-EIP §7.17.4]**
A bond portfolio has a price value of a basis point (PVBP, or PV01) of $2,500. Interest rates rise in a parallel shift of 200 basis points. What is the approximate change in the portfolio's present value?
A. It rises by $500,000.
B. It falls by $50,000.
C. It falls by $5,000,000.
D. It falls by $500,000.
**Answer: D.** PVBP (PV01) is the change in the present value of the entire bond portfolio for a one basis point movement in interest rates. For a 200 basis point parallel shift, the change is approximately $2,500 × 200 = $500,000. Because rates rose, bond prices fall, so the portfolio's present value falls by about $500,000. PVBP is a risk-management tool: typically a limit is set for the total PVBP effect given parallel rate movements of 100, 200 and 300 basis points. (B is the effect of only 20 basis points; C is the effect of 2,000 basis points; A has the wrong direction.)

**Q76. [Calculation] [LO7.21 | CM-EIP §7.19.1, §7.19.2]**
A 5-year bond with a par value of $1,000 and a 6% annual coupon is priced at $950. Using the approximation formula, what is its approximate yield to maturity?
A. 6.00%
B. 6.32%
C. 7.18%
D. 7.37%
**Answer: C.** Approximate YTM = (annual interest payment ± amortised gain or loss) / ((current market price + par value) / 2). Annual interest = 6% × $1,000 = $60. The bond was bought at a discount of $1,000 − $950 = $50, amortised over 5 years = $10 per year of gain, so the numerator is $60 + $10 = $70. The denominator is the average of price and par: ($950 + $1,000) / 2 = $975. Approximate YTM = $70 / $975 = 7.18%. (6.00% is the coupon rate; 6.32% is the current yield, $60 / $950, which ignores the capital gain; 7.37% is the trap of using the current price alone, $70 / $950, instead of the average of price and par.)

**Q77. [Calculation] [LO7.21 | CM-EIP §7.19.4]**
An investor in the 20% marginal tax bracket holds a tax-exempt bond with a yield to maturity of 4.5%. What is the taxable equivalent yield of the bond?
A. 3.60%
B. 5.63%
C. 4.50%
D. 6.43%
**Answer: B.** Taxable equivalent yield = tax-exempt yield / (1 − marginal tax rate) = 4.5% / (1 − 0.20) = 4.5% / 0.80 = 5.625% ≈ 5.63%. A taxable bond must yield about 5.63% to match the 4.5% tax-exempt yield for this investor. (A multiplies by (1 − tax rate) instead of dividing; C is the tax-exempt yield itself, with no adjustment; D uses a 30% tax rate.)

**Q78. [LO7.22 | CM-EIP §7.19.2, §7.19.3]**
Which bond carries the greatest reinvestment risk?
A. A 10-year zero-coupon bond.
B. A 5-year bond with a 3% coupon.
C. A 20-year bond with an 8% coupon.
D. A 5-year bond with an 8% coupon.
**Answer: C.** Reinvestment risk is the risk that interim cash flows cannot be reinvested at equivalent rates if rates fall. For a given coupon rate, the longer the maturity, the greater the reinvestment risk, because more of the total dollar return depends on compounding to realise the yield to maturity; for a given maturity, the higher the coupon rate, the greater the reinvestment risk, because there is more to reinvest. The 20-year 8% bond is both the longest and the highest-coupon, so it carries the greatest reinvestment risk. A zero-coupon bond has no reinvestment risk if held to maturity, because there is nothing to reinvest. Note that interest rate risk and reinvestment risk make opposite predictions — a rate rise pushes the bond price down but raises the rate at which coupons can be reinvested — and they are not fully offsetting: generally the reinvestment effect only slightly mitigates the interest rate effect.

**Q79. [LO7.23 | CM-EIP §7.20.2]**
Which explanation matches the liquidity preference theory of the term structure of interest rates?
A. Long-maturity securities must offer a higher return because investors sacrifice liquidity for longer and face greater price volatility, so the yield curve should always be upward sloping.
B. Each maturity's yield is determined solely by supply and demand in that maturity segment, reflecting investors' liability-driven maturity preferences.
C. An upward-sloping yield curve means the market expects interest rates to fall.
D. A flat yield curve means short-term rates are expected to rise sharply.
**Answer: A.** Liquidity preference theory argues the yield curve should always be upward sloping, and any other shape is a temporary aberration: because long-maturity securities are more price-volatile, investors require a higher return to hold them, and short-term securities are more easily converted to cash without large price movements, so investors pay a higher price and receive a lower yield. (B is the market segmentation theory — life insurers with long-term liabilities prefer long bonds, banks prefer short liquid securities. C is backwards under the expectations theory: an upward-sloping curve reflects expectations that rates will rise — lenders prefer to lend short and borrowers to borrow long. D is wrong: under expectations theory, when the market is ambivalent the curve tends to be flatter.)

**Q80. [Calculation] [LO7.24 | CM-EIP §7.21]**
A convertible bond has a par value of $1,000 and a conversion ratio of 50. It trades at $1,050 while the underlying share trades at $18. By what percentage does the convertible's market price exceed its conversion value?
A. 6.00%
B. 15.00%
C. 16.67%
D. 14.29%
**Answer: C.** Conversion value = conversion ratio × share price = 50 × $18 = $900. Conversion premium ($) = market value of the convertible − conversion value = $1,050 − $900 = $150. Conversion premium (%) = $150 / $900 = 16.67%. Equivalently, the conversion parity price = $1,050 / 50 = $21.00 per share, a $3.00 (16.67%) premium over the $18 share price. (B, 15.00%, is the $150 premium expressed as a percentage of the $1,000 par value instead of the $900 conversion value; D divides the $150 premium by the $1,050 market price instead of the $900 conversion value; A, 6.00%, has no basis in the figures given. For reference, with a 5% coupon ($50 bond income) and a $0.40 dividend ($20 dividend income on 50 shares), the breakeven time would be $150 / ($50 − $20) = 5.0 years.)

### Chapter 8 — Questions 81–107

**Q81. [LO8.1 | CM-EIP §8.2]**
A trainee makes three claims about what market prices reflect: (i) past price and volume data are fully reflected in the current price; (ii) all publicly available information is fully reflected in the current price; (iii) all information, public and private, is fully reflected in the current price. Which statement correctly matches each claim to the EMH form that asserts it?
A. (i) weak form; (ii) semi-strong form; (iii) strong form.
B. (i) semi-strong form; (ii) weak form; (iii) strong form.
C. (i) strong form; (ii) semi-strong form; (iii) weak form.
D. (i) weak form; (ii) strong form; (iii) semi-strong form.
**Answer: A.** The weak form says all past price information is reflected in the current price; the semi-strong form says all publicly available information is reflected; the strong form says all information, public or private, is reflected. The evidence supports the weak and semi-strong forms but not the strong form, which is why insider trading is regulated.

**Q82. [LO8.2 | CM-EIP §8.3.2]**
A fund manager holds cash equivalents and equities. Believing equities are about to do well, she shifts holdings from cash equivalents into equities; when she later expects equities to do poorly, she liquidates equity holdings back into cash. Which active strategy is she using?
A. Security selection — picking individual shares she believes are undervalued.
B. Sector rotation — shifting weights between sectors expected to outperform.
C. Market timing — actively shifting the asset allocation between cash and equities on her view of how equities will perform.
D. Passive buy-and-hold — holding an index portfolio with minimal trading.
**Answer: C.** Market timing involves active asset allocation: moving from cash equivalents into equities when equities are expected to do well, and liquidating equities when they are expected to do poorly. Security selection picks undervalued shares and sector rotation shifts sector weights; neither is a cash-versus-equities switch.

**Q83. [LO8.3 | CM-EIP §8.4.1]**
Two portfolios have the same volatility of 12%. Portfolio P is expected to return 7% a year and Portfolio Q is expected to return 9% a year. A third portfolio, R, is expected to return 9% a year at 15% volatility. Which statement is correct?
A. Portfolio P is on the efficient frontier because it has the lowest return.
B. Portfolio P lies below the efficient frontier: at the same 12% risk, Portfolio Q offers a higher return, and Portfolio R is also dominated by Q at the same return for less risk.
C. Portfolio R is on the efficient frontier because it carries the most risk.
D. All three portfolios are on the efficient frontier, because every combination of assets is optimal for some investor.
**Answer: B.** The efficient frontier is the set of portfolios giving the highest return at a given level of risk. P is below it because Q gives more return (9% vs 7%) at the same 12% volatility; R is also dominated by Q, which gives the same 9% return at lower risk (12% vs 15%). Only combinations on the frontier are optimal.

**Q84. [LO8.4 | CM-EIP §8.4.2]**
A manager proposes adding a new asset to a portfolio. The asset offers a lower return per unit of risk than the existing portfolio and its returns are highly correlated with the portfolio's returns. She argues that any new asset improves diversification. Which statement is correct?
A. She is right: adding any asset automatically improves diversification.
B. She is right, because correlation does not matter as long as the asset is in a different industry.
C. She is wrong only about the return: a high correlation is enough on its own to improve diversification.
D. She is wrong: buying an asset with a lower return per unit of risk and high correlation with the existing portfolio is unlikely to improve diversification; identifying assets that can raise return per unit of risk needs a deliberate review of markets, sectors and companies.
**Answer: D.** Diversification across asset classes improves risk-adjusted return only if done deliberately, not ad hoc or blanket. An asset with a lower return per unit of risk and high correlation with the existing portfolio is unlikely to improve diversification; for efficient diversification, include securities whose returns are not highly correlated.

**Q85. [LO8.5 | CM-EIP §8.4.3]**
A portfolio holds 30 shares spread across many industries. The manager worries about two things: (i) a rise in interest rates, and (ii) a failed product launch at one of the holdings. Which statement is correct?
A. Both risks can be eliminated by adding more shares to the portfolio.
B. (i) is systematic risk: it affects all firms, cannot be eliminated by diversification, but can be partly or almost fully offset by hedging with options and futures; (ii) is non-systematic risk, which diversification can reduce and theoretically eliminate.
C. (i) is non-systematic risk and (ii) is systematic risk.
D. Both risks must be hedged with options and futures, because neither can be diversified away.
**Answer: B.** Total risk = systematic risk + non-systematic risk. Systematic risk comes from economy-wide factors such as interest rates, cannot be diversified away, but can be hedged with options and futures; it is reflected in beta. Non-systematic risk is firm-specific (a failed product launch) and can be minimised by holding a broad spread of firms or industries.

**Q86. [Calculation] [LO8.6 | CM-EIP §8.4.4]**
The covariance between the returns of shares X and Y is 0.012. Share X has a standard deviation of 20% and share Y has a standard deviation of 15%. What is the correlation coefficient between X and Y, and what does it imply for diversification?
A. 0.40 — a moderate positive association, so combining X and Y gives some reduction in portfolio risk.
B. 0.04 — almost no linear relation, so combining X and Y eliminates portfolio risk altogether.
C. 0.80 — a strong positive association, so combining X and Y gives no reduction in portfolio risk.
D. 1.20 — a more-than-perfect positive association, so portfolio risk rises.
**Answer: A.** Correlation ρ = Covariance / (σX × σY) = 0.012 / (0.20 × 0.15) = 0.012 / 0.03 = 0.40. A correlation of 0.40 is positive but well below 1, so combining the two shares gives some risk reduction (only ρ = 1 gives no reduction, and only ρ = −1 can eliminate risk). A correlation above 1 is impossible.

**Q87. [Calculation] [LO8.7 | CM-EIP §8.4.7]**
A two-security portfolio holds 50% in security P and 50% in security Q. P has an expected return of 14% and a standard deviation of 12%; Q has an expected return of 6% and a standard deviation of 16%. The correlation between P and Q is 0. What are the portfolio's expected return and risk?
A. Expected return 10% and risk 14% — risk is the weighted average of the two standard deviations.
B. Expected return 20% and risk 10%.
C. Expected return 10% and risk 10%.
D. Expected return 10% and risk 20% — risk is the square root of the sum of the two variances, ignoring the weights.
**Answer: C.** Expected return is a weighted average: Rp = 0.5(14%) + 0.5(6%) = 7% + 3% = 10%. Portfolio risk is NOT a weighted average: σp = √(w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2) = √(0.25 × 0.12² + 0.25 × 0.16² + 0) = √(0.0036 + 0.0064) = √0.01 = 10%. The weighted average of the standard deviations (14%) overstates risk when correlation is below 1.

**Q88. [LO8.8 | CM-EIP §8.4.8]**
A manager is considering adding shares from a new overseas market to a domestic portfolio. Which statement is correct?
A. International diversification always raises risk-adjusted return, and it removes foreign exchange risk automatically.
B. Share price movements in different countries are fairly uncorrelated, so international diversification can reduce portfolio risk; but it introduces foreign exchange risk, which can be hedged using forward exchange contracts, and adding the wrong securities or markets can lower risk-adjusted return.
C. Country returns are so highly correlated that international diversification offers no risk reduction at all.
D. Foreign exchange risk can only be removed by avoiding overseas markets entirely.
**Answer: B.** International diversification can reduce risk because country returns are fairly uncorrelated, but it brings foreign exchange risk, which can be hedged with forward exchange contracts. It does not always raise risk-adjusted return: new markets should be added only if they can raise the portfolio's risk-adjusted return.

**Q89. [LO8.9 | CM-EIP §8.4.9]**
A security has a beta of zero. Which statement is correct?
A. It must be the risk-free asset, because only the risk-free asset has a beta of zero.
B. It carries no risk of any kind.
C. Its expected return must be higher than the market return, because a zero beta means it is uncorrelated with the market.
D. It should yield the risk-free rate, but it need not be risk-free: it can still carry unsystematic risk, since beta measures only systematic risk.
**Answer: D.** A risk-free asset has a beta of zero, a return variance of zero and zero covariance with any risky asset — but the converse does not hold. An asset with a beta of zero can still have unsystematic risk; either way, under CAPM it should yield the risk-free rate, E(R) = Rf + 0 × (Rm − Rf) = Rf.

**Q90. [Calculation] [LO8.10, LO8.11 | CM-EIP §8.4.9]**
The risk-free rate is 4%, the expected market return is 12% and the standard deviation of market returns is 20%. (i) What is the expected return of an efficient portfolio with a standard deviation of 10%? (ii) Which line gives the equilibrium expected return of a single, poorly diversified share plotted against its beta?
A. (i) 8%; (ii) the security market line.
B. (i) 8%; (ii) the capital market line.
C. (i) 12%; (ii) the security market line.
D. (i) 6%; (ii) the capital market line.
**Answer: A.** (i) The capital market line: E(Rp) = Rf + [(E(Rm) − Rf)/σm] × σp = 4% + [(12% − 4%)/20%] × 10% = 4% + 0.40 × 10% = 4% + 4% = 8%. The slope, 0.40, is the market price of risk. (ii) The CML applies only to efficient portfolios and uses total risk (standard deviation); the security market line applies to all assets, including individual securities and inefficient portfolios, and uses systematic risk (beta).

**Q91. [Calculation] [LO8.12 | CM-EIP §8.4.9]**
A security has a beta of 1.5. The risk-free rate is 2% and the expected market return is 10%. The security's expected return is 11%. Where does it lie relative to the security market line, and what does that imply?
A. Above the SML, so it is undervalued (under-priced).
B. Below the SML, so it is overvalued (overpriced).
C. On the SML, so it is fairly priced.
D. Above the SML, so it is overvalued, because a beta above 1 always means overvaluation.
**Answer: B.** CAPM expected return = Rf + β(Rm − Rf) = 2% + 1.5 × (10% − 2%) = 2% + 12% = 14%. The security's expected return of 11% is below the 14% the SML predicts for its beta, so it lies below the SML and is overpriced: it offers a lower return than predicted for its risk. Selling pressure should push its price down and its expected return up towards the SML.

**Q92. [LO8.13 | CM-EIP §8.4.10]**
A manager wants to use Arbitrage Pricing Theory and is choosing risk factors. Which of the following could be an APT risk factor?
A. The rate of inflation, because it is a broad economic force.
B. A single firm's new product launch, because it moves that firm's share price.
C. An unanticipated change in the default-risk premium.
D. A single company's management reshuffle, because it affects expected returns.
**Answer: C.** APT factors must have a pervasive influence on share returns, influence expected return, and be unpredictable by the market as a whole. The four factors identified by Chen, Roll and Ross (1986) include unanticipated changes in the default-risk premium (alongside unanticipated inflation, industrial production and the term structure). The inflation rate itself is not a factor because it is partially predictable — unexpected inflation is. A product launch or a management reshuffle is firm-specific, not pervasive.

**Q93. [LO8.14 | CM-EIP §8.5.2]**
What is the correct order of the steps in the portfolio management process for retail investors?
A. Measuring performance → setting objectives → developing strategies → monitoring markets → reviewing and adjusting.
B. Developing strategies → setting objectives → measuring performance → monitoring markets → reviewing and adjusting.
C. Setting objectives → monitoring markets → measuring performance → developing strategies → reviewing and adjusting.
D. Setting investment objectives → developing and implementing strategies → monitoring market conditions → reviewing and adjusting the portfolio → measuring portfolio performance.
**Answer: D.** The process is dynamic, continuous and systematic: (1) setting investment objectives — defining an acceptable level of risk and a reasonable expected return; (2) developing and implementing strategies — guidelines for asset allocation; (3) monitoring market conditions and re-evaluating the investor's needs; (4) reviewing and adjusting the portfolio; (5) measuring portfolio performance against a benchmark.

**Q94. [LO8.15 | CM-EIP §8.5.3]**
A portfolio manager drafts an investment policy statement without meeting the client, treating it as the manager's own document. What is wrong with this?
A. The investment policy statement belongs to the client, not the manager, and the manager must spend time with the client defining investment goals and acceptable risk levels — return requirement and risk tolerance are usually established through an interview and discussion session and a risk profiling questionnaire.
B. Nothing is wrong: the statement belongs to the manager, who sets the policy alone.
C. The statement belongs to the regulator, so the manager should have filed it with MAS instead.
D. The statement should be based only on market forecasts, not on the client's goals.
**Answer: A.** The IPS (investment mandate) belongs to the client, not the portfolio manager. The manager must spend sufficient time with the client to define investment goals and acceptable risk levels and to note constraints and preferences, typically through an interview and discussion session and a risk profiling questionnaire.

**Q95. [LO8.16 | CM-EIP §8.5.4]**
Which pair of items forms the investment objectives in an investment policy statement?
A. Liquidity requirements and time horizon.
B. Return requirement and risk tolerance.
C. Tax considerations and regulatory and legal constraints.
D. Strategic asset allocation ranges and the rebalancing policy.
**Answer: B.** The investment objectives are the return requirement and the risk tolerance. Liquidity, time horizon, tax and regulatory/legal matters are investment constraints, not objectives; asset allocation ranges and the rebalancing policy are part of the asset allocation section of the statement. In defining the objectives, emphasis is placed on the client's sensitivity to risk, often analysed through the life cycle approach.

**Q96. [LO8.17 | CM-EIP §8.5.3]**
Which of the following is NOT part of the contents of a typical investment policy statement?
A. Client description and circumstances.
B. Investment objectives — return requirement and risk tolerance.
C. Investment constraints and asset allocation, including strategic asset allocation ranges and a rebalancing policy.
D. The fund manager's own proprietary trading positions and personal bonus structure.
**Answer: D.** A typical IPS covers the client description and circumstances, the investment objectives (return requirement and risk tolerance), the investment constraints (liquidity, time horizon, tax, regulatory and legal, unique needs) and the asset allocation (strategic ranges, rebalancing policy, and often a policy portfolio — conservative, balanced or aggressive). The manager's own proprietary positions and pay are not IPS contents.

**Q97. [LO8.18 | CM-EIP §8.5.5]**
A client in a high income-tax bracket is choosing between a tax-exempt fixed income security and a comparable taxable bond. What should guide the choice?
A. Always choose the tax-exempt security, because high-bracket investors should never hold taxable bonds.
B. Always choose whichever security has the higher nominal yield, because tax is irrelevant to the comparison.
C. Compare the taxable equivalent return of the tax-exempt security with the return on the comparable taxable bond, and choose the tax-exempt security only if its taxable equivalent return exceeds the taxable bond's return.
D. Choose the security with the larger capital gain component, because capital gains are always tax-free.
**Answer: C.** Tax is a portfolio constraint: the manager must consider the client's tax bracket, the different tax treatments of assets, and the different components of total return. Investors in high tax brackets should consider tax-exempt fixed income securities if the taxable equivalent return exceeds the return on comparable taxable bonds; equities with a large capital gain component may also be more attractive than high dividend-yielding shares for such investors.

**Q98. [Calculation] [LO8.19 | CM-EIP §8.5.6]**
A portfolio's strategic asset allocation ranges are equities 45–55%, bonds 35–45% and cash equivalents 5–15%. The current tactical mix is equities 50%, bonds 40% and cash 10%. The manager now expects bonds to outperform equities over the short run. Which new tactical mix best exploits that view while staying within the strategic ranges?
A. Equities 45%, bonds 45%, cash 10%.
B. Equities 60%, bonds 30%, cash 10%.
C. Equities 40%, bonds 50%, cash 10%.
D. Equities 45%, bonds 40%, cash 15%.
**Answer: A.** Tactical asset allocation overweights or underweights asset classes over the short run in response to changing conditions, as long as the allocation stays within the strategic ranges. Overweighting bonds means raising bonds towards their 45% maximum and cutting equities towards their 45% minimum: 45% + 45% + 10% = 100%, all within range. B breaches the equities maximum (60% > 55%) and cuts bonds; C breaches both the equities minimum (40% < 45%) and the bonds maximum (50% > 45%); D stays in range but leaves bonds unchanged at 40%, so it does not exploit the view.

**Q99. [Calculation] [LO8.20 | CM-EIP §8.6.1]**
A portfolio is worth $40 million at the start of a quarter. The client deposits $10 million at the beginning of the quarter, and the portfolio is worth $55 million at the end of the quarter. What is the portfolio's return for the quarter?
A. 37.5% — the deposit is ignored entirely.
B. 10.0%.
C. 12.5% — the deposit is treated as if made at the end of the period.
D. 30.0% — the deposit is ignored in the numerator but added to the denominator.
**Answer: B.** A deposit at the beginning of the period is added to the beginning value: Rp = [VE − (VB + Deposits − Withdrawals)] / (VB + Deposits − Withdrawals) = [55 − (40 + 10)] / (40 + 10) = 5 / 50 = 10.0%. Treating the deposit as end-of-period gives (55 − 10 − 40) / 40 = 12.5%, and ignoring it gives (55 − 40) / 40 = 37.5% — both wrong for a beginning-of-period deposit.

**Q100. [LO8.21 | CM-EIP §8.6.1]**
A client deposits a large sum into her portfolio just before a market fall. For the year, her portfolio's dollar-weighted rate of return is −6% while its time-weighted rate of return is +3%. What best explains the difference?
A. The manager performed badly, as shown by the negative dollar-weighted return.
B. The time-weighted return is the one affected by the timing of cash flows.
C. The two measures must be equal over any full year, so one of them is wrong.
D. The dollar-weighted return is the internal rate of return, so it is affected by the size and timing of the client's cash flows — the large deposit just before the fall dragged it down — while the time-weighted return strips out cash-flow effects.
**Answer: D.** The dollar-weighted return (DWR) equates the present value of all cash flows, including the ending value, with the beginning value — it is the IRR — and is strongly influenced by the size and timing of cash flows, over which the manager has no control. The time-weighted return links sub-period returns measured before each cash flow, so the deposit's timing does not affect it. The manager's stock performance (+3% TWR) was positive; the client's experience (−6% DWR) reflects when she added money.

**Q101. [Calculation] [LO8.22 | CM-EIP §8.6.1]**
A portfolio is worth $200,000 at the start of a quarter. Just before a $20,000 deposit in the middle of the quarter it is worth $210,000; immediately after the deposit it is worth $230,000. At the end of the quarter it is worth $241,500. What is the time-weighted rate of return for the quarter?
A. 10.25%.
B. 10.75% — the simple return on the starting value after allowing for the deposit.
C. 10.00% — the two sub-period returns added together.
D. 5.00% — the first-half return only.
**Answer: A.** The time-weighted return requires the portfolio value before each cash flow. First half: (210,000 − 200,000) / 200,000 = 5.00%. Second half: (241,500 − 230,000) / 230,000 = 11,500 / 230,000 = 5.00%. Linking the sub-period returns: [(1 + 0.05)(1 + 0.05)] − 1 = 1.1025 − 1 = 10.25%. Adding the sub-period returns (10.00%) is wrong — returns compound by linking, not adding.

**Q102. [LO8.23 | CM-EIP §8.6.1]**
Two questions are asked about a portfolio: (i) how skilful was the manager, and (ii) what return did the client actually experience, given when she added and withdrew money? Which return measures answer them?
A. (i) dollar-weighted return; (ii) time-weighted return.
B. (i) time-weighted return; (ii) time-weighted return — the dollar-weighted return is never used.
C. (i) time-weighted return; (ii) dollar-weighted return.
D. (i) dollar-weighted return; (ii) dollar-weighted return — the time-weighted return is never used.
**Answer: C.** The dollar-weighted return is inappropriate for evaluating a portfolio manager because it is driven by the size and timing of cash flows, over which the manager has no control; the time-weighted return is the right measure of the manager's performance. Conversely, the dollar-weighted return — the IRR — is the measure of the client's actual experience, since it reflects when the client put money in and took money out.

**Q103. [Calculation] [LO8.24 | CM-EIP §8.6.1]**
A portfolio is worth $8,000,000 at the start of a 30-day month. The client makes a single cash inflow of $600,000 on day 12, and the portfolio is worth $9,000,000 at the end of the month. Using the Modified Dietz method, what is the portfolio's return for the month?
A. 5.00% — the cash flow is given no time weight.
B. 4.78%.
C. 4.65% — the full cash flow is added to the beginning value.
D. 12.50% — the cash flow is ignored entirely.
**Answer: B.** Modified Dietz: Rp = (VE − VB − CF) / (VB + WCF), where WCF = Σ CFi × (n − ti)/n. Weighted cash flow = 600,000 × (30 − 12)/30 = 600,000 × 18/30 = 360,000. Return = (9,000,000 − 8,000,000 − 600,000) / (8,000,000 + 360,000) = 400,000 / 8,360,000 = 4.78%. The method assumes a constant rate of return over the period, so no valuation is needed on the date of the cash flow; its disadvantage is that it is a less accurate estimate of the true time-weighted return.

**Q104. [LO8.25 | CM-EIP §8.6.1]**
A firm that has managed money for 12 years presents a five-year performance record computed using money-weighted (dollar-weighted) returns. Which Global Investment Performance Standards requirements does this breach?
A. Only the record-length requirement: the firm should show a 10-year record, but money-weighted returns are acceptable.
B. Only the return-method requirement: time-weighted returns are required, but a five-year record is acceptable for a 12-year-old firm.
C. Neither: GIPS allows money-weighted returns and a five-year record.
D. Both: GIPS requires time-weighted returns, and a firm more than 10 years old must present a 10-year record (otherwise the record since inception).
**Answer: D.** GIPS — the single global standard approved by the CFA Institute Board of Governors on 4 February 2005 — requires total return, the use of the time-weighted return, valuation at least monthly with geometrically linked returns, and annual returns for all years, with a 10-year record where the firm is more than 10 years old. A 12-year-old firm showing five years of money-weighted returns breaches both requirements.

**Q105. [Calculation] [LO8.26 | CM-EIP §8.6.2]**
A portfolio returned 12% over the year with a standard deviation of 16%. The risk-free rate is 4%. What is the portfolio's Sharpe ratio?
A. 0.50.
B. 0.75 — the risk-free rate is not deducted from the return.
C. 2.00 — the excess return is divided into the standard deviation instead of by it.
D. 0.67 — the excess return is divided by the portfolio return instead of its standard deviation.
**Answer: A.** Sharpe ratio = (Rp − Rf) / σp = (12% − 4%) / 16% = 8% / 16% = 0.50. It is the excess return per unit of total risk (standard deviation): the higher the Sharpe ratio, the better the performance.

**Q106. [Calculation] [LO8.26 | CM-EIP §8.6.2]**
A portfolio returned 13.5% over the year. Its beta is 1.5, the risk-free rate is 3% and the market return is 11%. What is the portfolio's Jensen's alpha, and which definition of risk does the Treynor ratio use?
A. Alpha +1.5%, and the Treynor ratio uses systematic risk.
B. Alpha −1.5%, and the Treynor ratio uses total risk.
C. Alpha −1.5%, and the Treynor ratio uses systematic risk.
D. Alpha +1.5%, and the Treynor ratio uses total risk.
**Answer: C.** CAPM-expected return = Rf + β(Rm − Rf) = 3% + 1.5 × (11% − 3%) = 3% + 12% = 15%. Jensen's alpha = actual − expected = 13.5% − 15% = −1.5%, so the portfolio underperformed on a risk-adjusted basis. The Treynor ratio = (Rp − Rf) / βp uses systematic risk (beta), whereas the Sharpe ratio uses total risk (standard deviation).

**Q107. [Calculation] [LO8.27 | CM-EIP §8.6.3]**
A managed portfolio holds 60% equities (actual return 8%) and 40% bonds (actual return 3%), giving a total return of 6.00%. Its bogey (benchmark) portfolio holds 50% equities (benchmark return 6%) and 50% bonds (benchmark return 2%), giving 4.00%. How much of the 2.00% excess return is attributable to the asset allocation decision?
A. 2.00% — the whole excess return is asset allocation.
B. 1.60% — that is the security selection contribution.
C. 0.40%.
D. 0.60% — that is only the equities leg of the asset allocation contribution.
**Answer: C.** Asset allocation compares the managed and bogey weights multiplied by the benchmark return: equities (0.60 − 0.50) × 6% = 0.60%; bonds (0.40 − 0.50) × 2% = −0.20%; total 0.60% − 0.20% = 0.40%. The remaining 1.60% is security selection — actual weights times excess returns: equities (8% − 6%) × 0.60 = 1.20% and bonds (3% − 2%) × 0.40 = 0.40%. Excess return 2.00% = allocation 0.40% + selection 1.60%. ---

### Chapter 9 — Questions 108–122

**Q108. [LO9.1 | CM-EIP §9.2]**
Priya wants a fund that simply follows the Straits Times Index, with no manager picking stocks or timing the market. She wants to be able to buy and sell it during trading hours, like a listed share. Which statement best describes the product she is looking for?
A. An actively managed fund whose manager selects stocks to beat the index.
B. An exchange-traded fund (ETF) — a passively managed fund designed to track the performance of a specific index or fixed basket of securities, involving no active management of securities, whose units trade during trading hours like any listed security.
C. A mutual fund that can only be bought or sold at the end of the day with the fund manager.
D. A fund that guarantees to deliver exactly the index return, with its market price always equal to its net asset value.
**Answer: B.** ETFs are funds designed to track the performance of specific indices, or fixed baskets of stocks or debt securities, and differ from most open-end and closed-end funds because they involve no active management. ETF units can be bought and sold during trading hours like any listed security, unlike mutual funds, which can only be bought or sold at the end of the day with the fund manager. There is no guarantee of the index return: NAV per unit is determined at the daily close and represents fair value, but the market price can deviate from NAV because of investor sentiment affecting supply and demand.

**Q109. [LO9.2 | CM-EIP §9.2.2]**
Marcus runs a portfolio in which most of the money sits in a broad-market ETF that mimics a wide index, while smaller allocations go into higher-risk securities that offer potentially higher returns. Which ETF investment strategy is he using?
A. Cash equitisation — converting idle cash to equities through ETFs to minimise the cash drag on a portfolio.
B. Hedging — using ETFs to offset other risks in the portfolio.
C. A core-satellite allocation — a core mimicking a broad index, with satellites of higher-risk securities offering potentially higher return.
D. Short-term tactical trading only, with no long-term core holding.
**Answer: C.** The guide lists core-satellite allocations as an ETF strategy: a core mimicking a broad index, with satellites of higher-risk securities offering potentially higher return. Cash equitisation is converting cash to equities to minimise cash drag, and hedging is a separate listed strategy; neither describes a broad-index core plus higher-risk satellites.

**Q110. [LO9.3 | CM-EIP §9.2.4, §9.2.5]**
Hui Min compares an ETF with an actively managed unit trust. Which pairing of an ETF advantage with an ETF risk is correct?
A. Advantage: annual management fees normally less than 1%, against 1–2% for actively managed unit trusts, with no initial charges or redemption fees, and holdings are transparent; risk: a synthetically replicated ETF carries counterparty risk because it uses swaps or derivatives.
B. Advantage: ETF units always trade exactly at net asset value, so there is no market risk.
C. Advantage: physical ETFs have smaller tracking error than synthetic ETFs; risk: synthetic ETFs carry no counterparty risk.
D. Advantage: ETF fees are normally 1–2%, higher than actively managed unit trusts, and holdings are disclosed only once a year.
**Answer: A.** ETF advantages include low costs (annual management fees normally less than 1% against 1–2% for actively managed unit trusts, with no initial charges or redemption fees) and transparency (investors always know the basket of securities, whereas unit trusts usually disclose holdings only quarterly, semi-annually or annually). On risks, tracking error is greater in physical ETFs than in synthetic ETFs, because synthetic ETFs achieve more precise tracking using swaps and derivatives — but that brings counterparty risk, because the derivative counterparty might default.

**Q111. [LO9.4 | CM-EIP §9.3]**
Arjun invests in a fund that pools money from many different investors to be invested and managed by a fund manager. The cash and investments are registered in the name of, and held by, an independent trustee, and a trust deed sets out the aims, objectives, charges and basic rules of operation. What is this product?
A. A unit trust — a collective investment scheme that pools funds from different investors to be invested and managed by one or more fund managers under the care of an independent trustee.
B. A direct shareholding in a single listed company.
C. A limited partnership in which Arjun is a general partner managing the assets himself.
D. A bank fixed deposit held in Arjun's own name.
**Answer: A.** A unit trust is a CIS that pools funds from different investors to be invested and managed by one or more fund managers under the care of an independent trustee. In Singapore the Code on CIS sets out best practice on management, operation and marketing that trustees and managers are expected to observe. The trustee holds the trust's cash, shares and other investment assets and safeguards investors, ensuring managers operate within the trust deed; the managers neither hold the investments nor issue or redeem units.

**Q112. [LO9.5 | CM-EIP §9.1, §9.3.3]**
Fund P issues units continuously: investors buy new units and sell units back through the trustee, and the price is determined by net asset value. Fund Q has a fixed number of units, is traded on the exchange, and its price is determined by market demand and supply as well as fund performance. Which statement correctly distinguishes them?
A. Fund P is a closed-end investment trust and Fund Q is an open-end unit trust.
B. Fund P is an open-end unit trust and Fund Q is a closed-end investment trust / investment company — the company form can only pay dividends out of profits, with restrictions on return of capital, unlike a trust structure.
C. Both funds are open-end unit trusts, because both pool investors' money.
D. Both funds are closed-end investment trusts, because both are priced by the market.
**Answer: B.** Under §9.3.3, an open-end trust issues units continuously and its price is determined by NAV (fund performance net of management fees), while a closed-end fund has a fixed number of units and its price is determined by market demand and supply as well as fund performance. The closed-end company form is the investment-trust / investment-company structure (a Sicaf in Luxembourg terminology, for a closed-end investment company); §9.1 notes a company can only pay dividends out of profits and faces restrictions on return of capital, which is why the VCC structure was introduced. In Singapore most unit trusts are open-end and not listed, while closed-end funds do not issue fresh units.

**Q113. [LO9.6 | CM-EIP §9.3.5]**
Siti holds units in an income fund. Her risk appetite rises from low to moderate, so she wants to move into an equity fund without selling holdings company by company and starting again from scratch. Which advantage of investing in unit trusts does this illustrate?
A. Lower transaction costs from the manager trading large blocks.
B. Security, because assets are legally held by an independent trustee rather than the fund manager.
C. Small capital outlay, because an initial investment of $1,000 to $5,000 is affordable.
D. Flexibility — holders can switch between a "family of funds" within the same family, responding to changes in plans and markets, for example switching from an income fund to an equity fund if the plan changes from low to moderate risk.
**Answer: D.** Flexibility is a stated advantage of unit trusts: holders can switch between a family of funds within the same family, responding to changes in plans and markets. The other options are genuine advantages too — security via the independent trustee, small outlay of $1,000–$5,000, and lower transaction costs from large-block trading — but they are not what Siti's move illustrates.

**Q114. [LO9.7 | CM-EIP §9.3.7]**
Elena wants to park cash for less than a year, earn competitive money market rates, have interest credited daily, and pay no sales or redemption charge (she accepts she will still pay a management fee). Which type of unit trust fund suits her?
A. A money market fund — it holds short-term (typically under one year) fixed income instruments such as bank certificates of deposit, commercial paper and Treasury bills; interest is earned and credited daily; investors normally pay no sales or redemption charge but do pay a management fee.
B. An equity fund, which invests in equity securities and may specialise in particular sectors or regions.
C. A capital guaranteed fund, which invests most capital in low-risk assets to preserve capital at maturity, with the balance in riskier assets for upside.
D. A hedge fund, which employs derivatives, short selling and arbitrage and focuses on absolute returns.
**Answer: A.** Money market funds hold short-term (typically under one year) fixed income instruments — bank certificates of deposit, commercial paper, Treasury bills. Because of the large denominations in direct dealing, these funds give access to competitive money market rates. Interest is earned and credited daily, and investors normally pay no sales or redemption charge but do pay a management fee. A capital guaranteed fund's guarantee usually applies only if held to maturity, and a hedge fund is an alternative-investment strategy, not a cash-parking vehicle.

**Q115. [LO9.8 | CM-EIP §9.3.11, §9.3.16]**
Wei Jie evaluates two funds. Fund X returned 9% against its benchmark's 7%; Fund Y returned 10% against its benchmark's 12%. Both fact sheets show returns net of management fees, charted against the benchmark since inception with tables for the last 3 and 5 years. Which evaluation is correct?
A. Fund Y did better, because its absolute return of 10% is higher than Fund X's 9%.
B. The fund with the higher past return is guaranteed to do better in future, so past performance settles the choice.
C. Fund X did better — it beat its benchmark by 2 percentage points while Fund Y lagged its benchmark by 2 points; a fund should be judged on its return against its benchmark, checking that returns are shown net of management fees.
D. The funds should be compared on gross returns only, ignoring both fees and benchmarks.
**Answer: C.** A unit trust is usually managed relative to a benchmark, so the investor can compare the fund's return against it: if the fund's return is higher than the benchmark, the manager has done well. Fund X beat its benchmark (9% vs 7%) while Fund Y lagged (10% vs 12%), so X did better despite the lower absolute return. Performance is typically charted against the benchmark since inception, with a table over the last 3 or 5 years, and the investor should check whether returns are shown net of management fees — most fact sheets indicate net returns. Past performance is no guarantee of future performance.

**Q116. [LO9.9 | CM-EIP §9.3.10]**
Nurul buys units in a load fund and sells them 30 days later. The fund charges her a fee on the sale. Which fee is this, and why does it apply?
A. A front-end load — a sales commission charged when units are bought, usually 1.5% to 5% of NAV.
B. A back-end load (realisation charge / redemption fee) — charged when holders sell; it may be waived if units have been held beyond a stipulated period (for example 60 days), and its purpose is to discourage selling right after buying, avoiding the transaction costs of frequent securities sales to meet redemptions. Nurul sold after only 30 days, so the waiver does not apply.
C. The annual management fee — typically 0.5% to 2.0% of NAV, accrued daily and debited directly from the trust's asset value.
D. A switching fee of about 1%, charged when switching between sub-funds under an umbrella structure.
**Answer: B.** Some funds impose a realisation charge or redemption fee — a back-end load — when holders sell, which may be waived if units have been held beyond a stipulated period (for example 60 days). Its purpose is to discourage selling right after buying, avoiding the transaction costs of frequent securities sales to meet redemptions. A front-end load is charged on purchase (usually 1.5% to 5% of NAV); the management fee is annual (0.5% to 2.0% of NAV, accrued daily); the switching fee of about 1% applies on switching between sub-funds, not on a sale.

**Q117. [Calculation] [LO9.10 | CM-EIP §9.3.12, §9.3.13]**
A fund holds securities of $12,000,000 and other fund assets of $500,000. Its liabilities, including management fees, are $300,000, and it has debt used for leveraging of $200,000. There are 5,000,000 units outstanding. Purchase expenses are $0.04 per unit, cash held plus accrued income is $0.06 per unit, and the manager's initial charge is $0.10 per unit. What is the offer price per unit?
A. $2.40
B. $2.50
C. $2.60
D. $2.68
**Answer: C.** Step 1 — NAV per unit. NAV = (Fund securities + Other fund assets − Liabilities including management fees − Debt used for leveraging) / Total fund units outstanding = ($12,000,000 + $500,000 − $300,000 − $200,000) / 5,000,000 = $12,000,000 / 5,000,000 = $2.40. Step 2 — offer price. The offer price is the price at which an investor can buy units: NAV per unit, plus expenses related to purchasing securities, plus cash held and accrued income, plus the manager's initial charge = $2.40 + $0.04 + $0.06 + $0.10 = $2.60. Option A ($2.40) is the NAV alone; option B ($2.50) omits the initial charge; option D ($2.68) wrongly adds the leverage debt instead of subtracting it, giving NAV of $2.48 before the same $0.20 of additions.

**Q118. [LO9.11 | CM-EIP §9.4.1]**
Fund P invests 80% of its assets in income-producing retail malls and offices, is listed on the SGX Mainboard, and operates as a passive vehicle collecting rent. Fund Q invests 60% in income-producing real estate and the rest in listed equities. Which statement is correct?
A. Both funds qualify as REITs, because both hold some income-producing real estate.
B. Neither fund qualifies as a REIT.
C. Only Fund Q qualifies as a REIT.
D. Only Fund P qualifies as a REIT — the Code on CIS requires a minimum of at least 75% of the fund to be invested in income-producing real estate.
**Answer: D.** A REIT is a CIS pooling individual investors' funds to invest in real estate assets, governed by Appendix 6 — Property Funds in the Code on CIS. The Code requires a minimum of at least 75% of the fund to be invested in income-producing real estate. Fund P, at 80%, meets this; Fund Q, at 60%, does not. A simple way to understand a REIT is as a passive investment vehicle engaged in real estate investment for rent collection, and REITs are listed on the SGX Mainboard (unlisted property trusts, constituted the same way, are not publicly traded).

**Q119. [LO9.12 | CM-EIP §9.5.4]**
Vehicle R has a trustee and a manager who are separate and independent, and it makes passive investments in properties for rental income. Vehicle S has a single trustee-manager who both holds the assets and manages them, and it actively operates a port infrastructure business. Which statement correctly identifies them?
A. Vehicle R is a listed REIT and Vehicle S is a business trust.
B. Vehicle R is a business trust and Vehicle S is a listed REIT.
C. Both vehicles are listed REITs, because both pool investors' money.
D. Both vehicles are business trusts, because both are constituted by a trust deed.
**Answer: A.** Both are constituted by a trust deed and unit holders have beneficial interests rather than individual legal ownership, but they differ in structure and objective: a listed REIT has a trustee and manager who are separate and independent and makes passive investments, while a business trust has a single responsible entity — the trustee-manager — and is permitted to actively engage in business operation. The same comparison table gives the further differences: a REIT must distribute a minimum of 90% of annual income and is subject to a 45% gearing limit under the Securities and Futures Act and the Code on CIS, while a business trust has no mandatory minimum distribution and no gearing limit under the Business Trusts Act 2004.

**Q120. [LO9.13 | CM-EIP §9.6]**
A hospitality group lists a stapled security that staples hotel-owning REIT units to units in the hotel-operating business trust. An investor buys the stapled security as a single instrument. Which statement is correct?
A. The issuer need only follow the REIT regulations, because the business trust component is incidental.
B. The issuer is bound by the regulations specific to each security being stapled: it must pay the minimum 90% of annual income to REIT unit holders to qualify for favourable tax treatment, but is free from paying dividends on the business trust component — and such a stapled security cannot be marketed as a REIT.
C. The stapled security can be marketed as a REIT, because its largest component is a REIT.
D. The investor can trade the REIT units and the business trust units separately on the exchange.
**Answer: B.** A stapled security is created when an issuer lists two or more securities traded as a single instrument on the exchange, sharing the same investor — for example, several Singapore REITs in the hospitality sector stapled to a business trust. Stapled securities combine a passive income security with an active income security. The issuer is bound by the regulations specific to each security being stapled: if a REIT and a business trust are stapled, the issuer must pay the minimum 90% of annual income to REIT unit holders to qualify for favourable tax treatment, but is free from paying dividends on the business trust. Such stapled securities cannot be marketed as REITs.

**Q121. [LO9.14 | CM-EIP §9.8.2, §9.10.3]**
A client wants two things: a fund that aims for positive returns regardless of market direction and may use short selling and leverage to do so, and a product that protects her against outliving her income in retirement. Which statement correctly describes the suitable products?
A. A hedge fund, which targets an index benchmark and cannot use leverage; and an annuity, which protects against premature death.
B. A conventional fund, which captures alpha only and targets absolute returns; and life insurance, which protects against living longer than expected.
C. A hedge fund, which targets absolute returns (unlike a conventional fund's index-based benchmark target), can use short selling or derivatives to reduce its beta sensitivity and can be leveraged significantly; and a life annuity, which protects against loss of income from excessive longevity — the opposite of life insurance, which protects against loss of income from premature death.
D. A hedge fund, which is necessarily hedged and therefore net market-neutral and more transparent than a conventional fund; and an annuity, which protects against premature death.
**Answer: C.** Hedge funds differ from conventional funds in the guide's comparison: they capture alpha (freedom to hedge away or reduce beta) versus alpha + beta, have absolute return targets versus index-based benchmark targets, can be leveraged significantly versus limited ability to use debt, and are less transparent with longer unwind times. The name is a misnomer — a hedge fund is not necessarily hedged and may take directional bets and be net long or short. On the second need, a life annuity protects against loss of income from excessive longevity, while life insurance protects against loss of income from premature death — exact opposites.

**Q122. [LO9.15 | CM-EIP §9.3.7, §9.11]**
A fund manager runs a unit trust included under the CPF Investment Scheme (CPFIS). What must the manager do for the CPF Board?
A. Report vital information once a year to SGX.
B. Nothing — CPF members track the fund's performance themselves.
C. Report vital information monthly to MAS only.
D. Report vital information quarterly to the CPF Board, and a funds-tracking company is appointed to publish information on the performance and risks of CPFIS-included funds.
**Answer: D.** Investors in Singapore can use CPF funds to invest in products under the CPF Investment Scheme. To protect CPF members, managers of CPF monies must report vital information quarterly to the CPF Board, and a funds-tracking company is appointed to publish information on performance and risks of CPFIS-included funds. For a fund to be included under CPFIS and eligible to take CPF monies it must also meet the CPFIS funds admission criteria, including being in the top quartile of the global peer group and benchmarking total expense ratios to the median of CPFIS funds in the respective risk class.

### Chapter 10 — Questions 123–127

**Q123. [LO10.1 | CM-EIP §10.1.1]**
A company issues bonds with warrants attached as a sweetener. A client asks what the warrants are and how long they last compared with ordinary equity call options. Which answer is correct?
A. A warrant is a derivative giving the holder the right, but not the obligation, to buy or sell a specified number of securities at a fixed price within a specified time period; company warrants may be considered long-dated equity call options, typically with maturities of a few years, while call options expire within a few months.
B. A warrant is an obligation to buy the underlying shares at the fixed price, whether or not the holder wishes to.
C. A warrant expires within a few months like an equity call option, and warrant holders receive dividends on the underlying shares.
D. A warrant cannot be detached from the bond it was issued with and can never be traded separately.
**Answer: A.** A warrant is a derivative instrument giving the holder (buyer) the right, but not the obligation, to buy or sell a specified number of securities — usually the issuer's common share — at a fixed price (the exercise or strike price) within a specified time period. Company warrants may be considered long-dated equity call options: while call options expire within a few months, warrants typically have maturities of a few years. Warrants are generally issued as a sweetener attached to bonds or rights issues, letting the issuer obtain financing at a lower interest rate, and can be detached from the host security and traded separately. When warrants are exercised, new shares are issued, diluting earnings; warrant holders do not receive dividends unless they convert.

**Q124. [Calculation] [LO10.2 | CM-EIP §10.2.1, §10.2.2, §10.2.3]**
A warrant has an underlying share price of $5.20, an exercise price of $4.80, a conversion ratio of 2 warrants per share, and a warrant price of $0.35. What is the warrant premium, in percentage terms?
A. 3.85%
B. 5.77%
C. 6.25%
D. −0.96%
**Answer: B.** Step 1 — intrinsic value = (SP − EP) / n = ($5.20 − $4.80) / 2 = $0.40 / 2 = $0.20 per warrant; the warrant is in-the-money because the share price exceeds the exercise price. Step 2 — conversion price = n × WP + EP = 2 × $0.35 + $4.80 = $0.70 + $4.80 = $5.50, the total price to convert warrants into one share. Step 3 — warrant premium ($) = n × WP + EP − SP = $5.50 − $5.20 = $0.30. Step 4 — warrant premium (%) = $0.30 / $5.20 × 100 = 5.77%. (The warrant premium is the extra cost of the warrant route versus buying the share outright — it is not the option price.) Option A (3.85%) is the intrinsic value divided by the share price ($0.20 / $5.20); option C (6.25%) divides the premium by the exercise price instead of the share price ($0.30 / $4.80); option D (−0.96%) ignores the conversion ratio, using ($0.35 + $4.80 − $5.20) / $5.20.

**Q125. [Calculation] [LO10.3 | CM-EIP §10.2.4]**
A share trades at $6.00. A warrant on that share trades at $0.50, the conversion ratio is 2 warrants per share, and the exercise price is $5.00. What is the gearing ratio?
A. 12.0x
B. 0.17x
C. 5.0x
D. 6.0x
**Answer: D.** Gearing ratio = SP / (n × WP) = $6.00 / (2 × $0.50) = $6.00 / $1.00 = 6.0x. Gearing compares the price of the warrants needed to convert to one share relative to the share price, and gives investors the ability to participate in the underlying share's performance at a lower price. Option A (12.0x) ignores the conversion ratio ($6.00 / $0.50); option B (0.17x) inverts the ratio; option C (5.0x) wrongly uses the exercise price instead of the share price ($5.00 / (2 × $0.50)).

**Q126. [LO10.4 | CM-EIP §10.2.5]**
A warrant has a conversion ratio of 1. The underlying share price is $4.00 and the exercise price is $3.00. What are the warrant's minimum and maximum values in an arbitrage-free market?
A. Minimum $0, maximum $4.00.
B. Minimum $1.00, maximum $1.00.
C. Minimum $1.00, maximum $4.00.
D. Minimum $0, maximum $3.00.
**Answer: C.** The minimum value is the intrinsic value: SP − EP if SP > EP, and 0 if SP ≤ EP. Here the share price ($4.00) exceeds the exercise price ($3.00), so the warrant is in-the-money and the minimum value is $4.00 − $3.00 = $1.00. The maximum value is the underlying share price, $4.00 — the maximum-price line sits at a 45-degree angle to the x-axis. Option A gives the minimum for an out-of-the-money warrant; option D mistakes the exercise price for the maximum value.

**Q127. [LO10.5 | CM-EIP §10.3]**
Which pair of changes would both tend to increase a call warrant's price (and hence its premium over intrinsic value)?
A. A higher exercise price and a larger warrant issue size.
B. Higher expected dividends on the underlying share and a shorter remaining life.
C. A higher exercise price and higher expected dividends.
D. A longer remaining life and higher price volatility of the underlying share.
**Answer: D.** The guide's factor table for company warrants: remaining life ↑ → price ↑ (a longer life gives more chance for an out-of-the-money warrant to become attractive, and a warrant loses speculative value as life shortens); price volatility ↑ → price ↑ (warrants benefit from upside but limit downside). The other pairs both push the price down: exercise price ↑ → price ↓; issue size ↑ → price ↓ (larger potential earnings dilution); dividend expectations ↑ → price ↓ (holders receive no dividends, so call warrants "lose out"). For completeness, the remaining factors are: underlying share price ↑ → price ↑; leverage opportunities ↑ → price ↑; interest rates ↑ → call warrant price ↑ (interest saved on the smaller capital outlay). ---

### Chapter 11 — Questions 128–135

**Q128. [LO11.1 | CM-EIP §11.1.2]**
A client asks her adviser why a technical analyst is recommending a share whose latest earnings missed forecasts and whose balance sheet looks weak. The analyst replies that the share's price has been making higher highs and higher lows on rising volume, and that its fair value is beside the point. Which statement best reflects the technical analyst's position?
A. The analyst's position is consistent with technical analysis: prices are determined only by supply and demand — affected by rational and irrational factors — and technical analysts study past price and volume to detect shifts in that balance, not to judge fair value.
B. The analyst is wrong to ignore fair value, because technical analysis values a security by discounting its future cash flows.
C. The analyst's position is consistent with technical analysis only if the higher highs are confirmed by both the industrial and transportation averages.
D. The analyst is wrong, because technical analysis assumes prices adjust instantly to new information, so a trend cannot persist after an earnings miss.
**Answer: A.** Technical analysis forecasts price fluctuations from historical market data (price and volume); it holds that market value is determined only by supply and demand, which are affected by rational and irrational factors (hopes, fears, moods, guesses), and that trends persist. It is not concerned with a security's fair value — that is fundamental analysis. (C describes Dow Theory confirmation, not the general philosophy; D states the EMH view, the opposite of the technical assumption that information is priced gradually.)

**Q129. [LO11.2 | CM-EIP §11.1.3]**
A breakout rule published in a popular trading newsletter worked well for two years, then stopped producing excess returns just as thousands of retail traders began using it. A colleague blames the random walk theory. Which explanation best fits the guide?
A. The rule stopped working because prices follow a random walk, so past prices can never predict future prices — the only challenge the guide recognises.
B. The rule stopped working because the Efficient Market Hypothesis proves that prices adjust slowly to new information, leaving no trend to exploit.
C. The rule stopped working because chart reading is objective, so every trader reached the same conclusion at the same moment.
D. The rule was negated by its own popularity: when many participants act on the same rule at the same time, some act first and prices move quicker than expected, so only the earliest benefit and competition eventually negates the rule's value.
**Answer: D.** The guide gives three challenges: the Efficient Market Hypothesis (prices adjust rapidly to new information), random walk theory (price movements independent over time), and the self-defeating popularity of a rule — many acting at once move prices faster than expected, so only the earliest benefit. Chart reading is subjective, not objective (C is backwards), and the EMH says prices adjust rapidly, not slowly (D is backwards).

**Q130. [LO11.3 | CM-EIP §11.2.3, §11.2.5]**
A trader watches a share whose MACD (12,26,9) has just crossed and fallen below its signal line, while the share price sits close to the upper Bollinger Band (a 20-day simple moving average ± two standard deviations). What is the best interpretation?
A. Bullish momentum is building and the share is oversold.
B. The MACD cross is bullish, but the Bollinger Band position shows the share is oversold.
C. The MACD cross below the signal line is a bearish signal, and a price near the upper band suggests the market is overbought — both point to a possible trend reversal or price correction.
D. The MACD cross is meaningless because MACD uses only two time parameters, and Bollinger Bands are plotted at one standard deviation from the moving average.
**Answer: C.** When the MACD crosses and falls below the signal line it is a bearish signal (possibly time to sell); crossing and rising above is bullish. MACD (12,26,9) depends on three EMA time parameters. Bollinger Bands are plotted at two standard deviations above and below (typically) a 20-day SMA; the closer prices move to the upper band, the more overbought the market, and an overbought market may be primed for a reversal or correction.

**Q131. [LO11.4 | CM-EIP §11.3]**
A share has bounced off S$4.00 four times in three months and has stalled at S$5.00 three times, each time on heavy selling. This week it closes at S$5.20 on volume twice its daily average. What is the best interpretation?
A. S$4.00 is the resistance level and S$5.00 is the support level, and the close at S$5.20 is a bearish breakout.
B. The move to S$5.20 is a breakout below support and is bearish, because any move through a level reverses the primary trend.
C. Support and resistance levels cannot be identified until a trend channel breaks, so no conclusion can be drawn from the S$4.00 and S$5.00 levels.
D. S$4.00 is the support level, where a substantial increase in demand is expected, and S$5.00 is the resistance level, where sellers take profits — the market "overhang". A breakout above resistance is bullish.
**Answer: D.** A support level is a price range where a substantial increase in demand is expected (buyers who missed the opportunity earlier find prices attractive); a resistance level is where buyers refuse to pay higher prices while sellers are attracted to take profits — the supply "overhang". A movement through and beyond either level is a breakout: above resistance is bullish, below support is bearish. Here the share broke above the S$5.00 resistance on heavy volume, a bullish breakout.

**Q132. [LO11.5 | CM-EIP §11.5.3]**
A growth share rises 8% in a week on volume three times its daily average. Its RSI reads 68, and it has spent most of the past six months with an RSI between 65 and 75 while trending steadily higher. A junior analyst recommends selling immediately because the RSI is nearly overbought. What is the best response?
A. Sell immediately: any RSI above 60 is an overbought sell signal.
B. Do not sell on the RSI alone: the RSI is less useful when trends are steady and consistent — constant demand can keep a growth stock's RSI persistently high, and that should not be read as a sell signal. The rise on heavy volume is bullish, and 68 is still below the 70 overbought threshold.
C. Buy more: an RSI of 68 is an oversold signal, and heavy volume confirms the buying opportunity.
D. Do nothing: the RSI is only useful for surprises and shocks, so a reading of 68 in a steady trend proves the share is fairly valued.
**Answer: B.** The RSI ranges from 0 to 100; above 70 is overbought, below 30 oversold. But the RSI is less useful when trends are steady and consistent: where constant demand keeps a growth stock's RSI persistently high, the level should not be read as a sell signal — instead look to accumulate when the RSI is not as high. A price rise on heavy volume is bullish. (A contrarian buys at an RSI of 20–30 and takes profit at 70–80; 68 is neither.)

**Q133. [LO11.6 | CM-EIP §11.6.1]**
A share forms a head and shoulders pattern at a market peak. The left shoulder tops at S$11.00 on heavy volume, the head peaks at S$12.00 on high volume, and the right shoulder tops at S$11.20 on noticeably less volume. The neckline is at S$10.00. The share then closes at S$9.65. What is the position, and what is the implied target?
A. The breakout is not confirmed, because confirmation requires a close 3% below the head, not the neckline; no target can be measured.
B. The pattern is a continuation pattern, so the prevailing uptrend should be assumed to continue.
C. The breakout is confirmed — the close at S$9.65 is 3.5% below the S$10.00 neckline, more than the 3% required — and the potential decline equals the head-to-neckline distance of S$2.00 projected downward from the neckline, giving a target of S$8.00.
D. The breakout is confirmed, but the target is S$10.00, because the price returns to the neckline after a breakout.
**Answer: C.** Head and shoulders is a reversal pattern at a market peak: left shoulder on heavy volume, head higher than the left shoulder on high volume, right shoulder on less volume failing to reach the head. A breakout is confirmed if the price closes below the neckline by 3% of the share price: S$10.00 × 3% = S$0.30, so a close below S$9.70 confirms it — S$9.65 is 3.5% below. The potential magnitude of decline is the distance between the head and the neckline (S$12.00 − S$10.00 = S$2.00) projected downward from the neckline: S$10.00 − S$2.00 = S$8.00.

**Q134. [LO11.7 | CM-EIP §11.7]**
A technical analyst applying Elliott Wave Theory notes that a share index has just completed a five-wave advance from its low. She expects the next phase to be a three-wave retreat, with turning points often occurring at Fibonacci support levels. Which statement is correct?
A. Elliott Wave Theory, proposed by R.N. Elliott in 1938, holds that prices move in cycles of a 5-wave advance and a 3-wave retreat, exhibiting the Golden Ratio of 1.618, with turning points often at Fibonacci levels such as 61.8.
B. Elliott Wave Theory holds that prices move in cycles of a 3-wave advance and a 5-wave retreat, exhibiting the Golden Ratio of 0.618.
C. The Fibonacci series runs 0, 1, 2, 3, 5, 8, 13, 21, …, and the ratio of consecutive numbers approaches 2.718.
D. Elliott Wave Theory predicts that after a five-wave advance the market enters a five-wave advance of the same degree, with no retreat.
**Answer: A.** In 1938 R.N. Elliott proposed that prices move in cycles of waves and sub-sets of waves exhibiting the Golden Ratio, 1.618: each cycle comprises a 5-wave advance and a 3-wave retreat, and turning points are often at Fibonacci support and resistance levels (61.8, 161.8, and so on). The Fibonacci series is 0, 1, 1, 2, 3, 5, 8, 13, 21, …, each number the sum of the two preceding numbers, and the ratio of consecutive numbers (e.g. 21 ÷ 13) approaches 1.618 — not 0.618 or 2.718.

**Q135. [LO11.8 | CM-EIP §11.8]**
A hedge fund markets a new strategy as "mathematically proven — our model cannot lose money, because it is built on elegant statistical relationships." A risk manager objects, citing a famous failure. Which objection best reflects the guide's treatment of quantitative analysis?
A. Quantitative analysis is only about first-order price changes (delta), so any model that also uses second- and third-order derivatives is not quantitative analysis.
B. Quantitative analysis abstracts market reality into a financial model to identify price anomalies and arbitrage possibilities, and quants decompose price changes into second- and third-order derivatives — but Long Term Capital Management, a fund relying extensively on quantitative analysis, incurred huge losses despite the elegance and apparent mathematical robustness of its strategies, so elegance is no guarantee.
C. Quantitative analysis is used only in risk management, never in the front office, so a front-office trading model cannot be quantitative.
D. Quantitative analysis has no critics, and high frequency trading is unregulated because it relies on physical transmission speeds.
**Answer: B.** Quantitative analysis abstracts market reality (the economy, financial markets and their environment) into relations in a financial model, to identify price anomalies and arbitrage possibilities and to increase the speed of access to market information. It uses statistics and calculus; while less sophisticated traders look only at price changes, quants decompose them and look at second- and third-order derivatives, not just the first order (delta). Long Term Capital Management is the guide's cautionary example: huge losses despite elegant, apparently robust mathematics. High frequency trading is under intense scrutiny from regulators, and quants work in both the front office and risk management. ---

### Chapter 12 — Questions 136–149

**Q136. [LO12.1 | CM-EIP §12 — Case Studies]**
Priya Nair earns S$280,000 a year. Her net personal assets are S$2.4 million, including her residence, which is valued at S$1.3 million. She has no other financial-asset test information available. Applying the investor-classification framework, which statement is correct?
A. She is an accredited investor because her income exceeds S$300,000 a year.
B. She is an accredited investor because, with her residence capped at S$1 million, her net personal assets for the test are S$2.1 million — above the S$2 million threshold.
C. She is not an accredited investor, because her residence is worth more than S$1 million and must be excluded entirely from net personal assets.
D. She is an accredited investor because her net personal assets of S$2.4 million exceed the S$10 million entity threshold.
**Answer: B.** An individual is an accredited investor if net personal assets exceed S$2 million (with the residence capped at S$1 million), or financial assets exceed S$1 million, or income is at least S$300,000 in the preceding 12 months. Priya's income of S$280,000 is below S$300,000 (A is wrong). Her residence counts only up to S$1 million, so her net personal assets for the test are S$2.4m − (S$1.3m − S$1.0m) = S$2.1m, above S$2 million. The S$10 million test is for entities, not individuals (D is wrong).

**Q137. [Calculation] [LO12.2 | CM-EIP §12 — Case Studies]**
Daniel Koh, aged 40, considers investing in a fund with the following annual returns under different economic states: | State of economy | Probability | Return | |---|---|---| | Boom | 0.2 | 14% | | Normal | 0.6 | 7% | | Recession | 0.2 | −4% | What is the coefficient of variation of this investment?
A. 0.78
B. 0.85
C. 0.93
D. 1.24
**Answer: C.** Expected return E(R) = Σ p·r = 0.2(14%) + 0.6(7%) + 0.2(−4%) = 2.8% + 4.2% − 0.8% = 6.2%. Variance σ² = Σ p·(r − E(R))² = 0.2(14 − 6.2)² + 0.6(7 − 6.2)² + 0.2(−4 − 6.2)² = 0.2(60.84) + 0.6(0.64) + 0.2(104.04) = 12.168 + 0.384 + 20.808 = 33.36. Standard deviation σ = √33.36 = 5.78%. Coefficient of variation CV = σ / E(R) = 5.78% / 6.2% = 0.93.

**Q138. [LO12.3 | CM-EIP §12 — Case Studies]**
Strategists expect the European economy to slow over the next year while the European Central Bank keeps raising interest rates to fight inflation. Which asset classes are likely to do well in that phase?
A. Cyclical stocks and high-yield bonds.
B. Cash and leveraged real estate.
C. Growth stocks and precious metals.
D. Defensive stocks and investment grade bonds.
**Answer: D.** A slowdown with rising interest rates is characteristic of the late bull to early bear phase of the business cycle, in which defensive stocks and investment grade bonds are likely to do well. Cyclical stocks perform worse than the market when things turn down and high-yield issuers may default (A is the worst combination); real estate is typically leveraged and risky when rates are rising (B); growth stocks are less likely to meet growth expectations and may see P/E multiple contraction (C).

**Q139. [LO12.4 | CM-EIP §12 — Case Studies]**
A mid-cap stock falls 18% in a week with no new company information. The fund managers who sold first explain that they sold because they could not bear the thought of further losses on a position already down 12% — they say the pain of another loss outweighed any hope of an equal gain. Other managers then sold after seeing the first sales, and computer-driven strategies amplified the move. What is the root cause of the price fall?
A. Algorithmic trading, because computer-driven strategies executed most of the selling volume.
B. Herd instinct, because the later managers followed the crowd.
C. Cognitive bias, because the managers anchored on the original purchase price.
D. Loss aversion, because the first sellers were driven by the fear of further losses outweighing the prospect of an equal gain — that fear provided the original impetus, while the following and the algorithms only amplified it.
**Answer: D.** Loss aversion is the root cause here: the first sellers acted because the pain of a further loss outweighed the hope of an equivalent gain, with no new information and no independent analysis of value. Herd instinct (following the later sellers) and algorithmic trading may exacerbate a fall, but neither provided the original impetus in this scenario. There is no evidence the managers formed their conclusions through a faulty reasoning shortcut such as anchoring, so cognitive bias is not the root cause.

**Q140. [Calculation] [LO12.5 | CM-EIP §12 — Case Studies]**
An investor is tempted by THB 50 million of Thai government bonds. THB 1-year government bonds pay 5%, while Singapore banks charge 2% for investment-related loans. SGD/THB stands at 25.00. Ignoring bond price changes, what is the total gain in SGD if the exchange rate stays flat over the year?
A. SGD 100,000
B. SGD 40,000
C. SGD 60,000
D. SGD 140,000
**Answer: C.** The THB 50m purchase is funded by an SGD-equivalent loan of 50,000,000 / 25.00 = SGD 2,000,000. Annual interest expense is 2% × SGD 2,000,000 = SGD 40,000. Interest income is THB 2.5 million (5% of THB 50m), worth SGD 100,000 at the unchanged rate of 25.00. The face value converts back unchanged at SGD 2,000,000. Total gain = SGD 100,000 − SGD 40,000 = +SGD 60,000 — the pure interest pick-up of (5% − 2%) × SGD 2,000,000. (A counts only the interest income and forgets the funding cost; D adds the funding cost instead of subtracting it.)

**Q141. [Calculation] [LO12.5 | CM-EIP §12 — Case Studies]**
An investor is tempted by THB 50 million of Thai government bonds. THB 1-year government bonds pay 5%, while Singapore banks charge 2% for investment-related loans. SGD/THB stands at 25.00. Ignoring bond price changes, what is the total gain in SGD if the baht weakens against the SGD by 8% over the year?
A. −SGD 108,000
B. −SGD 160,000
C. SGD 60,000
D. SGD 92,000
**Answer: A.** The THB 50m purchase is funded by an SGD-equivalent loan of 50,000,000 / 25.00 = SGD 2,000,000. Annual interest expense is 2% × SGD 2,000,000 = SGD 40,000. Interest income is THB 2.5 million (5% of THB 50m). With the baht weakening 8%, the conversion rate is 25.00 / 0.92 = 27.1739. SGD-equivalent interest income is 2,500,000 / 27.1739 = SGD 92,000. The face value converts back at 27.1739: 50,000,000 / 27.1739 = SGD 1,840,000. Total gain = (1,840,000 − 2,000,000) + (92,000 − 40,000) = −SGD 160,000 + SGD 52,000 = −SGD 108,000. The carry trade is not profitable: the interest pick-up is overwhelmed by the currency depreciation. (For reference, with a flat rate the gain would be (5% − 2%) × SGD 2,000,000 = +SGD 60,000.)

**Q142. [Calculation] [LO12.5 | CM-EIP §12 — Case Studies]**
Using the same THB 50 million carry trade (THB bonds at 5%, SGD loan at 2%, starting SGD/THB 25.00), suppose that in a year SGD/USD is 0.70 and USD/THB is 40.00. Ignoring bond price changes, what is the total gain in SGD?
A. +SGD 60,000
B. −SGD 165,000
C. −SGD 108,000
D. +SGD 165,000
**Answer: B.** The cross rate is SGD/THB = 0.70 × 40.00 = 28.00 — the baht has weakened from 25.00 to 28.00 per SGD. The THB 50m face value converts back at 28.00: 50,000,000 / 28.00 = SGD 1,785,714. Interest income of THB 2.5 million converts at 28.00: 2,500,000 / 28.00 = SGD 89,286. Total proceeds are SGD 1,875,000 against the loan repayment of SGD 2,000,000 plus interest of SGD 40,000 = SGD 2,040,000. Total gain = 1,875,000 − 2,040,000 = −SGD 165,000: the currency loss overwhelms the interest pick-up. (A is the flat-rate gain; C is the gain if the baht weakens 8% to 27.1739; D is the same figure with the sign reversed.)

**Q143. [Calculation] [LO12.6 | CM-EIP §12 — Case Studies]**
A client is recommended Halcyon Robotics, whose shares trade at $60.00. Its EPS was $2.00 five years ago and is forecast at $4.50 in five years' time. Next year's EPS is forecast at $1.50. What is the prospective PEG ratio, and what action does it suggest?
A. PEG 0.95 — slightly undervalued, consider buying.
B. PEG 1.50 — fairly valued, hold.
C. PEG 2.27 — overvalued after accounting for growth, do not buy.
D. PEG 40.00 — the P/E alone shows the share is overvalued.
**Answer: C.** Prospective P/E = price / next-year EPS = $60.00 / $1.50 = 40.00x. Five-year compounded annualised EPS growth = [(4.50 / 2.00)^(1/5) − 1] × 100% = [2.25^0.2 − 1] × 100% = 17.61%. Prospective PEG = 40.00 / 17.61 = 2.27. A PEG well above 1 means the share is overvalued even after accounting for its expected growth, so the client should not buy on this measure. A high P/E alone does not prove overvaluation — it must be checked against growth with the PEG; here the check confirms overvaluation.

**Q144. [Calculation] [LO12.7 | CM-EIP §12 — Case Studies]**
A research team estimates a company's free cash flows to the firm (FCFF) as $100 million in Year 1, $110 million in Year 2 and $121 million in Year 3, with a terminal value of $1,500 million at the end of Year 3. The firm's weighted average cost of capital is 10%. What is the enterprise value?
A. $1,400 million
B. $1,510 million
C. $1,650 million
D. $1,831 million
**Answer: A.** Free cash flows to a levered firm are discounted at the WACC, because capital comes from all sources. Enterprise value = PV of the FCFFs in the projection period + PV of the terminal value. PV Year 1 = 100 / 1.10 = $90.91m. PV Year 2 = 110 / 1.10² = 110 / 1.21 = $90.91m. PV Year 3 = 121 / 1.10³ = 121 / 1.331 = $90.91m. PV of terminal value = 1,500 / 1.331 = $1,126.97m. Enterprise value = 90.91 + 90.91 + 90.91 + 1,126.97 = $1,399.70m ≈ $1,400 million. ($1,831m is the undiscounted sum 100 + 110 + 121 + 1,500 — the error of failing to discount.)

**Q145. [LO12.8 | CM-EIP §12 — Case Studies]**
A client holds three USD bonds and the market expects interest rates to rise over the next year: | Bond | Maturity left | Coupon | Yield to maturity | |---|---|---|---| | Alpine Telecom: 10-year bond | 8 years | 3% | 5.0% | | Beacon Foods: 10-year bond | 5 years | 5% | 5.0% | | Coral Shipping: 10-year bond | 3 years | 7% | 6.0% | Which bond's price is likely to decrease the most in percentage terms, and why?
A. Coral Shipping, because it has the highest coupon and the shortest maturity.
B. Alpine Telecom, because it has the longest maturity (8 years) and the lowest coupon (3%), making it the most sensitive to interest-rate changes.
C. Beacon Foods, because its yield equals its coupon so it trades at par.
D. Coral Shipping, because its yield is below its coupon so it trades at a discount.
**Answer: B.** With rates expected to rise, bond prices are likely to fall, and the longest-maturity, lowest-coupon bond is the most sensitive to rate changes — here Alpine Telecom (8 years, 3%). Beacon Foods trades at par (YTM = coupon, 5.0%). Coral Shipping trades at a premium, not a discount, because its YTM (6.0%) is below its coupon (7.0%); a bond trades at a discount only when its YTM is higher than its coupon. Alpine also trades at a discount (5.0% > 3%), but the question is about rate sensitivity, where maturity and coupon decide it.

**Q146. [LO12.9 | CM-EIP §12 — Case Studies]**
Mrs Amelia Tan, a retiree, has $400,000 of investable assets she wishes to have managed actively. She must gift $60,000 from this portfolio six months from now to a university bursary fund. She is prepared to risk $80,000 of the $400,000 in full, and she hopes to fund part of her highly predictable annual expenses from this portfolio for the next fifteen years. Which portfolio best aligns with her objectives? | Asset class | Portfolio A | Portfolio B | Portfolio C | Portfolio D | |---|---|---|---|---| | Money market funds | 15% | 5% | 15% | 15% | | Treasury bills | 10% | 10% | 10% | 0% | | Long-term government bonds | 20% | 25% | 30% | 65% | | High-yield bonds | 25% | 30% | 5% | 0% | | Developed-market equities | 30% | 30% | 40% | 20% |
A. Portfolio A
B. Portfolio B
C. Portfolio C
D. Portfolio D
**Answer: D.** Mrs Tan needs $60,000, which is 15% of her $400,000 portfolio, as a gift shortly, so she should allocate that to money market funds, the most liquid asset class — Portfolio B fails this with only 5%. She is willing to risk only $80,000, i.e. 20% of the portfolio, so the combined allocation to high-yield bonds and equities should not exceed 20%: Portfolio A has 55% and Portfolio C has 45% in those two classes, both too risky. Portfolio D is correct: 15% money market funds for the gift, an equity allocation that respects her risk budget (20% in equities, 0% in high-yield bonds), and a sufficiently high allocation to long-term government bonds (65%) so the coupons can fund her annual expenses.

**Q147. [Calculation] [LO12.10 | CM-EIP §12 — Case Studies]**
Ms Grace Ho is looking at the structured warrants of Merlion Marine, whose shares trade at $3.20 and whose warrants trade at $0.90. The warrants have a conversion ratio of 2:1 and an exercise price of $2.00. She also sold some USD-denominated ADRs and will receive USD 80,000, which she wants to convert to SGD. She has two quotes: Quote A: USD/SGD 1.3400 – 1.3450; Quote B: USD/SGD 1.3380 – 1.3420. If the share price rises to $5.00, what is her minimum percentage gain on the warrants, and at which rate does she sell her USD?
A. 66.67% at 1.3450
B. 150.00% at 1.3400
C. 66.67% at 1.3400
D. 150.00% at 1.3450
**Answer: C.** The warrant is in-the-money: intrinsic value = (3.20 − 2.00) / 2 = $0.60. If the share rises to $5.00, the warrant's intrinsic value is (5.00 − 2.00) / 2 = $1.50. Because the minimum value of the warrant is its intrinsic value, the minimum percentage gain is 1.50 / 0.90 − 1 = 66.67%. (The future warrant price is unknown, but only the future minimum price is needed.) For the FX conversion, the quotes give SGD per one USD (the base currency); the first rate is the price at which the market maker buys USD and the second is the price at which it sells USD. Ms Ho wants to sell USD, so the first (bid) rate of each quote applies, and the highest of those is best: 1.3400 from Quote A.

**Q148. [LO12.11 | CM-EIP §12 — Case Studies]**
Mr Samuel Goh has investable funds and is deciding between a property investment and a collective investment scheme. He is more interested in a steady stream of income than in large trading gains. Which vehicle is most likely to suit his need?
A. A REIT that focuses on neighbourhood retail malls.
B. A unit trust described as an aggressive growth fund.
C. A business trust comprising investments in shipping assets.
D. A business trust, because business trusts must distribute at least 90% of their annual income.
**Answer: A.** A REIT typically distributes at least 90% of its annual income, and the cash flows from neighbourhood retail malls are comparatively stable, so it is the best fit for a steady income objective. An aggressive growth unit trust generates returns mainly from capital gains, not steady income. Cash flows from shipping assets are highly sensitive to economic fluctuations, and there is no mandatory minimum distribution for business trusts — the 90% distribution requirement applies to REITs, not business trusts, so D states the rule backwards.

**Q149. [Calculation] [LO12.2 | CM-EIP §12 — Case Studies]**
Daniel Koh invests $150,000 for 25 years in a fund with an expected return of 6.2% a year. Average long-term inflation is 2% a year. Assuming the expected return is the average return for the next twenty-five years, what is the size of his investment in today's dollars when the period ends?
A. $246,091
B. $411,339
C. $674,845
D. $419,550
**Answer: B.** The real rate of return is (1 + 0.062) / (1 + 0.02) − 1 = 1.062 / 1.02 − 1 = 0.0412 = 4.12%. Future value in real (today's) dollars = $150,000 × (1.062 / 1.02)^25 = $150,000 × (1.04118)^25 = $411,339. (The nominal future value, $150,000 × 1.062^25 = $674,845, is the value in future dollars, not today's dollars; it ignores inflation. Simply subtracting inflation, 6.2% − 2% = 4.2%, gives $419,550 — the wrong real rate, because the Fisher relation divides, it does not subtract.) ---

