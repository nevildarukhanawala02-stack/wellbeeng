import { useEffect, type ReactNode } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageSEO } from '@/lib/seo';
import './ceo-sherpa.css';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@600;700&display=swap';

type TagKind = 'record' | 'estimate' | 'told' | 'assumed';

function Tag({ kind }: { kind: TagKind }) {
  return <span className={`sh-tag ${kind}`}>{kind}</span>;
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="sh-callout">
      <span className="sh-mono">In practice</span>
      <p>{children}</p>
    </div>
  );
}

function scrollToId(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

const capabilities = [
  {
    title: 'A ranked daily list',
    body: 'One short list replaces a review across many tools. Each item states the money at stake and the date by which it matters.',
  },
  {
    title: 'Figures you can trace',
    body: 'Every figure carries a basis label: counted, calculated, stated by your team, or assumed. Each opens to the rows behind it.',
  },
  {
    title: 'Clear ownership',
    body: 'Accepting an item creates a task for the department head who owns it. One holder at a time. It returns to you if it stalls.',
  },
  {
    title: 'Seasonal lead-time planning',
    body: 'Festivals and sales are counted back from the date you must act, using your own supplier lead times.',
  },
  {
    title: 'Direct questions',
    body: 'Describe a problem or an outcome. CEO Sherpa searches your data and history and answers in plain language, with assumptions stated.',
  },
];

const departments = [
  { name: 'Marketing', scope: 'Ad spend, campaigns, agency delivery.' },
  { name: 'E-commerce', scope: 'Store, conversion, catalogue.' },
  { name: 'Operations', scope: 'Stock, couriers, returns.' },
  { name: 'Finance', scope: 'Cash, payments, margin.' },
  { name: 'Customer experience', scope: 'Support, reviews, repeat customers, as sources are connected.' },
];

const wontDo = [
  {
    title: 'It does not decide, spend or act on its own.',
    body: 'It proposes, explains and records. Your team decides. The decision and its owner are logged.',
  },
  {
    title: 'It does not promise a result.',
    body: 'It supports informed decisions. It cannot guarantee that a decision will be correct, and it does not claim to.',
  },
  {
    title: 'It does not guess.',
    body: 'Where there are neither records nor statements, it applies a stated default, marks it as assumed, and lists the one question that would replace it.',
  },
  {
    title: 'It is not a project-management tool.',
    body: 'It holds the work that follows a decision: who holds it, since when, and what happened. Your department heads’ teams keep their own tools.',
  },
  {
    title: 'It does not cover everything.',
    body: 'Pricing strategy, hiring, legal and tax, and competitor moves are outside its scope. It says so, and lists any area with no connected source.',
  },
  {
    title: 'It learns under your approval.',
    body: 'It learns your thresholds, rules and history, and proposes changes for your approval. It does not change its own rules.',
  },
];

const faqs = [
  {
    q: 'What is CEO Sherpa?',
    a: 'CEO Sherpa is a daily decision brief. It reads your own commercial and operational data, ranks what needs attention first, and attaches the evidence, the financial exposure and the date that matters to each item. It proposes; your team decides.',
  },
  {
    q: 'Who is it for?',
    a: 'Leadership teams at D2C and eCommerce brands, where a founder or CEO and a set of department heads work from several systems: store, ad platforms, marketplaces, couriers, payments and CRM.',
  },
  {
    q: 'Is it a subscription?',
    a: 'There is no monthly retainer and no per-user fee. After a one-time setup, a refillable AI pack covers AI usage, hosting, upkeep and support.',
  },
  {
    q: 'What decisions does it cover today?',
    a: 'Marketing (ad spend, campaigns, agency delivery), e-commerce, operations (stock, couriers, returns), finance (cash, payments, margin) and customer experience, as sources are connected. It also plans festival and sale lead times. Pricing strategy, hiring, legal and tax, and competitor moves are outside its scope.',
  },
  {
    q: 'Does it make decisions for us?',
    a: 'No. It never decides, spends or acts on its own. Every proposal is accepted, reassigned or dismissed by a person, and the decision and its owner are logged.',
  },
  {
    q: 'Will it replace our agencies or our team?',
    a: 'No. It reads performance data and shows where reported and actual results diverge. The work stays with your agencies and department heads, and it is not a project-management tool.',
  },
  {
    q: 'How do we see it on our own numbers?',
    a: 'The first step is a consultation on your data. Bring a list of where your numbers live; nothing else needs to be prepared.',
  },
];

export default function CEOSherpa() {
  useEffect(() => {
    usePageSEO('/ceo-sherpa');
    if (!document.querySelector('link[data-sherpa-fonts]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS_HREF;
      link.setAttribute('data-sherpa-fonts', 'true');
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="sherpa">
        {/* HERO */}
        <section className="sh-hero">
          <div className="sh-wrap sh-hero-grid">
            <div>
              <span className="sh-mono sh-eyebrow">CEO Sherpa for D2C and eCommerce brands</span>
              <h1>A ranked daily brief from your own data, with the evidence attached.</h1>
              <p className="sh-sub">
                CEO Sherpa reads your commercial and operational data every day and ranks what needs attention first,
                with the financial exposure, the deadline and the supporting records. Your team decides. It never acts
                on its own.
              </p>
              <div className="sh-actions">
                <Link href="/consultation">
                  <a className="sh-btn">Book a consultation</a>
                </Link>
                <a className="sh-link" href="#sample-brief" onClick={scrollToId('sample-brief')}>
                  See a sample brief
                </a>
              </div>
              <p className="sh-note" style={{ marginTop: 18 }}>
                Examples on this page use a demo brand with sample data.
              </p>
            </div>

            <div className="sh-brief" aria-label="Sample priority item">
              <span className="sh-tag kind">Fix</span>
              <h3>Meta, prospecting, evergreen interests: return fell from 1.95x to 0.53x in three days</h3>
              <dl className="sh-rows" style={{ margin: 0 }}>
                <div className="sh-row" style={{ gridTemplateColumns: '150px 1fr' }}>
                  <dt>Exposure, next 60 days</dt>
                  <dd>
                    ₹32,600 to ₹65,201 <Tag kind="estimate" />
                  </dd>
                </div>
                <div className="sh-row" style={{ gridTemplateColumns: '150px 1fr' }}>
                  <dt>Basis</dt>
                  <dd>
                    Last 3 days against the prior 28 days <Tag kind="record" />
                  </dd>
                </div>
                <div className="sh-row" style={{ gridTemplateColumns: '150px 1fr' }}>
                  <dt>Suggested owner</dt>
                  <dd>Marketing head, due tomorrow</dd>
                </div>
              </dl>
              <p className="sh-note" style={{ margin: '12px 0 0' }}>
                Demo brand, sample data
              </p>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="sh-sec sh-alt">
          <div className="sh-wrap">
            <h2 className="sh-h2">What it does</h2>
            <p className="sh-lede">
              Each morning, CEO Sherpa identifies what needs review, why it matters, and what happens if it waits.
            </p>
            <div className="sh-grid sh-g3">
              {capabilities.map((c) => (
                <div className="sh-card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="sh-sec">
          <div className="sh-wrap">
            <h2 className="sh-h2">The problem: every system reports its own version</h2>
            <p className="sh-lede">The gap is rarely a lack of reports. It is the absence of a consistent daily review across all of them.</p>

            <p className="sh-quote">
              The ad platform reports a return of 2.2. The store shows 1.5. The agency report says sales are up. The
              bank balance says otherwise.
            </p>
            <p className="sh-note sh-mono" style={{ marginBottom: 20 }}>
              Demo brand, sample data
            </p>

            <div className="sh-read">
              <p>
                A typical D2C operation runs a store, ad platforms, marketplaces, quick commerce, a CRM and several
                shipping partners. Each system is accurate for its own scope, and none reconciles to cash, which is the
                binding constraint.
              </p>
              <p>
                The cost shows up as decisions made on partial information: ad budgets that did not pay back, discounts
                that eroded margin, an agency that under-delivered, a bestseller that ran out ahead of the festive
                season. In most cases the signal was visible in the data before the loss. No one had the time to review
                every source every day.
              </p>
            </div>

            <ul className="sh-symptoms">
              <li>Several tools, several numbers, no agreed source of truth.</li>
              <li>Promotions lift sales without lifting repeat purchase.</li>
              <li>Three agencies, with results that cannot be compared on one basis.</li>
              <li>Stock-out risk that surfaces after the replenishment window has closed.</li>
            </ul>

            <Callout>
              Data availability is not the problem. A consistent daily review across all sources, ranked by financial
              impact, is what is missing.
            </Callout>
          </div>
        </section>

        {/* MODEL */}
        <section className="sh-sec sh-alt" id="how-it-works">
          <div className="sh-wrap">
            <h2 className="sh-h2">How it works: analysis ahead of you, decisions with you</h2>
            <p className="sh-lede">
              CEO Sherpa works through your data before your day starts and returns a short, plainly labelled report.
            </p>
            <div className="sh-read">
              <p>
                You and your department heads keep every decision. CEO Sherpa does the preliminary work: reading the
                orders, spend, stock, cash and customer records, comparing them against your own recent baseline, and
                reporting what changed and what it may cost.
              </p>
            </div>

            <div className="sh-route" aria-hidden="true">
              <svg width="132" height="84" viewBox="0 0 132 84" fill="none">
                <polyline points="6,74 28,74 44,54 70,54" stroke="#3c6a4e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="butt" />
                <line x1="70" y1="54" x2="100" y2="12" stroke="#e06b45" strokeWidth="9" strokeLinecap="butt" />
                <circle cx="102" cy="8" r="6" fill="#e8b84b" />
              </svg>
            </div>
            <p className="sh-note" style={{ maxWidth: 420 }}>
              The steps are your record. The climb is the next action that matters most.
            </p>

            <div className="sh-grid sh-g3" style={{ marginTop: 26 }}>
              <div className="sh-card">
                <span className="sh-mono sh-num">1</span>
                <h3>Nothing is invented.</h3>
                <p>Every figure comes from calculations on your own data.</p>
              </div>
              <div className="sh-card">
                <span className="sh-mono sh-num">2</span>
                <h3>Everything is labelled.</h3>
                <p>Each statement is marked as counted, calculated, stated by your team, or assumed.</p>
              </div>
              <div className="sh-card">
                <span className="sh-mono sh-num">3</span>
                <h3>Silence is information.</h3>
                <p>
                  It reports what it checked and found within range, and what it could not check, so an empty result is
                  never ambiguous.
                </p>
              </div>
            </div>

            <Callout>
              You keep the decision. CEO Sherpa reports what it checked, what it found, and what it could not assess.
            </Callout>
          </div>
        </section>

        {/* SAMPLE BRIEF */}
        <section className="sh-sec" id="sample-brief">
          <div className="sh-wrap">
            <h2 className="sh-h2">A sample morning brief</h2>
            <p className="sh-lede">
              Not thirty items. The few that matter today, each with its exposure, its deadline and its evidence.
            </p>
            <p className="sh-note sh-mono" style={{ marginBottom: 16 }}>
              Demo brand, sample data
            </p>

            <div className="sh-brief" style={{ marginBottom: 16 }}>
              <span className="sh-tag kind">Fix</span>
              <h3>Meta, prospecting, evergreen interests: return fell from 1.95x to 0.53x in three days</h3>
              <dl className="sh-rows" style={{ margin: 0 }}>
                <div className="sh-row">
                  <dt>Exposure, next 60 days</dt>
                  <dd>
                    ₹32,600 to ₹65,201 <Tag kind="estimate" />
                  </dd>
                </div>
                <div className="sh-row">
                  <dt>Last 3 days</dt>
                  <dd>
                    Spend ₹44,665, kept sales ₹23,494, return 0.53x <Tag kind="record" />
                  </dd>
                </div>
                <div className="sh-row">
                  <dt>Prior 28 days</dt>
                  <dd>
                    Return 1.95x on ₹2.31 lakh spend <Tag kind="record" />
                  </dd>
                </div>
                <div className="sh-row">
                  <dt>Assumptions</dt>
                  <dd>None in this figure.</dd>
                </div>
                <div className="sh-row">
                  <dt>Confidence</dt>
                  <dd>Low. Three days of one campaign against its own recent baseline. A signal to review, not a verdict.</dd>
                </div>
                <div className="sh-row">
                  <dt>Suggested owner</dt>
                  <dd>Marketing head, due tomorrow</dd>
                </div>
              </dl>
            </div>

            <div className="sh-grid sh-g2">
              <div className="sh-brief sh-brief-small">
                <span className="sh-tag kind">Stop the loss</span>
                <h3>Google, search, non-brand: loss-making on every order</h3>
                <p>
                  Return of 1.5 against 2.2 reported by the platform <Tag kind="record" />
                </p>
                <p className="sh-note">
                  Not yet sized in rupees, so this item ranks on its date and evidence alone.
                </p>
              </div>
              <div className="sh-brief sh-brief-small">
                <span className="sh-tag kind">Protect</span>
                <h3>The hero hair oil will stock out before replenishment can arrive</h3>
                <p>Exposure over the next 60 days: ₹2.32 lakh to ₹3.94 lakh.</p>
              </div>
            </div>

            <Callout>
              Three items, not thirty. Each arrives with its exposure, its date and its reasoning, so a decision takes
              minutes rather than hours of searching.
            </Callout>

            <h3 className="sh-h3">Every item follows the same structure</h3>
            <p className="sh-lede" style={{ marginBottom: 8 }}>Nine parts, in the same order, every time.</p>
            <ol className="sh-parts">
              {[
                'What is happening',
                'Why it matters',
                'Why now',
                'The evidence',
                'What we assume',
                'What to do',
                'The cost of waiting',
                'Why it ranks here',
                'The rows behind each figure',
              ].map((p, i) => (
                <li key={p}>
                  <span>{i + 1}</span>
                  {p}
                </li>
              ))}
            </ol>

            <h3 className="sh-h3">How firm is each figure?</h3>
            <div className="sh-grid sh-g2">
              <div className="sh-card">
                <Tag kind="record" />
                <p style={{ marginTop: 10 }}>Counted directly from your orders, spend, stock or ledger.</p>
              </div>
              <div className="sh-card">
                <Tag kind="estimate" />
                <p style={{ marginTop: 10 }}>Calculated from your records by a stated method, shown as a range.</p>
              </div>
              <div className="sh-card">
                <Tag kind="told" />
                <p style={{ marginTop: 10 }}>Stated by your business, with who said it and when.</p>
              </div>
              <div className="sh-card">
                <Tag kind="assumed" />
                <p style={{ marginTop: 10 }}>
                  A default used because there are neither records nor statements. Always listed, with the one question
                  that would replace it.
                </p>
              </div>
            </div>

            <div className="sh-read" style={{ marginTop: 22 }}>
              <p>
                <strong>Fact and inference are kept apart.</strong> Anything CEO Sherpa infers is placed on its own line,
                beginning “My read:”.
              </p>
              <p>
                <strong>Every figure is traceable.</strong> Each one opens to the orders, stock lines or payments behind
                it.
              </p>
            </div>

            <Callout>
              Nothing has to be taken on trust. Each claim shows what it rests on, how firm it is, and what would change
              the answer.
            </Callout>
          </div>
        </section>

        {/* ASK */}
        <section className="sh-sec sh-alt">
          <div className="sh-wrap">
            <h2 className="sh-h2">Direct questions on your own data</h2>
            <div className="sh-read">
              <p>
                Describe a problem or the outcome you want. CEO Sherpa searches your numbers and history and answers in
                plain language, stating what it assumed.
              </p>
              <p>
                Questions can cover cash, customers, marketing and spend, stock and delivery, platforms, or what to
                expect next. Facts appear on one line. Inference appears on another, beginning “My read:”.
              </p>
            </div>
            <Callout>You do not need to know how to phrase the query. Start with the problem you have.</Callout>
          </div>
        </section>

        {/* ACTION */}
        <section className="sh-sec">
          <div className="sh-wrap">
            <h2 className="sh-h2">From recommendation to accountable action</h2>
            <p className="sh-lede">CEO Sherpa proposes. Your team decides, and the outcome is recorded.</p>
            <div className="sh-read">
              <p>
                Accepting an item turns it into a task for the department head who owns it: operations, marketing,
                finance, e-commerce or customer experience. You can change the owner or the date, or dismiss the item
                with a reason. At the morning meeting, each item arrives with its full history: what was found, what was
                decided, who holds it, and what happened next.
              </p>
            </div>

            <h3 className="sh-h3">How a task moves</h3>
            <div className="sh-grid sh-g2">
              <div className="sh-card">
                <h4>One holder at a time.</h4>
                <p>Everyone can see who holds the task and since when. A head can pass it on, or ask you for clarity.</p>
              </div>
              <div className="sh-card">
                <h4>One shared thread.</h4>
                <p>Heads and you see the same history, so nobody has to ask what happened.</p>
              </div>
              <div className="sh-card">
                <h4>Stalled tasks escalate.</h4>
                <p>
                  If a task stays with one holder past a limit you set, for example ten days, it returns to you with the
                  holder named. You change that limit on a Rules screen, without a developer.
                </p>
              </div>
              <div className="sh-card">
                <h4>Heads record what they did.</h4>
                <p>
                  Work done with their own teams goes in as a note on the item. CEO Sherpa is not a project-management
                  tool, and teams keep their own.
                </p>
              </div>
            </div>
            <div className="sh-card" style={{ marginTop: 16 }}>
              <h4>One case per problem.</h4>
              <p>Each problem keeps a single case, from detection to lesson. It is never deleted, and it reopens if the problem returns.</p>
            </div>

            <Callout>
              Decisions made in the meeting reach the person who owns them, and return to you if they stall.
            </Callout>

            <h3 className="sh-h3">Role-based views</h3>
            <div className="sh-read">
              <p>
                Each department head signs in to the same screens you use, scoped to their own items. An item reaches
                your list only when it is CEO-level, when the owner missed the window, or when the head escalates it.
              </p>
            </div>
            <div className="sh-grid sh-g5" style={{ marginTop: 14 }}>
              {departments.map((d) => (
                <div className="sh-card sh-dept" key={d.name}>
                  <h4>{d.name}</h4>
                  <p>{d.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEASON */}
        <section className="sh-sec sh-alt">
          <div className="sh-wrap">
            <h2 className="sh-h2">Seasonal planning: the deadline, not the date</h2>
            <p className="sh-lede">A festival does not arrive on its date. It arrives on the day the order had to be placed.</p>
            <div className="sh-read">
              <p>
                For a D2C brand, the real deadline for a festival or sale is its date minus the time it takes to be
                ready. CEO Sherpa counts back from each event using your own lead times and shows the last responsible
                moment to act.
              </p>
            </div>

            <div className="sh-timeline" aria-label="Order deadline, lead time, event day">
              <div className="sh-tl-points">
                <div>
                  <span className="sh-tl-dot" />
                  Last moment to order
                </div>
                <div>
                  <span className="sh-tl-dot" />
                  Your supplier’s lead time
                </div>
                <div>
                  <span className="sh-tl-dot end" />
                  Festival day
                </div>
              </div>
            </div>

            <div className="sh-grid sh-g3">
              <div className="sh-card">
                <h3>A season line on your list.</h3>
                <p>
                  Shows which preparation steps are late, which are at risk, and which cannot yet be judged because data
                  is missing.
                </p>
              </div>
              <div className="sh-card">
                <h3>An item before every event.</h3>
                <p>
                  The events calendar holds the main festivals and sales. Before each one, CEO Sherpa raises an item with
                  what happened last year in your own history.
                </p>
              </div>
              <div className="sh-card">
                <h3>Your calendar governs.</h3>
                <p>You can add your own sales and dates, and set which events matter to your brand.</p>
              </div>
            </div>

            <Callout>
              You see the season coming while there is still time to act, rather than learning on the day that the
              bestseller should have been ordered weeks earlier.
            </Callout>
          </div>
        </section>

        {/* TRUST */}
        <section className="sh-sec">
          <div className="sh-wrap">
            <h2 className="sh-h2">Controls and limits</h2>
            <p className="sh-lede">The product is only useful if it can be trusted. These are the rules it follows.</p>

            <div className="sh-rules">
              <p>
                <strong>It calculates, then explains.</strong> Numbers come from calculations on your data. The AI writes
                the plain-language explanation and does not generate the figures.
              </p>
              <p>
                <strong>It shows its reasons.</strong> Every item states why it is on your list, why it sits above the
                next, and why the others can wait.
              </p>
              <p>
                <strong>It separates fact from inference.</strong> What it records, what it estimates and what it infers
                are kept apart, and inference is marked as such.
              </p>
            </div>

            <h3 className="sh-h3">What is outside its scope</h3>
            <div className="sh-read">
              <p>
                CEO Sherpa keeps a standing list of what it does not cover and reviews it with you at setup: pricing
                strategy, hiring, legal and tax, competitor moves, and any area without a connected data source. When a
                source is stale, it states that it cannot assess that area and which data would allow it to.
              </p>
            </div>

            <h3 className="sh-h3">What it will not do</h3>
            <div className="sh-grid sh-g3">
              {wontDo.map((w) => (
                <div className="sh-card" key={w.title}>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>

            <Callout>
              An empty result is informative: you always know what was checked, what was within range, and what could not
              be checked. The limits are part of the design.
            </Callout>
          </div>
        </section>

        {/* ENGAGEMENT */}
        <section className="sh-sec sh-alt">
          <div className="sh-wrap">
            <h2 className="sh-h2">How an engagement starts</h2>
            <p className="sh-lede">A consultation first. Then you decide.</p>

            <div className="sh-grid sh-g3">
              <div className="sh-card">
                <span className="sh-mono sh-num">1</span>
                <h3>Consultation on your numbers.</h3>
                <p>We walk through how this would look on your business and agree your sources of truth.</p>
              </div>
              <div className="sh-card">
                <span className="sh-mono sh-num">2</span>
                <h3>One-time setup.</h3>
                <p>We connect your data sources, import your history and agree your key measures. Customisation to your business is included.</p>
              </div>
              <div className="sh-card">
                <span className="sh-mono sh-num">3</span>
                <h3>Ongoing use, refilled as needed.</h3>
                <p>
                  A refillable AI pack covers AI usage, hosting, upkeep and support. There is no monthly retainer and no
                  per-user fee.
                </p>
              </div>
            </div>

            <div className="sh-read" style={{ marginTop: 24 }}>
              <p>
                <strong>Day one.</strong> CEO Sherpa reads the history your business already holds (orders, ad spend,
                stock, cash and customers), writes the account of what has happened so far, and drafts your first
                priorities from the lessons already present in your data. You start from your own history, not from zero.
              </p>
            </div>

            <h3 className="sh-h3">Before the consultation, bring or send</h3>
            <div className="sh-grid sh-g2">
              <div className="sh-card">
                <h4>Where your numbers live.</h4>
                <p>
                  Store, ad accounts, marketplaces, quick commerce, couriers, payments, and your CRM and WhatsApp tools. A
                  list is enough.
                </p>
              </div>
              <div className="sh-card">
                <h4>The three to five measures you most want to move.</h4>
                <p>
                  For example: contribution margin per order, cash runway against your safe level, repeat rate, stock-out
                  days on key products, late-delivery and return rates, or the share of ad spend that earns back after
                  discounts and returns.
                </p>
              </div>
              <div className="sh-card">
                <h4>The one decision on your mind.</h4>
                <p>Whatever you are weighing next. It is the best test of whether this is useful.</p>
              </div>
              <div className="sh-card">
                <h4>Who your department heads are.</h4>
                <p>
                  Marketing, e-commerce, operations, finance and customer experience, and anyone else who should see their
                  own view.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sh-sec">
          <div className="sh-wrap sh-faq">
            <h2 className="sh-h2" style={{ marginBottom: 22 }}>
              Questions
            </h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sh-cta">
          <div className="sh-wrap">
            <h2>Review it against your own numbers.</h2>
            <p>
              The next step is a consultation on your data. You do not need to prepare anything beyond a list of where
              your numbers live.
            </p>
            <Link href="/consultation">
              <a className="sh-btn sh-btn-light">Book a consultation</a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
