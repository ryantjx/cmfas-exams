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
    s: 'RES 1B §6.2', t: 'Multiple response',
    q: 'Which of the following are agent banks under CPFIS?',
    o: ['OCBC Bank', 'Maybank', 'HSBC Bank', 'ICICI Bank'], a: 'A,B',
    r: 'The agent banks are the locally established institutions appointed for the scheme. HSBC and ICICI appear as distractors because they are foreign-headquartered.',
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
    s: 'RES 2B Appendix E', t: 'Single choice',
    q: 'Which of the following is an excluded investment product?',
    o: ['An ordinary share listed on an exchange', 'A structured note', 'An asset-backed security', 'A collective investment scheme with a broad mandate'], a: 'A',
    r: 'Ordinary shares, share units and business trust units are EIPs. Structured notes and asset-backed securities are expressly carved out of the debenture limb, so both are SIPs.',
  },
  {
    s: 'RES 2B Appendix E', t: 'Multiple response',
    q: 'Which statements about excluded investment products are correct?',
    o: ['Dealing in an EIP does not require a customer account review', 'Debentures are EIPs except asset-backed securities and structured notes', 'Only an immediate currency exchange is an EIP; a forward or swap is not', 'Stapling an EIP to a SIP produces an EIP'], a: 'A,B,C',
    r: 'A staple qualifies only where the stapled products are themselves EIPs, so stapling to a SIP does not confer EIP status.',
  },
  {
    s: 'RES 2B Appendix F', t: 'Single choice',
    q: 'The list of suspicious transaction examples is described in the guidance as:',
    o: ['An aid to judgement that must not be applied as a routine instrument in place of common sense', 'An exhaustive and definitive list of offences', 'A substitute for customer due diligence', 'A list that applies only to banks'], a: 'A',
    r: 'The list is expressly an aid, non-exhaustive, and not a substitute for judgement. A combination of indicators is what makes a transaction genuinely suspicious.',
  },
  {
    s: 'RES 2B Appendix G', t: 'Single choice',
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
];

