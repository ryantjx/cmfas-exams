---
id: '8'
kind: 'chapter'
num: 8
part: null
title: 'Structured Notes'
order: 8
slug: 'chapter-8-structured-notes'
---

# Chapter 8 — Structured Notes

A structured note is debt plus a derivative. The investor's claim is on the issuer or SPV, not on the underlying. This chapter covers the note families the examination tests — range accruals, inverse floaters, ELNs and CLNs — and how to find the real exposure inside each.

## Learning Objectives

The candidate should be able to:

- Define a structured note and identify the issuer or SPV claim.
- Explain the capital-preservation spectrum across note types.
- Compute a range accrual payout and an inverse floater coupon.
- Explain why an ELN is economically a short put, and compute the breakeven.
- Explain worst-of structures and correlation risk.
- Explain credit-linked notes, first-to-default baskets and bond-linked notes.
- Distinguish ETNs, index-linked notes, participatory notes and access notes.

## 8.1 What is a Structured Note?

A structured note is a **debt or debenture obligation** whose return is linked to an underlying — equity, index, currency, commodity, rate, credit reference or basket. The investor owns a claim on the **issuer** or an **SPV**, not the underlying asset.

Under Singapore's offering rules a prospectus may be required unless an exemption applies — for example an offer to accredited or institutional investors, or a minimum investment of **S$200,000**. The accredited-investor thresholds are:

| Investor | Threshold |
|---|---|
| Individual — net personal assets | more than **S$2 million** (primary residence net of mortgage, up to a cap) |
| Individual — financial assets | more than **S$1 million** |
| Individual — income | at least **S$300,000** in the last 12 months |
| Corporation | net assets more than **S$10 million** |

Read the prospectus, the **Product Highlights Sheet** and the term sheet. The note may be distributed directly by a bank or issued through an SPV, which may be off balance sheet and may give only the legal and asset claim described in its documents.

## 8.2 Issuing Structured Notes

The principal component can be a zero-coupon bond, a corporate or AAA bond, or a deposit-like instrument. The return component can be a long or short option, a digital, a range, a swap, a CDS or another derivative.

Issuance, hedging, funding, collateral, valuation, fees, tax, maturity mismatch and issuer or SPV recourse together determine the investor's actual risk. A note of five years' maturity funded by a shorter-dated hedge is exposed to roll and funding risk even if the reference asset behaves as expected.

## 8.3 Types of Structured Notes

| Capital preservation | Yield without capital preservation | Capital gain / participation |
|---|---|---|
| **Equity** — capital-protected notes | Bull and bear ELNs, worst-of ELNs, accumulators | Participation notes, twin-win |
| **Bonds and credit** | CLNs, BLNs, first-to-default baskets | — |
| **Interest rate** | Range accrual notes, inverse floaters, step-up callables | — |
| **FX** | Dual currency notes, range currency notes | — |

## 8.4 Yield Enhancement and Some Capital Preservation

| Feature | Detail |
|---|---|
| **Type of client** | Moderate risk tolerance, seeking yield with nominal protection |
| **Purpose** | Higher yield than a deposit, with nominal capital preserved |
| **Common underlyings** | An interest-rate benchmark or an index |
| **Benefits** | Enhanced coupon |
| **Risks** | The coupon can be zero; the note's value can fall with rates and volatility during its life; **no nominal capital loss if held to maturity**; **coupon reinvestment risk**; liquidity risk, because the client relies on the OTC counterparty |
| **Obligations** | To provide the specified amount |
| **Structure types** | Various range accrual notes |

### 8.4.1 Range Accrual Notes

A **RAN** pays a target return if a reference index stays within an agreed range, and less or nothing if it does not. The **principal is not affected**.

The reference can be a stock index such as the DJIA, or an interest-rate benchmark such as **LIBOR, SIBOR or the Singapore Swap Offer Rate (SOR)**. Where the reference is 3-month LIBOR, interest accrues at the higher rate only on days the rate trades inside the range; outside it, no interest accrues.

Interest is accrued and calculated **daily** for days inside the range. The payout therefore depends on observed movements of the index.

$$ \text{Payout}_{\text{inside}} = P_1 \times \frac{d}{N} \qquad \text{Payout}_{\text{outside}} = P_2 \times \frac{N - d}{N} \;\; (\text{or zero}) $$

where $$N$$ is the total number of observations in the period, $$d$$ the number of observations inside the range, $$P_1$$ the payout inside and $$P_2$$ the payout outside.

The observation period may be daily, weekly or monthly, though **daily** is usual, and it is more common for the payout outside the range to be **zero**.

**SOR-linked worked example.** SGD 100,000 invested for one year at **5% p.a. inside a 1%–1.5% SOR range and 0% outside**, semi-annual, ACT/360, fixing on 22 June and 22 December 2013.

- First half: **110 of 182** days inside →

$$ 5\% \times \frac{110}{182} = 3.02\% $$

- Second half: **160 of 183** days inside →

$$ 5\% \times \frac{160}{183} = 4.37\% $$

The annualised return over the year is about **3.68%**, not 5%. The gap is the whole point of the structure: the headline rate is conditional on the path.

### 8.4.2 Callable Daily RAN (VMRAN)

A callable daily range accrual note lets the issuer **call** the note after a **lock-out period**, on designated coupon dates. Calling creates **reinvestment risk**: the investor loses the attractive coupon and may only be able to reinvest at lower rates.

### 8.4.3 Inverse Floaters

The coupon moves **inversely** to a reference rate, so the note performs as rates fall:

$$ \text{coupon} = \max\left[X\% - \text{leverage} \times \text{floating-rate index},\ \text{minimum coupon}\right] $$

A floored version stops the coupon falling below a stated minimum, at the cost of a lower maximum elsewhere. Leverage makes the rate sensitivity nonlinear: at leverage 2, a 1% rise in the index cuts the coupon by 2%.

### 8.4.4 Callable Step-Up Notes

Coupons step up on a schedule, but the issuer may **call**. A typical issue might be an **American bank, BBB+, USD 20 million**, traded **30 May 2018**, minimum **USD 25,000** against a **USD 1,000** denomination, maturing **23 May 2024** over six years, with semi-annual coupons stepping **3.00%, 4.00%, 5.00% and 6.00%**.

The investor bears **issuer call and reinvestment risk**, rates risk, and the risk that the step-up is never received because the note is called first.

## 8.5 Yield Enhancement without Capital Preservation

### 8.5.1 Equity Linked Notes

An **ELN** is generally a funded bond or deposit plus a **short put** (bull ELN) or **short call** (bear ELN), and may embed a strangle or a worst-of structure. A bull ELN pays a higher yield if the equity stays above the strike; below it, the investor may receive shares or cash at the strike and bear the downside, with principal falling to zero if the underlying collapses.

Six key terms: underlying and initial reference spot; strike and conversion ratio; **knock-in level** where applicable; **cash or physical settlement**; observation dates; and the **fixing date, normally two business days from maturity**. The examination focuses on bull ELNs.

### 8.5.2 Bull ELNs

**Apple worked example.** Spot **USD 188.59** on 11 May 2018; strike **USD 174.52**, which is **92.54%** of spot; six-month put premium **USD 6**; minimum **USD 1 million**; money-market rate **2.51688%**; six months to **16 November 2018**; valuation 14 November.

Conversion shares:

$$ \frac{1{,}000{,}000}{174.52} = 5{,}730 \text{ shares} $$

Premium received is **USD 34,380**, so the deposit of USD 1,034,380 grows to **USD 1,047,309.75**. The six-month return is **4.730%**, or **9.68% p.a.** Issue price is **95.49%**, that is **USD 954,900**.

| Scenario | Spot at valuation | Outcome | Return |
|---|---|---|---|
| 1 | **+12%** to USD 211.22 | Above the strike, so cash settlement | **9.68% p.a.** |
| 2 | **−5%** to USD 179.16 | Still above the strike, cash settlement | **9.68% p.a.** |
| 3 | **−10%** to USD 169.73 | Below the strike, put exercised, shares delivered | A **−2.74%** book loss, or **USD 27,446.70** realised |

Scenario 3 is the essence of the product: the investor was paid 9.68% p.a. to accept the risk of owning Apple 10% lower. The note is economically a **short put**, so the maximum loss is nearly the whole investment if the stock falls to zero.

### 8.5.3 Worst-of ELNs

A worst-of ELN pays on the **weakest** underlying. Two examples show the mechanics.

**Worst-of ELN #1.** Three stocks A, B and C with initial spots **13.34, 12.43 and 3.12**; current spots **13.26, 12.21 and 3.09**; strikes **14.00, 13.05 and 3.28**; knock-in levels **11.87, 10.92 and 2.76**. Issue date **15 May 2018**, valuations **15 June, 16 July and 14 August 2018**, investment **SGD 200,000**, coupon **11.35% p.a.**

The critical insight is that the **worst performer need not be the knock-in toucher**. Conversion occurs at the strike, giving:

$$ \frac{200{,}000}{13.26} = 15{,}082 \text{ shares} $$

plus a cash residual.

**Worst-of ELN #2 (variable cumulative coupon).** USD 200,000, two years, the call price is **100% of the trade-date close** and the **conversion price is 90%**. Stock A is **30.00 / 27.00**, Stock B **55.00 / 49.50**. Calls are semi-annual, and the coupon steps **8%, 16%, 24%, 32%** if the laggard is at or above its call price.

Scenario 1 at the first call date: Stock A at **29.50** (−1.67%) is the laggard and below its call price, so the note **pays zero** and continues. Scenario 2 at the second call date: Stock A **32.00** (+6.67%) and Stock B **56.50** (+2.73%); Stock B is the laggard but above its call price, so the note is **called at 100%** and the client receives **USD 232,000** — the **16%** return. Scenario 3 at the final date: Stock A **32.00**, Stock B **65.00**; Stock A is the laggard but above its call price, so principal plus the **cumulative 32%** coupon is paid — **USD 264,000**.

Scenario 4 is the loss case. The note is not called, and the laggard closes **below its call price but above its conversion price**. A variable coupon is calculated from the laggard's spot over its conversion price. Stock A at **29.16** against a conversion price of **27.00**:

$$ \left(\frac{29.16}{27.00} - 1\right) \times 100 = 8.00\% $$

so the client receives **USD 216,000**, being principal plus an 8% coupon. Scenario 5 — Stock A at **26.00**, below the conversion price — delivers shares instead:

$$ \frac{200{,}000}{27.00} = 7{,}407 \text{ shares} $$

worth USD 192,593 at 26.00, a loss of **USD 7,407** or **−3.70%**, with **no coupons** received.

### 8.5.4 Risks of ELNs

The investor is short a put on the underlying, so bears the full downside of the weakest reference; receives no dividend; bears issuer and SPV credit risk; and faces liquidity risk because the note is bespoke. Worst-of structures add **correlation risk** — several names deteriorating together — and the coupon forgone while uncalled.

## 8.6 Credit Linked Notes

A **CLN** investor effectively **sells credit protection** through a CDS on a reference entity or basket, and receives an enhanced coupon in return.

On a defined **credit event** the payout may be reduced, securities delivered or principal lost. The events are:

- bankruptcy;
- failure to pay;
- restructuring;
- obligation acceleration;
- obligation default;
- repudiation or moratorium; and
- where the definitions provide for it, government intervention.

The investor bears **both** the issuer or SPV credit risk **and** the reference-entity credit risk. A typical structure is **five years at 4.00% p.a.** on a reference entity, with the issuing bank rated **single-A**.

The 2014 Credit Derivatives Definitions reformed the event definitions and the settlement mechanics. A CLN can be cash settled — paying par less the recovery value — or physically settled by delivering a qualifying obligation.

### 8.6.1 First-to-Default CLN

A **first-to-default** basket pays out on the **first** reference entity to default. That amplifies both **correlation** and **concentration** risk: with highly correlated names, one systemic shock can trigger several at once, and the protection the investor has sold is triggered by the weakest link. The coupon is higher than for a single-name CLN precisely because the probability of *some* name defaulting is higher than the probability of any *particular* name defaulting.

### 8.6.2 Risks of CLNs

Two distinct credit risks: the **issuer or collateral** risk — the note is only as good as the issuer's ability to pay, and any collateral must actually be available and enforceable — and the **reference-entity** risk, which is the credit protection the investor has sold.

### 8.6.3 Bond-Linked Notes

A **BLN** embeds a **short put on a bond**. The investor receives an enhanced coupon and, if the bond's price falls below the strike, takes delivery of the bond. A BLN differs from a CLN in four ways: the trigger is a **price** fall rather than a **credit event**; the deliverable is the bond itself; there is no ISDA credit-event determination; and the credit exposure is to the bond issuer's market price rather than to a defined default.

### 8.6.4 Risks of BLNs

Issuer risk plus bond price risk, driven by rates, credit spread and liquidity. A BLN on a long-dated bond carries substantial duration risk — a rise in yields can move the bond price far more than the coupon the investor received.

## 8.7 Market Access

### 8.7.1 Exchange-Traded Notes

An **ETN** is **unsecured listed debt** tracking an index. The investor has no ordinary ownership, no guaranteed coupon, and **central issuer credit risk** — the instrument is a promise by the issuer, not a pool of assets. An ETN therefore differs from an ETF in four ways: no segregated assets; no creation and redemption against a portfolio; no custodial protection; and credit exposure to the issuer.

### 8.7.2 Index-Linked Notes

An index-linked note links participation, a minimum and possibly a cap to an index, normally subject to the issuer's claim.

**Worked example.** Issuer ABC Structured Products, rating **A**; STI at **3,278** on 18 May 2014; denomination **SGD 1,000**; investment **SGD 1 million**; maturity **15 May 2022**, eight years. Redemption is the **greater** of:

- **100% + 4%**, or
- **85% + average performance**,

where the average is the arithmetic mean of the anniversary closes.

| Scenario | Average performance | Redemption |
|---|---|---|
| 1 | **+5%** | 85% + 5% = 90%, less than 104%, so the investor receives the **104%** floor — **SGD 1,040,000**, or **USD 42,500** of gain over eight years (4.25% in total, roughly 0.5% p.a.) |
| 2 | **−5%** | 85% − 5% = 80%, below the floor, so the investor again receives **104%** — **SGD 1,040,000** |

The structure protects the downside at a cost: eight years of capital for a total 4% return. The investor has sold the issuer a long-dated call and received a floor in exchange.

### 8.7.3 Participatory Notes

A **participatory note (P-note)** gives exposure to a market that a foreign investor cannot access directly — Indian equities are the classic case — through a note issued by a registered intermediary rather than by acquiring the shares. The investor takes the intermediary's credit risk and has no shareholder rights.

### 8.7.4 Access Notes

An **access note** provides exposure to a market, asset or strategy through a note rather than direct ownership. The terms and the issuer's recourse control the outcome.

## 8.8 Investors and Suitability

### 8.8.1 Suitability for Retail

Assess liquidity and lock-up, risk and return, capital-protection conditions, the underlying scenario, term, fees and charges, currency, issuer or SPV, collateral, secondary market, early termination, tax and concentration. Explain that a **high coupon is compensation for selling a put, a call or credit protection** — not a free enhancement.

### 8.8.2 Sales-Process Factors

Five factors determine whether the sale is sound: **liquidity** (can the client exit, and at what cost); **risk and return** (including the worst case); **terms** (the payoff formula, the triggers and the settlement); **fees and charges** (including any embedded in the issue price); and **documentation** (prospectus, PHS and term sheet, with the acknowledgement retained).

## 8.9 Summary

Structured notes are debt plus derivatives. Ask whether principal is actually protected, **when, in which currency and by whom**. Callable, range, inverse-floater, ELN and CLN products shift market, rate, equity or credit risk into the investor's return; issuer or SPV credit and liquidity are as important as the reference asset.

## Chapter 8 Appendix — Spread CDRANs, RAN Variations and PHS Content (non-examinable)

### Spread CDRANs

A spread range accrual pays on the **differential** between two points on a curve — for example the **30-year against the 10-year**. It pays while the curve is positive and fails on inversion. The investor is expressing a view on curve shape, not on the level of rates.

### Variations of RANs

- A **daily range accrual equity-linked note** observes an equity index rather than a rate. It typically carries **unprotected principal**, because the equity index can move far outside a range that a rate index would rarely breach.
- A **basket accrual** requires **all** constituents to be inside their ranges, which materially lowers the probability of accrual and therefore raises the potential coupon.

### Documentation

A prospectus and PHS are prepared for each issue, though the requirement is **exempt** for offers to institutional or accredited investors.

### PHS Contents

A PHS should be at most a few pages, set in no smaller than **10-point** type, and must cover seven mandatory sections: the **product summary**; **suitability**; **key features**; **key risks** — business, legal, market, credit and liquidity; a **prominent warning** of possible loss of all principal, in bold or italic; **definitions**; and **contact information**. The framework applies to offers of debt securities, hybrid instruments and equity securities.

## Exam cues

- **A note is a claim on the issuer or SPV**, not on the underlying. An SPV may be off balance sheet with no parent guarantee. Prospectus exemption threshold: **S$200,000**; accredited individual: **>S$2m** net personal assets, **>S$1m** financial assets, or **S$300,000** income; corporation **>S$10m** net assets.
- **RAN:** payout = $$P_1 d/N + P_2 (N-d)/N$$, usually with $$P_2 = 0$$. The SOR example: 110/182 at 5% plus 160/183 at 5% gives about **3.68%**, not 5%. The principal is unaffected; the **coupon** is conditional.
- **Inverse floater:** max[X% − leverage × index, floor]. At leverage 2, a 1% index rise cuts the coupon **2%**.
- **A bull ELN is a short put.** Apple: strike 174.52 (92.54%), 5,730 shares, premium USD 34,380, **9.68% p.a.** if above the strike, **−2.74%** if 10% below.
- **Worst-of:** the **worst performer need not be the knock-in toucher**. Variable coupon = (spot/conversion price − 1). Stock A at 29.16 against 27.00 gives **8.00%**.
- **CLN:** the investor **sells credit protection** and bears issuer risk **and** reference risk. Seven credit events. **First-to-default** pays on the first name, amplifying correlation and concentration.
- **BLN versus CLN:** a **price** trigger and bond delivery, not a credit event and ISDA determination.
- **ETN versus ETF:** the ETN is **unsecured debt** with issuer credit risk and no segregated assets.
- **Index-linked note:** redemption is the greater of 100% + 4% or 85% + average performance — the floor caps the upside at a modest total return.
- **Trap:** a high coupon is never free. It is the premium for a sold put, a sold call or sold credit protection, and the investor's maximum loss on a worst-of or an ELN is close to the whole investment.
