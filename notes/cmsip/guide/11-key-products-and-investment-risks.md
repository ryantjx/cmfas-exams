---
id: '11'
kind: 'chapter'
num: 11
part: null
title: 'Key Products and Investment Risks'
order: 11
slug: 'chapter-11-key-products-and-investment-risks'
---

# Key Products and Investment Risks

## 11.1 Investment risks for derivatives

### Futures

- **Basis risk:** cash and futures are not identical or do not move together; causes include asset mismatch, uncertain exposure date, early close-out and contract-size mismatch/under- or over-hedging.
- **Liquidity risk:** volume/open interest may be low; price limits/lock-limit markets or near-expiry conditions may prevent offsetting.
- **Leverage/margin risk:** loss can exceed initial margin; a call may force liquidation and a shortfall remains payable.

### Options

Holders can lose the entire premium, especially when OTM and near expiry; European options may be difficult to monetise before expiry, and OTC exercise provisions may be unusual. Naked writers can face unlimited/large losses, and American writers do not control exercise timing. Both sides face volatility, complex-strategy, trading-halt, foreign-market timing and currency risks.

Equity-index options may reference illiquid/niche indices and OTC options add counterparty risk. Bond options inherit bond rates, credit-spread, liquidity, embedded-option and sovereign risks. Currency options involve huge notionals, round-the-clock market movements, currency delivery and OTC counterparty risk.

### Warrants

Company warrants can expire worthless, give no voting/dividend rights and dilute shareholders if exercised. Structured warrants add issuer credit risk, underlying market risk, leverage, time decay, volatility, liquidity and currency exposure.

### CFDs

Leverage, market volatility, counterparty, liquidity, currency, financing, commission/GST, rollover, corporate actions and provider-model risk apply. Foreign markets may have weaker protections and exchange controls. Market-maker pricing may be less transparent than DMA.

## 11.2 Key risks of structured products

Structured products combine risks that are not obvious from a headline yield:

1. **Market risk:** macro rates, inflation, employment, recession, earnings and political change affect underlying/payoff. Selling a call sells protection against a rise; selling a put sells protection against a fall; a short receiver/payer swaption sells protection against a rate move.
2. **CPPI risk:** buys more risky assets as they rise and sells as they fall; a sharp fall can lock the fund at its floor.
3. **Credit/counterparty risk:** issuer, SPV, swap counterparty, reference obligor or collateral may fail. An SPV may not be guaranteed by its parent.
4. **Credit-event risk:** bankruptcy, obligation acceleration/default, failure to pay, repudiation/moratorium and restructuring can trigger CDS/CLN losses.
5. **Liquidity/secondary-market risk:** customised options/CDS may be illiquid; lock-up and maturity mismatch may force a discount sale.
6. **Early-termination risk:** unwinding the bond and derivative before maturity incurs discount and break costs; full principal preservation may exist only at maturity.
7. **Structure risk:** combinations vary; loss may be unlimited or principal may be fully exposed despite a familiar wrapper.
8. **Reinvestment risk:** coupons/principal returned early or through calls may be reinvested at lower rates; large coupons, frequent payments, long maturities and premium bonds increase it; zero-coupon bonds reduce interim reinvestment risk.
9. **Volatility risk:** embedded options change value with volatility; a callable bond can fall when the call option becomes more valuable.
10. **Correlation risk:** basket/worst-of/credit-pool constituents may fall/default together.
11. **FX risk:** underlying and note currencies may differ.
12. **Legal risk:** investors own the note/claim, not necessarily underlying assets; creditor priority/recourse depends on documents.
13. **Transactional risk:** pricing/contract commencement and settlement timing, especially across currencies, can create exposure.
14. **Mis-selling/incongruence:** the product may not meet the client’s objective; PHS/prospectus/private-placement documents and advice must explain the real payoff.

## 11.3 Trading risk control and management

The front office, middle office and back office manage market, credit and settlement risks.

### Futures controls

- **Open-contract limit:** smaller for volatile/illiquid products and restricted relative to gross open interest; separate outright/spread limits may apply.
- **Maximum-loss limit:** weekly/monthly trader or desk loss triggers squaring-off and suspension/escalation.
- **Maturity limit:** restricts illiquid deferred contracts.
- **Stress-test limit:** measures portfolio under adverse scenarios.

For fixed income: 1 bp = 0.01%; DV01/PVBP is dollar price change per 1 bp; duration is a weighted cash-flow time measure; modified duration measures price sensitivity: $$\frac{\Delta P}{P} \approx -\text{modified duration} \times \Delta YTM$$. A modified duration of 2 and a 100 bp yield rise implies about a 2% price fall. If price \$980 has PVBP \$1, a 5 bp yield rise reduces it to \$975.

VaR combines volatility/correlation into a loss threshold. A 1-day 95% VaR of SGD1m means a 5% probability that loss exceeds SGD1m over one day, under the model’s assumptions. VaR has confidence, horizon and loss-estimate components; it is not a guarantee or stress-test substitute.

### Options controls

Set limits for delta (currency exposure), gamma (delta change for a spot move), vega (premium change per 1% volatility), theta (time decay) and rho (rate sensitivity). Gamma is especially volatile near ATM and expiry. Maturity concentration, total book size, premium payment and intraday limits complement Greek limits. Gamma, vega and theta may be managed together for short-option books.

### Credit and settlement controls

OTC counterparty limits depend on credit rating, settlement amount and tenor. A Credit Support Annex (CSA) specifies collateral. Clearing-broker risk arises because margin is held with the broker; exchange/CCP risk remains despite default resources. Back-office settlement controls require timely, accurate confirmations including option style, expiry/date/time, premium payment date, settlement date, strike, currencies and amounts.

## 11.4 Summary

Risk management must match the product: basis/liquidity/leverage for futures; premium/exercise/volatility/Greek risk for options; issuer/gearing for warrants; margin/financing/provider risk for CFDs; and layered market, credit, liquidity, legal, structure, correlation, FX and reinvestment risk for structured products.
