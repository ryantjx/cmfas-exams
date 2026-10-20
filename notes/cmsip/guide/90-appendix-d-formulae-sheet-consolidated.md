---
id: 'appendix-D'
kind: 'appendix'
num: null
part: null
title: 'Appendix D — Formulae sheet (consolidated)'
order: 104
slug: 'appendix-d-formulae-sheet-consolidated'
---

# Appendix D — Formulae sheet (consolidated)

## Futures

$$F_{0,t} = S_0(1 + C_{0,t})$$

$$P = 100(1 - R)$$ for short-rate futures.

$$\left(1 + \frac{d_1 r_1}{360}\right)\left(1 + \frac{d_2 r_2}{360}\right) = \left(1 + \frac{DR}{360}\right)$$ for long-rate futures.

$$F = S \times \frac{1 + R_c(n/360)}{1 + R_b(n/360)}$$ for interest-rate parity.

$$F = S\left[1 + r(t/360)\right] - D$$ for equity-index futures.

$$\text{target hedge rate} = \text{futures rate} + \text{target-rate basis}$$

$$V_t = S_t + (F - F_t) = F + (S_t - F_t)$$

$$\text{bond hedge ratio} = \frac{\text{PVBP(hedged security)}}{\text{PVBP(CTD)}} \times \text{conversion factor}$$

$$h = \frac{\Delta S}{\Delta F}$$; contracts for a delta-neutral loan $$= \frac{-h \times \text{loan value}}{\text{contract size}}$$

$$N = \frac{VP}{F \times T} \times \beta$$ for equity futures hedging.

## Options

$$\text{option price} = \text{intrinsic value} + \text{time value}$$

$$\text{call IV} = \max(0, S - X)$$; $$\text{put IV} = \max(0, X - S)$$

$$C + \text{PV}(X) = P + S$$

$$\text{delta} = \frac{\text{change in option price}}{\text{change in underlying}}$$; $$\text{gamma} = \frac{\text{change in delta}}{\text{change in underlying}}$$

## Warrants and CBBCs

$$\text{gearing} = \frac{\text{share price}}{\text{warrant price} \times n}$$; $$\text{effective gearing} = \text{delta} \times \text{gearing}$$

$$\text{call IV} = \max[0, (S - X)/n]$$; $$\text{put IV} = \max[0, (X - S)/n]$$

$$\text{call conversion price} = X + nWP$$; $$\text{put conversion price} = X - nWP$$

$$\text{call cash settlement} = (S - X)/n$$; $$\text{put cash settlement} = (X - S)/n$$

$$\text{bull CBBC} = \frac{(\text{underlying} - \text{strike}) + \text{financial cost}}{\text{conversion ratio}}$$

$$\text{bear CBBC} = \frac{(\text{strike} - \text{underlying}) + \text{financial cost}}{\text{conversion ratio}}$$

R-CBBC residual: bull $$(\text{settlement} - \text{strike})/n$$; bear $$(\text{strike} - \text{settlement})/n$$; N-CBBC residual is zero at MCE.

## Structured products

$$\text{CPPI cushion} = \text{portfolio} - \text{floor}$$; $$\text{multiplier} = 1/\text{crash size}$$; $$\text{risky} = M \times \text{cushion}$$; $$\text{risk-free} = \text{portfolio} - \text{risky}$$

$$\text{RAN payout} = P_1\frac{n}{N} + P_2\frac{N - n}{N}$$

$$\text{inverse floater coupon} = \max\left[X\% - \text{leverage} \times \text{floating index},\ \text{minimum coupon}\right]$$

$$\text{participation rate} = \frac{\text{discount sum}}{\text{call premium}}$$ under the structured-product convention.
