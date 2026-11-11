/**
 * RES 12B extension questions.
 *
 * Emitted in this bank's `### N. **[Type]** [RES 1B §x.y] stem` shape. The
 * chapter comes from the source tag, not the heading, so `s` is the tag and the
 * section number determines the chapter (`§3` -> 1B-3, `Appendix A` -> the
 * appendix page). Two deliberate mappings in the parser are relied on here:
 * RES 2B §7 resolves to 1B-7, and RES 2B appendices resolve to `2B-appendices`.
 *
 * Shape: { s, t, q, o: [4], a: 'A'..'D', r, st?: [statements] }
 *   st = optional statements block; when present, `o` holds the four
 *        combination options and `a` is the combination letter.
 */

export const RES12B = [
  // -------------------------------------------------------------- 1B-2 licensing
  {
    s: 'RES 1B §2.3', t: 'Single choice',
    q: 'A representative has ceased to act for a principal for a continuous period of one month, and the principal has not notified MAS. What is the effect on the representative\u2019s status?',
    o: ['The status continues until the principal notifies MAS', 'The status ceases', 'The status is suspended only if MAS issues a notice', 'The status converts to provisional'],
    a: 'B',
    r: 'Cessation occurs automatically where the representative has not acted for one continuous month and the principal has not notified MAS. The rule prevents dormant registrations remaining on the public register.',
  },
  {
    s: 'RES 1B §2.3', t: 'Single choice',
    q: 'A temporary representative may be appointed for a total of:',
    o: ['3 months within any 12-month period, each appointment not exceeding 3 months', '6 months within any 24-month period, each appointment not exceeding 3 months', '12 months within any 24-month period', '6 months within any 12-month period, each appointment not exceeding 6 months'],
    a: 'B',
    r: 'The aggregate is 6 months within any 24 months, with each individual appointment no longer than 3 months. The second block can only be notified after the first has commenced.',
  },
  {
    s: 'RES 1B §2.3', t: 'Single choice',
    q: 'A provisional representative is given a grace period to complete the requisite examinations of:',
    o: ['One month', 'Three months', 'Six months', 'Twelve months'], a: 'B',
    r: 'A provisional representative has 3 months from entry on the public register, and the status is valid for a maximum of 3 months.',
  },
  {
    s: 'RES 1B §2.3', t: 'Multiple response',
    q: 'Which are due diligence checks a principal must perform before appointing a representative?',
    o: ['Verifying identity from a current NRIC, FIN or passport', 'Reference checks with previous employers about dismissal or material adverse records', 'Checking the Insolvency and Public Trustee\u2019s Office portal for undischarged bankruptcy', 'Obtaining the individual\u2019s personal tax returns for the last five years'],
    a: 'A,B,C',
    r: 'Identity, past-record and financial-status checks are the three heads of due diligence. Personal tax returns are not part of the prescribed process.',
  },
  {
    s: 'RES 1B §2.3', t: 'Single choice',
    q: 'The minimum education requirement for registration as a representative is:',
    o: ['At least 4 GCE O-Level credit passes', 'At least 2 GCE O-Level credit passes in all cases', 'A recognised diploma in any discipline', 'A degree in finance'], a: 'A',
    r: 'The standard is 4 O-Level credit passes, reduced to 2 with 3 continuous years of relevant experience over the last 5 years for those who sat the examinations in or before 1980.',
  },
  {
    s: 'RES 1B §2.4', t: 'Single choice',
    q: 'Which statement is required on a product advertisement issued by a CMS licence holder?',
    o: ['"This advertisement has not been reviewed by the Monetary Authority of Singapore."', '"Approved by the Monetary Authority of Singapore."', '"Past performance is guaranteed."', 'No statement is required on a product advertisement'],
    a: 'A',
    r: 'The prescribed statement clarifies that MAS has not reviewed the advertisement. The other statements either overstate regulatory endorsement or misstate the position on performance.',
  },
  {
    s: 'RES 1B §2.4', t: 'Single choice',
    q: 'Before a product advertisement is disseminated, it must be:',
    o: ['Approved in writing by a specified person who records the reasons for satisfaction', 'Approved verbally by the head of sales', 'Filed with MAS for pre-clearance', 'Published for seven days for public comment'], a: 'A',
    r: 'Regulation 46AA requires prior written approval by a specified person, with the reasons for satisfaction recorded. There is no MAS pre-clearance regime for advertisements.',
  },
  {
    s: 'RES 1B §2.4', t: 'Multiple response',
    q: 'Which statements about non-product advertisements are correct?',
    o: ['They must not be false or misleading', 'They must not claim a service is free unless it genuinely is furnished without condition or obligation', 'They must not contain exaggerated statements exploiting a reader\u2019s lack of experience', 'They must carry the product highlights sheet'], a: 'A,B,C',
    r: 'The three prohibitions apply to non-product advertisements. A product highlights sheet belongs to a product, not to a non-product advertisement.',
  },
  {
    s: 'RES 1B §2.6', t: 'Single choice',
    q: 'A CMS licence holder sends monthly statements to clients. Which statement about the exemptions is correct?',
    o: ['No monthly statement is needed where there has been no change to the account during the month', 'No monthly statement is ever needed for a retail client', 'A statement is required daily for leveraged accounts', 'A statement is only required on request'], a: 'A',
    r: 'An unchanged account in the month is one of the stated exemptions, alongside clearing-house-supplied information and the accredited, expert or institutional routes.',
  },
  {
    s: 'RES 1B §2.6', t: 'Single choice',
    q: 'A monthly statement was sent for January and March but not for February. What must the CMS licence holder do at the end of March?',
    o: ['Send a quarterly statement, because March has a monthly statement so none is required', 'Send nothing, because a monthly statement was sent in March', 'Send a quarterly statement covering January only', 'Send a statement for February only'],
    a: 'B',
    r: 'The quarterly statement is required only where no monthly statement was sent for the last month of the quarter. March is the last month and a monthly statement was sent, so the quarterly statement is not triggered.',
  },
  {
    s: 'RES 1B §2.6', t: 'Single choice',
    q: 'A transaction is executed on Monday 23 April and requires the fixing price of 25 April. When must the contract note be issued?',
    o: ['By 24 April', 'By 26 April', 'By 30 April', 'Within one month'], a: 'B',
    r: 'Where a required detail is unavailable at the time of the trade, the note is due by the next business day after the detail becomes available — here 26 April.',
  },
  {
    s: 'RES 1B §2.6', t: 'Multiple response',
    q: 'Which must appear on a contract note?',
    o: ['The price per unit of the transaction', 'The amount of consideration for the transaction', 'The rate and amount of commission charged', 'The counterparty\u2019s credit rating'], a: 'A,B,C',
    r: 'Price, consideration, commission and stamp duties are all prescribed contents. The counterparty\u2019s credit rating is not a contract note item.',
  },
  {
    s: 'RES 1B §2.7', t: 'Single choice',
    q: 'A CMS licence holder\u2019s books must be kept:',
    o: ['For at least 5 years and in a manner that allows them to be conveniently and properly audited', 'For at least 7 years and in any language', 'For at least 3 years and only in electronic form', 'Until the next audit, then destroyed'], a: 'A',
    r: 'The statutory minimum is 5 years, and the books must be apt for audit. They must also be kept in English.',
  },
  {
    s: 'RES 1B §2.7', t: 'Single choice',
    q: 'An auditor of a CMS licence holder discovers a matter that may jeopardise client assets. The auditor must:',
    o: ['Report in writing to MAS immediately', 'Report to the board at the next annual general meeting', 'Raise it only with the chief executive', 'Include it in the annual audit report without further action'], a: 'A',
    r: 'Three triggers require an immediate written report to MAS: material adverse effect on financial position, contravention or fraud, and irregularity affecting accounts or client assets.',
  },
  {
    s: 'RES 1B §2.8', t: 'Single choice',
    q: 'For a retail customer in respect of OTC derivatives contracts, the customer\u2019s money must be deposited in:',
    o: ['A trust account', 'The firm\u2019s own operating account', 'A segregated account at the firm\u2019s discretion', 'Any account nominated by the customer without restriction'], a: 'A',
    r: 'Retail customer money for OTC derivatives must go into a trust account. The segregated-account option is something extra the firm may offer, subject to a cost and protection disclosure.',
  },
  {
    s: 'RES 1B §2.8', t: 'Multiple response',
    q: 'Before depositing a retail customer\u2019s money in a trust account, a CMS licence holder must disclose which of the following?',
    o: ['That the money is held by a specified financial institution on the holder\u2019s behalf', 'Whether the money is commingled with other customers\u2019 money, and the risk of that commingling', 'The consequences for the money if the institution becomes insolvent', 'The name of every other customer in the account'], a: 'A,B,C',
    r: 'The disclosure covers the holding arrangement, commingling and its risk, insolvency consequences and, where relevant, the different laws of an overseas custodian. Naming other customers would itself breach confidentiality.',
  },
  {
    s: 'RES 1B §2.8', t: 'Single choice',
    q: 'Moneys and assets received from customers must be deposited no later than:',
    o: ['The same day', 'The next business day after receipt', 'Three business days after receipt', 'The end of the month'], a: 'B',
    r: 'Deposit must occur by the next business day, understanding that business day by reference to the holder or the custodian where the custodian is closed.',
  },
  {
    s: 'RES 1B §2.8', t: 'Multiple response',
    q: 'Which are permissible purposes for withdrawing money from a customer\u2019s trust account?',
    o: ['Making a payment to a person entitled to it', 'Defraying the holder\u2019s brokerage and other proper charges', 'Reimbursing the holder moneys it advanced to the account, provided the account does not thereby become under-margined', 'Meeting the holder\u2019s own obligations under a transaction for the holder\u2019s benefit'],
    a: 'A,B,C',
    r: 'The last option is expressly prohibited: a withdrawal must not be made from a retail customer\u2019s trust account to meet the holder\u2019s own obligations.',
  },
  {
    s: 'RES 1B §2.8', t: 'Single choice',
    q: 'The daily computation required for trust and custody accounts must be completed:',
    o: ['Before noon of every business day', 'By the close of business each day', 'Weekly', 'Monthly'], a: 'A',
    r: 'The computation as at the end of the previous business day must be completed before noon, and retained with supporting data for at least five years.',
  },
  {
    s: 'RES 1B §2.8', t: 'Single choice',
    q: 'A CMS licence holder wishes to mortgage a retail customer\u2019s assets to secure the customer\u2019s debt. It may do so only:',
    o: ['After informing the customer of the limit and the risks and obtaining written consent', 'With verbal consent from the customer', 'Whenever the customer owes any amount', 'With MAS approval in each case'], a: 'A',
    r: 'For a retail customer the firm must explain that the charge is limited to the amount owed, explain the risks and obtain written consent; the charge itself cannot exceed the amount owed.',
  },
  {
    s: 'RES 1B §2.9', t: 'Single choice',
    q: 'An interest in a listed specified product must be entered in the register within:',
    o: ['7 days of acquisition', '14 days of acquisition', '30 days of acquisition', 'The end of the financial year'], a: 'A',
    r: 'The entry must be made within 7 days, retained for 5 years in an easily accessible form, and a copy of the register kept in Singapore.',
  },

  // -------------------------------------------------------------- 1B-3 conduct
  {
    s: 'RES 1B §3.3', t: 'Single choice',
    q: 'A trader places progressively higher bids to push the price to a level where stop-loss orders trigger, then sells into the resulting momentum. This practice is:',
    o: ['Hunting for stops, a form of false trading', 'A legitimate market-making activity', 'Bucketing', 'A permitted arbitrage'], a: 'A',
    r: 'Hunting for stops is a recognised false trading practice: the trades are not driven by a genuine investment objective but by the intention to trigger other participants\u2019 orders.',
  },
  {
    s: 'RES 1B §3.3', t: 'Single choice',
    q: 'Two parties enter matching buy and sell orders at the same price for the same contract month, with no change in beneficial ownership, to create the appearance of volume. This is:',
    o: ['A wash trade', 'A cross trade', 'A calendar spread', 'A pre-arranged hedge'], a: 'A',
    r: 'A wash trade has no real economic effect and exists to create an impression of volume. A cross trade matches two genuine orders for different account owners.',
  },
  {
    s: 'RES 1B §3.4', t: 'Single choice',
    q: '"Cornering" the underlying of a derivatives contract is achieved by:',
    o: ['Buying the underlying in such volume as to gain a monopoly, forcing short sellers to pay an inflated price', 'Selling the underlying in volume to depress its price', 'Holding the position to expiry', 'Offsetting the position on the exchange'], a: 'A',
    r: 'Cornering is a form of manipulation distinguished from price manipulation by the acquisition of control over the underlying itself rather than merely moving its price.',
  },
  {
    s: 'RES 1B §3.6', t: 'Multiple response',
    q: 'Which of the following are prohibited as dissemination of false or misleading statements?',
    o: ['Disseminating information the person does not care whether it is true or false', 'Disseminating information the person knew or should have known was false in a material particular', 'Publishing a research report that identifies its author\u2019s opinion as an opinion', 'Circulating unverified rumours by word of mouth to induce dealing'], a: 'A,B,D',
    r: 'The offence requires a material falsehood combined with indifference or knowledge. Labelling an opinion as an opinion is neither false nor misleading.',
  },
  {
    s: 'RES 1B §3.7', t: 'Single choice',
    q: 'A broker receives an order to buy gold futures at 1,400 when the market is 1,395 bid / 1,405 offered. The broker withholds the order and fills the customer at 1,400 after buying at 1,398 for its own account. This is:',
    o: ['Bucketing', 'A legitimate principal trade with consent', 'A cross trade', 'Best execution'], a: 'A',
    r: 'The broker took the opposite side without executing a bona fide market transaction on the customer\u2019s behalf, and pocketed the difference. That is bucketing.',
  },
  {
    s: 'RES 1B §3.10', t: 'Multiple response',
    q: 'Which of the following are exceptions to the insider trading prohibition?',
    o: ['Redemption of units by the trustee or manager of a collective investment scheme', 'Acts by an underwriter pursuant to its role', 'A trade made in reliance on the counterparty\u2019s knowledge of the information', 'Knowledge of a corporation\u2019s own transactions'], a: 'A,B,D',
    r: 'The counterparty\u2019s knowledge is a defence rather than an exception, and defences are pleaded after the contravention is established. Exceptions include the CIS redemption, the underwriter role and knowledge of one\u2019s own transactions.',
  },
  {
    s: 'RES 1B §3.10', t: 'Single choice',
    q: 'Information is "generally available" if:',
    o: ['It consists of readily observable matter, or has been disseminated and a reasonable period has elapsed, or is a deduction from such information', 'It was shared with one other person', 'It is known to the firm\u2019s senior management', 'It appears in an internal research note'], a: 'A',
    r: 'The three limbs are readily observable matter, properly disseminated information after a reasonable period, and inferences drawn from either. Internal circulation does not make information generally available.',
  },
  {
    s: 'RES 1B §3.15', t: 'Single choice',
    q: 'A representative learns of a large client buy order and buys for a personal account first. This is:',
    o: ['Front running, a breach of the obligation to give priority to customer orders', 'Permissible if the personal trade is later disclosed', 'A legitimate use of market intelligence', 'Acceptable if the client suffers no loss'], a: 'A',
    r: 'Client order information is non-public and is treated as a form of insider information, so the priority-of-customer-orders rule prohibits trading ahead of the instruction.',
  },
  {
    s: 'RES 1B §3.16', t: 'Single choice',
    q: 'The last traded price of a contract is 11,740 with no existing bid or offer. A cross trade arrives at 11,715 on both sides. Which order must be exposed first?',
    o: ['The sell order, because it is more attractive relative to the last traded price', 'The buy order, because a bid is always exposed first', 'Either, at the trader\u2019s discretion', 'Neither, because no bid or offer exists'], a: 'A',
    r: 'With no resting quotes, the reference is the last traded price. Selling at 11,715 is attractive to a buyer relative to 11,740, so the sell order is exposed first.',
  },
  {
    s: 'RES 1B §3.20', t: 'Multiple response',
    q: 'What consequences may follow a contravention of the market conduct rules?',
    o: ['Criminal penalties including fines or imprisonment', 'Civil penalties and civil liability to affected persons', 'Suspension or loss of licence, or de-registration from public registers', 'Automatic transfer of the representative\u2019s clients to another firm'], a: 'A,B,C',
    r: 'Criminal and civil consequences plus licensing and reputational outcomes are all contemplated. Client transfers are not a regulatory consequence.',
  },

  // -------------------------------------------------------------- 1B-6 CPFIS
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'Under CPFIS, the proportion of Ordinary Account savings that may be invested in a restricted set of products including corporate bonds is:',
    o: ['35%', '50%', '75%', '100%'], a: 'A',
    r: 'The 35% sub-limit under CPFIS-OA applies to the restricted category (corporate bonds and similar), not to the broader set of eligible investments.',
  },
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'Which of the following banks is an agent bank included under CPFIS?',
    o: ['OCBC Bank', 'Maybank', 'HSBC Bank', 'ICICI Bank'], a: 'A',
    r: 'The three CPFIS agent banks are DBS, OCBC and UOB. Maybank is one of the four CPFIS fixed-deposit banks (DBS, Maybank, OCBC, UOB), which is a different list and does not make it an agent bank. HSBC and ICICI are neither.',
  },
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'A CPF member has less than the required balance in their CPF accounts and is not an undischarged bankrupt. Are they eligible to invest under CPFIS?',
    o: ['No, because the balances do not meet the stipulated requirement', 'Yes, because they are not bankrupt', 'Yes, if they are above 18', 'No, because they are unemployed'], a: 'A',
    r: 'Eligibility depends on the CPF balance threshold rather than on employment status, age above majority or bankruptcy alone.',
  },
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'For an ETF to be included under CPFIS, it must:',
    o: ['Be listed on SGX-ST and comply with the CPF Investment Guidelines', 'Be listed on any exchange and be denominated in SGD', 'Have a minimum track record of five years', 'Be managed by a Singapore-incorporated manager'], a: 'A',
    r: 'Listing on SGX-ST plus compliance with the CPF Investment Guidelines are the two conditions; currency of denomination and manager domicile are not the tests.',
  },
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'Upon the death of a CPFIS member, which document entitles a claimant to residual CPFIS investments held by an agent bank or product provider?',
    o: ['Grant of Probate', 'Letter of Entitlement', 'Option to Administer', 'Entitlement of Nominee'], a: 'A',
    r: 'The Grant of Probate establishes the executor\u2019s authority to deal with the estate, which is what the agent bank or provider requires.',
  },
  {
    s: 'RES 1B §6.2', t: 'Multiple response',
    q: 'Which statements about CPFIS are correct?',
    o: ['The scheme is administered with agent banks acting as the interface for members', 'Eligible products include certain unit trusts and ETFs', 'All CPF savings may be invested without any limit', 'CPFIS investments are subject to the CPF Investment Guidelines'], a: 'A,B,D',
    r: 'CPFIS operates through agent banks, admits only eligible products and is constrained by the CPF Investment Guidelines. Investment is subject to limits, so the unlimited-investment statement is false.',
  },

  // -------------------------------------------------------------- 1B-7 AML
  {
    s: 'RES 1B §7.2', t: 'Single choice',
    q: 'Which statute is the principal legislation governing money laundering in Singapore?',
    o: ['The Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act', 'The Securities and Futures Act', 'The Terrorism (Suppression of Financing) Act', 'The Banking Act'], a: 'A',
    r: 'The CDSA creates the laundering offences and the confiscation regime. The SFA and TSOFA address market conduct and terrorist financing respectively.',
  },
  {
    s: 'RES 1B §7.2', t: 'Multiple response',
    q: 'Which are stages of the money laundering process?',
    o: ['Placement', 'Layering', 'Integration', 'Acceleration'], a: 'A,B,C',
    r: 'The three recognised stages are placement, layering and integration. "Acceleration" is not a stage of the process.',
  },
  {
    s: 'RES 1B §7.6', t: 'Single choice',
    q: 'Under the AML/CFT notice for capital markets intermediaries, records must be retained for at least:',
    o: ['5 years', '3 years', '7 years', '1 year'], a: 'A',
    r: 'The retention period is 5 years, consistent with the record-keeping standard under the SFA.',
  },
  {
    s: 'RES 1B §7.6', t: 'Multiple response',
    q: 'Which steps are critical when applying KYC procedures to a new brokerage client?',
    o: ['Properly identifying and verifying the client\u2019s identity', 'Identifying the client\u2019s source of funds', 'Determining the types of business activity of the client', 'Determining the client\u2019s marital status'], a: 'A,B,C',
    r: 'Identity, source of funds and business activity are core CDD elements. Marital status is not a required CDD measure.',
  },
  {
    s: 'RES 1B §7.9', t: 'Single choice',
    q: 'A representative learns that a client appears on a money laundering sanctions list. The representative must:',
    o: ['Freeze the account and report the matter to the authorities', 'Freeze the account and delete the relevant records', 'Continue to monitor the account closely', 'Transfer the account to another representative'], a: 'A',
    r: 'The response is to freeze and report. Deleting records destroys evidence, continued monitoring allows further dealing, and transferring the account spreads the problem.',
  },
  {
    s: 'RES 1B §7.9', t: 'Multiple response',
    q: 'Which are suspicious transaction indicators relating to cash?',
    o: ['Frequent large cash withdrawals not justified by the client\u2019s business', 'Numerous small cash credits that individually are not substantial but in total are', 'Payment of a salary into the client\u2019s own bank account', 'Large cash deposits inconsistent with the client\u2019s known income'], a: 'A,B,D',
    r: 'Unexplained large cash movements and structuring through multiple small credits are indicators. An ordinary salary credit is not.',
  },
  {
    s: 'RES 1B §7.9', t: 'Single choice',
    q: 'For the purposes of the suspicious transaction guidance, a substantial cash amount is generally taken to exceed:',
    o: ['S$20,000 or its equivalent', 'S$5,000 or its equivalent', 'S$50,000 or its equivalent', 'S$100,000 or its equivalent'], a: 'A',
    r: 'The guidance uses S$20,000 (or equivalent) as the indicative threshold for a large or substantial cash amount.',
  },

  // --------------------------------------------------------------- 2B-2 licensing
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A corporation dealing in exchange-traded derivatives as a clearing member must maintain base capital of at least:',
    o: ['S$5 million', 'S$1 million', 'S$500,000', 'S$50,000'], a: 'A',
    r: 'A clearing member for exchange-traded derivatives requires S$5 million, the highest tier in that table.',
  },
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A non-clearing member dealing in OTC derivatives with retail clients requires base capital of:',
    o: ['S$5 million', 'S$1 million', 'S$500,000', 'S$250,000'], a: 'A',
    r: 'The retail distinction doubles the requirement: S$5 million with retail clients against S$1 million for non-retail only.',
  },
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A restricted broker dealing only in specified commodity futures contracts requires base capital of:',
    o: ['S$250,000', 'S$500,000', 'S$1 million', 'S$5 million'], a: 'A',
    r: 'The restricted broker and the introducing broker both sit at S$250,000 in the commodity futures table.',
  },
  {
    s: 'RES 2B §2.2', t: 'Multiple response',
    q: 'Which statements about the board and senior management of a CMS licence applicant are correct?',
    o: ['The board must have at least two members', 'At least one board member must be resident in Singapore', 'The chief executive officer must be resident in Singapore', 'MAS approval is required to change a director\u2019s appointment from non-executive to executive'], a: 'A,B,C,D',
    r: 'All four conditions apply, including the requirement for MAS approval when a non-executive directorship becomes executive.',
  },
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A CMS licence holder must inform MAS of a change in the address of its principal place of business within:',
    o: ['14 days', '7 days', '30 days', '3 months'], a: 'A',
    r: 'The notification period for changes in the holder\u2019s particulars is 14 days, because the information is published to the investing community.',
  },
  {
    s: 'RES 2B §2.2', t: 'Multiple response',
    q: 'Which are duties of a CMS licence holder under the internal control requirements?',
    o: ['Implementing effective written policies across all operational areas', 'Setting out in writing the limits of discretionary powers of officers and committees', 'Ensuring effective control and segregation of duties', 'Delegating all compliance responsibility to the front office'], a: 'A,B,C',
    r: 'Written policies, documented discretionary limits and segregation of duties are prescribed. Delegating compliance to the front office defeats the segregation the rules require.',
  },
  {
    s: 'RES 2B §2.6', t: 'Multiple response',
    q: 'Which statements about the monthly statement for a derivatives account are correct?',
    o: ['It must show outstanding positions, the prices at which they were established and net unrealised profit or loss marked to market', 'It must show the status of every asset held in custody', 'It must show the movement and balance of money in the account', 'It must disclose the counterparties to each OTC trade'], a: 'A,B,C',
    r: 'Positions, custody status, movements and charges are all required. Naming OTC counterparties is not a statement requirement and would raise confidentiality issues.',
  },
  {
    s: 'RES 2B §2.6', t: 'Single choice',
    q: 'For an OTC derivatives transaction, the CMS licence holder may avoid issuing a contract note if it provides a confirmation stating:',
    o: ['The name of the holder, the name of the recipient, principal capacity where applicable, the trade date and the type and notional value', 'Only the trade date', 'Only the counterparty name and the commission', 'The full terms of the ISDA Master Agreement'], a: 'A',
    r: 'Five elements make up the permitted confirmation: holder, recipient, principal capacity, date, and type and notional value.',
  },
  {
    s: 'RES 2B §2.8', t: 'Multiple response',
    q: 'Which are permissible depositories for a trust or custody account?',
    o: ['A bank or merchant bank licensed under the Banking Act', 'A finance company licensed under the Finance Companies Act', 'An approved trustee for a collective investment scheme', 'Any unregulated overseas entity nominated by the customer'], a: 'A,B,C',
    r: 'The permitted institutions are licensed banks, merchant banks, finance companies, depository agents and approved trustees, plus persons licensed to provide custodial services. An unregulated entity is not permitted.',
  },
  {
    s: 'RES 2B §2.8', t: 'Single choice',
    q: 'Where a CMS licence holder opens a trust account with a custodian outside Singapore, it must:',
    o: ['Give written notice to the custodian and obtain a similar acknowledgement that the assets are held on trust and cannot be used to offset the holder\u2019s debts', 'Rely on the overseas custodian\u2019s standard terms', 'Obtain MAS approval for each account', 'Notify the customer only at year end'], a: 'A',
    r: 'The acknowledgement requirement applies equally to an overseas custodian: the assets must be ring-fenced from the holder\u2019s own debts.',
  },
  {
    s: 'RES 2B §2.8', t: 'Single choice',
    q: 'For moneys held in a customer trust account, interest earned and returns from permitted investments:',
    o: ['Accrue to the customer', 'Belong to the CMS licence holder', 'Are shared equally', 'Are paid to MAS'], a: 'A',
    r: 'Interest and investment returns on customer money accrue to the customer; the holder may retain only the proportionate return on its own money advanced to the account.',
  },

  // ---------------------------------------------------------------- 2B-3 conduct
  {
    s: 'RES 2B §3.2', t: 'Single choice',
    q: 'A person in Tokyo manipulates the price of a futures contract listed on a Singapore exchange. For the purposes of the market conduct provisions, the act is:',
    o: ['Regarded as having taken place in Singapore', 'Outside the reach of the SFA because it occurred abroad', 'Governed only by Japanese law', 'Not actionable unless the person is resident in Singapore'], a: 'A',
    r: 'The provisions have extraterritorial reach: acts outside Singapore affecting contracts listed or quoted on an organised market in Singapore are caught.',
  },
  {
    s: 'RES 2B §3.2', t: 'Multiple response',
    q: 'Which of the following are securities-based derivatives contracts?',
    o: ['Futures on an equity index', 'Options on an equity index', 'A commodity swap', 'Structured warrants on a listed share'], a: 'A,B,D',
    r: 'A securities-based derivative has a security or securities index as its underlying. A commodity swap has a commodity underlying.',
  },
  {
    s: 'RES 2B §3.3', t: 'Single choice',
    q: 'Which element distinguishes false trading from a legitimate trade?',
    o: ['The absence of a genuine investment objective and the intention to create a false impression of activity or price', 'The size of the trade', 'Whether the trade is profitable', 'Whether the trade is cleared'], a: 'A',
    r: 'False trading is defined by purpose and effect: no genuine investment objective, and an intention to create an appearance of activity or to move the price away from its natural level.',
  },
  {
    s: 'RES 2B §3.10', t: 'Multiple response',
    q: 'Which are effective defences to a charge of insider trading?',
    o: ['The information had been made known in a manner likely to bring it to the attention of persons who commonly invest', 'The counterparty knew or ought reasonably to have known of the information before the transaction', 'The trade was small relative to the person\u2019s portfolio', 'The person did not intend to make a profit'], a: 'A,B',
    r: 'The two statutory defences turn on prior dissemination and on the counterparty\u2019s own knowledge. Size and absence of intent are not defences, and intention need not be proved.',
  },
  {
    s: 'RES 2B §3.14', t: 'Single choice',
    q: 'A CMS licence holder wishes to take the opposite side of a customer\u2019s futures order. It may do so only:',
    o: ['With the customer\u2019s prior consent and in accordance with the business rules of the exchange', 'If the trade is profitable for the customer', 'If the amount is below a threshold', 'Without any condition, because it is a principal'], a: 'A',
    r: 'Trading against a customer requires prior consent plus compliance with exchange business rules; the capacity of principal does not by itself authorise it.',
  },
  {
    s: 'RES 2B §3.17', t: 'Multiple response',
    q: 'Which statements about churning and overtrading are correct?',
    o: ['Churning is executing trades to generate commission without sound market opportunities', 'Overtrading includes maintaining positions that breach limits imposed by an exchange or clearing house', 'A holder is responsible for keeping customer positions within prescribed limits', 'Churning is permitted if the customer signs a general risk disclosure'], a: 'A,B,C',
    r: 'Churning is defined by the purpose of generating commission, and position limits bind both proprietary and customer positions. A risk disclosure does not authorise churning.',
  },
  {
    s: 'RES 2B §3.19', t: 'Single choice',
    q: 'Pre-arranged trading at an agreed price between dealers is prohibited because it:',
    o: ['Violates the principle of fair and transparent markets by letting selected participants benefit from premeditated prices', 'Is always unprofitable', 'Requires MAS approval that is never granted', 'Breaches clearing-house margin rules'], a: 'A',
    r: 'The objection is to the unfair advantage obtained over other participants, not to profitability, approval or margin.',
  },

  // ---------------------------------------------------------------- 2B-4 OTC
  {
    s: 'RES 2B §4.2', t: 'Multiple response',
    q: 'Which of the following are "specified persons" for the OTC derivatives reporting regime?',
    o: ['Banks and merchant banks', 'Finance companies and insurers', 'Holders of a capital markets services licence', 'Retail investors who are accredited investors'], a: 'A,B,C',
    r: 'Specified persons are the regulated institutions and CMS licence holders. Retail and accredited investors are not specified persons.',
  },
  {
    s: 'RES 2B §4.2', t: 'Single choice',
    q: 'Under section 129C of the SFA, a specified person who is party to a specified derivatives contract must:',
    o: ['Clear the contract with an approved or recognised clearing house', 'Report the contract to MAS', 'Obtain MAS approval before trading', 'Post collateral with a licensed bank'], a: 'A',
    r: 'Section 129C imposes the clearing obligation. Reporting is a separate obligation under Part 6A and goes to a trade repository.',
  },
  {
    s: 'RES 2B §4.2', t: 'Multiple response',
    q: 'Which asset classes of derivatives are prescribed for the reporting regime when traded or booked in Singapore?',
    o: ['Interest rate derivatives', 'Credit derivatives', 'Foreign exchange derivatives', 'Equity and commodity derivatives'], a: 'A,B,C,D',
    r: 'All five prescribed classes report: interest rate, credit, foreign exchange, commodity and equity derivatives.',
  },
  {
    s: 'RES 2B §4.3', t: 'Single choice',
    q: 'OTC commodity derivatives are registered for clearing through:',
    o: ['The Titan OTC system', 'CDP', 'The SGX-ST trading engine', 'MEPS+'], a: 'A',
    r: 'SGX-DC clears OTC commodity derivatives as non-relevant market contracts, registered through Titan OTC.',
  },
  {
    s: 'RES 2B §4.4', t: 'Single choice',
    q: 'Which form is the prescribed derivatives risk disclosure statement?',
    o: ['Form 13', 'Form 14', 'Form 1', 'Form 8'], a: 'A',
    r: 'Form 13 is the derivatives risk disclosure; Form 14 is the risk warning for overseas-listed investment products.',
  },
  {
    s: 'RES 2B §4.5', t: 'Multiple response',
    q: 'Which terms are typically addressed in an ISDA Master Agreement?',
    o: ['Governing law', 'Netting', 'Events of default and termination', 'The credit rating of each counterparty'], a: 'A,B,C',
    r: 'Governing law, conditions precedent, netting, undertakings, events of default and termination are the standard heads. Credit ratings inform collateral arrangements rather than being a term of the Master Agreement itself.',
  },
  {
    s: 'RES 2B §4.5', t: 'Single choice',
    q: 'Where a broker cannot substantiate a quotation and a difference is payable to the principal, the broker should:',
    o: ['Close the position at the next available price and settle the difference with the principal', 'Cancel the trade', 'Absorb the difference without telling the principal', 'Refer the matter to the exchange'], a: 'A',
    r: 'The broker closes out at the next available price and settles the difference, which resolves the error without leaving an unhedged or disputed position open.',
  },

  // ---------------------------------------------------------------- 2B-5 ethics
  {
    s: 'RES 2B §5.2', t: 'Single choice',
    q: 'A representative recommends a product unsuitable for the client in order to meet a commission target. Which threat category does this illustrate?',
    o: ['Self-interest', 'Self-review', 'Influence', 'Competence'], a: 'A',
    r: 'A personal interest in the commission that affects judgement is self-interest. Self-review is a lack of objectivity about one\u2019s own work; influence is pressure from others.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'Where the laws of two jurisdictions conflict, a representative must comply with:',
    o: ['The stricter law, rule or regulation', 'The law of Singapore in all cases', 'The law of the client\u2019s domicile', 'The law that permits the transaction'], a: 'A',
    r: 'The professional standard requires compliance with the stricter applicable requirement, which resolves the conflict without encouraging a search for the most permissive regime.',
  },
  {
    s: 'RES 2B §5.4', t: 'Multiple response',
    q: 'Which are exceptions to the duty of confidentiality to a client?',
    o: ['The information concerns illegal activity by the client', 'Disclosure is required by law', 'The client permits disclosure', 'A colleague on the dealing desk asks for the information'], a: 'A,B,C',
    r: 'There are exactly three exceptions: illegal activity, legal requirement and client permission. Internal curiosity is not one of them.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'A representative acts for a client while holding a personal position directly opposed to the client\u2019s interest. The correct response is to:',
    o: ['Avoid the conflict, or make full and fair disclosure before the transaction', 'Say nothing because the client has not asked', 'Disclose after the trade is complete', 'Rely on the client\u2019s general consent in the account opening form'], a: 'A',
    r: 'Conflicts must be avoided or disclosed before the transaction. Even with client consent, the representative should actively seek alternatives that avoid the conflict.',
  },
  {
    s: 'RES 2B §5.4', t: 'Multiple response',
    q: 'Which duties does a representative owe to an employer?',
    o: ['Not to solicit the employer\u2019s clients after resigning without permission', 'Not to misappropriate the client list', 'Not to engage in self-dealing', 'To report a colleague\u2019s market misconduct only after leaving the firm'], a: 'A,B,C',
    r: 'Loyalty, no solicitation, no misappropriation and no self-dealing are owed to the employer. Reporting misconduct is a duty that arises immediately, and market integrity outranks employer interest.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'A representative holds material non-public information about a security and refrains from dealing, but tells a friend who deals. The representative has:',
    o: ['Contravened the prohibition by causing another to act on the information', 'Acted lawfully because he did not deal himself', 'Committed no breach because the friend decided independently', 'Complied, provided he reports the friend afterwards'], a: 'A',
    r: 'The prohibition covers acting or causing others to act. Passing the information on engages the contravention as squarely as dealing on it directly.',
  },
  {
    s: 'RES 2B §5.5', t: 'Single choice',
    q: 'Payment for order flow is prohibited because it:',
    o: ['Creates a conflict of interest, since routing may be driven by the payment rather than by best execution', 'Is always unprofitable for the firm', 'Increases the client\u2019s commission', 'Is a form of market manipulation'], a: 'A',
    r: 'The objection is structural: a payment linked to routing incentivises the firm to route for the fee rather than for the client\u2019s best available terms.',
  },
  {
    s: 'RES 2B §5.5', t: 'Multiple response',
    q: 'Which statements about best execution are correct?',
    o: ['It requires considering price, cost, speed, likelihood of execution and settlement, size and quality holistically', 'Not executing at the best possible price is not automatically a breach', 'Speed may be prioritised over immediate price where it is critical to the outcome', 'Cross trades between staff personal accounts and client accounts are permitted with disclosure'], a: 'A,B,C',
    r: 'Best execution is a process standard judged holistically. Cross trading between staff personal accounts and client accounts is prohibited outright, disclosure notwithstanding.',
  },
  {
    s: 'RES 2B §5.5', t: 'Single choice',
    q: 'The FX Global Code is organised around:',
    o: ['Six leading principles covering ethics, governance, information sharing, execution, risk management and compliance, and confirmation and settlement', 'Five codes of conduct covering dealing principles, ethics, governance, back office and instruments', 'Three principles covering price, speed and size', 'No stated principles, only case studies'], a: 'A',
    r: 'The Code has six principles. The five-part structure describes the Blue Book, which is a common source of confusion.',
  },

  // ---------------------------------------------------------------- 2B-6 practice
  {
    s: 'RES 2B §6.2', t: 'Single choice',
    q: 'For a client investing in equities with a long-term horizon, the analysis most suited to developing the strategy is:',
    o: ['Fundamental analysis', 'Technical analysis', 'Global macro analysis', 'Sentiment analysis'], a: 'A',
    r: 'Fundamental analysis assesses intrinsic value from profitability over time, which fits a long horizon. Technical analysis is better suited to short-term strategies.',
  },
  {
    s: 'RES 2B §6.3', t: 'Multiple response',
    q: 'Which are constraints that must be addressed when formulating a trading strategy?',
    o: ['Time horizon of the position', 'Liquidity needs of the client', 'Legal restrictions on the portfolio', 'The representative\u2019s own commission target'], a: 'A,B,C',
    r: 'Horizon, liquidity and legal constraints are all legitimate constraints on the strategy. The representative\u2019s commission target is a conflict, not a client constraint.',
  },
  {
    s: 'RES 2B §6.3', t: 'Single choice',
    q: 'Shifting portfolio weightings to take advantage of a sector expected to outperform is known as:',
    o: ['Tactical asset allocation', 'Strategic asset allocation', 'Constant weighting', 'Passive indexing'], a: 'A',
    r: 'Tactical allocation deviates from the strategic weights to exploit a view. Strategic allocation sets the long-run policy mix.',
  },
  {
    s: 'RES 2B §6.4', t: 'Multiple response',
    q: 'Which are risk management tools available to a dealing representative?',
    o: ['Stop-loss levels', 'Daily loss limits', 'Value at risk measurement', 'Removing all limits to avoid forced exits'], a: 'A,B,C',
    r: 'Stops, daily loss limits and VaR are the documented tools. Removing limits converts a controlled loss into an uncontrolled one.',
  },
  {
    s: 'RES 2B §6.4', t: 'Single choice',
    q: 'A daily loss limit is reached. The representative must:',
    o: ['Liquidate all positions or be prevented from entering new ones', 'Continue trading to recoup the loss', 'Increase position size to recover faster', 'Switch to a different product'], a: 'A',
    r: 'The limit exists to stop the impulse to trade out of a loss. Continuing, scaling up or switching products defeats its purpose.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A retail customer is deemed to have sufficient knowledge for a customer account review in respect of listed SIPs if they have transacted in listed SIPs at least:',
    o: ['6 times in the preceding 3 years', '3 times in the preceding 5 years', '10 times in the preceding 5 years', 'Once at any time'], a: 'A',
    r: 'The threshold is 6 transactions in the preceding 3 years for the CAR route, and the parallel CKA route uses 6 transactions in unlisted CIS or ILPs, or in other unlisted SIPs.',
  },
  {
    s: 'RES 2B §6.6', t: 'Multiple response',
    q: 'Which may substitute for the transaction or experience route to deemed knowledge?',
    o: ['A diploma or higher qualification in a listed discipline such as accountancy, actuarial science or finance', 'A CFA or ACCA qualification', 'A minimum of 3 consecutive years of relevant work experience in the past 10 years', 'A reference letter from a former employer'], a: 'A,B,C',
    r: 'The qualification, professional-designation and work-experience routes are all specified. A reference letter is not one of the prescribed routes.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'The outcome of a customer account review for a listed SIP remains valid for:',
    o: ['3 years, extended only if the customer has transacted more than once in each 3-year period', '1 year', '5 years', 'Indefinitely'], a: 'A',
    r: 'The CAR is valid for 3 years, and the extension requires more than one transaction in each subsequent 3-year period. A CKA for an unlisted SIP is valid for 1 year.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A customer does not provide adequate information for a customer account review. The CMS licence holder must:',
    o: ['Deem the customer not to possess knowledge or experience in derivatives', 'Assume knowledge because the customer declined to answer', 'Proceed if the customer is an accredited investor', 'Obtain the information from the customer\u2019s bank instead'], a: 'A',
    r: 'The default runs against the customer: inadequate information means the customer is deemed not to possess the required knowledge or experience.',
  },
  {
    s: 'RES 2B §6.7', t: 'Multiple response',
    q: 'Which statements about operational risk are correct?',
    o: ['It arises from inadequate or failed internal processes, systems and people', 'It is independent of financial, systematic and market-wide risk', 'It is exemplified by the Barings collapse, where one person both dealt and settled', 'It is another name for market risk'], a: 'A,B,C',
    r: 'Operational risk is defined by process, system and people failure and is treated as independent of market and credit risk. Barings is the classic illustration.',
  },
  {
    s: 'RES 2B §6.7', t: 'Single choice',
    q: 'The maximum unscheduled downtime permitted for critical IT systems of a CMS licence holder is:',
    o: ['4 hours within any 12-month period', '4 hours per month', '24 hours within any 12-month period', 'No limit, provided MAS is notified'], a: 'A',
    r: 'The technology risk guidance sets 4 hours of aggregate unscheduled downtime in any 12-month period, with MAS notification of a relevant incident not later than 1 hour after discovery.',
  },
  {
    s: 'RES 2B §6.7', t: 'Single choice',
    q: 'In a margin trading account, capital risk means that the client may:',
    o: ['Lose more than the principal invested, because the position is funded by borrowed capital', 'Lose only the commission', 'Never lose the principal', 'Lose only if the broker defaults'], a: 'A',
    r: 'Leverage means losses can exceed the equity contributed. That possibility is the distinguishing feature of capital risk in a margin account.',
  },
  {
    s: 'RES 2B §6.7', t: 'Multiple response',
    q: 'Which statements about gap risk are correct?',
    o: ['Prices move from one level to another with no trading in between', 'A stop-loss may be executed well below the stop level because of a gap', 'Gaps typically follow a news event', 'A guaranteed stop removes gap risk at no cost'], a: 'A,B,C',
    r: 'Gap risk is exactly the risk that the stop level is jumped, which is why execution can occur well beyond it. A guaranteed stop addresses this only at a cost, so the no-cost statement is false.',
  },

  // ------------------------------------------------------------- 2B appendices
  {
    s: 'RES 2B Appendix A', t: 'Single choice',
    q: 'In the criteria for assessment of a customer account review, which of the following is relevant to the assessment?',
    o: ['The customer\u2019s educational qualifications, investment experience and work experience', 'The customer\u2019s marital status', 'The customer\u2019s residential address', 'The customer\u2019s preferred payment method'], a: 'A',
    r: 'The CAR takes account of education, investment experience and work experience. The other items have no bearing on knowledge or experience.',
  },
  {
    s: 'RES 2B Appendix B', t: 'Single choice',
    q: 'For a customer to satisfy the customer knowledge assessment in respect of unlisted specified investment products, the qualifying transaction count refers to:',
    o: ['Unlisted CIS or ILPs, or other unlisted SIPs, at least 6 times in the preceding 3 years', 'Listed SIPs at least 6 times in the preceding 3 years', 'Any investment product at least 10 times in the preceding 5 years', 'A single transaction of any size'], a: 'A',
    r: 'The CKA route counts unlisted CIS or ILP transactions, or other unlisted SIP transactions, at least 6 times in the preceding 3 years. Counting listed SIPs describes the CAR route.',
  },
  {
    s: 'RES 2B Appendix C', t: 'Multiple response',
    q: 'Which risks must the overseas-listed investment product risk warning statement draw to the customer\u2019s attention?',
    o: ['Differences in the level of investor protection in the foreign jurisdiction', 'Differences between the foreign legal system and Singapore\u2019s, including the difficulty of predicting outcomes', 'The possibility that exchange controls restrict repatriation of funds', 'A guarantee that the foreign exchange will compensate for any loss'], a: 'A,B,C',
    r: 'The statement warns about regulatory, legal and repatriation differences and counterparty and correspondent broker risk. No compensation guarantee exists.',
  },
  {
    s: 'RES 2B Appendix C', t: 'Single choice',
    q: 'The overseas-listed product risk warning statement requirement is found in:',
    o: ['Paragraph 29D of the MAS Notice on Sale of Investment Products (SFA 04-N12)', 'Section 129C of the SFA', 'Part 6A of the SFA', 'The CDP Clearing Rules'], a: 'A',
    r: 'Paragraph 29D of SFA 04-N12 imposes the warning and acknowledgement requirement. Section 129C concerns clearing and Part 6A concerns derivatives reporting.',
  },
  {
    s: 'RES 2B Appendix D', t: 'Single choice',
    q: 'Which of the following is an excluded investment product?',
    o: ['An ordinary share listed on an exchange', 'A structured note', 'An asset-backed security', 'A collective investment scheme with a broad mandate'], a: 'A',
    r: 'Ordinary shares, share units and business trust units are EIPs. Structured notes and asset-backed securities are expressly carved out of the debenture limb, so both are SIPs.',
  },
  {
    s: 'RES 2B Appendix D', t: 'Multiple response',
    q: 'Which statements about excluded investment products are correct?',
    o: ['Dealing in an EIP does not require a customer account review', 'Debentures are EIPs except asset-backed securities and structured notes', 'Only an immediate currency exchange is an EIP; a forward or swap is not', 'Stapling an EIP to a SIP produces an EIP'], a: 'A,B,C',
    r: 'A staple qualifies only where the stapled products are themselves EIPs, so stapling to a SIP does not confer EIP status.',
  },
  {
    s: 'RES 2B Appendix E', t: 'Single choice',
    q: 'The list of suspicious transaction examples is described in the guidance as:',
    o: ['An aid to judgement that must not be applied as a routine instrument in place of common sense', 'An exhaustive and definitive list of offences', 'A substitute for customer due diligence', 'A list that applies only to banks'], a: 'A',
    r: 'The list is expressly an aid, non-exhaustive, and not a substitute for judgement. A combination of indicators is what makes a transaction genuinely suspicious.',
  },
  {
    s: 'RES 2B §2.7', t: 'Single choice',
    q: 'A trade is executed on a Monday with no intervening market holiday. When must the contract note be issued?',
    o: ['By the next business day, Tuesday', 'On the trade date', 'Within five business days', 'When the customer requests it'], a: 'A',
    r: 'The note is due no later than the next business day after the transaction, or the next business day after any deferred detail becomes available.',
  },
  {
    s: 'RES 1B Appendix A', t: 'Single choice',
    q: 'Which document is the source of the fit and proper criteria for representatives?',
    o: ['The MAS Guidelines on Fit and Proper Criteria (FSG-01)', 'The MAS Guidelines on Criteria for the Grant of a CMS Licence (SFA 04-G01)', 'The MAS Notice on Reporting of Misconduct of Representatives (04-N11)', 'The SFA itself, without reference to any guideline'], a: 'A',
    r: 'FSG-01 sets the fit and proper criteria. SFA 04-G01 concerns licensing criteria for the firm, and 04-N11 concerns misconduct reporting.',
  },

  // ------------------------------------------------- Final revision checklist

  // ============================================ Second wave: synthesis revision
  // These are cross-cutting questions that combine chapters, which is how the real
  // paper tests understanding rather than recall of a single section.

  {
    s: 'RES 1B §1.3', t: 'Multiple response',
    q: 'Which functions are performed by CDP rather than by SGX-ST?',
    o: ['Holding securities as a bare trustee for depositors', 'Settling trades on a delivery-versus-payment basis', 'Setting the listing requirements for issuers', 'Immobilising physical certificates with a nominated custodian bank'], a: 'A,B,D',
    r: 'CDP clears, settles and holds securities in custody. Setting listing requirements is an SGX-ST function exercised through the Listing Manual.',
  },
  {
    s: 'RES 1B §1.3', t: 'Single choice',
    q: 'SGX RegCo exists in order to:',
    o: ['Separate the exchange\u2019s regulatory functions from its commercial and operating activities', 'Operate the derivatives clearing house', 'Replace MAS as the statutory regulator', 'Administer the Central Provident Fund Investment Scheme'], a: 'A',
    r: 'SGX RegCo was established in 2017 as an independent regulatory subsidiary with its own board, so that frontline regulation is not compromised by commercial interests. MAS remains the statutory regulator.',
  },
  {
    s: 'RES 1B §1.5', t: 'Multiple response',
    q: 'Which statements about accredited, expert and institutional investors are correct?',
    o: ['An institutional investor is a defined class that includes banks, insurers and licensed fund managers', 'An expert investor may be a person whose only experience is in a specified product', 'An accredited investor must meet prescribed net worth or income thresholds', 'A retail investor may elect to be treated as an accredited investor for a single transaction without any assessment'], a: 'A,B,C',
    r: 'The three categories are defined by status, experience or wealth respectively. A retail investor cannot simply elect into accredited status; the assessment and the prescribed criteria must be satisfied.',
  },
  {
    s: 'RES 1B §1.5', t: 'Single choice',
    q: 'A customer wants to be treated as an expert investor in respect of a specific product. The firm should:',
    o: ['Assess and document whether the customer has the relevant experience and knowledge for that product', 'Accept the customer\u2019s self-certification without further enquiry', 'Treat every customer as expert if they ask', 'Refuse, because expert status cannot apply to individuals'], a: 'A',
    r: 'Expert status turns on assessed experience in the relevant product, and the assessment must be documented. Individuals can qualify, so a blanket refusal is also wrong.',
  },
  {
    s: 'RES 1B §2.5', t: 'Single choice',
    q: 'The Do Not Call registry must be checked:',
    o: ['Before making a marketing call to a Singapore telephone number', 'After the marketing call if the customer objects', 'Only when the customer is an existing client', 'Only for calls made from a mobile phone'], a: 'A',
    r: 'The registry check is a precondition of the call. Breaching the DNC provisions can attract civil and criminal liability.',
  },
  {
    s: 'RES 1B §2.5', t: 'Multiple response',
    q: 'Which statements about the Personal Data Protection Act are correct?',
    o: ['It governs the collection, use and disclosure of personal data', 'Consent is generally required before collecting personal data', 'It prohibits all disclosure of personal data in every circumstance', 'It requires reasonable efforts to ensure personal data is accurate'], a: 'A,B,D',
    r: 'The PDPA regulates rather than prohibits: disclosure is permitted on a lawful basis. Accuracy and consent are core obligations.',
  },
  {
    s: 'RES 1B §2.6', t: 'Single choice',
    q: 'A retail customer wants to trade a leveraged FX contract. Before the account is opened the firm must:',
    o: ['Provide a separate written risk disclosure document and obtain a signed and dated acknowledgement', 'Obtain MAS approval for the account', 'Provide the disclosure within thirty days of the first trade', 'Rely on the customer\u2019s signature on the general terms'], a: 'A',
    r: 'The disclosure must be provided and acknowledged before the account is opened, not afterwards and not by reference to general terms.',
  },
  {
    s: 'RES 1B §3.12', t: 'Single choice',
    q: 'A CMS licence holder may disclose information about a customer\u2019s order where the disclosure is:',
    o: ['Necessary for the effective execution of that order', 'Requested by a journalist', 'Useful for the firm\u2019s marketing', 'Asked for by another client'], a: 'A',
    r: 'The three permitted grounds are effective execution, permission under exchange rules and a requirement by MAS. Media, marketing and other clients are none of them.',
  },
  {
    s: 'RES 1B §3.13', t: 'Single choice',
    q: 'A representative withdraws a customer\u2019s order from the market in order to benefit a proprietary position. This is:',
    o: ['Prohibited, because an order may not be withdrawn for the firm\u2019s or another person\u2019s benefit', 'Permitted if the customer is told afterwards', 'Permitted if no loss is suffered', 'A matter of best execution discretion'], a: 'A',
    r: 'Withdrawing or withholding an order for the firm\u2019s or a third party\u2019s benefit is prohibited outright; neither disclosure after the event nor absence of loss cures it.',
  },
  {
    s: 'RES 1B §4.2', t: 'Multiple response',
    q: 'Which are threats to ethical judgement identified in the standards?',
    o: ['Self-interest', 'Self-review', 'Influence from clients, superiors or departments', 'Peer recognition as a defined threat category'], a: 'A,B,C',
    r: 'The three named threats are self-interest, self-review and influence. Peer recognition is a motive rather than one of the defined threat categories.',
  },
  {
    s: 'RES 1B §4.3', t: 'Single choice',
    q: 'A representative is offered an all-expenses-paid overseas trip by a product provider whose products he recommends. Under the standards of professional conduct he should:',
    o: ['Decline or obtain written consent from all parties, because the benefit may compromise independence and objectivity', 'Accept it, because it is not cash', 'Accept it and disclose at the annual attestation', 'Accept it if the trip is under a week'], a: 'A',
    r: 'Independence and objectivity require that benefits which could reasonably be expected to compromise judgement be refused or consented to in writing by all parties. The form of the benefit is irrelevant.',
  },
  {
    s: 'RES 1B §5.2', t: 'Multiple response',
    q: 'Which practices support best execution?',
    o: ['Considering price, cost, speed, likelihood of execution and settlement, size and quality holistically', 'Having written policies and procedures commensurate with the nature and scale of the business', 'Monitoring the effectiveness of the execution arrangements', 'Routing all orders to a single venue to simplify monitoring'], a: 'A,B,C',
    r: 'Holistic consideration, written policies and ongoing monitoring are the required elements. Single-venue routing removes any competitive check on execution quality.',
  },
  {
    s: 'RES 1B §5.3', t: 'Single choice',
    q: 'A representative executes a large client order ahead of a smaller one received earlier at the same price. This breaches:',
    o: ['The obligation to execute comparable customer orders in accordance with the time of receipt', 'The obligation to obtain best execution', 'The confidentiality obligation', 'No obligation, because the orders differ in size'], a: 'A',
    r: 'Comparable orders must be executed in time order of receipt. The difference in size does not make the orders non-comparable.',
  },
  {
    s: 'RES 1B §6.3', t: 'Multiple response',
    q: 'Which investments are eligible under CPFIS?',
    o: ['Certain unit trusts approved for the scheme', 'Singapore Government Securities', 'ETFs listed on SGX-ST that comply with the CPF Investment Guidelines', 'Unlisted shares of a private company'], a: 'A,B,C',
    r: 'CPFIS admits approved unit trusts, SGS and compliant ETFs, subject to the investment limits. Unlisted private shares are not eligible.',
  },
  {
    s: 'RES 1B §7.3', t: 'Single choice',
    q: 'Under the CDSA, a person who knows or has reasonable grounds to suspect that property represents criminal proceeds must:',
    o: ['File a suspicious transaction report and not tip off the customer', 'Confront the customer and seek an explanation before reporting', 'Report to the customer\u2019s other bank', 'Take no action unless the amount exceeds S$100,000'], a: 'A',
    r: 'The duty is to report promptly and not to tip off. Confronting the customer risks tipping off, and there is no minimum threshold for a suspicious transaction report.',
  },
  {
    s: 'RES 1B §7.4', t: 'Multiple response',
    q: 'Which are elements of a risk-based approach to AML/CFT?',
    o: ['Customer risk profiling', 'Enhanced due diligence for higher-risk customers', 'Ongoing monitoring commensurate with risk', 'Identical due diligence for every customer regardless of risk'], a: 'A,B,C',
    r: 'A risk-based approach varies the intensity of controls with assessed risk. Uniform treatment regardless of risk is the opposite of a risk-based approach.',
  },
  {
    s: 'RES 1B §7.9', t: 'Single choice',
    q: 'A customer repeatedly structures deposits just below the reporting threshold. This is best described as:',
    o: ['Structuring, a recognised suspicious transaction indicator', 'A legitimate cash management technique', 'Tax avoidance', 'A breach of the Securities and Futures Act'], a: 'A',
    r: 'Structuring seeks to avoid thresholds and is a classic placement indicator. It is a money laundering concern rather than a legitimate technique.',
  },
  {
    s: 'RES 2B §1.4', t: 'Multiple response',
    q: 'Which statements about the SGX-DC clearing of OTC commodity derivatives are correct?',
    o: ['Contracts are registered through Titan OTC', 'Clearing members post margin at rates prescribed by SGX-DC', 'Members may set higher internal margin requirements than the minimum', 'Variation margin is never payable'], a: 'A,B,C',
    r: 'Variation margin is payable to reflect mark-to-market movements, so the last statement is false. Members may and should set higher internal requirements and review them continually.',
  },
  {
    s: 'RES 2B §2.3', t: 'Single choice',
    q: 'A representative wishes to act for a second principal. This requires:',
    o: ['MAS approval, unless the principals are related corporations', 'No approval, provided the firms agree', 'Written consent from the first principal only', 'Approval from the approved exchange'], a: 'A',
    r: 'The one-representative-one-principal rule admits an exception only with MAS approval or where the principals are related corporations.',
  },
  {
    s: 'RES 2B §2.4', t: 'Multiple response',
    q: 'Which statements about the Representative Notification Framework are correct?',
    o: ['Notifications are lodged electronically by the principal', 'The principal certifies that the representative is fit and proper', 'The representative\u2019s name appears on the Public Register of Representatives', 'A representative\u2019s unique number changes when they change principal'], a: 'A,B,C',
    r: 'The unique representative number stays with the individual even when they move to a new principal, which is what makes it useful for public verification.',
  },
  {
    s: 'RES 2B §2.5', t: 'Single choice',
    q: 'Which statement about customer confidentiality under the SFR(LCB) is correct?',
    o: ['Information about a customer\u2019s order may not be divulged except for effective execution, under exchange rules, or when required by MAS', 'Confidentiality ceases when the customer relationship ends', 'Confidentiality applies only to retail customers', 'Confidentiality may be waived by the firm\u2019s compliance department'], a: 'A',
    r: 'The obligation attaches to the information and endures beyond the relationship. It applies to all customers and cannot be waived by an internal approval.',
  },
  {
    s: 'RES 2B §3.4', t: 'Multiple response',
    q: 'Which are prohibited under the market conduct provisions for derivatives?',
    o: ['Manipulating the price of a derivatives contract traded on an organised market', 'Cornering the underlying of a derivatives contract', 'Taking a position in the underlying for a genuine investment purpose', 'Disseminating information about illegal transactions'], a: 'A,B,D',
    r: 'Manipulation, cornering and dissemination of illegal-transaction information are all prohibited. Taking a genuine position is ordinary trading.',
  },
  {
    s: 'RES 2B §3.8', t: 'Single choice',
    q: 'A broker publishes a research note that recklessly conceals material facts in order to induce dealing. This is:',
    o: ['Fraudulently inducing persons to deal in capital markets products', 'Bucketing', 'Pre-arranged trading', 'A permitted opinion'], a: 'A',
    r: 'Reckless concealment of material facts to induce dealing falls squarely within the fraudulent-inducement provision. An honest opinion honestly held is different.',
  },
  {
    s: 'RES 2B §4.2', t: 'Single choice',
    q: 'A CMS licence holder enters into a prescribed interest rate swap booked in Singapore. Which obligations arise?',
    o: ['Both the reporting obligation under Part 6A and the clearing obligation under section 129C', 'The reporting obligation only', 'The clearing obligation only', 'Neither, unless the counterparty is a bank'], a: 'A',
    r: 'Reporting and clearing are distinct obligations that can apply to the same contract. The counterparty\u2019s identity does not exempt a specified person from them.',
  },
  {
    s: 'RES 2B §4.4', t: 'Multiple response',
    q: 'Which statements about risk disclosure for derivatives are correct?',
    o: ['Form 13 must be furnished before the account is set up', 'A client acknowledgement of the Form 13 disclosure must be obtained', 'Established industry standards such as ISDA disclosure documents may be relied on if they meet MAS requirements', 'Disclosure is unnecessary for an accredited investor'], a: 'A,B,C',
    r: 'The disclosure and acknowledgement requirements apply, and industry-standard documents can satisfy them where assessed as adequate. Accredited status does not remove the requirement.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'A representative has a personal account position in a security that a client also holds. Under the conflicts standards he must:',
    o: ['Avoid the conflict, or make full and fair disclosure before acting, and give client orders priority', 'Close the personal position immediately in all cases', 'Disclose the position to the client at year end', 'Resign from managing that client'], a: 'A',
    r: 'The obligation is avoidance or pre-transaction disclosure plus priority of client orders. Immediate closure and resignation are not required by the standard.',
  },
  {
    s: 'RES 2B §5.5', t: 'Multiple response',
    q: 'Which statements about payment for order flow are correct?',
    o: ['It is prohibited for a CMS licence holder placing or executing customer orders', 'It creates a conflict because routing may be driven by the payment rather than best execution', 'It is permitted if disclosed to the client', 'It is a form of commission rebate from the executing broker'], a: 'A,B,D',
    r: 'PFOF is prohibited outright, so disclosure does not cure it. It is a payment received for routing orders, which is precisely why the conflict arises.',
  },
  {
    s: 'RES 2B §6.6', t: 'Multiple response',
    q: 'Which statements about the approval to open a SIP trading account are correct?',
    o: ['Approval must come from senior management not involved in that account opening', 'The approving person must not be a connected person of the customer', 'Approval rests on the outcome of the CAR or CKA', 'The representative opening the account may approve it'], a: 'A,B,C',
    r: 'The approval must be independent of the account-opening process and of the customer, and must rest on the assessment outcome. The representative cannot approve their own account opening.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A customer is assessed as not possessing knowledge of unlisted SIPs but insists on proceeding. The firm may transact on the customer\u2019s behalf only if:',
    o: ['The firm is also an exempt financial adviser and provides advice in accordance with FAA-N16', 'The customer signs a waiver', 'The customer is an accredited investor', 'The amount is below S$50,000'], a: 'A',
    r: 'For an unlisted SIP the firm must be an exempt financial adviser to proceed, and must then advise to the FAA-N16 standard. A waiver, accredited status or a size threshold does not substitute.',
  },
  {
    s: 'RES 2B §6.7', t: 'Multiple response',
    q: 'Which statements about CRAFT and MAS supervision are correct?',
    o: ['CRAFT is a risk-based supervisory framework using an impact and risk model', 'MAS prioritises supervisory resources toward firms posing the greatest potential impact', 'Diagnostic tools identify problems at an early stage', 'Remedial and diagnostic tools operate independently and never need to complement each other'], a: 'A,B,C',
    r: 'Diagnostic and remedial work must complement each other: diagnosis establishes whether a risk is material, and remedial action sets a time-bound plan to mitigate it.',
  },
  {
    s: 'RES 2B §6.7', t: 'Single choice',
    q: 'A firm\u2019s systems fail and it cannot confirm trades for several hours. Which risk category does this primarily illustrate?',
    o: ['Operational risk', 'Market risk', 'Credit risk', 'Regulatory risk'], a: 'A',
    r: 'A failure of systems and processes is operational risk by definition. It may give rise to other risks, but the originating category is operational.',
  },
  {
    s: 'RES 2B §6.7', t: 'Multiple response',
    q: 'Which statements about liquidity risk for a dealing representative are correct?',
    o: ['It can arise when closing out a position in a thinly traded product', 'Bid-ask spreads typically widen when trading volume is low', 'It is eliminated by holding the position to expiry', 'Trading more liquid, less volatile derivatives can reduce it'], a: 'A,B,D',
    r: 'Liquidity risk crystallises on exit, and thinner markets widen spreads. Holding to expiry does not remove the risk; it defers the exit.',
  },

  // ------------------------------------------- Second wave: applied scenarios
  {
    s: 'RES 1B §3.20', t: 'Scenario',
    q: 'A representative places matched buy and sell orders in the same contract month for accounts he controls, at the same price, to create volume. Which offence best describes this?',
    o: ['False trading by means of a wash trade', 'Bucketing', 'Churning', 'Front running'], a: 'A',
    r: 'Matched orders with no genuine change in beneficial ownership and no economic purpose are a wash trade, a form of false trading. Churning concerns commission generation; front running concerns trading ahead of a client.',
  },
  {
    s: 'RES 1B §3.20', t: 'Scenario',
    q: 'A representative, learning that a client is about to place a large buy order, purchases for a personal account first. Which offence best describes this?',
    o: ['Front running, breaching the priority of customer orders', 'False trading', 'Cornering', 'Dissemination of information about illegal transactions'], a: 'A',
    r: 'Trading ahead of a known client order misuses non-public order information and breaches the obligation to give customer orders priority.',
  },
  {
    s: 'RES 2B §3.16', t: 'Scenario',
    q: 'A trader executes as many trades as possible in a small client account with no sound market rationale, generating substantial commission. Which offence best describes this?',
    o: ['Churning', 'Bucketing', 'Pre-arranged trading', 'Wash trading'], a: 'A',
    r: 'Churning is excessive trading for the purpose of generating commission rather than serving the client\u2019s interest.',
  },
  {
    s: 'RES 2B §2.8', t: 'Scenario',
    q: 'A firm deposits retail customer money for OTC derivatives into its own operating account overnight, then transfers it to a trust account the next morning. Is this acceptable?',
    o: ['No; retail customer money for OTC derivatives must be deposited into a trust account', 'Yes; next-business-day deposit meets the requirement', 'Yes, if the money is restored by the same time next day', 'No, unless the customer consents to the operating account'], a: 'A',
    r: 'The next-business-day rule governs the timing of deposit, not the destination. Money for retail OTC derivatives must go into a trust account, so an operating account is never a permitted destination.',
  },
  {
    s: 'RES 2B §6.6', t: 'Scenario',
    q: 'A customer completed a CAR for listed SIPs two years ago and has not traded since. May the firm let him trade a listed SIP today?',
    o: ['Yes, because the CAR remains valid for three years from the date it was conducted', 'No, because a CAR lapses after one year', 'No, because he has not traded in the last year', 'Only if he signs a fresh risk disclosure'], a: 'A',
    r: 'The CAR is valid for three years. The extension beyond three years requires more than one transaction in each three-year period, but that condition only bites at the three-year mark.',
  },
  {
    s: 'RES 1B §7.9', t: 'Scenario',
    q: 'A client asks a representative why a large transfer to an unrelated overseas party was queried by the firm. The representative should:',
    o: ['Give a neutral explanation that queries are routine, without revealing that a suspicious transaction report may have been filed', 'Explain that a suspicious transaction report has been filed', 'Refuse to speak to the client at all', 'Promise that no report will be made'], a: 'A',
    r: 'Disclosing that a report has been made would be tipping off. A neutral response protects both the client relationship and the integrity of the reporting regime.',
  },

  // ------------------------------------------- Final revision checklist page
  {
    s: 'RES 12B Final revision checklist', t: 'Multiple response',
    q: 'Which distinctions must be clear before sitting the paper?',
    o: ['A customer account review from a customer knowledge assessment', 'An excluded investment product from a specified investment product', 'Customer money from customer assets', 'A trading member from a clearing member'], a: 'A,B,C,D',
    r: 'All four pairs are fundamental: CAR and CKA address listed and unlisted products respectively; EIP and SIP determine whether the assessment applies at all; money and assets are held under different rules; and membership of an exchange is not membership of a clearing house.',
  },
  {
    s: 'RES 12B Final revision checklist', t: 'Single choice',
    q: 'Which pair is most often confused because both concern product complexity?',
    o: ['An excluded investment product and a specified investment product', 'A trading member and a clearing member', 'Placement and layering', 'A trust account and a custody account'], a: 'A',
    r: 'The EIP and SIP boundary decides whether a CAR or CKA is needed at all, so misclassifying a product removes the whole assessment. The other pairs are distinct in a way that is usually self-evident from context.',
  },
  {
    s: 'RES 12B Final revision checklist', t: 'Multiple response',
    q: 'Which conduct offences turn on the absence of a genuine commercial purpose rather than on the price achieved?',
    o: ['False trading', 'Wash trading', 'Bucketing', 'Pre-arranged trading'], a: 'A,B,C,D',
    r: 'Each is defined by purpose or by the absence of a bona fide market transaction: false trading by the intention to mislead, wash trading by the absence of economic effect, bucketing by the absence of any market execution, and pre-arranged trading by the predetermined price.',
  },
  {
    s: 'RES 12B Final revision checklist', t: 'Single choice',
    q: 'Which risk category is defined by failed internal processes, systems and people rather than by market or credit events?',
    o: ['Operational risk', 'Market risk', 'Liquity risk', 'Regulatory risk'], a: 'A',
    r: 'Operational risk is defined by process, system and people failure and is independent of market and credit risk. The Barings collapse is the standard illustration.',
  },
  {
    s: 'RES 12B Final revision checklist', t: 'Multiple response',
    q: 'Which are the stages of money laundering?',
    o: ['Placement', 'Layering', 'Integration', 'Confiscation'], a: 'A,B,C',
    r: 'Placement, layering and integration are the three stages. Confiscation is a legal consequence of detection, not a stage of the process.',
  },
  {
    s: 'RES 12B Final revision checklist', t: 'Single choice',
    q: 'Which best distinguishes a customer account review from a customer knowledge assessment?',
    o: ['The CAR applies to listed SIPs and the CKA to unlisted SIPs', 'The CAR applies to retail clients and the CKA to accredited clients', 'The CAR is optional and the CKA is mandatory', 'The CAR is conducted by MAS and the CKA by the firm'], a: 'A',
    r: 'The dividing line is the product, not the client: listed SIPs require a CAR and unlisted SIPs require a CKA. Both are conducted by the firm.',
  },

  // --------------------------------------------- 1B-6 §6.5 opening the account
  {
    s: 'RES 1B §6.5', t: 'Single choice',
    q: 'A member applying for a CPFIS Investment Account is asked which banks will accept the application and how many accounts may be held. The correct answer is:',
    o: ['DBS, OCBC or UOB, and only one account at a time', 'DBS, OCBC or UOB, and one account with each bank', 'Any MAS-licensed bank, and only one account at a time', 'Any CPFIS-included bank, and up to two accounts'], a: 'A',
    r: 'There are three agent banks — DBS, OCBC and UOB — and a member may hold only one CPF Investment Account at any time, regardless of how many banks offer the service.',
  },
  {
    s: 'RES 1B §6.5', t: 'Multiple response',
    q: 'A member attends a branch to open a CPFIS Investment Account. Which items does the guide describe the member as bringing for verification?',
    o: ['An identity card', 'The SAQ status document', 'A CPF statement so the bank can verify the CPF account number', 'A statutory declaration of all existing investments'], a: 'A,B,C',
    r: 'Identity, SAQ status and a CPF statement are the three items named. No statutory declaration of existing investments is required.',
  },

  // ---------------------------------------- 1B-6 §6.8 inclusion criteria
  {
    s: 'RES 1B §6.8', t: 'Single choice',
    q: 'Which CPFIS investments require no application by the product provider and no review by the CPF Board?',
    o: ['Singapore Government Bonds, Treasury Bills and gold products offered by CPF agent banks', 'Unit trusts and exchange-traded funds', 'Fixed deposits and statutory board bonds', 'Annuities and investment-linked policies'], a: 'A',
    r: 'Government bonds, T-bills and agent-bank gold products are the stated exceptions. Everything else is included only on the provider\u2019s application and after CPF Board review, with unit trusts, ILPs and ETFs additionally evaluated by the Board\u2019s appointed investment consultant.',
  },
  {
    s: 'RES 1B §6.8', t: 'Single choice',
    q: 'An investor proposes to pledge CPFIS-included shares as security for a bank loan. Is that permitted?',
    o: ['No, because CPFIS investments cannot be assigned, pledged or used as collateral', 'Yes, provided the loan is taken from a CPFIS-included bank', 'Yes, provided the member has set aside the Full Retirement Sum', 'Yes, but only after the investment account has been open for one year'], a: 'A',
    r: 'CPFIS investments cannot be assigned, pledged or used as collateral. The restriction is absolute and is not cured by the identity of the lender or by the member\u2019s retirement sum.',
  },

  // ------------------------------------ 1B-6 §6.10 dividends and profits
  {
    s: 'RES 1B §6.10', t: 'Single choice',
    q: 'A member receives dividends on CPFIS-OA shares. What may the member do with that money?',
    o: ['It cannot be withdrawn as cash, but may be used for other CPF schemes subject to their terms', 'It may be withdrawn as cash from the agent bank at any time', 'It must be reinvested in the same counter within 30 days', 'It is automatically transferred to the Special Account'], a: 'A',
    r: 'Dividends and profits cannot be withdrawn as cash because the scheme exists to grow retirement savings. They may be applied to other CPF schemes on those schemes\u2019 terms.',
  },
  {
    s: 'RES 1B §6.10', t: 'Single choice',
    q: 'A CPFIS investment loses 30% of its value. What does the member owe to the CPF account?',
    o: ['Nothing, because losses do not need to be made good', 'The full loss, restored in cash on realisation', 'The loss, but only up to the amount of dividends received', 'The loss, deducted from the Retirement Account'], a: 'A',
    r: 'Losses do not have to be made good. The member bears the investment risk; there is no restitution obligation back to the CPF account.',
  },

  // ----------------------------------------------- 1B-6 §6.11 charges
  {
    s: 'RES 1B §6.11', t: 'Single choice',
    q: 'What is the current cap on a wrap fee charged through CPFIS, following the October 2020 changes?',
    o: ['0.4%', '0.7%', '1.0%', 'There is no cap'], a: 'A',
    r: 'October 2020 reduced the wrap fee cap to 0.4% and removed the sales charge cap altogether. The earlier figures were 1.0% and 1.5% (from October 2018) and 1% and 3% before that.',
  },
  {
    s: 'RES 1B §6.11', t: 'Multiple response',
    q: 'Which statements about CPFIS charges are correct?',
    o: ['Charges may be paid from CPF savings', 'The agent bank may levy charges for the account and for settlement and accounting', 'The sales charge cap had been removed by October 2020', 'The wrap fee cap was removed in October 2020'], a: 'A,B,C',
    r: 'The sales charge cap was removed and the wrap fee cap was reduced to 0.4% — it was not removed. Charges may be paid from CPF savings and may be levied by product and service providers as well as by the agent bank.',
  },

  // -------------------------------------------- 1B-6 §6.13 bankruptcy
  {
    s: 'RES 1B §6.13', t: 'Single choice',
    q: 'An undischarged bankrupt holds existing CPFIS investments. Which statement is correct?',
    o: ['The member may hold or liquidate existing investments but may not make new investments with CPF money', 'The member may neither hold nor liquidate the investments while undischarged', 'The member may make new investments provided the Official Assignee consents', 'The investments vest in the Official Assignee on the making of the bankruptcy order'], a: 'A',
    r: 'Existing holdings may be held or liquidated, with proceeds credited back to the CPF Investment Account or Special Account. New investments using CPF money are prohibited.',
  },
  {
    s: 'RES 1B §6.13', t: 'Single choice',
    q: 'What protection do CPFIS investments and investment-account cash have while they remain within the scheme?',
    o: ['They are protected from creditors and the Official Assignee', 'They are protected only after the member reaches 55', 'They are protected only if the member has set aside the Full Retirement Sum', 'They are unprotected and form part of the bankrupt estate'], a: 'A',
    r: 'CPFIS investments and investment-account cash are protected from creditors and the Official Assignee while within the scheme. At 55 the FRS or BRS requirement still governs withdrawal, which is a separate question from creditor protection.',
  },

  // ------------------------------------------------- 1B-6 §6.14 death
  {
    s: 'RES 1B §6.14', t: 'Single choice',
    q: 'A member dies holding CPFIS investments. What is the effect of a CPF nomination made under the CPF Act?',
    o: ['It does not cover CPFIS investments, which form part of the estate', 'It transfers the CPFIS investments to the nominated beneficiaries directly', 'It transfers the investment-account cash only, and not the investments', 'It has effect only if the nomination is irrevocable'], a: 'A',
    r: 'CPFIS investments and investment-account cash are not covered by CPF nomination and form part of the estate. The administrator or executor must produce Letters of Administration or a Grant of Probate to claim them.',
  },
  {
    s: 'RES 1B §6.14', t: 'Multiple response',
    q: 'Which statements about CPFIS insurance policies on the member\u2019s death are correct?',
    o: ['A revocable nomination made with the insurer pays the nominated beneficiaries directly', 'Without a nomination, the proceeds are distributed with the rest of the estate', 'Irrevocable nomination is not allowed for CPFIS insurance policies', 'On death the CPFIS assets remain protected from the deceased\u2019s creditors'], a: 'A,B,C',
    r: 'Revocable nomination bypasses the estate, and without one the proceeds fall into the estate. Irrevocable nomination is not permitted. The protection ends on death, so the assets may satisfy the deceased\u2019s creditors under the Probate and Administration Act.',
  },

  // ----------------------------------- 2B-3 §3.5 market manipulation (thin)
  {
    s: 'RES 2B §3.5', t: 'Single choice',
    q: 'Which element distinguishes market manipulation under section 198 from ordinary trading that happens to move a price?',
    o: ['Intentional interference with the free forces of supply and demand to deceive or defraud', 'The size of the position taken relative to the market', 'Execution on an organised market rather than over the counter', 'The profit actually realised by the trader'], a: 'A',
    r: 'Market manipulation is defined by intentional interference with the free forces of supply and demand to deceive or defraud investors, or for other ulterior purposes. Size and realised profit are not the test.',
  },

  // ----------------------------- 2B-3 §3.6 false or misleading statements (thin)
  {
    s: 'RES 2B §3.6', t: 'Single choice',
    q: 'A representative circulates an unverified rumour about a counterparty\u2019s funding position. Which mental element must accompany a false or misleading statement for the prohibition to be engaged?',
    o: ['Not caring whether it is true or false, or knowing or having reason to know it is false or misleading', 'Intending to profit from the statement', 'Communicating it to more than one person', 'Repeating it after it has been denied'], a: 'A',
    r: 'The prohibition applies where the person does not care whether the information is true or false, or knows or should have known that it is false or misleading in a material particular. Dissemination can be by newsletter, research paper, electronic means, media or word of mouth.',
  },

  // ------------------------ 2B-3 §3.9 manipulative and deceptive devices (none)
  {
    s: 'RES 2B §3.9', t: 'Single choice',
    q: 'Why does the SFA contain a general provision on employing manipulative and deceptive devices when specific offences such as false trading already exist?',
    o: ['Because the devices perpetrators may use cannot all be defined in advance, so a catch-all is needed', 'Because the specific offences apply only to securities and not to derivatives', 'Because the specific offences require proof of profit', 'Because the catch-all carries a lower penalty and is easier to prove'], a: 'A',
    r: 'The SFA provides a general catch-all precisely because it is not possible to define every device perpetrators may employ. The Madoff Ponzi scheme is the guide\u2019s illustration.',
  },
  {
    s: 'RES 2B §3.9', t: 'Multiple response',
    q: 'Which acts fall within the prohibition on employing manipulative and deceptive devices in connection with a transaction in a capital markets product?',
    o: ['Employing any device, scheme or artifice to defraud', 'Engaging in an act or course of business that operates or is likely to operate as a fraud or deception', 'Making a statement the person knows to be false in a material particular', 'Omitting a material fact necessary to make the statements made not misleading'], a: 'A,B,C,D',
    r: 'All four limbs are stated in the provision. The omission limb matters because a statement can be misleading by what it leaves out rather than by what it says.',
  },

  // --------------- 2B-3 §3.11 information about illegal transactions (thin)
  {
    s: 'RES 2B §3.11', t: 'Single choice',
    q: 'Person Z arranges for another to influence a share price by deceptive methods, then tells third parties so they can trade on the expected move, expecting a share of their profits. Which offence does this describe?',
    o: ['Dissemination of information about illegal transactions', 'Bucketing', 'Front running', 'Pre-arranged trading'], a: 'A',
    r: 'Circulating information about illegal transactions is an offence in its own right, because trading on the expected move can create or exacerbate the artificial conditions without the trader committing the underlying manipulation.',
  },

  // ---------------------- 2B-3 §3.13 withdrawal and withholding (none)
  {
    s: 'RES 2B §3.13', t: 'Single choice',
    q: 'A representative holds back part of a customer\u2019s order so that a favoured client can trade ahead of it. Which prohibition is engaged?',
    o: ['Withholding or withdrawing a customer\u2019s order for the benefit of the holder or another person', 'Churning', 'Cornering', 'Cross trading'], a: 'A',
    r: 'Regulation 47(1) prohibits withholding or withdrawing from an organised market any order, or part of an order, for the holder\u2019s own benefit or to benefit any other person.',
  },
  {
    s: 'RES 2B §3.13', t: 'Multiple response',
    q: 'Which statements about a customer\u2019s order information are correct under the SFR(LCB)?',
    o: ['It must be kept confidential', 'It may be disclosed where necessary for the effective execution of the order', 'It may be disclosed where permitted under the rules of the relevant exchange or clearing house', 'It may be disclosed where MAS requires it under the SFA or SFR(LCB)'], a: 'A,B,C,D',
    r: 'Regulation 47(2) permits disclosure only on those three grounds, alongside the general confidentiality obligation. There is no ground of commercial convenience or customer relationship value.',
  },

  // ------------------------------ 2B-3 §3.14 trading against customer (thin)
  {
    s: 'RES 2B §3.14', t: 'Single choice',
    q: 'A CMS licence holder wants to take the opposite side of a retail customer\u2019s futures order for its own account. What is required?',
    o: ['The customer\u2019s prior consent, and compliance with the exchange\u2019s business rules and practices', 'Nothing, because a principal may always trade against its own customer', 'A written risk disclosure signed by the customer after the trade', 'Approval from MAS before the transaction'], a: 'A',
    r: 'Regulation 47C(1) permits the firm to buy from or sell to its customer only with the customer\u2019s prior consent and in accordance with the business rules and practices of an approved exchange or recognised market operator.',
  },

  // ------------------------------------- 2B-3 §3.18 overtrading (none)
  {
    s: 'RES 2B §3.18', t: 'Single choice',
    q: 'A representative maintains client positions that exceed the limits imposed by the sponsoring member or the exchange. What does the guide identify this as?',
    o: ['Overtrading, for which the holder is responsible even as to customers\u2019 positions', 'Churning, because it generates commission', 'Bucketing, because the orders were not exposed', 'Pre-arranged trading, because the limits were agreed in advance'], a: 'A',
    r: 'Candidates are prohibited from executing trades or maintaining positions that breach limits, and are responsible for keeping customers\u2019 positions within the prescribed limits. A breach may be notified to members, and steps must be taken to reduce the excess.',
  },
  {
    s: 'RES 2B §3.18', t: 'Multiple response',
    q: 'Which statements about position limits are correct?',
    o: ['Limits may be imposed by sponsoring members, approved exchanges, clearing houses or regulatory authorities', 'The firm is responsible for keeping customers\u2019 positions within the prescribed limits', 'A limit breach may be notified by the exchange or clearing house to its members', 'A limit breach is cured by later reducing the position, so no notification is required'], a: 'A,B,C',
    r: 'All three of the first statements are correct. Reducing an excess position is required, but it does not remove the breach or the notification obligation.',
  },

  // ------------------------------------ 2B-3 §3.20 penalties (thin)
  {
    s: 'RES 2B §3.20', t: 'Multiple response',
    q: 'Beyond criminal and civil penalties, which consequences does the guide identify for market misconduct?',
    o: ['Civil liability to compensate persons who traded similarly at the time and suffered losses', 'Reputational loss, including loss of customer confidence', 'Suspension or revocation of the firm\u2019s licence or the representative\u2019s registration', 'Automatic transfer of the representative\u2019s client accounts to another firm'], a: 'A,B,C',
    r: 'The four consequence categories are criminal penalties, civil penalties, civil liability with financial and reputational loss, and suspension or loss of licence or registration. Client transfers are not among them.',
  },

  // ------------------------------------------- learning-objective quiz
  // The 60-question LO-mapped mock (notes/res12b/RES12B_LO_QUIZ.md),
  // Q1–Q60 in learning-objective order. `append-questions.mjs` groups the
  // extension by part, so these land at bank numbers 409–439 (Q1–Q31,
  // RES 1B) and 523–551 (Q32–Q60, RES 2B) — see `loQuiz` in
  // scripts/lib/exams.mjs. Stems, option order, answers and
  // rationales are copied verbatim from the verified source document;
  // the `s` tags are the true guide sections (see the generator's
  // TAG_MAP — a few draft refs were corrected against the guide).
  {
    s: 'RES 1B §1.4', t: 'Single choice',
    q: 'A Singapore company with a three-year operating track record reports consolidated pre-tax profit of S$28 million for its latest financial year and applies for a Mainboard listing. Which statement is correct?',
    o: ['It meets the Mainboard profit test, because the threshold is S$25 million.', 'It does not meet the profit test, which requires at least S$30 million; it could instead qualify under a market-capitalisation route if it meets that route\'s conditions.', 'It must list on Catalist, because Catalist is the only board for companies below S$30 million profit.', 'It meets the profit test, because a three-year track record substitutes for the profit threshold.'],
    a: 'B',
    r: 'The Mainboard profit test requires at least S$30 million consolidated pre-tax profit in the latest financial year plus three years\' operating track record; the other routes require market capitalisation of at least S$150 million (with profit) or S$300 million (with operating revenue).',
  },
  {
    s: 'RES 1B §1.4', t: 'Single choice',
    q: 'A company already listed on its home exchange seeks a secondary listing on the SGX Mainboard. It also plans to raise funds in Singapore through GDRs. Which statement is correct?',
    o: ['A secondary listing takes on SGX-ST\'s continuing listing obligations in full.', 'The company need not inform SGX-ST of disclosures made to its home exchange.', 'GDRs may be offered to retail investors in Singapore, provided the offer document is in English.', 'The company must announce information to SGX-ST at the same time as it releases it to its home exchange, and GDRs may be offered only to institutional and accredited investors.'],
    a: 'D',
    r: 'A secondary listing does not take on SGX-ST continuing obligations, but disclosure to SGX-ST must be simultaneous with disclosure to the home exchange; GDRs are institutional and accredited investors only, with disclosure in English.',
  },
  {
    s: 'RES 1B §1.2', t: 'Single choice',
    q: 'A Wholesale Bank in Singapore offers a Singapore-resident individual a SGD fixed deposit of S$100,000 and an interest-bearing SGD savings account, without MAS approval. Which statement is correct?',
    o: ['The bank may not accept the S$100,000 fixed deposit, because Wholesale Banks may accept SGD fixed deposits of at least S$250,000, and may not pay interest on a SGD savings account for a Singapore-resident natural person without MAS approval.', 'The bank may accept the fixed deposit but must pay interest on the savings account.', 'The bank may accept both, because Wholesale Banks may take deposits of any amount in any currency.', 'The bank may not accept either, because Wholesale Banks may not take SGD deposits at all.'],
    a: 'A',
    r: 'Wholesale Banks may accept SGD fixed deposits of at least S$250,000, and a SGD savings/current account for a Singapore-resident natural person should not be interest-bearing without MAS\'s prior approval. (Unrestricted any-amount deposit-taking is a Full Bank power; a ban on all SGD deposits is the Merchant Bank rule.)',
  },
  {
    s: 'RES 1B §1.1', t: 'Single choice',
    q: 'A company raises new capital by issuing shares to the public through an issue manager. The shares then trade daily on SGX-ST, and a trade executed on Monday settles on Wednesday. Which statement best describes this?',
    o: ['Both the issue and the daily trading are primary-market activity, and settlement is T+1.', 'The issue is secondary-market activity because the public supplies the capital.', 'The issue is primary-market activity (capital raising, intermediated by the issue manager); the daily trading is secondary-market activity, and settlement is T+2, with CDP holding the book-entry securities as bare trustee.', 'The issue is primary-market activity, but CDP holds the securities as legal owner for its own account.'],
    a: 'C',
    r: 'The primary market is where businesses raise capital by issuing securities; the secondary market is trading thereafter, letting investors manage and transfer risk. All SGX trades settle T+2, and CDP holds immobilised book-entry securities as bare trustee for depositors.',
  },
  {
    s: 'RES 1B §2.2', t: 'Single choice',
    q: 'A CMS licence holder is both a Trading Member (base capital requirement S$1 million) and an Introducing Broker (S$500,000) for securities dealing. What is its base capital requirement?',
    o: ['S$1 million \u2014 where more than one BCR applies, the highest applicable amount is required.', 'S$500,000 \u2014 the lower requirement applies where the firm is an Introducing Broker.', 'S$1.5 million \u2014 the two requirements are added together.', 'S$50,000 \u2014 the "other eligible firms" tier applies to all dual-capacity firms.'],
    a: 'A',
    r: 'The five BCR tiers are S$5m (clearing member), S$1m (trading member), S$1m (non-member), S$500k (introducing broker), S$50k (other eligible firms); where more than one applies, the highest is required.',
  },
  {
    s: 'RES 1B §2.5', t: 'Single choice',
    q: 'A retail client with no relevant diploma or professional finance qualification has executed five qualifying transactions in listed SIPs in the preceding three years and now wants to open a listed SIP trading account. What is the position?',
    o: ['No assessment is needed, because five transactions show sufficient experience.', 'A CKA is required, because a CKA applies to all SIP accounts.', 'A CAR is required, and the five transactions do not satisfy the substitute test, which requires six qualifying transactions in the preceding three years; a CAR is valid for three years.', 'A CAR is required, but it is valid for only one year.'],
    a: 'C',
    r: 'A listed SIP account requires a Customer Account Review (CAR), valid for three years; the transaction substitute is six qualifying transactions in the preceding three years (or three consecutive years\' relevant experience in the preceding ten). CKA is for unlisted SIPs and is valid for one year.',
  },
  {
    s: 'RES 1B §2.5', t: 'Single choice',
    q: 'A retail client is assessed as lacking the knowledge and experience to transact in an unlisted SIP and insists on trading it without receiving any advice. What must the firm do?',
    o: ['Refuse to transact unless the firm is also an exempt financial adviser providing the required advisory service; for an unlisted SIP the firm should offer advice, and if declined, obtain written confirmation and explain that suitability is the customer\'s responsibility.', 'Allow the trade after obtaining the client\'s written confirmation of intent to proceed \u2014 that is sufficient for both listed and unlisted SIPs.', 'Allow the trade, because a written disclaimer removes the firm\'s liability.', 'Allow the trade after a senior manager approves the account, regardless of the CKA outcome.'],
    a: 'A',
    r: 'Where a customer fails the CKA for an unlisted SIP, the firm cannot transact unless it is also an exempt financial adviser providing the required advisory service. (Written confirmation plus a written explanation of features and risks is the route for a failed CAR on a *listed* SIP.) A disclaimer does not remove SFA/FAA liability.',
  },
  {
    s: 'RES 1B §2.3', t: 'Single choice',
    q: 'A CMS licence holder changes its principal place of business and informs MAS 20 days later. In the same month, an appointed representative changes his residential address and informs his principal 10 days later, and the principal notifies MAS 20 days after the change. Which statement is correct?',
    o: ['Only the firm\'s notification was late; the representative\'s notifications were in time.', 'Only the representative\'s notification to the principal was late.', 'Neither notification was late, because both clocks run for 21 days.', 'Both deadlines were breached: a holder must inform MAS within 14 days of a change in its particulars, a representative must inform the principal within 7 days, and the principal must then notify MAS within 14 days.'],
    a: 'D',
    r: 'MAS must be informed within 14 days of changes to the holder\'s name, principal place of business, regulated activities/products or other prescribed particulars; a representative reports changes to the principal within seven days, and the principal reports to MAS within 14 days.',
  },
  {
    s: 'RES 1B §2.4', t: 'Single choice',
    q: 'A CMS licence holder launches a telemarketing campaign for a new product. Its advertisement omits the statement "This advertisement has not been reviewed by the Monetary Authority of Singapore", and its callers telephone numbers from a purchased list without checking the Do Not Call Registry. Which statement is correct?',
    o: ['Only the advertisement breaches the rules; telephone marketing has no registry check requirement.', 'Both the advertisement and the calling breach the rules: product advertisements must carry the MAS non-review statement and receive documented written approval before publication, and the Do Not Call Registry must be checked before marketing calls.', 'Only the calling breaches the rules; the MAS statement is required only for non-product advertisements.', 'Neither breaches the rules, because the statement is voluntary and purchased lists are exempt from the registry check.'],
    a: 'B',
    r: 'Product advertisements must not be false or misleading, must be fair and balanced, must carry the statement "This advertisement has not been reviewed by the Monetary Authority of Singapore", and must have documented written approval before publication. The Do Not Call Registry must be checked before marketing calls, and clear, unambiguous consent obtained.',
  },
  {
    s: 'RES 1B §2.9', t: 'Single choice',
    q: 'A CMS licence holder receives money from a retail client as margin for OTC derivatives trading and deposits it into the firm\'s own operating account, to be moved to a trust account the following week. What is the position?',
    o: ['This is acceptable, provided the money is moved within five business days.', 'This is acceptable, because customer money may be commingled with firm money where the client is a retail client.', 'This breaches the rules: retail customer money for OTC derivatives must be segregated in a trust account, deposited by the next business day, and must not be commingled with firm money or used for another person\'s margin, guarantee or credit.', 'This is acceptable, because the segregation requirement applies only to customer assets, not customer money.'],
    a: 'C',
    r: 'Customer money must be deposited in a trust/segregated account by the next business day; retail OTC-derivatives money must be segregated in trust, never commingled with firm money, and never used as margin, guarantee or credit for any other person. (Customer *assets* sit separately in a custody account on trust.)',
  },
  {
    s: 'RES 1B §3.1', t: 'Single choice',
    q: 'A trader physically in Singapore manipulates the price of a stock that is listed only on a foreign exchange. Has he breached the SFA market-conduct provisions?',
    o: ['Yes \u2014 the provisions apply to acts in Singapore involving products listed or quoted inside or outside Singapore, and to acts outside Singapore involving products listed or quoted on a Singapore organised market.', 'No \u2014 the provisions apply only to products listed on SGX-ST.', 'No \u2014 the provisions apply only where the trade is settled in Singapore dollars.', 'Yes, but only if the manipulation also affects a Singapore-listed product.'],
    a: 'A',
    r: 'The market-conduct provisions have extraterritorial reach in both directions: acts in Singapore on foreign-listed products, and acts abroad on Singapore-listed products, are both caught.',
  },
  {
    s: 'RES 1B §3.4', t: 'Single choice',
    q: 'A dealer effects two transactions that maintain the price of a security, intending to induce others to trade in it. A colleague argues this is only "false trading" because no false statement was made. Which statement is correct?',
    o: ['The colleague is right: maintaining a price can never be manipulation.', 'The colleague is right, because manipulation requires at least three transactions.', 'The colleague is wrong about the label but right that intention is irrelevant.', 'This is securities market manipulation, which requires two or more transactions with the intention of inducing others to trade; false trading, by contrast, may be satisfied by recklessness, such as creating a false or misleading appearance of active trading.'],
    a: 'D',
    r: 'Manipulation is effecting two or more transactions that raise, lower, maintain or stabilise a price with the intention of inducing others to trade. False trading covers creating a false or misleading appearance of active trading or price, and may be satisfied by recklessness.',
  },
  {
    s: 'RES 1B §3.9', t: 'Single choice',
    q: 'A person who is not connected to a listed company overhears non-public, price-sensitive information about it, knows the information is non-public and price-sensitive, and buys the company\'s shares, claiming he had no intention to use the information and did not receive it from an insider. What is the position?',
    o: ['He is not liable, because only connected persons can commit insider trading.', 'He is not liable, because liability depends on the source of the information.', 'He is liable only if he also communicates the information to someone else.', 'He can be liable: a non-connected person may be liable merely for knowing the information is non-public and price-sensitive, regardless of the source and regardless of any intention not to use it.'],
    a: 'D',
    r: 'Inside information is information that is not generally available, is likely to materially affect price or value, and would influence persons who commonly invest. A non-connected person can be liable merely knowing it is non-public and price-sensitive \u2014 the private or public nature of the information, not its source, decides liability.',
  },
  {
    s: 'RES 1B §3.11', t: 'Single choice',
    q: 'A firm lends a client\'s specified products to a borrower, taking collateral equal to 90% of the market value of the lent products, revalued weekly, with no written understanding from the retail client. What is the position?',
    o: ['This breaches the rules: collateral must generally be at least 100% of market value, marked to market daily, and the risks must be explained with a written understanding obtained for non-exempt customers.', 'This is acceptable, because 90% collateral is sufficient where the borrower is a retail client.', 'This is acceptable, because weekly revaluation is the required standard.', 'This breaches the rules only because the collateral exceeds 85% of market value.'],
    a: 'A',
    r: 'For specified-product borrowing and lending, collateral must generally be at least 100% of market value, marked to market daily; the agreement must cover capacity, title transfer, collateral, corporate actions, valuation and margin shortfalls, return, termination, default, fees and governing law, and risks must be explained with written understanding obtained for non-exempt customers.',
  },
  {
    s: 'RES 1B §4.2', t: 'Single choice',
    q: 'Ethics is defined as "a set of moral principles or rules of conduct that provide guidance for behaviour when it affects others", and it goes beyond regulation and law. A dealer applies the ethical framework to a client situation. What is the correct order of the framework\'s four components?',
    o: ['Serve customers \u2192 execute solutions \u2192 analyse risks \u2192 understand products.', 'Analyse risks \u2192 understand products \u2192 serve customers \u2192 execute solutions.', 'Execute solutions \u2192 understand products \u2192 serve customers \u2192 analyse risks.', 'Understand products and services \u2192 analyse risks \u2192 execute solutions \u2192 serve customers, all aimed at serving the client\'s best interests with integrity.'],
    a: 'D',
    r: 'The framework has four components, all aimed at serving the client\'s best interests with integrity: (1) understand products and services, (2) analyse risks, (3) execute solutions smoothly, efficiently, transparently and fairly, (4) serve customers with honesty and integrity.',
  },
  {
    s: 'RES 1B §4.5', t: 'Single choice',
    q: 'A representative discovers a possible ethical breach and wants to resolve it using the six-step process. What is the correct FIRST step?',
    o: ['Evaluate the alternatives.', 'Consult the internal reporting and whistleblowing procedures.', 'Identify the affected parties and the conflicts.', 'Gather the facts, separating fact from assumption.'],
    a: 'D',
    r: 'The six-step process is: (1) gather the facts, (2) identify the ethical and regulatory issues, (3) identify the affected parties and the conflicts, (4) consult internal reporting and whistleblowing procedures, (5) evaluate the alternatives, (6) implement the best action, monitor it and document the reasoning.',
  },
  {
    s: 'RES 1B §4.4', t: 'Single choice',
    q: 'A representative has a personal position in a stock he is recommending. He discloses the conflict in small print at the end of a long document, then proceeds to decide on the recommendation himself. What is the position?',
    o: ['This is acceptable, because any disclosure, however made, discharges the duty.', 'This breaches the standards: conflicts must be avoided or disclosed fully, fairly, prominently and in plain language, and the representative must refrain from deciding while conflicted and escalate independently \u2014 disclosure is not a licence.', 'This is acceptable, because disclosure is only required for conflicts involving family members.', 'This breaches the standards only if the client loses money on the recommendation.'],
    a: 'B',
    r: 'Conflicts of interest must be avoided, or full, fair, prominent and plain-language disclosure made; the representative must refrain from deciding while conflicted. Disclosure does not licence the conflict, and a sales target never converts an unsuitable product into a recommendation.',
  },
  {
    s: 'RES 1B §4.4', t: 'Single choice',
    q: 'A client offers a representative an expensive gift, and a colleague suggests the representative help conceal a pricing irregularity. What must the representative do?',
    o: ['Decline the gift, because a representative must not offer, solicit or accept any gift, benefit, compensation or consideration that could reasonably be expected to compromise independence and objectivity; and dissociate from any violation of the law rather than knowingly participate in or assist it.', 'Accept the gift if it is declared to the employer, and help conceal the irregularity if the client asks.', 'Accept the gift, because gifts are prohibited only when given by issuers.', 'Decline the gift but help conceal the irregularity, because loyalty to colleagues outranks the law.'],
    a: 'A',
    r: 'Under independence and objectivity, gifts or benefits that could reasonably compromise independence or objectivity must not be offered, solicited or accepted, and internal gifts/entertainment guidelines must be complied with. Under knowledge of the law, a representative must not knowingly participate in or assist a violation, and must dissociate from it.',
  },
  {
    s: 'RES 1B §4.3', t: 'Single choice',
    q: 'A representative recommends products he knows are unsuitable for a client, in terms of risk, because he is under pressure to meet a commission target. Which threat creates this ethical dilemma?',
    o: ['Self-review \u2014 he is judging his own recommendation.', 'Influence \u2014 the pressure comes from the client.', 'Self-review \u2014 he is reviewing the client\'s portfolio.', 'Self-interest \u2014 his own pay, target or position is driving the recommendation.'],
    a: 'D',
    r: 'The three threats are self-interest (the representative\'s own pay, target or position), self-review (judging one\'s own work or recommendation) and influence (pressure from a client, senior, peer or issuer). A sales target never converts an unsuitable product into a recommendation.',
  },
  {
    s: 'RES 1B §5.2', t: 'Single choice',
    q: 'A retail client meets the prescribed tests to be treated as an accredited investor and opts in to that classification. What is the main consequence of the reclassification?',
    o: ['Nothing changes: accredited investors receive exactly the same protection as retail investors.', 'She is assumed to be knowledgeable, experienced and financially strong and able to obtain information, so disclosure, product access, SIP rules and exemptions are relaxed compared with retail investors, who receive the highest protection.', 'She loses access to all Specified Investment Products.', 'The firm no longer needs to conduct KYC on her.'],
    a: 'B',
    r: 'Singapore law accords the highest protection to retail investors, because accredited, institutional and expert investors are assumed knowledgeable, experienced, financially strong and able to obtain information. Categorisation changes the exemptions available, including exemptions from disclosure of certain interests in underwriting agreements, specified-product borrowing and lending, and dealing in SIPs or overseas-listed investment products \u2014 and it drives product choice, the risks to be explained and the documentation standard.',
  },
  {
    s: 'RES 1B §5.2', t: 'Single choice',
    q: 'A representative presents a client with a portfolio mix of asset classes, products and geographies, with reasons for each holding, but has not yet gathered the client\'s background, financial objectives, experience, means or investment horizon. The client\'s profile was last refreshed two years ago and the representative gives ongoing execution-related advice. What is the position?',
    o: ['This is acceptable, because a portfolio mix with reasons is all that is required.', 'This is acceptable, because risk profiling is required only for accredited investors.', 'This breaches the process: advice cannot properly precede profiling \u2014 sufficient knowledge of the client\'s objectives, financial situation and needs must come first \u2014 and where execution-related advice is provided on an ongoing basis the profile and needs analysis should be refreshed at least once a year.', 'This breaches the process only because the profile is two years old; presenting a strategy before profiling is permitted.'],
    a: 'C',
    r: 'On-boarding must include KYC (for AML/CFT risk and for investment suitability) and risk profiling covering background, objectives, experience and means, economic activity, structure and horizon. Advice requires sufficient knowledge of the client first, and ongoing execution-related advice requires a profile refresh at least once a year.',
  },
  {
    s: 'RES 1B §5.5', t: 'Single choice',
    q: 'In a dealing firm, the same individual both executes client trades and settles them, with no independent check, and open trading positions are revalued only monthly. Which internal-control requirement is breached?',
    o: ['Segregation of duties \u2014 for example, separating trade execution from settlement \u2014 and the requirement that open positions be marked to market daily with losses recognised promptly.', 'No requirement is breached, because segregation of duties applies only to back-office staff.', 'Only the monthly revaluation breaches the rules; combining execution and settlement is permitted.', 'Only the combined execution and settlement breaches the rules; monthly revaluation is the required standard.'],
    a: 'A',
    r: 'MAS\'s internal-control guidelines require segregation of duties to prevent unauthorised or fraudulent transactions (e.g. separating trade execution from settlement), periodic independent checks, conservative and consistent accounting with open positions marked to market daily and losses recognised promptly, and management information systems reporting exposures and P&L at least daily.',
  },
  {
    s: 'RES 1B §5.4', t: 'Single choice',
    q: 'A representative must execute a very large order in an illiquid share for a client. Which statement best reflects best execution?',
    o: ['Best execution means obtaining the lowest price, regardless of any other factor.', 'Best execution means executing as slowly as possible to avoid market impact.', 'Best execution is satisfied by pricing a CIS order received after the dealing deadline at that deadline\'s price.', 'Best execution means taking reasonable steps to obtain the most advantageous overall result, weighing price, costs, speed, likelihood of execution and settlement, size, execution quality and the client\'s instruction \u2014 and speed or likelihood may take priority over immediate price or cost for a large order in an illiquid share or where a stop-loss has been triggered. The firm must not receive Payment for Order Flow.'],
    a: 'D',
    r: 'Best execution is the most advantageous overall result across price, costs, speed, likelihood of execution and settlement, size, execution quality and the client\'s instruction, with comparable orders prioritised by time of receipt; speed or likelihood may take priority over immediate price for large illiquid orders or triggered stop-losses. Late trading \u2014 subscribing, switching, cancelling or redeeming CIS units after the dealing deadline yet receiving the deadline\'s price \u2014 is always prohibited.',
  },
  {
    s: 'RES 1B §6.2', t: 'Single choice',
    q: 'Mei opens her single CPF Investment Account with OCBC, one of the three CPFIS agent banks. Her CPF Ordinary Account balance is S$45,000 and her Special Account balance is S$55,000. She wants to invest her SA savings in a fund management account and in shares. Which statement is correct?',
    o: ['Her investible balance is S$100,000, and SA savings may be invested in a fund management account.', 'Her investible balance is S$40,000 \u2014 only OA above S$20,000 and SA above S$40,000 is investible \u2014 and a fund management account is a CPFIS-OA product, not a CPFIS-SA product; shares, property funds and corporate bonds are subject to a 35% cap on investable savings under CPFIS-OA.', 'Her investible balance is S$40,000, and she may invest all of it in shares.', 'She may hold a second CPF Investment Account at DBS to invest the SA savings.'],
    a: 'B',
    r: 'Only money above S$20,000 in the OA and above S$40,000 in the SA is investible (preserving extra interest on the first S$60,000 combined); a member may hold only one CPF Investment Account, at DBS, OCBC or UOB. Fund management accounts are CPFIS-OA only (SA offers selected ILPs, unit trusts and ETFs), and up to 35% of investable savings may go into shares, property funds (REITs) and corporate bonds under CPFIS-OA.',
  },
  {
    s: 'RES 1B §6.10', t: 'Single choice',
    q: 'A CPFIS member\'s investments pay dividends and one holding makes a loss. The member asks to withdraw the dividends as cash and asks whether the loss must be made good. He also asks what sales charges now apply. Which statement is correct?',
    o: ['Dividends may be withdrawn as cash, losses must be made good, and sales charges are capped at 3%.', 'Dividends cannot be withdrawn as cash, because the purpose is to grow retirement savings; losses do not need to be made good; and since October 2020 sales charges have been removed and the wrap-fee cap cut to 0.4%.', 'Dividends cannot be withdrawn as cash, losses must be made good from OA savings, and the wrap-fee cap is 1%.', 'Dividends may be used only for new share purchases, and sales charges are capped at 1.5%.'],
    a: 'B',
    r: 'Dividends and profits from CPFIS-OA and CPFIS-SA investments cannot be withdrawn as cash (they may be used for other CPF schemes subject to those schemes\' terms); losses do not need to be made good. Charges moved from 3% sales / 1% wrap (pre-October 2018) to 1.5% / 0.7% (October 2018) to sales charges removed / 0.4% wrap (October 2020).',
  },
  {
    s: 'RES 1B §6.12', t: 'Single choice',
    q: 'A CPFIS member turns 55 but has not set aside the Full Retirement Sum, nor the Basic Retirement Sum with sufficient property charged or pledged in the Retirement Account, and asks for his CPFIS investments to be transferred into his own name. What happens?',
    o: ['The investments are transferred into his own name, and he may liquidate and receive the proceeds directly.', 'The investments are transferred into his own name only for CPFIS-SA holdings.', 'The investments are not transferred: liquidation proceeds are credited to the CPF Investment Account (for OA) or to the Special Account (for SA).', 'The investments are transferred into his own name, but only after a six-month waiting period.'],
    a: 'C',
    r: 'At 55 a member may apply to withdraw CPFIS investments only if the Full Retirement Sum has been set aside, or the Basic Retirement Sum with sufficient property charged or pledged; if not, the investments are not transferred and liquidation proceeds are credited to the CPF Investment Account or the Special Account.',
  },
  {
    s: 'RES 1B §6.14', t: 'Single choice',
    q: 'A CPFIS member dies. His family claims his CPFIS investments under his CPF nomination and asks the agent bank to release them without probate documents. Which statement is correct?',
    o: ['CPFIS investments are covered by CPF nomination and are released on the nomination alone.', 'CPFIS investments are not covered by CPF nomination; they form part of the estate, and the administrator or executor must produce Letters of Administration or a Grant of Probate \u2014 although a CPFIS insurance policy with a revocable nomination made with the insurer pays the nominated beneficiaries directly, and irrevocable nomination is not allowed for CPFIS insurance policies.', 'CPFIS investments form part of the estate, but creditor protection continues after death.', 'The family may claim the investments with an Option to Administer.'],
    a: 'B',
    r: 'CPFIS investments and investment-account cash are outside CPF nomination and inside the estate; Letters of Administration or a Grant of Probate is required to claim them. Only a revocable insurer nomination bypasses probate for CPFIS insurance policies; irrevocable nomination is not allowed; and on death the assets cease to be protected and may satisfy the deceased\'s creditors.',
  },
  {
    s: 'RES 1B §7.1', t: 'Single choice',
    q: 'A client rapidly buys and sells shares through several brokers, moving the proceeds between multiple accounts, to obscure the trail of funds that originated from a fraud. Which stage of money laundering is this, and which statute governs money laundering in Singapore?',
    o: ['Placement, governed by the Terrorism (Suppression of Financing) Act.', 'Layering, governed by the Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act (CDSA).', 'Integration, governed by the Mutual Assistance in Criminal Matters Act.', 'Placement, governed by the Penal Code.'],
    a: 'B',
    r: 'Layering is creating transactions and asset conversions that obscure the trail; capital markets attract layering because assets are liquid, transferable and easily converted. The CDSA governs money laundering; TSOFA governs terrorism financing, MACMA cross-border assistance, and the Penal Code general offences.',
  },
  {
    s: 'RES 1B §7.9', t: 'Single choice',
    q: 'A client owns 30% of a company through layered entities. The firm is identifying the beneficial owners. Which statement is correct?',
    o: ['Only shareholders owning more than 50% are beneficial owners.', 'Beneficial-owner identification is required only for listed companies.', 'A 30% owner is a beneficial owner only if he is also a director.', 'A person owning more than 25% is generally a beneficial owner; if ownership is unclear, the person exercising ultimate control is identified, and if none, the natural persons with executive authority \u2014 and for trusts, the settlor, trustee, protector and beneficiaries must be identified.'],
    a: 'D',
    r: 'The beneficial owner is generally an individual owning more than 25%; if unclear, persons exercising ultimate control, and if none, natural persons with executive authority. For trusts and legal arrangements, identify the settlor, trustee, protector, beneficiaries and persons with ultimate ownership or control.',
  },
  {
    s: 'RES 1B §7.9', t: 'Single choice',
    q: 'A compliance officer receives an internal referral about a suspicious transaction and files the Suspicious Transaction Report 20 business days after the referral. The firm argues that reasonable grounds for suspicion are enough and that no crime needs to be proved. Which statement is correct?',
    o: ['The firm is right that reasonable grounds suffice, but the filing was late: an STR should be filed as soon as practicable and generally no later than 15 business days after referral, to STRO/CAD with a copy to MAS \u2014 and the client must never be tipped off.', 'The filing was in time, because STRs must be filed within 30 business days of referral.', 'The filing was in time, but the firm must prove the crime before filing.', 'The STR should have been filed with the SGX, not STRO/CAD.'],
    a: 'A',
    r: 'Suspicious transactions, including attempts, must be reported regardless of amount to STRO/CAD with a copy to MAS; the firm need not prove the crime, reasonable grounds for suspicion are enough; the internal process should refer cases to a single compliance point, investigate and file as soon as practicable and generally no later than 15 business days after referral. Tipping off is itself an offence.',
  },
  {
    s: 'RES 1B §7.5', t: 'Single choice',
    q: 'A dealer learns that a client is on a sanctions list. The dealer proposes to keep monitoring the account, arguing that identifying sanctions hits is compliance\'s job, not the business unit\'s. What is the correct action?',
    o: ['Continue monitoring the account and report it at the next quarterly review.', 'Allow the client to withdraw the funds first, then close the account quietly.', 'Transfer the account to another broker so the firm is no longer involved.', 'Immediately freeze the designated funds and assets, avoid prohibited transactions or assistance, and notify MAS \u2014 identifying and controlling the risk is the first line of defence (the business units), with compliance/AML-CFT as the second line and independent internal audit as the third, and the board and senior management retain final accountability.'],
    a: 'D',
    r: 'A positive sanctions hit requires freezing and reporting, not merely monitoring: financial institutions must immediately freeze designated funds, assets and economic resources, avoid financial transactions or assistance involving designated persons, and notify MAS. The three lines of defence are business (1st), compliance/ AML-CFT (2nd) and independent internal audit (3rd); the board and senior management retain final accountability. ### RES 2B \u2014 Questions 32\u201360',
  },
  {
    s: 'RES 2B §1.2', t: 'Single choice',
    q: 'An overseas firm incorporated outside Singapore wishes to trade derivatives on SGX-DT without a CMS licence. It is a member of an approved exchange, serves no customer resident in Singapore, is not a regulated financial institution in Singapore, is regulated in its home jurisdiction, and its home regulator has an information-sharing arrangement with MAS for derivatives supervision. It also has a MAS-regulated financial institution as an affiliate and wishes to be a remote *clearing* member. Which statement is correct?',
    o: ['It is exempt from the CMS licence as a remote trading member, because all six exemption conditions are met.', 'It is exempt as a remote clearing member, because the affiliate condition applies only to remote trading members.', 'It is not exempt as a remote clearing member: all six conditions must hold, and additionally an SGX remote clearing member cannot have an MAS-regulated FI affiliate \u2014 that extra condition does not apply to a remote trading member.', 'It is not exempt, because remote membership is available only to firms incorporated in Singapore.'],
    a: 'C',
    r: 'Remote trading and clearing members are exempt from the CMS licence only if all six conditions hold (incorporated outside Singapore; member of an approved exchange/clearing house or recognised market operator/clearing house; does not serve Singapore residents; not a Singapore-regulated FI; home regulator has a suitable MAS information-sharing arrangement; regulated at home). Additionally, an SGX remote clearing member cannot have an MAS-regulated FI affiliate; that extra condition does not apply to a remote trading member.',
  },
  {
    s: 'RES 2B §1.3', t: 'Single choice',
    q: 'An OTC commodity derivative is registered for clearing through the SGX Titan OTC platform. Which entity clears it, and under which rulebook?',
    o: ['SGX-DT, under the Futures Trading Rules.', 'SGX-DC, under the SGX-DC Clearing Rules \u2014 SGX-DC clears SGX-DT products and OTC trades registered via Titan OTC, and is a Qualifying Central Counterparty (QCCP), which lowers bank members\' capital requirements for trade and default-fund exposures under Basel III.', 'CDP, under the CDP Clearing Rules.', 'ICE Clear Singapore, under the ICE Clear Singapore Clearing Rules and Procedures.'],
    a: 'B',
    r: 'SGX-DC is the clearing house for SGX-DT products and for OTC commodity and financial derivatives registered via the SGX Titan OTC platform, governed by the SGX-DC Clearing Rules. Its QCCP status gives bank members lower Basel III capital requirements for trade and default-fund exposures. (SGX-DT runs the futures market; CDP clears securities; ICE Clear Singapore clears IFSG trades.)',
  },
  {
    s: 'RES 2B §1.3', t: 'Single choice',
    q: 'Which statement about Singapore\'s other approved derivatives venues is correct?',
    o: ['APEX is the third approved exchange, and IFSG was established when ICE acquired the Singapore Mercantile Exchange in February 2014 for US$150 million.', 'APEX is the only approved derivatives exchange, and IFSG was established in 2000.', 'IFSG acquired the Singapore Mercantile Exchange for US$150 million in 2017, when SGX RegCo was established.', 'APEX clears its products through SGX-DC.'],
    a: 'A',
    r: 'IFSG was established when ICE acquired the Singapore Mercantile Exchange in February 2014 for US$150 million; APEX is the third approved exchange (with APEX Clear as its approved clearing house). SGX-ST is the securities exchange; SGX-DT is the derivatives exchange.',
  },
  {
    s: 'RES 2B §1.2', t: 'Single choice',
    q: 'Which statement correctly distinguishes broker/dealers from fund managers in Singapore\'s capital markets?',
    o: ['Broker/dealers take deposits from the public; fund managers do not.', 'Broker/dealers do not take deposits \u2014 they specialise in matching buyers and sellers and are Trading/Clearing Members \u2014 while fund managers have been required to be registered or licensed since 2012 and manage segregated mandates and CIS/unit trusts.', 'Fund managers must be Trading Members of SGX-ST; broker/dealers need not be.', 'Broker/dealers manage unit trusts for retail investors; fund managers only trade on their own account.'],
    a: 'B',
    r: 'Broker/dealer companies do not take deposits; they match buyers and sellers and are Trading/Clearing Members. Since 2012 MAS requires all fund management companies to be registered or licensed; they manage segregated mandates and CIS/unit trusts for institutions and individuals via distributors.',
  },
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A firm deals in OTC derivatives contracts as a non-clearing member and has one retail client among its customers. What is its base capital requirement?',
    o: ['S$1 million, because it is a non-clearing member.', 'S$500,000, because that is the "others" tier for OTC derivatives.', 'S$5 million, because a non-clearing member dealing in OTC derivatives with retail clients needs S$5 million \u2014 the same as a clearing member.', 'S$1 million, because the retail client is only one of many customers.'],
    a: 'C',
    r: 'The OTC derivatives BCR table is: clearing member S$5m; non-clearing member with retail clients S$5m; non-clearing member with non-retail clients S$1m; others S$500k. The "with retail clients" distinction is the exam trap \u2014 even one retail client puts the firm in the S$5m tier.',
  },
  {
    s: 'RES 2B §2.2', t: 'Single choice',
    q: 'A firm deals only in specified commodity futures contracts, as a clearing member. What is its base capital requirement?',
    o: ['S$5 million, the same as a clearing member for exchange-traded derivatives.', 'S$500,000, the non-clearing member tier for commodity futures.', 'S$1 million \u2014 the clearing-member tier for specified commodity futures only, against S$5 million for a clearing member dealing in exchange-traded derivatives generally.', 'S$250,000, the introducing-broker tier for commodity futures.'],
    a: 'C',
    r: 'The commodity-futures-only BCR table is: clearing member S$1m; non-clearing member S$500k; non-member S$500k; introducing broker S$250k; restricted broker S$250k. Base capital is classification-driven \u2014 the same "clearing member" label carries different amounts in different tables.',
  },
  {
    s: 'RES 2B §2.6', t: 'Single choice',
    q: 'A client buys exchange-traded futures on Monday. The contract note requires a fixing price that only becomes available on Wednesday. By when must the contract note be issued, and what is Form 13?',
    o: ['By Thursday \u2014 the next business day after the detail becomes available \u2014 and Form 13 is the MAS-prescribed risk disclosure document that must be furnished and acknowledged by the client before a trading account is opened, not a substitute for a contract note.', 'By Tuesday, regardless of when the fixing price becomes available.', 'By Thursday, and Form 13 is the contract note itself.', 'No contract note is needed, because an OTC confirmation with five elements suffices for exchange-traded futures.'],
    a: 'A',
    r: 'Contract notes must be issued no later than the next business day following the transaction, or by the next business day after a required detail (such as a fixing price) becomes available. Form 13 is the risk disclosure statement under Reg 47E, furnished with a signed client acknowledgement before account opening; the five-element confirmation is for OTC derivatives where no contract note is given.',
  },
  {
    s: 'RES 2B §2.8', t: 'Single choice',
    q: 'A CMS licence holder computes its trust-account and custody-account totals each business day, finishing the computation at 2 p.m., and keeps the supporting data for three years. What is the position?',
    o: ['The timing is correct, but the retention period is too short.', 'The computation must be completed before noon of every business day, covering the trust and custody totals, the amounts required to be deposited and the holder\'s own residual interest as at the end of the previous business day, and the computation with all supporting data must be kept for at least five years.', 'The computation must be completed before noon, but the retention period is three years.', 'The computation may be done weekly, provided it is completed before noon.'],
    a: 'B',
    r: 'The daily computation must be done at least once a day, completed before noon of every business day, and kept with all supporting data for at least five years. Customer moneys and assets must be deposited no later than the next business day and must not be commingled with the holder\'s own funds.',
  },
  {
    s: 'RES 2B §2.3', t: 'Single choice',
    q: 'An overseas employee of a related entity of a CMS licence holder is appointed as a temporary representative. She has already served two separate three-month temporary appointments in the past 18 months. What is the position?',
    o: ['She may serve a third three-month appointment immediately, because temporary appointments are unlimited.', 'She may serve only as a provisional representative instead.', 'She may not serve a further temporary appointment now: temporary representatives may be appointed for a total of six months within any 24-month period, with each appointment lasting not more than three months.', 'She may serve a further six-month appointment, because the 24-month window has not yet expired.'],
    a: 'C',
    r: 'Temporary representatives may be appointed for a total of six months within any 24-month period, each appointment not more than three months, and must be an employee of a related entity (and currently regulated overseas in a comparable regime).',
  },
  {
    s: 'RES 2B §2.3', t: 'Single choice',
    q: 'An overseas hire with two years of relevant work experience, currently regulated in a comparable overseas regime, wants to start dealing for a CMS licence holder before passing the CMFAS examinations. Can she be appointed as a provisional representative?',
    o: ['Yes \u2014 provisional status is available to any overseas hire.', 'Yes \u2014 two years of experience is sufficient.', 'No \u2014 provisional representatives need three years of relevant work experience and must be currently or previously regulated for a continuous period of at least 12 months in an overseas jurisdiction with a comparable regime; provisional status is a three-month grace period to complete the examinations, valid for a maximum of three months from entry in the Register.', 'No \u2014 provisional representatives must have five years of relevant work experience.'],
    a: 'C',
    r: 'Provisional representatives get a three-month grace period to complete the requisite examinations, need three years of relevant work experience, and must be currently or previously licensed, authorised or otherwise regulated for a continuous period of at least 12 months (and not more than 12 months before) in an overseas jurisdiction with a comparable regime. (The RNF number stays with the individual even if they change principals.)',
  },
  {
    s: 'RES 2B §3.7', t: 'Single choice',
    q: 'A broker receives an order to buy one contract of December silver futures at $25.50. The market is $25.20 offer. Instead of placing the order, the broker withholds it, buys at $25.20 himself, tells the customer the order was filled at $25.50 and pockets the $0.30 difference. What is this?',
    o: ['Bucketing \u2014 executing, or holding oneself out as having executed, a customer\'s order without a bona fide market transaction; the customer\'s order never reaches competitive bids and offers, so no best price is obtained.', 'A lawful cross trade, because the broker matched the buy and sell himself.', 'Front running, because the broker traded before the customer\'s order.', 'A lawful principal trade, because the broker disclosed the price to the customer.'],
    a: 'A',
    r: 'Bucketing is knowingly executing, or holding oneself out as having executed, an order for a customer without having effected a bona fide purchase or sale \u2014 the broker takes the opposite side of the customer\'s order. A cross trade, by contrast, is a real match of two genuine orders that must comply with the exposure rules; front running is trading ahead of an unexecuted client order on the market.',
  },
  {
    s: 'RES 2B §3.15', t: 'Single choice',
    q: 'A trading representative receives a client\'s instruction to buy a class of futures contracts on an approved exchange. Before executing it, the representative buys the same class of contracts for his own account. What is this, and which rule is engaged?',
    o: ['Permitted principal trading, because the representative acted before the client\'s order was executed.', 'Front running, prohibited under SFR(LCB) Regulation 44 \u2014 a holder or representative must not trade the same class of product on an approved exchange or recognised market operator where an unassociated customer has instructed them to buy or sell that class and the instruction has not been complied with; client order information is non-public, so it is treated as a form of trading on insider information.', 'Churning, because the representative increased trading volume.', 'Bucketing, because the representative did not execute the client\'s order.'],
    a: 'B',
    r: 'Front running rests on priority of customers\' orders (SFR(LCB) 44): client order information is non-public and known only to the respective traders, so trading ahead of it is a form of trading on insider information. (Churning is volume for commissions with no sound market opportunity; bucketing involves no bona fide market transaction at all.)',
  },
  {
    s: 'RES 2B §3.4', t: 'Single choice',
    q: 'A trader buys up the underlying commodity in such volume that he gains a monopoly over it, so that short sellers must pay an inflated price to cover their positions. What is this, and how does it differ from price manipulation?',
    o: ['Price manipulation, because both involve influencing the price.', 'Wash trading, because the trades have no real economic value.', 'Hunting for stops, because the trader is triggering stop-loss orders.', 'Cornering \u2014 acquiring a monopoly over the underlying thing so shorts must pay an inflated price to cover \u2014 which is distinct from price manipulation, the manipulation or attempted manipulation of the price of a derivatives contract or its underlying away from fair value.'],
    a: 'D',
    r: 'Cornering is purchasing the underlying in such volumes as to gain a monopoly, leaving short sellers to pay an inflated price to cover. Price manipulation is manipulating or attempting to manipulate the price of a derivatives contract or its underlying away from fair value (for example, engineering a new "day high" to trigger stops in instruments using that contract as a reference).',
  },
  {
    s: 'RES 2B §3.16', t: 'Single choice',
    q: 'An Approved Trader on an electronic futures trading system receives a buy order and a sell order at the same time, both at 25,130. The existing bid is 25,100, the existing offer is 25,130, and the last traded price is 25,130. Which order must be exposed first?',
    o: ['Either order may be exposed first, because both are at the same price.', 'The sell order, because there is no existing bid.', 'The buy order, because the buy order is more attractive than the sell order \u2014 there is an existing 25,130 offer waiting to be lifted.', 'The sell order, because the sell price equals the last traded price.'],
    a: 'C',
    r: 'Where both orders are at the existing offer price, the buy order is exposed first, because the buy is more attractive \u2014 there is an existing offer waiting to be lifted. (Where both orders are better than the prevailing quotes, either may be exposed first; where there is no bid or offer and both are below the last traded price, the sell is exposed first.)',
  },
  {
    s: 'RES 2B §3.10', t: 'Single choice',
    q: 'An underwriter, acting in its underwriting role, buys shares of the issuer while in possession of price-sensitive information that is not generally available. Which statement is correct?',
    o: ['This falls within a statutory exception to insider trading (SFA s.223, underwriters acting in that role) \u2014 one of the six statutory exceptions (ss 222\u2013225, 228, 229), which are distinct from the two defences in s.231; knowledge of one\'s own transactions (ss 228\u2013229) is likewise an exception rather than a defence.', 'This is insider trading with no available exception, because the information was not generally available.', 'This is a defence under s.231, not an exception.', 'This is lawful only if the counterparty knew of the information before transacting.'],
    a: 'A',
    r: 'The six statutory exceptions are: CIS trustee/manager redemptions (s.222), underwriters (s.223), transactions pursuant to legal requirements (s.224), information communicated pursuant to legal requirements (s.225), and knowledge by virtue of one\'s own transactions \u2014 natural person (s.228) and corporation (s.229). The s.231 defences are that the information had been made known in a manner likely to reach persons who commonly invest, or that the counterparty knew or ought reasonably to have known of it.',
  },
  {
    s: 'RES 2B §4.2', t: 'Single choice',
    q: 'A bank and a retail client enter into a Singapore-dollar interest rate swap (IRS), an OTC derivative traded in Singapore. Who must report the contract under Part 6A of the SFA and the SFR(RDC)?',
    o: ['Both parties, because every party to a specified derivatives contract must report.', 'The bank, because a "specified person" is a closed list \u2014 banks, bank subsidiaries, merchant banks, finance companies, insurers and CMS licence holders \u2014 and a retail client is not a specified person. The contract must be reported to a licensed local or foreign trade repository because it is a specified derivatives contract traded in Singapore.', 'Neither party, because interest rate derivatives are not a prescribed asset class.', 'The retail client only, because the bank is exempt as a regulated institution.'],
    a: 'B',
    r: 'Under Part 6A of the SFA, a "specified person" who is a party to a specified derivatives contract must report prescribed information to a licensed local or foreign trade repository. "Specified person" is a closed list: banks, bank subsidiaries, merchant banks, finance companies, insurers and CMS licence holders. Retail clients are not specified persons. The five prescribed asset classes \u2014 interest rate, credit, foreign exchange, commodity and equity derivatives \u2014 report only if traded or booked in Singapore.',
  },
  {
    s: 'RES 2B §4.2', t: 'Single choice',
    q: 'A firm reports all of its OTC derivatives contracts to DTCC Data Repository (Singapore), a licensed trade repository, and tells its client that this satisfies its clearing obligation. Which statement is correct?',
    o: ['The firm is correct: reporting and clearing are the same obligation.', 'The firm is correct, because a licensed trade repository is also an approved clearing house.', 'The firm is correct for interest rate derivatives but not for commodity derivatives.', 'The firm is wrong: reporting under Part 6A of the SFA and the SFR(RDC) goes to a trade repository, while clearing under section 129C goes to an approved or recognised clearing house \u2014 they are different obligations.'],
    a: 'D',
    r: 'Reporting versus clearing are different obligations. Reporting under Part 6A of the SFA and the SFR(RDC) goes to a trade repository (DTCC Data Repository (Singapore) was the first local licensed trade repository); clearing under section 129C goes to an approved or recognised clearing house.',
  },
  {
    s: 'RES 2B §4.3', t: 'Single choice',
    q: 'An SGX-DC clearing member sets its customer margin rates below the rates prescribed by SGX-DC, to win business, and reviews its internal margin rates only once a year. What is the position?',
    o: ['This is acceptable, because members set their own margin rates freely.', 'This is acceptable, provided the lower rates apply only to proprietary trades.', 'This breaches the rules: clearing members must post margin at rates prescribed by SGX-DC, must procure initial margin from customers and ensure customers comply with maintenance margin, and may set higher margin rates at their discretion \u2014 but must review their internal rates and requirements on a continual basis.', 'This is acceptable, because the same margin requirements do not apply to proprietary trades.'],
    a: 'C',
    r: 'Under the SGX-DC Clearing Rules, members must post margin on contracts at rates prescribed by SGX-DC, procure initial margin from customers and ensure customers comply with maintenance margin; variation margin may be payable for mark-to-market differences. The same requirements apply to proprietary trades. Members may set higher margin rates at their discretion, but must review their internal rates and requirements on a continual basis. A CCP reduces bilateral counterparty risk but replaces it with clearing-house credit risk \u2014 it does not eliminate risk.',
  },
  {
    s: 'RES 2B §4.5', t: 'Single choice',
    q: 'A broker quotes a price for an OTC derivative, the principal deals on it, and the broker then cannot substantiate the quotation. The broker offers simply to cancel the trade. What should happen?',
    o: ['The trade is cancelled, because an unsubstantiated quotation voids the transaction.', 'The broker should close the OTC derivatives product at the next available price and settle the difference with the principal \u2014 for example by issuing a cheque for that amount.', 'The principal must bear the difference, because he accepted the quotation.', 'The broker should re-quote at the original price and re-execute the trade.'],
    a: 'B',
    r: 'Under the Blue Book (Chapter IX, OTC Derivatives Dealing Practices), where a broker is unable to substantiate its quotation and a difference is payable to the principal, the broker should close the product at the next available price and settle the difference with the principal. The Blue Book is guidance on dealing practice, not a statute.',
  },
  {
    s: 'RES 2B §5.5', t: 'Single choice',
    q: 'A CMS licence holder routes its customers\' derivatives orders to a broker that pays it a commission for the order flow. The holder argues this is acceptable because the execution prices were reasonable. What is the position?',
    o: ['This is prohibited: a CMS licence holder should not receive Payment for Order Flow (PFOF) \u2014 commission or other payment from another broker or counterparty in return for routing customer orders to it \u2014 because routing may be driven by the payment rather than best execution, under the MAS Notice on Execution of Customers\' Orders (SFA 04-N16).', 'This is acceptable, provided the execution prices were reasonable.', 'This is acceptable, because PFOF is prohibited only for securities, not derivatives.', 'This is acceptable if the payment is disclosed to the customer.'],
    a: 'A',
    r: 'Under SFA 04-N16 (with guidance SFA 04-G10), a CMS licence holder should not receive PFOF: the conflict is that routing may be driven by payment rather than best execution. Best execution requires reasonable steps to obtain the most advantageous trade result, considering price, costs, speed, likelihood of execution and settlement, size and execution quality holistically.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'A representative gives advice on derivatives to a client. Which statement best describes the suitability requirement in an advisory relationship?',
    o: ['Suitability requires only that the product matches the client\'s stated return objective.', 'Suitability requires a reasonable basis for the recommendation, judged against the single product in isolation.', 'Suitability requires only that the client has passed a CAR or CKA.', 'Suitability requires three things: reasonable inquiries into the client\'s investment objectives, financial situation and particular needs, reassessed and updated regularly; a determination that the recommendation is suitable to the client\'s risk appetite and financial situation and consistent with the client\'s written objectives, mandates and constraints; and judgement in the context of the client\'s total portfolio.'],
    a: 'D',
    r: 'In an advisory relationship, suitability requires reasonable inquiries into objectives, financial situation and needs (updated regularly), a determination of suitability to risk appetite and consistency with written objectives, mandates and constraints, and judgement in the context of the total portfolio. (A CAR/CKA assesses knowledge and experience to transact in SIPs; it is not a suitability determination.)',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'Which statement correctly distinguishes the two professional codes of conduct relevant to derivatives trading?',
    o: ['The Blue Book is issued by the Bank for International Settlements and has six principles; the FX Global Code is issued by the Singapore Foreign Exchange Market Committee and has five codes.', 'The Blue Book is issued by MAS and has six principles; the FX Global Code is issued by SGX and has five codes.', 'The Blue Book is the Singapore Foreign Exchange Market Committee\'s Singapore Guide to Conduct and Market Practices for the Wholesale Financial Markets, covering five codes of conduct; the FX Global Code is the Bank for International Settlements\' code of global principles of good practice for the wholesale FX market, with six principles (ethics, governance, information sharing, execution, risk management and compliance, confirmation and settlement).', 'Both codes are issued by MAS, and both have six principles.'],
    a: 'C',
    r: 'The Blue Book (SFEMC) covers five codes: general dealing principles and market conduct; ethics and behavioural standards; governance, risk management and compliance; back-office practices; and dealing practices of different instruments. The FX Global Code (BIS \u2014 established 17 May 1930, 63 member central banks) has six principles: ethics, governance, information sharing, execution, risk management and compliance, and confirmation and settlement processes.',
  },
  {
    s: 'RES 2B §5.4', t: 'Single choice',
    q: 'A representative learns that a large client sell order is about to be executed, and first sells his own shares in the same company, then executes the client\'s order. What is the position?',
    o: ['This is acceptable, because the representative\'s own trades are a private matter.', 'This breaches the standards: investment transactions for clients and employers must have priority over transactions in which a representative is the beneficial owner \u2014 selling ahead of a client\'s sell order is self-dealing, and a representative must not act on material non-public information or trade against the client\'s interest.', 'This is acceptable if the representative discloses the sale to the client afterwards.', 'This is acceptable, because priority applies only to buy orders.'],
    a: 'B',
    r: 'Priority of transactions: clients and employers rank above the representative\'s beneficial ownership. The representative must place the client\'s interest before the employer\'s or their own, carry out client transactions prior to their own, and not engage in self-dealing. (Front running the client\'s order is also prohibited under SFR(LCB) 44.)',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A retail customer passed a CAR three years ago and opened a listed SIP trading account. Since then she has transacted in a listed SIP through that account only once. She now wants to trade another listed SIP. What is the position?',
    o: ['The firm must not allow her to transact in a listed SIP after three years from the CAR unless it has checked and is satisfied that she transacted in a listed SIP through the account more than once during the preceding three-year period and more than once during each subsequent three-year period, or it has conducted a new CAR.', 'The CAR remains valid indefinitely once passed.', 'The firm may allow her to trade because she transacted once in the three-year period.', 'The firm must conduct a new CKA, because the CAR has expired.'],
    a: 'A',
    r: 'CAR validity is three years, extended only if the customer transacted more than once in each three-year period; otherwise a new CAR is required. (CKA validity is one year, with a fresh CKA required after that \u2014 CKA is for unlisted SIPs.)',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A retail customer has invested in unlisted collective investment schemes (CIS) at least six times in the preceding three years and now wants to trade listed SIPs, including futures. He argues his six transactions qualify him. Which statement is correct?',
    o: ['He is deemed to have sufficient knowledge for listed SIPs, because six transactions in three years qualifies for both CAR and CKA.', 'He may trade listed SIPs, because unlisted CIS transactions count towards the CAR.', 'He is not qualified for listed SIPs on this basis: the six-transactions route for CAR requires transacting in SIPs listed or quoted on an exchange at least six times in the preceding three years, whereas his six transactions were in unlisted CIS \u2014 which is the CKA route for unlisted SIPs. CAR and CKA are not interchangeable.', 'He may trade listed SIPs, because a positive CKA is valid for three years.'],
    a: 'C',
    r: 'The sufficient-knowledge routes differ: for CAR, at least six transactions in SIPs listed or quoted on an exchange in the preceding three years; for CKA, at least six transactions in unlisted CIS or ILPs (or in other unlisted SIPs) in the preceding three years. Other routes are a qualifying diploma or higher in a listed discipline, a professional qualification such as CFA or ACCA, or three consecutive years of relevant work experience in the past ten years.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A firm is about to open a SIP trading account for a retail customer who has passed the relevant assessment. Who must approve the opening?',
    o: ['Any representative involved in opening the account.', 'The customer\'s remisier, acting alone.', 'The customer\'s connected person, if one is available.', 'Senior management who is not involved in that particular account opening process and not a connected person of the customer, satisfied on the outcome of the CAR or CKA that the customer has the knowledge or experience and having approved the opening.'],
    a: 'D',
    r: 'A firm must not open a SIP trading account unless senior management who is not involved in that particular account opening process and not a connected person of the customer is satisfied, based on the outcome of the CAR or CKA, that the customer has knowledge or experience, and has approved the opening. Regardless of the CAR outcome, the account opening form must state that the customer can at any time request advice.',
  },
  {
    s: 'RES 2B §6.6', t: 'Single choice',
    q: 'A firm outsources the identification and classification of overseas-listed products as Excluded Investment Products (EIPs) to a vendor. The vendor misclassifies a product as an EIP when it is in fact a SIP, and the firm allows a retail client to transact without a CAR. What is the position?',
    o: ['The firm is not responsible, because classification was outsourced.', 'The firm is not responsible, because the product was classified as an EIP.', 'The firm is responsible, because the product is a SIP and CAR applies.', 'The firm remains responsible for implementation of the classification system, including the accuracy of the classification \u2014 outsourcing does not transfer responsibility \u2014 and where a firm does not implement a system to identify and classify a product as an EIP, the product is classified as a SIP and the CAR requirements apply.'],
    a: 'D',
    r: 'A firm may outsource identification and classification, but it remains responsible for implementation of the classification system, including the accuracy of the classification. If it does not implement such a system, the overseas-listed product is classified as a SIP and the CAR requirements apply. (Before a retail customer\'s first transaction in an overseas-listed product, the firm must also provide the risk warning statement in Annex 4 of the MAS Notice on Sales of Investment Products and obtain the customer\'s acknowledgement, retained for not less than five years.)',
  },
  {
    s: 'RES 2B §6.7', t: 'Single choice',
    q: 'A firm\'s critical IT system suffers unscheduled downtime totalling five hours in a 12-month period, and the firm notifies MAS two hours after discovering a severe system malfunction that materially impacts service to customers. Which statement is correct?',
    o: ['Both limits were breached: the maximum unscheduled downtime for critical IT systems must not exceed four hours within any 12-month period, and MAS must be notified as soon as possible and not later than one hour after discovering a relevant incident (a system malfunction or IT security incident with severe and widespread impact, or that materially impacts service to customers).', 'Only the downtime limit was breached; MAS notification within two hours is acceptable.', 'Only the notification limit was breached; five hours of downtime is acceptable.', 'Neither limit was breached, because the limits are four hours\' downtime and two hours\' notification.'],
    a: 'A',
    r: 'Under the MAS technology risk management guidelines, maximum unscheduled downtime for critical IT systems must not exceed four hours within any 12-month period, and firms must notify MAS as soon as possible and not later than one hour after discovering a relevant incident with severe and widespread impact or that materially impacts service to customers.',
  },
  {
    s: 'RES 2B §6.7', t: 'Single choice',
    q: 'A client trades futures on margin. He sets a stop-loss on his position. Overnight news gaps the price well below his stop level, the position is liquidated far below the stop, and his loss exceeds the amount he deposited. Which statement is correct?',
    o: ['The loss cannot exceed the deposit, because margin accounts cap losses at the principal invested.', 'The stop-loss guaranteed liquidation at the stop level, so the firm must make good the excess loss.', 'The loss can exceed the principal invested, because the account uses borrowed capital \u2014 capital risk in margin accounts can exceed the principal \u2014 and gap risk means prices can jump from one level to another with no trading in between, so a position may be liquidated well below the stop-loss level.', 'Gap risk applies only to equities, not to futures.'],
    a: 'C',
    r: 'Capital risk is the risk that a client\'s account can lose part or all of the principal, and in margin accounts the loss may exceed the principal invested because the representative relies on borrowed capital. Gap risk is the risk that prices change from one level to another with no trading in between; gaps can fall below stop-loss levels, so positions must be liquidated possibly well below the stop-loss. The stop-loss is the most basic and most important dealing risk tool, but it does not protect against a gap. ---',
  },
];

