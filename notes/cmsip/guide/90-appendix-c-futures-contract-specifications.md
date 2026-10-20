---
id: 'appendix-C'
kind: 'appendix'
num: null
part: null
title: 'Appendix C — Futures contract specifications'
order: 103
slug: 'appendix-c-futures-contract-specifications'
---

# Appendix C — Futures contract specifications

These specifications were updated as at **April 2022**; always use current SGX specifications.

| Contract | Main terms to remember |
|---|---|
| SGX EUR/CNH FX futures (`EC`) | EUR100,000; tick CNH10; minimum fluctuation CNH0.0001; cash-settled in CNH; last trading day two business days before the third Wednesday; final price cross-calculates EUR/USD and USD/CNH WM/Reuters rates; no stated position limit but accountability above 5,000 net contracts; negotiated large trade minimum 20. |
| SGX 10-year full-size JGB (`JG`) | JPY100m notional, 10-year 6% coupon; quarterly March/June/September/December months; JPY0.01 per JPY100 notional tick (JPY10,000); cash-settled; final price from OSE 10-year JGB opening price; position accountability above 2,500 combined with mini-JGB; 1 JG offsets 10 mini-JGB. |
| SGX Nikkei 225 (`NK`) | JPY500 × index; 6 serial + 32 quarterly months; outright tick 5 points/JPY2,500, strategy 1/JPY500, TAIC 0.25/JPY125; 10% then 15% cooling limits; cash-settled; last day before second Friday; final special Nikkei quotation; accountability above 10,000 delta-combined contracts; CME mutual offset for eligible trades. |
| SGX FTSE Taiwan (`TWN`) | USD40 × index; 2 serial + 12 quarterly months; 0.25-point/US$10 standard tick; 10% then 15% cooling limits; cash-settled; last day second-last Taiwan business day; final price uses an average of index values/closing value; large trade minimum 50. |
| SGX MSCI Singapore (`SGP`) | SGD100 × index; 2 serial + 4 quarterly months; 0.05 point/SGD5 tick; ±10%/±15% cooling; cash-settled at official closing MSCI Singapore Free Index; last day second-last Singapore business day; accountability above 5,000; large trade minimum 50. |
| SGX STI (`ST`) | SGD10 × index; 2 serial + 4 quarterly months; 1 point/SGD10 tick; +10%/+15% cooling; cash-settled at official closing STI; last day second-last Singapore business day; accountability above 5,000; large trade minimum 50. |

Exam habit: identify contract size, tick value, trading hours/session, price limits, last trading day, settlement basis, final settlement reference and position-accountability threshold before calculating.
