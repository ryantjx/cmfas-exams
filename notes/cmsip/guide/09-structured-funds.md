---
id: '9'
kind: 'chapter'
num: 9
part: null
title: 'Structured Funds'
order: 9
slug: 'chapter-9-structured-funds'
---

# Chapter 9 — Structured Funds

A structured fund is a collective investment scheme whose payoff is produced by assets, a formula, or a swap. Unlike a note, it publishes a NAV — and unlike a deposit, its capital is not a bank obligation. This chapter covers fund mechanics, CPPI, the prospectus, and ETFs.

## Learning Objectives

The candidate should be able to:

- Define a structured fund and distinguish it from a traditional fund, a tracker and a note.
- Explain total return swap and zero-plus structures.
- Compute the CPPI cushion, multiplier and risky allocation, and explain cash-lock.
- Explain the roles of manager, trustee and custodian, and their reporting clocks.
- Identify the contents of a fund prospectus and PHS.
- Distinguish physical from synthetic ETF replication and their risks.
- Explain tracking error, NAV premium and discount, and TER.

## 9.1 Structured Funds

A structured fund combines securities and/or derivatives to produce a specified risk-return profile, capital-preservation objective, participation formula, yield or cost structure. It is a **collective investment scheme**, governed by the applicable Code on Collective Investment Schemes, the offering documents, and licensing and custody requirements.

Capital preservation normally applies **only at maturity** and is subject to the fund, the issuer and the strategy performing. It is **not** deposit insurance and not a guaranteed NAV. A structured fund must **publish its NAV**, which distinguishes it from a note or a deposit.

Key governance points are a **licensed manager**, a **fiduciary trustee or custodian**, NAV calculation and reporting, valuation and pricing policies, disclosure of fees and risks, audit, and investor dealing terms. Conflicts arise where the manager, issuer, swap counterparty, custodian or distributor are affiliated.

### 9.1.1 Common Terminology

| Term | Meaning |
|---|---|
| **Asset allocation** | The division of a portfolio among asset classes |
| **AUM** | Assets under management |
| **Closed-end fund** | A fund with a fixed number of units, not continuously issuing or redeeming |
| **Collective investment scheme (CIS)** | A pooled arrangement in which investors contribute to a common portfolio |
| **CPPI** | Constant proportion portfolio insurance — a formulaic floor mechanism |
| **Cushion** | Portfolio value less the floor value. With SGD 100 of assets and an SGD 80 floor, the cushion is **SGD 20** |
| **Custodian** | Holds the fund's assets, segregated from the manager's |
| **Drawdown** | The fall from a previous peak |
| **Excess return** | Return above the benchmark |
| **Index fund** | A passively managed fund tracking a benchmark index |
| **ISIN** | The international securities identification number |
| **Management fee** | The annual fee for managing the fund |
| **Minimum subscription amount** | The smallest initial investment accepted |
| **Multiplier** | In CPPI, the factor applied to the cushion to derive the risky allocation |
| **NAV** | Net asset value — assets less liabilities, divided by units outstanding |
| **Open-end fund** | A fund that issues and redeems units continuously at NAV |
| **Share class** | A division of a fund with different fees, currency or distribution terms |
| **Sharpe ratio** | (Return − risk-free rate) ÷ standard deviation of return |
| **SICAV** | A European open-end investment company with variable capital; often an umbrella |
| **TER** | Total expense ratio — annual costs as a percentage of NAV |
| **Total return** | Price change plus income, reinvested |
| **Total return swap (TRS)** | A swap exchanging the total return of a reference for a financing leg |
| **Tracker** | An index fund; passively managed to track a benchmark |
| **Trailer fee** | Paid by the asset manager to a distributor in lieu of ongoing advice |
| **Upfront sales or subscription charge** | A charge on subscription, reverted to the distributor |
| **UCITS** | Undertakings for the Collective Investment in Transferable Securities |
| **Umbrella fund** | One legal entity with several distinct sub-funds, traded individually |
| **Underlying asset** | What a direct-policy fund tracks, or what an indirect-policy fund's return is linked to |
| **Underlying securities** | The transferable securities constituting the underlying asset |
| **Value at risk (VaR)** | A statistical measure of risk over a period, in three variables: the potential loss, the probability of it, and the time frame |
| **Volatility** | The dispersion of returns, measured by standard deviation or variance |
| **Zero-coupon bond** | Pays no interest during its tenor; sold at a discount and redeemed at face value |

**UCITS** was first adopted in **1986 (UCITS I)** and applies to funds marketed to retail investors. It brought costs down because providers no longer needed a new vehicle for each country. A UCITS-compliant fund, registered in its home state, can be **passported** to the public across the **30 countries of the European Economic Area**. UCITS funds are marketed globally and have succeeded in Asia and Latin America. In **July 2012** the European Commission published the draft **UCITS VI** directive.

### 9.1.2 Compared with Traditional Funds

Traditional active funds select assets to outperform a benchmark, using manager judgement on securities, sectors, timing and allocation. A structured fund instead fixes the payoff mechanism in advance — a formula, a floor or a participation rate — so the outcome is determined by the structure rather than by discretionary selection.

### 9.1.3 Compared with Trackers

Trackers are **passively managed** index funds tracking a chosen benchmark. A structured fund may use an index as its underlying, but its payoff is transformed by the formula or the derivative; it does not simply replicate the index. Index investing is a form of passive investing; a structured fund is neither wholly passive nor discretionary.

### 9.1.4 Components

A structured fund has a **principal component** and a **return component**:

- the principal component may be a bond, a zero-coupon bond, a deposit or a money-market instrument;
- the return component may be a call, a put, a range, a digital or a swap.

A typical structure might place **80%** of assets in a principal component designed to reach 100% at maturity, and **20%** in an S&P 500 call.

### 9.1.5 Structured Funds Using Derivatives

**Total return swap funds.** A TRS fund receives the total return of a reference asset or index and pays financing to a swap counterparty. The financing leg might be **SIBOR + 30bp**, reset over six months, for the five-year life. It provides efficient exposure but adds **counterparty, collateral, reset, liquidity and termination risk** — the fund's return depends on the swap counterparty performing.

**Zero-plus structures.** A zero-plus fund allocates to a zero-coupon component that is projected to reach 100 at maturity, and to a call option for the upside.

**Worked example.** Ten-year fund. **80%** is placed in a zero-coupon bond worth 80% today and projected to reach 100% in ten years — this is a projection, not a guarantee. **20%** buys a ten-year STI call. If the call costs **25%** of notional, the participation rate is:

$$ \frac{20}{25} = \mathbf{80\%} $$

The floor is protected only if the zero-coupon component performs and the issuer pays.

### 9.1.6 CPPI

Constant proportion portfolio insurance allocates dynamically between a risky and a risk-free asset. It typically offers a guarantee of **80–100%** of principal; principal insurance bought from a bank costs roughly **1% p.a.**

#### 9.1.6.1 How CPPI Works

$$ \text{cushion} = \text{portfolio value} - \text{floor value} $$

$$ \text{multiplier} = \frac{1}{\text{crash size}} $$

$$ \text{risky allocation} = \text{multiplier} \times \text{cushion} $$

$$ \text{risk-free allocation} = \text{portfolio value} - \text{risky allocation} $$

With a **15%** floor and a **20%** crash size, the multiplier is **5** and the risky allocation is $$5 \times 15\% = \mathbf{75\%}$$.

**CPPI fund example.** A USD 100,000 fund, five years, **100% guaranteed**, guarantee fee **1%**, management fee **1.5%**, index allocation between **0% and 120%**.

| Path | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Outcome |
|---|---|---|---|---|---|---|
| **Good** | 100 | 110 | 105 | 120 | 125 | 135 |
| **Weak** | 100 | 95 | 90 | 98 | 100 | 95 → **100 guaranteed** |

On the weak path the fund falls to 90, the cushion approaches zero, the manager sells the risky assets and the fund finishes at the guaranteed 100 rather than at 95. That is the mechanism working — and also the reason the investor misses any recovery.

#### 9.1.6.2 CPPI Risks

Three assumptions underpin CPPI: the risky asset **appreciates**, has **low volatility**, and has **limited drawdown**. Each can fail.

- **Buy high, sell low.** The formula buys after rises and sells after falls, so a range-bound market erodes the fund.
- **Cash lock.** A sharp fall forces the fund entirely into the risk-free asset, after which it misses any recovery.
- **Gap risk.** A fall larger than the assumed crash size breaches the floor before the manager can de-risk.
- **High fees.** Guarantee and management fees reduce the cushion from the outset.

### 9.1.7 DPPI

**Dynamic proportion portfolio insurance** varies the multiplier rather than holding it constant. A common configuration uses a multiplier band of **3–5×**, reset to **4×**. It responds to market conditions but shares CPPI's path, fee, gap, liquidity and manager risks.

### 9.1.8 Fund Structures

#### 9.1.8.1 Capital-Preservation Funds

A capital-preservation fund guarantees a stated proportion of principal at maturity, typically by combining a zero-coupon bond with a call.

#### 9.1.8.2 Formula Funds

A **formula fund** allocates according to a pre-determined formula based on an anticipated view, with the final payout depending on the realised market outcome. The advantage is that the investor knows from the start how the investment will be allocated. Such funds can be set up to track indices.

#### 9.1.8.3 Capitalised and Distribution Funds

**Capitalised** funds — also called accumulating or reinvesting — automatically reinvest dividends into the fund. **Distributing** funds — also called income funds — pay dividends received to investors periodically.

#### 9.1.8.4 Indirect Investment Policy Funds (Swap-Based)

These give a return linked to the performance of an underlying without investing directly or fully in it. The fund may invest part or all of the net proceeds in one or more derivatives under the **Investment Restrictions** in the prospectus. The investor's return depends on the underlying's performance **and** on the performance of the derivative used to link the proceeds.

The fund may instead hold a **hedging asset** and exchange all or part of its performance or income for a performance linked to the underlying, using derivatives within the prospectus limits. The underlying may follow a **passive** strategy — typically a financial index or a rules-based strategy — or an **active** strategy in which the real or notional basket is actively managed within the Investment Restrictions.

### 9.1.9 Examples of Structured Funds

Most structured funds use equities as the underlying, with others on commodities or hybrids. A common pattern is a **fixed coupon for an initial period**, then variable coupons or payouts linked to the underlying. A high fixed coupon forces the **participation ratio lower**, because the fixed payments consume the available premium.

**Formula fund on a commodity index.** The ABC Fund is an agriculture-related open-end USD fund tracking an agricultural index with diversified sector exposure, giving access to **seven liquid commodities: corn, wheat, soybean, sugar, cotton, coffee and cocoa**. Each subcomponent's weight is fixed and **reset annually**. The fund requires a low initial investment and offers **daily liquidity at NAV**.

The index uses an **optimal yield** rolling mechanism to generate alpha. Periodic rolling of expiring futures at a fixed term, the usual approach, can be detrimental to return and can even trigger losses. Optimal yield instead **maximises roll return in backwardation and minimises roll loss in contango**.

**DEF Fund.** An SGD fund of **25 stocks** across infrastructure, utilities and real estate, paying a quarterly dividend, selling calls and buying puts as a stop-loss. It illustrates a covered-call overlay combined with a protective-put overlay inside a fund structure.

### 9.1.10 Risks of Structured Funds

Market, credit and counterparty (issuer, swap counterparty or custodian), liquidity, early termination, structure, correlation, currency and concentration risk all apply. A structured fund adds **governance and valuation risk** — NAV calculation, pricing policy and conflicts — that a direct portfolio does not carry in the same way.

### 9.1.11 Roles in a Structured Fund

#### 9.1.11.1 Fund Manager

The manager implements the mandate, manages the portfolio and the day-to-day trading, and produces semi-annual and annual accounts and reports. It also handles unit creation and redemption.

#### 9.1.11.2 Fund Trustee

The trustee holds the assets on trust and oversees the manager. The reporting clocks are strict: the **semi-annual report within two months** and the **annual report within three months**, with **MAS notified within three business days** of a breach.

#### 9.1.11.3 Conflicts of Interest

Conflicts arise where the manager, trustee, custodian, swap counterparty or distributor are affiliated. They are managed through **information barriers and separate reporting lines**, and disclosed.

### 9.1.12 Managing Underlying Risk Exposure

Controls are operational, financial and legal. Risk is measured and limited through stress testing, VaR and duration, and the manager's job is to ensure risk does not exceed the level at which the fund can absorb the losses of a probable worst outcome.

### 9.1.13 Fund Documentation

#### 9.1.13.1 Fund Prospectus

The prospectus must disclose, at minimum:

- **Basic information:** registration and expiry date; place of constitution; the trust deed and any supplemental deeds; semi-annual reports; disclaimers; whether the scheme is constituted outside Singapore.
- **The manager:** name, address and track record.
- **The representative**, and **the trustee**.
- **Other parties:** investment adviser, registrar and where the register may be inspected, and auditor.
- **Structure:** standalone or umbrella; details for a fund of funds, feeder fund or sub-managed fund.
- **Investment objectives**, focus and approach.
- **Facts of inclusion:** fees and charges, and a **fee table**.
- **Risks:** general and specific.
- **Subscription of units:** procedure; minimum subscription; initial purchase price and offer period; dealing deadline and pricing basis; a **numerical example** under the pricing system adopted; confirmation of purchase; minimum fund size; return of contributions; and classes of units.
- **Regular Savings Plan:** its details, and a statement that the investor may cease participation.
- **Realisation of units:** procedure; minimum holding and minimum realisation amounts; dealing deadline and pricing basis; a numerical example.
- **Performance:** past performance, comparison against a CIS, an index or other investments, the manager's record, future prospects, the benchmark, the **expense ratio** and the **turnover ratio**.
- **Soft dollars, conflicts, reports, specialised CIS warnings**, and the **complaints** procedure.

#### 9.1.13.2 Product Highlights Sheet

The PHS summarises the prospectus in a few pages: product summary, suitability, key features, key risks, fees and charges, definitions and contacts. It is a required companion, not a substitute.

#### 9.1.13.3 Trust Deed

The trust deed establishes the fund, the trustee's powers and duties, and the investor's rights. It is the constitutional document, and the prospectus must be read with it.

### 9.1.14 Investor Types

A **restricted scheme** may be offered only to accredited or relevant persons, or at **SGD 200,000** per transaction. A retail offer requires a **lodged and registered prospectus**. Institutional investors do not require an information memorandum.

### 9.1.15 After-Sales Information

#### 9.1.15.1 Where to Get NAV

The **administrative agent**; newspapers; and Bloomberg, Reuters or the issuer's website via the **ISIN**.

#### 9.1.15.2 Performance Information

- **Semi-annual and annual statements:** the statement of net assets; the statement of changes in net assets; the **statement of investments**, listing the portfolio, with the same for each fund the company issues; and the **changes in the number of shares for each share class**, reconciling opening and closing units.
- **Investment manager report:** performance of the underlying and of each share class, AUM, annualised volatility for different share classes, and a performance outlook.
- **Factsheet:** launch date, manager information, key features, asset allocation, performance and applicable fees.
- **Monthly performance report:** the principal terms — issuer, launch date, management company, initial NAV, management fee per annum; an overview of the investment policy and portfolio methodology; and performance — **YTD, 1-month, 6-month, 1-year, 3-year and since-launch** returns, with volatility, Sharpe ratio and VaR.

## 9.2 Structured Exchange Traded Funds

### 9.2.1 What are Exchange Traded Funds?

An **ETF** is an **open-end investment fund** that aims to replicate the performance of a published market index. It is **listed and traded on a stock exchange**, and investors buy or sell ETF units to participate in the index. Indices may be by country, region or sector, and may be emerging or developed.

Investors use ETFs to gain exposure to all constituents, diversifying without purchasing each asset. Many ETFs now do more than track stock prices: some track volatility, some track only **daily** price movement, and some are **leveraged to 2–3×** an index. For some ETFs, performance depends more on the options and futures market than on the index itself.

### 9.2.2 The Global ETF Market

The global ETF market reached roughly **USD 7.7 trillion** in AUM in **2020**, with the **United States** accounting for about **70%**.

### 9.2.3 Types of ETFs

Equity; fixed income; cash; currency; commodity; index; alternative; leveraged; inverse; and protective ETFs.

### 9.2.4 Replication Methodologies

| Approach | Method |
|---|---|
| **Physical — full replication** | Hold **all** assets underlying the index in the **exact proportion**. Returns after expenses pass to investors by number of units held. |
| **Physical — representative sampling** | Hold a **subset** of constituents, usually the more dominant, to reduce the number of securities while tracking as closely as possible. Used where some components are not liquid or easily available. |
| **Synthetic — derivative embedded** | Use derivatives and/or OTC transactions to replicate the index without holding the assets. The fund relies on a **third-party contractual obligation**, so it takes credit exposure to the counterparty. This route provides access to markets such as China and India through **P-notes**. |
| **Synthetic — swap based** | Exchange the fund's return for the index return through a swap, with **collateral** posted. |

Synthetic structures are subject to a **10% net counterparty exposure** limit, with collateral of at least **90% of NAV** held at a third-party custodian owned by the trustee. Swap-based funds may be:

- **unfunded** — the ETF buys the collateral itself;
- **funded** — the counterparty deposits the collateral;
- **combined** — a mix of both.

Collateral is rebalanced **daily** to keep it at or above 90% of NAV.

### 9.2.5 ETF Pricing and Valuation

- **Bid-ask spread** is the immediate cost of trading.
- **Creation and redemption** by authorised participants keeps the price near NAV; it can fail in stressed markets.
- **NAV premium or discount** arises when the traded price diverges from NAV.
- **TER** is expressed as a percentage or in basis points and **accrues daily**.
- **Tracking error** is the divergence of fund return from index return. Six causes:

  - **a.** transaction costs;
  - **b.** portfolio holdings differing from the index;
  - **c.** the replication method;
  - **d.** futures roll, which costs in contango and earns in backwardation;
  - **e.** cash drag; and
  - **f.** hedging costs.

Tracking error is generally **lower for synthetic** than physical replication, and **higher for emerging markets**.

### 9.2.6 ETFs versus ETNs

An ETN is unsecured debt, with issuer credit risk and no segregated assets. **Exchange-traded commodities (ETCs)** are commodity-backed ETNs. A **VIX ETN** rolls daily futures and comes in different tenors, so it diverges from the index over time and can be shut down.

### 9.2.7 ETFs versus Mutual Funds

An ETF has **two liquidity sources** — primary creation and redemption, and secondary exchange trading. Mutual funds deal at NAV once a day. There is no difference between physical and swap-based ETFs in **secondary** trading; the difference is in what the fund holds and who bears the counterparty risk.

### 9.2.8 ETF and Fund Governance in the US and Europe

The **first US ETF** launched in **1993**, tracking the S&P 500 physically. US funds are governed by the **Investment Company Act of 1940**, under **SEC** jurisdiction. In Europe, **UCITS III from 2001** enabled European synthetic ETFs, subject to a **10% NAV per single counterparty** limit, with some providers adopting voluntarily tighter limits.

### 9.2.9 Investor Types and Strategies

Investors range from retail to institutional. Common uses are core-satellite allocation, **portfolio-imbalance management** and **cash-position management** — using an ETF to gain immediate exposure while cash is being invested or during a transition.

### 9.2.10 Benefits of ETFs

- Intraday liquidity and exchange trading.
- Diversification and transparency of holdings.
- Long, short, leveraged and inverse exposure.
- Low cost and tax efficiency relative to many alternatives.
- Core-satellite building blocks, and swap-based structures that **minimise pre-fee tracking error**.

### 9.2.11 Risks of ETFs

- **Market and liquidity risk**, where liquidity is measured by the **underlying**, not by secondary volume.
- **Tracking error and NAV premium or discount.**
- **Counterparty and collateral risk** in synthetic structures.
- **Roll and cash-drag risk** in commodity and futures-based funds.
- **FX and time-zone risk** — an Asian-hours fund tracking a US index diverges from NAV outside overlapping hours.
- **Leverage and daily-reset risk**, where the daily multiple is not a long-run multiple.
- **Closure, merger and securities-lending risk.** VIX ETNs were shut down in 2018, with losses exceeding **70%** even after the VIX recovered.

### 9.2.12 ETFs After-Sales

Monitor NAV, tracking difference, corporate actions, distributions, securities lending and factsheets. Remember that an ETF's **liquidity is the underlying's liquidity**: a narrow secondary market does not mean the fund is illiquid, and a deep secondary market does not mean the underlying is.

## 9.3 Summary

Structured funds are CIS vehicles whose payoff depends on assets, formulae and sometimes derivatives or swaps. CPPI preserves a floor only subject to path, fee, gap and issuer risk. ETFs trade intraday but carry NAV, tracking, market, liquidity, FX and counterparty exposures. Governance, custody, disclosure and suitability are part of the product.

## Exam cues

- **A structured fund is a CIS**, must **publish NAV**, and its capital preservation applies only at maturity and only if the issuer and strategy perform. It is not deposit insurance.
- **CPPI:** cushion = portfolio − floor; multiplier = 1/crash size; risky = multiplier × cushion. A 15% floor with a 20% crash gives multiplier **5** and **75%** risky.
- **CPPI fails** by buying high and selling low, by cash-locking at the floor, and by gap risk. It assumes an appreciating, low-volatility asset with limited drawdown.
- **DPPI** varies the multiplier, typically within a **3–5×** band reset to **4×**.
- **Zero-plus participation** = available premium ÷ call cost. 20% available against a 25% call gives **80%** participation.
- **Trustee clocks:** semi-annual report within **two months**, annual within **three**, MAS notified within **three business days** of a breach.
- **Prospectus** must include a fee table, a numerical pricing example, the RSP, realisation terms, performance with the expense and turnover ratios, soft dollars and conflicts.
- **Restricted scheme:** accredited or relevant persons, or **SGD 200,000** per transaction.
- **ETF replication:** physical full, physical representative sampling, synthetic derivative-embedded, synthetic swap-based (unfunded, funded, combined). Synthetic limits: **10% net counterparty exposure**, collateral at least **90% of NAV** rebalanced daily.
- **Six causes of tracking error:** transaction costs, holdings, replication method, futures roll, cash drag, hedging costs. Synthetic tracks **tighter** than physical; emerging markets track **wider**.
- **Trap:** an ETF's liquidity is the **underlying's** liquidity, and a leveraged or volatility ETF's daily target is not a long-run multiple.
