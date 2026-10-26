---
id: '2'
kind: 'chapter'
num: 2
part: null
title: 'Risk, Return and Time Value Calculations'
order: 2
slug: 'chapter-2-risk-return-and-time-value-calculations'
---

# Chapter 2 — Risk, Return and Time Value Calculations

This is the most calculation-heavy chapter in the syllabus, and the one every later valuation chapter depends on. It defines six measures of return, four measures of risk, the classification of investment risk, and the time-value formulas used in Chapters 6, 7, 8 and 12.

## Learning Objectives

The candidate should be able to:

- Explain the concepts of risk and return in the management of investments.
- Explain the relationship between risk and return in the context of the risk-return trade-off.
- Identify the components of the total return and compute expected return on an investment.
- Explain the statistical measures of risk.
- Compute standard deviation and coefficient of variation as risk measures.
- Identify the various risks associated with investments.
- Calculate the present and future value of a single cash flow.

## 2.1 Risk and Return

The risk-return (or risk-reward) principle holds that rational investors demand higher potential returns when they take on more risk, and do not demand as high a rate of return when risk is lower.

The choice of assets follows the investor's risk profile. An investor with a low appetite for risk fears losing any part of capital and considers relatively safe money market instruments offering a steady flow of interest income. An investor with a higher appetite is prepared to lose some — and in some cases all — of capital, and considers riskier securities such as equities in expectation of higher return.

**Risk is a property of the instrument, not the asset class.** Several examples make the point:

- **Cash** is often considered least risky because it is a medium of exchange and is liquid, yet cash is volatile against other currencies. Currency volatility rises with political change, currency-management policy change, and fiscal and monetary policy change.
- **Government bonds**, once unquestionably secure, now carry more counterparty risk, changing the traditional view of "riskless" sovereign debt (Portugal, Italy, Greece, Spain).
- A **CCC-rated** (junk or speculative grade) bond is much riskier than a **AAA-rated** blue-chip corporate bond. The blue-chip company's **stock** may be safer than the CCC bond if its business and financial profile is conservative, even though equities are generally the riskier asset class.
- **Derivatives** sit at the upper end of the risk-return continuum because most structured products embed long and/or short options. The range is diverse, however: some are capital guaranteed and therefore safer than some equities.

A representative must therefore examine the riskiness inherent in the security itself, review the product documents (Product Highlights Sheet and prospectus), and ask the relevant questions. Only after understanding the product structure, underlying strategy and payoff scenarios should a recommendation be made.

**The VIX.** The Chicago Board Options Exchange (CBOE) Volatility Index — the "VIX" — is the bellwether risk indicator for the US stock market and, indirectly, for global equities because of the weight of the US economy. It measures the market's expectation of **30-day S&P 500 volatility** and is called the "investor fear gauge".

| VIX level | Interpretation |
|---|---|
| **Above 30** | High volatility; usually spikes upward during periods of great market uncertainty |
| **Below 20** | Relative stability |
| **89.5** | The high reached at the height of the Global Financial Crisis in **October 2008** |
| **48** | The high reached during the European Debt Crisis |

A higher VIX means more risk and volatility are expected. Market maturity also matters: financial assets in mature markets (the United States) are perceived as less risky than those in emerging markets (China) or frontier markets (Sri Lanka).

## 2.2 Calculating Returns

Six measures of return are examinable. Each answers a different question, and the examination tests whether you pick the right one.

| Measure | Question it answers | Section |
|---|---|---|
| Total return | What did I earn over the holding period? | 2.2.1 |
| Expected rate of return | What do I expect, given probabilities? | 2.2.2 |
| Annualised rate of return | What is the equivalent one-year rate? | 2.2.3 |
| Real rate of return | What did I earn after inflation? | 2.2.4 |
| Currency-adjusted return | What did I earn in my reference currency? | 2.2.5 |
| Internal rate of return | What rate equates my actual cash flows? | 2.2.6 |

### 2.2.1 Total Return

Total return on a pre-tax basis has two components:

- **Current income** — income received during the holding period, such as dividends from shares and interest from fixed income securities or fixed deposits.
- **Capital gain or loss** — the change in price of the security.

$$\text{Total Return} = \frac{\text{Income} + \text{Capital Gain or Loss}}{\text{Purchase Price}}$$

Because the capital gain or loss is the ending price minus the beginning price, the same relationship is written:

$$\text{Total Return} = \frac{CF_t + (P_E - P_B)}{P_B}$$

where $$CF_t$$ is the sum of cash flows during measurement period $$t$$, $$P_E$$ is the price at the end of period $$t$$ (the sale price), and $$P_B$$ is the price at the beginning of period $$t$$ (the purchase price).

**Worked example.** You buy 1,000 shares of XYZ at $5 each and receive a dividend per share of $0.20. You sell one year later at $6.

$$\text{Total Return} = \frac{0.20 + (6 - 5)}{5} = 0.24 = 24\%$$

### 2.2.2 Expected Rate of Return

The historical rate of return is known; the expected rate of return is the future rate, which may or may not be realised. A single figure such as "15%" is a **point estimate**. Because the future is uncertain, several returns are possible under different economic outlooks, and probabilities can be assigned to each.

$$E(R) = \sum_{i=1}^{n} r_i p_i$$

where $$E(R)$$ is the expected return on the security, $$r_i$$ is the $$i$$th possible return, $$p_i$$ is the probability of that return, and $$n$$ is the number of possible returns. The expected return is therefore the **probability-weighted average** of possible returns.

**Worked example.**

| Economic scenario | Probability ($$p_i$$) | Return ($$r_i$$) |
|---|---|---|
| Economic boom | 0.20 | 25% |
| Recession | 0.20 | −30% |
| Stable | 0.60 | 15% |
| | **1.00** | |

$$E(R) = (0.20 \times 0.25) + (0.20 \times -0.30) + (0.60 \times 0.15) = 0.05 - 0.06 + 0.09 = 0.08 = 8\%$$

### 2.2.3 Annualised Rate of Return

Returns are often presented on an annualised basis. The annualised rate compounds the holding-period return to a one-year equivalent.

$$\text{Annualised Rate of Return} = (1 + r_{\text{period}})^{12/m} - 1$$

where $$m$$ is the number of months in the holding period.

**Worked example.** A product is expected to generate a maximum return of **2.5% over 3 months**.

$$(1.025)^{12/3} - 1 = 1.10381 - 1 = 0.104 \approx 10.4\%$$

The compounding logic, step by step, on $1:

| Period end | Value |
|---|---|
| 3 months | $1 × 1.025 = $1.025 |
| 6 months | $1.025 × 1.025 = $1.0506 |
| 9 months | $1.0506 × 1.025 = $1.0769 |
| 12 months | $1.0769 × 1.025 = $1.1038 |

The annual return is therefore 10.38%, which is $$(1.025)^4 - 1$$, the same as $$(1.025)^{12/3} - 1$$. The assumption is that the investment plus interest is reinvested — the return is **compounded**, earning interest on interest.

**Working backwards.** To find the return achievable over 4 months from a product quoting an annualised target of 12%:

$$(1 + r_4)^{12/4} - 1 = 0.12$$
$$(1 + r_4) = (1.12)^{4/12}$$
$$r_4 = (1.12)^{1/3} - 1 = 0.0385 = 3.85\%$$

### 2.2.4 Real Rate of Return (Inflation-Adjusted Return)

The real rate removes the effect of inflation, because asset prices rise with general inflation independently of the investment's performance.

$$\text{Real Return} = \frac{1 + r_{\text{nominal}}}{1 + \text{inflation}} - 1$$

**Worked example.** With an annualised return of 10.4% and inflation of 2%:

$$\frac{1.104}{1.02} - 1 = 0.08235 = 8.24\%$$

With **deflation** of 1% (asset values fell 1%), the same formula gives:

$$\frac{1.104}{1 - 0.01} - 1 = 11.52\%$$

Note the sign convention: inflation is added to 1 in the denominator, deflation is subtracted.

### 2.2.5 Currency-Adjusted Return

Assets and income generated in a foreign currency must be restated in the investor's **base (reference) currency**. A fund invested in foreign securities must have its performance restated in the desired reference currency, usually the local currency.

**Worked example.** A Singapore portfolio manager reviews a JPY portfolio pegged to the Nikkei 225 and a USD portfolio pegged to the S&P 500 over January 2013 to December 2017.

| | Jan 2013 | Dec 2017 | Change |
|---|---|---|---|
| Nikkei 225 | 10,688.11 | 23,714.53 | +121.88% |
| SGD/JPY | 71.4943 | 85.0038 | +18.89% |
| S&P 500 | 1,466.47 | 2,743.15 | +87.06% |
| USD/SGD | 1.2272 | 1.3268 | +8.12% |

**JPY portfolio, restated in SGD.** The reference currency (SGD) is the **first** listed currency of SGD/JPY, so divide.

- Beginning Nikkei in SGD: $$10{,}688.11 / 71.4943 = 149.4960$$
- Ending Nikkei in SGD: $$23{,}714.53 / 85.0038 = 278.9820$$
- Currency-adjusted return: $$(278.9820 / 149.4960) - 1 = 0.8662 = 86.62\%$$

This is **lower** than the Nikkei's 121.88% because the SGD strengthened against the JPY, so the JPY gains are adjusted down.

**USD portfolio, restated in SGD.** The reference currency (SGD) is the **second** listed currency of USD/SGD, so multiply.

- Beginning S&P 500 in SGD: $$1{,}466.47 \times 1.2272 = 1{,}799.6520$$
- Ending S&P 500 in SGD: $$2{,}743.15 \times 1.3268 = 3{,}639.6114$$
- Currency-adjusted return: $$(3{,}639.6114 / 1{,}799.6520) - 1 = 1.0224 = 102.24\%$$

This is **higher** than the S&P 500's 87.06% because the SGD weakened against the USD, so the USD gains are adjusted up.

**The shortcut rule.** The same answers come from combining the portfolio return with the currency return directly:

- JPY portfolio: $$(1 + 1.2188) / (1 + 0.1889) - 1 = 0.8662 = 86.62\%$$
- USD portfolio: $$(1 + 0.8706) \times (1 + 0.0812) - 1 = 1.0224 = 102.24\%$$

The rule of thumb: **divide** $$(1 + \text{portfolio return})$$ by $$(1 + \text{currency return})$$ when the reference currency is the **first** listed currency of the pair, and **multiply** when it is the **second** listed currency.

In SGD terms the US portfolio outperformed the Japanese portfolio, because the SGD strengthened against the JPY but weakened against the USD.

Some corporate and high net worth (HNW) investors use a major world currency such as USD or EUR as their reference currency because they take an international view of their invested assets. The US remains the largest capital market and many instruments, including commodities, are still denominated in USD, so a USD reference is convenient. Some HNW individuals in Asia keep offshore investments separate from domestic ones and use USD as the reference; in some countries local currencies have proven more volatile than global currencies, so investors prefer not to use them as the reference.

### 2.2.6 Internal Rate of Return

The internal rate of return (IRR) equates all cash outflows (investments) against all cash inflows (proceeds) evaluated at the same point in time. It is used for projects and investments with **uneven cash flows**, such as private equity.

**Worked example (1).** An investment requires $1 million now and a further $2 million at the start of the next year. The client receives $3.5 million only at the end of year 3.

| Year 1 | Year 2 | Year 3 |
|---|---|---|
| −$1m | −$2m | +$3.5m |

Evaluated at the end of year 3, with IRR denoted $$r$$:

$$1(1+r)^3 + 2(1+r)^2 + 0(1+r) = 3.5$$

The first $1m compounds for 3 years, the second $2m for 2 years, and the $0 for 1 year.

**Choosing a starting guess.** Total invested is $3m and total received is $3.5m, implying $$(3.5/3) - 1 = 16.7\%$$, which divided by 3 years gives **5.55%**.

| Trial rate | Left-hand side | Conclusion |
|---|---|---|
| 5.55% | $3.4041m | Below $3.5m, so the rate must be higher |
| 7.00% | $3.5148m | Marginally above $3.5m, so the rate must be slightly lower |
| 6.80% | $3.4999m | Close; 6.81% improves accuracy |

The IRR is approximately **6.8%**. In a spreadsheet the calculation is `=IRR(cell range, [guess])`, solved iteratively.

**IRR versus compounded annualised return.** The IRR is the **money-weighted** return in a portfolio context: it is the actual return generated for the client given the movement of their cash flows, and it is sensitive to the size and timing of those flows. The compounded annualised rate is the **time-weighted** return and is unaffected by them.

**Worked example (2).** A client invests $5m in a fund at the end of 2016. The fund returns 2% in 2017, so the client withdraws $3m at the end of the year. The fund returns 10% in 2018, so the client adds $8m at the start of 2019, and the fund loses 4% in 2019.

**(a) Fund value at the end of 2019:**

| Step | Calculation | Result |
|---|---|---|
| Value at end of 2017 | $5m × 1.02 | $5.1m |
| Withdrawal | −$3.0m | |
| Value at end of 2018 | $2.10m × 1.10 | $2.31m |
| Contribution | +$8.00m | |
| Value at end of 2019 | $10.31m × 0.96 | **$9.898m** |

**(b) The client's actual (money-weighted) return.** Total outlay is $5m + $8m = $13m; total proceeds are $3m + $9.898m = $12.898m. A first estimate of the loss is $$12.898/13 - 1 = -0.7846\%$$. No division by the number of years is needed because contributions and withdrawals are spread relatively evenly through the period.

Restating the cash flows:

$$5(1+r)^3 - 3(1+r)^2 + 8(1+r) = 9.898$$

| Trial rate | Left-hand side |
|---|---|
| −0.786% | 9.867 — rate must be less negative |
| −0.700% | 9.881 — rate must be less negative |
| −0.600% | 9.898 — close |

The IRR, and therefore the money-weighted return, is **−0.6%**.

**(c) The annualised compounded (time-weighted) return.** The cumulative return is $$(1.02 \times 1.10 \times 0.96) - 1 = 0.0771 = 7.71\%$$. Annualising:

$$(1 + R)^3 = 1.0771 \implies R = (1.0771)^{1/3} - 1 = 0.0251 = 2.51\%$$

The fund itself made 2.51% a year; the client lost 0.6% a year because of the timing of their own contributions and withdrawals. That gap is the whole point of the money-weighted versus time-weighted distinction.

## 2.3 Measures of Risk

Risk is the uncertainty of returns associated with an investment — in simple terms, the degree of fluctuation in the value of assets such as stocks. Return and risk are inextricably linked.

### 2.3.1 Variance and Standard Deviation

Variance and standard deviation are the most widely used statistical measures of risk. They measure the **dispersion of returns from the average return**: the smaller the dispersion, the lower the risk.

$$\sigma^2 = \sum p_i \left[ r_i - E(R) \right]^2$$

$$\sigma = \sqrt{\sum p_i \left[ r_i - E(R) \right]^2} = \sqrt{\sigma^2}$$

where $$\sigma^2$$ is the variance of returns and $$\sigma$$ is the standard deviation, the positive square root of the variance.

**Worked example**, using the expected-return example from 2.2.2:

| $$r_i$$ | $$p_i$$ | $$r_i p_i$$ | $$r_i - E(R)$$ | $$[r_i - E(R)]^2$$ | $$p_i [r_i - E(R)]^2$$ |
|---|---|---|---|---|---|
| 0.25 | 0.20 | 0.05 | 0.17 | 0.0289 | 0.00578 |
| −0.30 | 0.20 | −0.06 | −0.38 | 0.1444 | 0.02888 |
| 0.15 | 0.60 | 0.09 | 0.07 | 0.0049 | 0.00294 |
| | **1.00** | **E(R) = 0.08** | | | **0.03760** |

Variance $$\sigma^2 = 0.03760$$. Standard deviation $$\sigma = \sqrt{0.03760} = 0.1939 = 19.39\%$$.

**Volatility** is the standard deviation of the security. A share with a standard deviation of 19.39% calculated on daily price changes has a **daily volatility** of 19.39%. This is **historical volatility**, which differs from **implied volatility** — the volatility implied by the price of a share option.

### 2.3.2 Coefficient of Variation

The coefficient of variation (CV) measures the **risk per unit of expected return**, which lets investments with different returns and different standard deviations be compared.

$$CV = \frac{\text{Standard Deviation of Returns}}{\text{Expected Rate of Return}}$$

**Worked example.**

| | Investment A | Investment B |
|---|---|---|
| Expected return | 0.05 | 0.15 |
| Standard deviation | 0.08 | 0.20 |

On standard deviation alone, B looks less attractive because its risk is higher. But B also has a higher expected return:

$$CV_A = \frac{0.08}{0.05} = 1.60 \qquad CV_B = \frac{0.20}{0.15} = 1.33$$

On a risk-per-unit-of-return basis, **B is more attractive** — it has the lower coefficient of variation.

### 2.3.3 Shortfall Risk — Probability of Losses Using Normal Distribution

Assuming returns are normally distributed, the probability of observing a range of returns can be computed. Investors care most about the probability of a **loss**.

**Worked example.** A balanced diversified portfolio of stocks and bonds has, over the last 20 years, an average return of **6%** with a standard deviation of **12%**.

The return that deviates by exactly ±1 standard deviation from the expected return:

$$X - E(r) = \pm 1\sigma \implies X = 0.06 \pm 0.12 = -0.06 \text{ or } 0.18$$

The **Z-score** expresses how many standard deviations a return deviates from the expected return:

$$Z = \frac{X - E(r)}{\sigma}$$

For −6%: $$Z = (-0.06 - 0.06)/0.12 = -1$$. For +18%: $$Z = (0.18 - 0.06)/0.12 = +1$$.

The standard normal table gives the cumulative probability — the area to the **left** of the specified return. For $$Z = 1.00$$ the probability is **0.8413**, so there is an 84.13% probability of an annual return lower than 18%. Because the total area is 100%, the probability of a return above 18% is $$1 - 0.84 = 0.16$$. Because the distribution is symmetrical, the probability of a return below −6% ($$Z = -1.00$$) is also **0.16**.

The table carries only cumulative probabilities for Z-scores at or above zero — the right tail. The left tail is inferred from symmetry: to find the probability of −6% or worse, look up $$Z = 1.00$$ (0.8413) and take $$1 - 0.8413 = 0.16$$.

The probability of a return between −6% and +18% is therefore $$0.84 - 0.16 = 0.68$$.

| Range | Z-scores | Probability inside |
|---|---|---|
| ±1 standard deviation | ±1.00 | **68%** |
| ±2 standard deviations | ±2.00 | **95.4%** (97.7% − 2.3%) |

**Probability of a loss.** The question "what is the likelihood of making a loss?" means the likelihood that the return $$X$$ is less than 0:

$$Z = \frac{0 - 6\%}{12\%} = -0.5$$

For $$Z = -0.5$$ the table gives a **69% probability of a positive return** and therefore a **31% chance of a negative return**.

### 2.3.4 Value at Risk

Value at risk (VaR) extends shortfall risk and is actively used to estimate portfolio risk. It asks: "What is the smallest proportion of our portfolio value that is at risk 2.5% or 0.5% of the time?"

**Balanced portfolio** — expected return 6%, standard deviation 12%.

| Confidence | Left-tail probability | Z-score | Calculation | VaR |
|---|---|---|---|---|
| 97.5% | 0.025 | **−1.96** | $$-1.96(0.12) + 0.06 = -0.1752$$ | **≈ −18%** |
| 99.5% | 0.005 | **−2.58** | $$-2.58(0.12) + 0.06 = -0.2496$$ | **≈ −25%** |

For the 0.025 tail, look up a probability of 0.975 (that is, 1 − 0.025). For the 0.005 tail, look up 0.995; the table shows 0.9949 and 0.9951 but not 0.995, so 0.9951 is used, corresponding to $$Z = -2.58$$.

So there is a **2.5% chance of losing at least 18%** and a **0.5% chance of losing at least 25%** in a given year.

**Defensive portfolio** — expected return 4%, standard deviation 4%.

| Confidence | Z-score | Calculation | VaR |
|---|---|---|---|
| 97.5% | −1.96 | $$-1.96(0.04) + 0.04 = -0.0384$$ | **≈ −4%** |
| 99.5% | −2.58 | $$-2.58(0.04) + 0.04 = -0.0632$$ | **≈ −7%** |

There is a 2.5% chance of losing at least 4% in a given year — about **1 year in 40** — and a 0.5% chance of losing at least 7%.

**Probability of any loss.** For a 0% return, $$Z = (0\% - 4\%)/4\% = -1$$, which implies a **16% probability of loss**; 84% of the time the portfolio should yield positive returns.

**The limitation.** Using historical data to predict the probability of future returns assumes the factors and conditions influencing the next few years resemble those influencing the past. They may not. The financial community therefore also uses the **Monte Carlo method**, which computes VaR from randomly generated returns under distributional assumptions, and computer-based models.

## 2.4 Types of Risk and Risk Management

Section 2.3 defined risk as volatility — deviation from the expected return in either direction. The average investor is mainly concerned with **negative** deviation, the risk of loss. Risks are grouped into six categories.

| Category | What it covers | Impact |
|---|---|---|
| **Issuer and counterparty** | Business risk, credit risk, fraud risk | Fall in value from business conditions affecting earnings growth or financial health; failure to meet financial obligations (interest, principal, financial ratios, pledge clauses) |
| **Product-specific** | Leverage structure; term and maturity; product features (option triggers, strike levels, pricing, payoffs, obligations); currency | Augmented downside risk from leverage; losses from unfavourable product terms; fall in value from a fall in the denominated currency |
| **Market (systematic)** | Market shocks; country, political and currency risk; unexpected economic developments; natural and man-made disasters, wars, terrorism; liquidity risk | Sudden unexpected market shocks; negative impact and volatility across the whole market from economic or policy factors; rising factor costs, inflationary pressures, tightened liquidity |
| **Execution and operational** | Execution error; system failure; process errors and restrictions; computer viruses; data breaches | Losses from execution errors; disruption to execution and sudden corrections from system failure; computer-driven trading augmenting downside risk |
| **Management** | Risk profile mismatch; concentration risk (lack of diversification) | Sub-optimal risk-adjusted returns; failure to diversify, leading to excessive risk exposure, higher volatility and larger losses |
| **Liquidity** | Lack of market depth | Trades at unfavourable prices that do not reflect fair value, especially when news is released to the market |

### 2.4.1 Risks in Investments

**a. Issuer and counterparty risks.**

**Issuer risk** is the risk of loss when issuers of securities — shares, bonds, commercial paper, certificates of deposit, structured notes and deposits — default on their obligations.

The Lehman Brothers case is the standard illustration. In 2008 Lehman had close to **USD680 billion of assets supported by only USD22.5 billion of the firm's capital**. As the housing market weakened, mortgage loans began to default, and the value of Lehman's mortgage-backed securities plummeted once it became apparent the issuer could not support interest and principal payments. Investors in Singapore, Hong Kong and elsewhere who bought Lehman-issued minibonds (structured notes) suffered major losses.

**Counterparty risk** is the risk that one or more parties to a contract fails to fulfil its contractual obligation. Some instruments are not exchange-traded but are OTC contracts between counterparties, which creates this exposure.

**The counterparty may also be the issuer.** When a bank designs a structured product and sells it to its clients, the bank is both counterparty and issuer. An issuer may increase sales through other banks that distribute and market the product, paying a **retrocession fee** or commission for doing so. In the Lehman minibond case, affected investors tried to claim against the distributing banks, which saw themselves as distributors rather than counterparties — a distinction not fully evident to some clients. Some banks provided partial compensation to preserve reputation and client relationships. The lesson: "caveat emptor" and standard disclaimers may not always work, especially where it is unclear whether clients are novices or sophisticated investors.

Both issuer and counterparty risk can arise from **business risk** and, in some cases, outright **fraud**.

**i. Business risk** is uncertainty about a company's ability to meet its financial goals. For equity investors the downside risks are changes in earnings growth or potential:

- Earnings failing to meet market expectations.
- An unexpected slowdown in earnings growth, warranting a downward re-rating of the stock.
- An unexpected loss, which may trigger a sell-off.
- Events signalling deterioration in the potential growth of the business.

Bond traders and bond fund managers must also watch weakening business conditions for issuers — Singapore's offshore oil and gas engineering industry in 2015–2016 is the example. At a minimum, when bond prices fall, portfolios are marked to market and the fall must be reported. If conditions become dire, issuers may default and losses must be realised.

**ii. Fraud** is relatively uncommon because financial institutions conduct due diligence. But outsourcing and open-architecture concepts have led many institutions and HNW individuals to invest in boutique, hedge and private equity funds. Bernie Madoff ran a Ponzi scheme for several years affecting **more than 4,800 clients**, including institutions; it was exposed only during the 2008 financial crisis when redemptions could not be met.

**b. Product-specific risk.** Equity shareholders, as part owners, bear higher business risk; bondholders focus on the firm's ability to finance interest and principal. Beyond business and credit risk, the risk of a product depends on its specific features and contractual terms:

- Leverage multiple.
- Maturity period.
- Payoff structure (timing, size, sequence, limits).
- Sale of put or call options within the structure.
- Currency.

Leveraged products — futures, warrants, daily leveraged certificates, contracts for difference — have significantly higher volatility, moving multiple times their underlying. Some structured products with attractive yields effectively require the investor to **sell put options** to the counterparty (equity-linked notes). Others require **increased accumulation** of securities as they fall in value (accumulators), creating more risk. Private equity requires long gestation periods and shows drawdowns in the initial years before potentially achieving high returns later.

Currency denomination matters too: payment flows in a foreign currency can significantly affect returns in the domestic currency, and **bond yields can be wiped out by currency losses** when flows are converted back.

**c. Market risk.** Market risk affects most assets in the market and therefore cannot be fully diversified. All asset classes are affected, though the impact differs across them, and market shocks can be short- or long-lived.

| Shock type | What happens | Examples |
|---|---|---|
| **Financial shocks** | Ripple effect across markets and asset classes. During the GFC of 2008–2009 almost all financial assets except cash and government bonds fell in tandem; **correlations tend toward 1 during crises**. Managers may be forced to sell performing assets to meet redemptions; investors facing margin calls sell less-affected securities to cover losses elsewhere; fear drives unwinding into cash | Asian Currency Crisis (1997); Russian Financial Crisis (1998); LTCM collapse (1998); Dot.Com bubble (2000–2001); Global Financial Crisis (2008–2009); European Sovereign Debt Crisis (2012) |
| **Political shocks** | Sudden change in government creates uncertainty about the direction of the economy and businesses | UK Brexit Referendum (2016); US Presidential Election surprise (2016) |
| **Unexpected contractionary policy or negative data** | Unexpected rate hikes, tax increases, inflation and unemployment figures, rising factor costs, tighter liquidity. Governments and central banks usually manage expectations carefully so the market is not caught off guard, unless a surprise is deliberate (cooling measures, capital controls, taxation, purchasing restrictions) | — |
| **Natural disasters, wars, terrorism** | Affect domestic and global market stability, but the impact is usually **very short-lived**, with a rebound in the days or weeks after; some disasters have no impact at all. Events threatening for more than a day tend to have more impact, and such events have proven to be buying opportunities | World Trade Centre attack (Sep 2001); SARS in Hong Kong and Singapore (2002–03); Fukushima nuclear disaster (Mar 2011) |

**d. Execution and operational risks.** These can arise from a counterparty, the exchange, or the systems and platforms handling internet trades initiated from an investor's own device.

Human error remains a live risk. In **2015 a typing error caused Mizuho Securities to lose at least 27 billion yen (about $225 million)** on a single stock trade: a trader tried to sell **610,000 shares at 1 yen** each when he intended to sell **1 share at 610,000 yen** (about $5,041).

**i. Execution risk within financial institutions.** Wrong trades must be reversed. Most institutions pay for losses caused by their own error, but the loss of trust and reputation may drive clients away, which is often the greater concern. Staff involved in execution undergo regular training, and new systems and processes reduce error rates. During system upgrades, temporary glitches, or compliance restrictions imposed at an inopportune time, trading may freeze and a client may miss an opportunity — a **cost of lost opportunity**. A system might flag a breach of trading or funding limits while ignoring available funds from completed transactions.

The main conflict between clients and representatives arises in **communicating and confirming trade orders**; representatives are trained in best practice for receiving, confirming, recording and executing orders to minimise disputes. Execution risk is increasingly pushed to clients because trading platforms are made directly available to them; institutions do set limits on client trades, which caps the risk to the institution and the financial system.

**ii. False orders and flash crashes.** Some trading risk arises from market manipulation. In **2010** a software program was used to place and cancel large orders within fractions of a second; computer-based strategies reacted to the false selling orders with real selling orders, and the **Dow Jones Industrial Average plunged 9% and recovered within 36 minutes** of intraday trading — a **flash crash**. In **February 2018** high frequency trading was blamed for a smaller flash crash when the DJIA fell almost **1,600 points (4%)** in a few minutes. Regulators have not fully solved the problem. The representative's response is to be aware of conditions that may cause greater volatility, remind long-term investors not to panic, and recognise that such events may present opportunities to acquire quality investments for clients willing to hold.

**iii. Market disruption** is the effect of a large and rapid change in market prices that stops the market functioning normally. It is characterised by price declines, widespread panic, and a massive increase in trade execution and volatility. Regulators and exchanges mitigate it with circuit breakers, shock absorbers or price limits.

- **Circuit breakers** vary across exchanges. On **SGX**, a circuit breaker triggers if a stock's price would move by more than **10% of the traded price 5 minutes prior** (the reference price). A large move can still proceed if it is gradual over a longer timeframe; the breaker halts trading only when volatility is excessive within a very short time. Once triggered, a **5-minute cooling-off period** follows during which trading can only take place **±10%** from the reference price. Trading then resumes with new reference prices established during the cooling-off period.
- **Shock absorbers** are similar and the terms are sometimes used interchangeably. Some use "shock absorbers" for halting index futures trading when the futures price falls substantially; others use it for halting computer-based HFT in specific stocks.

**iv. Technical disruptions.** Market halts have occurred from hardware or software problems, communication data feed errors and system updates. They usually last from **half an hour to half a day**. Most exchanges maintain back-up systems tracking execution and trade data.

**v. Computer and data protection breaches.** Viruses, hacking and data corruption could seriously affect financial markets. Institutions and governments have built defences, and representatives are expected to follow best practice in handling messages and communications.

**e. Management risk.** This is the risk that investments are mismanaged, resulting in excessive risk-taking.

**i. Risk profile mismatch.** Clients expect professional management. Each client has a risk profile and return expectation determining which investment suits them; conservative clients take less risky investments and accept modest returns, aggressive clients pick higher expected returns with greater volatility. Allocating the right proportion of assets to each client type based on their risk-return expectation is **strategic asset allocation**. When profiling is done poorly, or only to fit the available sales offering, a **risk profile mismatch** can result, creating potential grounds for mis-selling, negligence or mismanagement.

**ii. Concentration risk, or lack of diversification.** Fund managers normally ensure proper diversification and minimal concentration. Clients managing their own money may end up highly concentrated in specific securities, industries or markets because there is no formal diversification strategy. Remaining concentrated can be a deliberate client choice, but representatives have a responsibility to advise diversification for the longer term, especially where clients lack the time, expertise or temperament to manage their own investments.

**f. Liquidity risk.** Liquidity risk has two aspects.

- **Funding liquidity** — the availability of funding for investments. In a crisis a liquidity crunch can occur, driving interest rates abnormally high.
- **Market liquidity** — the ability to liquidate a position quickly at a fair price, which depends on the availability of buyers and sellers. An instrument has more liquidity risk if its trading volume is low or its available float is small, with major blocks controlled by strategic investors. Poor market-price liquidity widens the bid-offer spread and makes trading more costly.

Major surprises can cause liquidity to drop. If negative news is released and sellers try to offload while buyers exist only at much lower prices — say **12% lower** — the price can gap downwards, several times a day, as selling pressure mounts. The mirror case is a **short squeeze**: a short position in a derivative may face a sudden rise in the underlying on good news, and with an absence of sellers the trader may be forced to cover at substantially higher prices.

### 2.4.2 Risk Management

Risk management involves due diligence, timely research and risk processes, client profiling and product suitability, diversification, and process and system risk management.

**a. Due diligence checks.** Security selection typically uses both fundamental and technical analysis. Selecting fund managers — traditional or hedge — requires regular due diligence and audit checks that go beyond tracking performance. Personnel changes, structural changes, cost pressures and market pressures can cause lapses in management, so external service providers must have proper checks and balances. This matters most in segments or jurisdictions with weak regulatory oversight.

**b. Research and risk management processes.** Not every institution performs primary research; cost and efficiency considerations usually produce a mix of primary and secondary research (gathering, evaluating and summarising research from other institutions and providers). Whatever the approach, keeping research current and having timely review processes shortens reaction time to deterioration in an investment or market, and allows underweighting of markets, sectors and companies before conditions worsen.

**c. Client profile and product suitability.** The products recommended depend on the client's objectives, investment purpose, risk profile, return expectation, experience and sophistication, desired manager engagement and servicing, net worth, the size of the investment relative to net worth, financial obligations and limitations.

A client may have a different purpose for money placed at one bank than at another. The risk profile selected for core family investments to be kept safe may differ sharply from that for excess cash held for opportunistic investments. Products are therefore recommended against the client's **desired risk profile for those particular investments**. Some corporate clients have a dedicated purpose with a specific timeline — money set aside for a building project starting in 12 months — so the investments must fit the limits and parameters the client sets.

**d. Process and system risk management.** Most banks have upgraded processes and systems to handle a changing environment. The recent focus has been compliance with regulatory requirements (documentation, declarations, alerts, checks), which slowed execution and required re-tooling and re-training. Systems are also upgraded to protect information, to make execution "error-proof" with prompts and computer checks that limit human error, and to provide back-ups so transaction records can be retrieved after unexpected market disruption.

## 2.5 Time Value of Money

Money has time value: a dollar received in the future is worth **less** than a dollar received today, because a dollar today can be invested immediately. The time value of a sum depends on the date of receipt and prevailing interest rates. Discounted cash flow techniques are therefore necessary for correct investment analysis, because bond interest and dividends are paid at different points in time.

### 2.5.1 Simple and Compound Interest

A deposit of $10,000 for one year at 2.5% has principal $10,000, an interest period of 1 year, and a rate of 2.5%. For a Singapore dollar deposit the **day basis is 365 days**.

$$\text{Simple Interest} = \frac{\text{Principal} \times \text{Interest Rate (in \%)} \times \text{Interest Period (in days)}}{36{,}500}$$

The denominator depends on the currency's day basis: **Singapore dollar interest uses a 365-day basis; US dollar interest uses a 360-day basis.**

**Worked example — simple interest.** A SGD 1 million deposit earning 8% for 91 days:

$$\frac{1{,}000{,}000 \times 8 \times 91}{36{,}500} = \text{SGD } 19{,}945.21$$

**Worked example — compound interest.** The same deposit rolled over for another 91 days at 8%:

$$\frac{1{,}019{,}945.21 \times 8 \times 91}{36{,}500} = \text{SGD } 20{,}343.02$$

Total interest is $$19{,}945.21 + 20{,}343.02 = \text{SGD } 40{,}288.23$$. The annualised compounded rate is:

$$\frac{40{,}288.23}{1{,}000{,}000} \times \frac{36{,}500}{182} = 8.08\%$$

The second period earns interest on the first period's interest, which is why the annualised rate exceeds the nominal 8%.

### 2.5.2 Future Value

$$FV_n = PV(1 + k)^n$$

where $$FV_n$$ is the future value at the end of $$n$$ years, $$PV$$ is the present value or original amount invested at the beginning of the first year, $$n$$ is the number of years of compounding, and $$k$$ is the annual interest rate.

**Worked example.** $1,000 in an account paying 5% compounded annually for 10 years:

$$FV_{10} = 1{,}000(1.05)^{10} = 1{,}000(1.62889) = \$1{,}628.89$$

### 2.5.3 Time Value of Money in Negative Interest Rate Environment

Traditionally, interest rates represent the time value of money determined by the demand for and supply of funds: users of funds compensate suppliers for the loss of liquidity and opportunity cost, so rates are expected to be positive.

Recent years have seen negative rates imposed by central banks. In **2017, 10–20 European countries had negative yields on their 2-year sovereign debt**, meaning commercial banks were required to pay for holding excess reserves with the central bank. The intent was to push banks to minimise excess balances and increase productive lending. Sovereign debt issued at a premium above par and redeemed at par produces an implicit interest cost to the bank.

| Country | Yield (%) | Country | Yield (%) | Country | Yield (%) | Country | Yield (%) |
|---|---|---|---|---|---|---|---|
| Switzerland | −0.92 | Denmark | −0.69 | Slovakia | −0.57 | Italy | −0.17 |
| Czech Rep | −0.81 | Finland | −0.67 | France | −0.53 | Japan | −0.13 |
| Germany | −0.74 | Austria | −0.65 | Slovenia | −0.38 | Portugal | −0.09 |
| Netherlands | −0.71 | Ireland | −0.58 | Spain | −0.37 | Cyprus | −0.08 |
| Sweden | −0.70 | Belgium | −0.58 | Bulgaria | −0.33 | Lithuania | −0.08 |

Banks have generally not charged negative interest on depositor cash, because of the risk of political backlash and because depositors would move money abroad into foreign currency deposits, causing a capital outflow the central bank does not want. Even with positive nominal deposit rates, when inflation exceeded deposit rates, **real** interest rates were effectively negative.

**Impact on the short end of the yield curve.** Negative central bank rates drive short-term rates on other fixed income investments down. Investors initially tried to lock in yields at the short end, which drove short-term fixed income values up. In time-value terms: **negative interest rates raise the present value of fixed income investments at the short end of the yield curve.**

### 2.5.4 Compounded Annual Growth Rate

The compounded annual growth rate (CAGR) is the effective annual rate earned on the initial cash flow.

$$CAGR = \left[ \frac{FV}{PV} \right]^{1/n} - 1$$

where $$FV$$ is the future value, $$PV$$ the present value, and $$n$$ the number of years.

**Worked example.** With $$FV = \$1{,}628.89$$, $$PV = \$1{,}000$$ and $$n = 10$$:

$$CAGR = \left[ \frac{1{,}628.89}{1{,}000} \right]^{1/10} - 1 = 0.05 = 5\%$$

**Compounding more than once a year.** If $1,000 is invested for 5 years at 5% compounded semi-annually, the money is invested for **10 six-month periods** at **2.5%** each. Quarterly compounding gives **20 three-month periods** at **1.25%** each. The general formula is:

$$FV_n = PV\left(1 + \frac{k}{m}\right)^{mn}$$

where $$m$$ is the number of interest periods in the year.

**Worked example — quarterly compounding.** $1,000 for 10 years at 5% compounded quarterly:

$$FV_{10} = 1{,}000\left(1 + \frac{0.05}{4}\right)^{40} = 1{,}000(1.0125)^{40} = 1{,}000(1.64362) = \$1{,}643.62$$

### 2.5.5 Present Value of a Single Cash Flow

Discounting is the opposite of compounding: it finds the present value of a future sum, and is used to judge the attractiveness of investment projects.

$$PV = \frac{FV_n}{(1 + k)^n}$$

where $$PV$$ is the present value, $$FV_n$$ the future value at the end of $$n$$ years, $$n$$ the number of years to receipt, and $$k$$ the annual discount (or interest) rate.

**Worked example.** At a 6% discount rate, the present value of $1,000 receivable in 5 years:

$$PV = \frac{1{,}000}{(1.06)^5} = \frac{1{,}000}{1.3382} = \$747.27$$

**The discount rate.** The interest rate in present value calculations is the **discount rate**, interpreted as the return available on alternative similar investments. From the security holder's perspective it is an opportunity cost, and therefore also the return expected by holders of the securities. Because it is frequently used to adjust cash flows for risk, it is also called the **risk-adjusted discount rate**. The actual discount rate is at least the **risk-free government bond yield of the same maturity** as the intended holding period.

## 2.6 Summary

- There is a positive relationship between risk and return: investors who want higher returns must accept higher risk, and vice versa.
- There are six main measures of return: total return, expected rate of return, compounded annualised rate of return, real rate of return, currency-adjusted return, and internal rate of return.
- Risk can be analysed through the variance and standard deviation of asset returns; the standard deviation is also the return volatility.
- The coefficient of variation measures risk per unit of expected return, which allows investments with different returns and risks to be compared.
- Assuming normally distributed returns, the probability of a loss can be estimated from the Z-score; ±1 standard deviation covers about 68% of outcomes and ±2 about 95.4%.
- Value at risk extends this to a stated tail probability: the balanced portfolio loses at least 18% with 2.5% probability and at least 25% with 0.5% probability.
- Investment risk falls into six categories: issuer and counterparty, product-specific, market (systematic), execution and operational, management, and liquidity.
- Market risk cannot be diversified away, and correlations tend toward 1 during a crisis.
- Risk management combines due diligence, timely research, client profiling and suitability, diversification, and process and system controls.
- Money has time value: a dollar received in the future is worth less than a dollar received today.
- Future value compounds at $$FV_n = PV(1+k)^n$$; present value discounts at $$PV = FV_n/(1+k)^n$$; the compounded annual growth rate reverses the future-value formula.
- Negative interest rates raise the present value of fixed income investments at the short end of the yield curve.

## Exam cues

- **Six measures of return:** total, expected, annualised, real, currency-adjusted, internal rate of return. Match the measure to the question asked.
- **Total return** $$= [CF_t + (P_E - P_B)] / P_B$$. Worked: dividend 0.20, buy 5, sell 6 → **24%**.
- **Expected return** $$= \sum r_i p_i$$. Worked: 0.20×25% + 0.20×(−30%) + 0.60×15% = **8%**.
- **Annualising:** $$(1 + r)^{12/m} - 1$$. 2.5% over 3 months → **10.38%**. Reverse: 12% annual → **3.85%** over 4 months.
- **Real return** $$= (1 + r)/(1 + \text{inflation}) - 1$$. 10.4% with 2% inflation → **8.24%**; with 1% deflation → **11.52%**.
- **Currency adjustment rule:** reference currency is the **first** currency of the pair → **divide**; **second** → **multiply**. JPY portfolio 121.88% with SGD/JPY +18.89% → **86.62%**; USD portfolio 87.06% with USD/SGD +8.12% → **102.24%**.
- **IRR is money-weighted; CAGR is time-weighted.** IRR is sensitive to the size and timing of cash flows; CAGR is not. Worked: fund returns 2%, 10%, −4% → CAGR **2.51%**, but the client's IRR is **−0.6%**.
- **Variance and standard deviation:** $$\sigma^2 = \sum p_i[r_i - E(R)]^2$$. Worked: variance **0.03760**, $$\sigma$$ = **19.39%**.
- **Coefficient of variation** $$= \sigma / E(R)$$. A: 0.08/0.05 = **1.60**; B: 0.20/0.15 = **1.33** — B is better on risk per unit of return.
- **Normal distribution landmarks:** ±1σ = **68%**, ±2σ = **95.4%**. Z = (X − E(r))/σ. For E(r) 6%, σ 12%: Z = −0.5 gives a **31% chance of a loss**.
- **VaR Z-scores:** 2.5% tail → **−1.96**; 0.5% tail → **−2.58**. Balanced portfolio (6%, 12%) → **−18%** and **−25%**. Defensive (4%, 4%) → **−4%** and **−7%**.
- **VIX:** measures expected **30-day S&P 500** volatility. Above **30** = high volatility; below **20** = relative stability. Peaks: **89.5** (Oct 2008), **48** (European Debt Crisis).
- **Six risk categories:** issuer/counterparty, product-specific, market (systematic), execution/operational, management, liquidity. Market risk **cannot be diversified away**; it can be hedged.
- **Correlations tend toward 1 during a crisis** — diversification fails exactly when it is needed.
- **SGX circuit breaker:** triggers on a move of more than **10%** from the reference price (the traded price **5 minutes** prior), followed by a **5-minute cooling-off** period with trading limited to **±10%**.
- **Day basis:** **365** for Singapore dollars, **360** for US dollars. Simple interest denominator is **36,500**.
- **TVM formulas:** $$FV_n = PV(1+k)^n$$; $$FV_n = PV(1 + k/m)^{mn}$$; $$PV = FV_n/(1+k)^n$$; $$CAGR = (FV/PV)^{1/n} - 1$$.
- **Worked TVM values to memorise:** $1,000 at 5% for 10 years = **$1,628.89**; quarterly compounding = **$1,643.62**; $1,000 discounted 5 years at 6% = **$747.27**; SGD 1m at 8% for 91 days = **SGD 19,945.21**.
- **Negative rates raise the present value** of short-end fixed income investments.
- **Trap:** the standard normal table gives the area to the **left** (cumulative). For a left-tail probability, look up $$1 - \alpha$$ and subtract from 1 — do not read the negative Z directly, because the table has no negative entries.
- **Trap:** do not divide the money-weighted return estimate by the number of years when contributions and withdrawals are spread evenly through the period.
- **Trap:** a higher standard deviation does not by itself make an investment worse — compare coefficient of variation before concluding.
