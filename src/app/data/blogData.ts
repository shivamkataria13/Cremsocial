export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  category: string;
  targetAudience: string;
  intro: string;
  content: string; // HTML or Markdown-like string
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "local-seo-audit-15-minutes",
    title: "The 15-Minute Local SEO Audit (So You Stop Being Invisible)",
    readTime: "5 min read",
    category: "SEO",
    targetAudience: "For SMBs",
    intro: "If you searched your business right now and couldn't find it on page one, your competitor is getting your customer. That's not a theory — it's just how people buy things in 2026. The good news? Most local SEO problems are fixable, and you don't need a £5,000 agency to spot them.",
    content: `
      <h2>Step 1 — Can Google Even Find You? (The Index Check)</h2>
      <p>Open Google and type: <code>site:yourwebsite.com</code></p>
      <p>If pages show up, Google is indexing you. If nothing shows up, you're basically invisible online and that's your first and only priority right now.</p>
      <p>While you're at it, Google your business name directly. Does your Google Business Profile (GBP) show up on the right side of the results? If not, your profile either doesn't exist, isn't verified, or is sitting unclaimed. Go fix that first — it's free and takes 10 minutes.</p>

      <h2>Step 2 — Are You Targeting What People Actually Search?</h2>
      <p>Open your homepage or your most important service page. What's the main keyword you're trying to rank for?</p>
      <p>Now Google it. Who shows up in the top 5? What do those pages look like? What words do they use?</p>
      <p>If your page doesn't closely match the intent of that search — meaning the format, the topic, and the language — Google won't rank you, no matter how good your service actually is.</p>
      <p><strong>Quick fix:</strong> Change your H1 (the main headline) to include the phrase people actually search. Example: "Plumber in Brampton" beats "Welcome to Mike's Plumbing Services."</p>

      <h2>Step 3 — Is Your Google Business Profile Doing Its Job?</h2>
      <p>Go to your GBP dashboard and check:</p>
      <ul>
        <li>Is your primary category the most accurate and specific one?</li>
        <li>Have you added services with keyword-rich descriptions?</li>
        <li>Do you have at least 10 photos (exterior, interior, team, work)?</li>
        <li>Are you posting weekly updates?</li>
        <li>Are you responding to every review — including the bad ones?</li>
      </ul>
      <p>Most businesses fill in the basics and stop. The ones showing up in the map pack are doing all of the above consistently.</p>

      <h2>Step 4 — Is Your Page Built to Convert the Click?</h2>
      <p>Getting the click is half the job. Losing them in 3 seconds is the other half.</p>
      <p>Open your homepage on your phone (not desktop — 60%+ of local searches happen on mobile). Ask yourself:</p>
      <ul>
        <li>Does it say what you do and who you help within 5 seconds?</li>
        <li>Is there one clear button or action above the fold?</li>
        <li>Is your phone number or booking link visible without scrolling?</li>
      </ul>
      <p>If the answer is no to any of these, you're leaking leads from clicks you already paid for (either in ad spend or SEO effort).</p>

      <h2>Step 5 — The 3 Fixes That Usually Move the Needle Fastest</h2>
      <p>Based on most local businesses we've audited, here's where the biggest gains usually hide:</p>
      <ul>
        <li>GBP isn't fully set up or optimized — fix this in one afternoon</li>
        <li>Homepage headline is vague — rewrite it to include your service + location</li>
        <li>No consistent reviews strategy — ask every happy customer after every job</li>
      </ul>
      <p>That's it. Do those three things before touching anything else.</p>
    `,
    metaTitle: "15-Minute Local SEO Audit (No-BS Checklist) | Cremsocial",
    metaDescription: "A quick local SEO audit you can do today: index check, Google Business Profile fixes, keyword alignment, and conversion tweaks to get more local calls."
  },
  {
    id: "2",
    slug: "google-ads-vs-meta-ads-which-first",
    title: "Google Ads vs Meta Ads: Which One Should You Run First? (A Dumb-Simple Rule)",
    readTime: "5 min read",
    category: "Paid Ads",
    targetAudience: "For SMBs",
    intro: "Every business owner eventually Googles this and gets a 3,000-word answer that somehow says nothing. So here's the short version: it comes down to one word — intent.",
    content: `
      <h2>The Difference in Intent (Buyers vs Browsers)</h2>
      <p><strong>Google Search</strong> = people who already want something and are actively looking for it right now.</p>
      <p><strong>Meta (FB/IG)</strong> = people who are doing something else entirely and stumble across your ad.</p>
      <p>That distinction changes everything. If someone Googles "emergency plumber Brampton," they need a plumber right now. If you're not on Google, you lose that sale. No amount of Instagram ads replaces that urgency.</p>
      <p>But if you sell something people don't know they need yet — a course, a done-for-you service, a new product — Meta is better at creating that "wait, this is exactly what I needed" moment.</p>

      <h2>When Google Wins</h2>
      <p>Run Google Search first if:</p>
      <ul>
        <li>Your service is something people already search for (dentist, lawyer, HVAC, plumber, cleaner, etc.)</li>
        <li>You want leads with high buying intent</li>
        <li>Your sales cycle is short (someone searches → books → buys)</li>
        <li>You have a specific landing page with one clear offer</li>
      </ul>
      <p>Google works best when demand already exists. You're just making sure you show up when it does.</p>

      <h2>When Meta Wins</h2>
      <p>Run Meta first if:</p>
      <ul>
        <li>You're selling something people don't typically Google (clothing brand, digital product, niche course, lifestyle product)</li>
        <li>Your ideal customer can be defined by interests, age, or behaviors</li>
        <li>You want to build awareness before pushing for a sale</li>
        <li>You have good creative (video or strong visuals)</li>
      </ul>
      <p>Meta is great at showing the right product to the right person before they knew they wanted it.</p>

      <h2>The Starter Setup for Each</h2>
      <p><strong>Minimum viable Google campaign:</strong></p>
      <ul>
        <li>1 campaign → 1 ad group → 3–5 exact/phrase match keywords</li>
        <li>1 dedicated landing page (not your homepage)</li>
        <li>Call/form extension enabled</li>
        <li>Conversion tracking set up before you spend a dollar</li>
      </ul>

      <p><strong>Minimum viable Meta campaign:</strong></p>
      <ul>
        <li>1 campaign → Advantage+ or broad audience → 3 creative variations</li>
        <li>1 simple landing page or lead form</li>
        <li>Meta Pixel installed and firing correctly</li>
        <li>One goal only: leads, messages, or purchases</li>
      </ul>
      <p>Don't run both at the same time until you've proven one works. Pick the right one first, get a result, then expand.</p>

      <h2>The 3 Tracking Mistakes That Make Ads Feel Like a Scam</h2>
      <ul>
        <li><strong>No conversion tracking</strong> — you're flying blind; you only know how much you spent, not what it brought back</li>
        <li><strong>Sending traffic to your homepage</strong> — homepages are for browsing, not converting; build a specific landing page for each campaign</li>
        <li><strong>Changing things too fast</strong> — algorithms need data; give campaigns 7–14 days before making major changes</li>
      </ul>
      <p>Most ads don't fail because of the platform. They fail because of bad tracking, wrong destinations, and impatience.</p>
    `,
    metaTitle: "Google Ads vs Meta Ads: Which to Run First? | Cremsocial",
    metaDescription: "Stop guessing. Here is the simple rule to choose between Google Search and Meta ads based on intent, plus starter setups and tracking mistakes to avoid."
  },
  {
    id: "3",
    slug: "traffic-no-leads-fixes",
    title: "Why Your Website Gets Traffic But No Leads (7 Fixes That Don't Require a Rebuild)",
    readTime: "6 min read",
    category: "Websites",
    targetAudience: "For SMBs & Creators",
    intro: "You've checked Analytics. People are landing on your site. They're staying for a minute or two. Then leaving. No form. No call. No DM. This isn't a traffic problem — it's a conversion problem.",
    content: `
      <h2>Fix #1 — Your Headline Is Vague (Rewrite It Like a Human)</h2>
      <p>Most homepages open with something like "Welcome to [Business Name]" or "Quality Service You Can Trust."</p>
      <p>Nobody cares. Your headline has one job: in 5 seconds, tell a visitor what you do, who you help, and what they get. That's it.</p>
      <p><strong>Before:</strong> "Helping businesses achieve their potential."<br>
      <strong>After:</strong> "We build conversion-focused websites for Toronto SMBs that want more leads, not just more traffic."</p>
      <p>Rewrite your H1 right now. Plain language only.</p>

      <h2>Fix #2 — No Single Main CTA (Choose One)</h2>
      <p>If your page has 4 different buttons — "Learn More," "Book a Call," "See Our Work," "Contact Us" — visitors freeze and do nothing.</p>
      <p>Pick one primary action you want people to take. Build the whole page around pushing people toward that one thing.</p>

      <h2>Fix #3 — Your Page Makes People Think Too Hard (Reduce Choices)</h2>
      <p>Every extra option on your page costs you conversions. The more people have to decide, the less likely they are to do anything.</p>
      <p>Cut the navigation links. Cut the pop-ups. Cut the 6 different service tiles in the hero section. Keep it simple enough that a tired person on their phone at 10pm can immediately understand what to do.</p>

      <h2>Fix #4 — You Have Zero Proof (Add Basic Trust Fast)</h2>
      <p>You don't need 50 reviews to build trust. You need something real.</p>
      <p>Quick trust elements that work even when you're new:</p>
      <ul>
        <li>Before/after photos of work you've done</li>
        <li>A short "how it works" section (3 steps)</li>
        <li>A simple guarantee ("If you're not happy, we'll fix it")</li>
        <li>A FAQ that pre-handles objections</li>
        <li>Real photos of you or your team (not stock photos)</li>
      </ul>
      <p>Any one of these immediately makes you more credible.</p>

      <h2>Fix #5 — Mobile Experience Is Killing Conversions</h2>
      <p>Open your site on your actual phone right now. Not emulator mode on your laptop — your real phone.</p>
      <p>Check:</p>
      <ul>
        <li>Does the hero text fit without wrapping weirdly?</li>
        <li>Is the CTA button easy to tap with a thumb?</li>
        <li>Does the page load in under 3 seconds?</li>
        <li>Can you find the phone number or contact link without scrolling twice?</li>
      </ul>
      <p>If the answer is no to any of those, fix it before touching your ads or SEO.</p>

      <h2>Fix #6 — Your Contact Process Is Annoying</h2>
      <p>If your contact form asks for name, company, phone, email, budget, project timeline, how they found you, and a message — people will close the tab.</p>
      <p>Keep it to 3 fields maximum: name, email or phone, and a short message or service selector. That's it. You can ask for everything else on the first call.</p>

      <h2>Fix #7 — You're Attracting the Wrong Clicks</h2>
      <p>Sometimes the problem isn't your page — it's that the people landing on it were never going to buy.</p>
      <p>If you're running ads, check if your keywords or audience targeting is too broad. If it's SEO traffic, check what phrases are bringing people in. Are they searching for something informational ("how does SEO work") when you're selling a service?</p>
      <p>Traffic quality matters more than traffic volume.</p>
    `,
    metaTitle: "Traffic but No Leads? 7 Website Fixes That Work | Cremsocial",
    metaDescription: "Getting clicks but no inquiries? Fix your headline, CTA, proof, mobile layout, and forms with 7 quick changes. No full website redesign required."
  },
  {
    id: "4",
    slug: "gbp-checklist-more-calls",
    title: "Google Business Profile: The Checklist That Actually Gets You More Calls",
    readTime: "5 min read",
    category: "Local SEO",
    targetAudience: "For SMBs",
    intro: "Google Business Profile is the most underused free tool in local marketing. Most businesses fill in their name, address, and phone number and call it done. The ones getting 3x more calls from it are doing the rest of this checklist.",
    content: `
      <h2>The 5 GBP Sections That Matter Most</h2>
      <p>These 5 areas have the biggest impact on whether you show up in the map pack and whether people call when they find you:</p>
      <ol>
        <li><strong>Primary category</strong> — the single most important ranking signal</li>
        <li><strong>Services/products</strong> — tell Google (and customers) exactly what you offer</li>
        <li><strong>Photos</strong> — profiles with 10+ photos get significantly more engagement</li>
        <li><strong>Reviews</strong> — quality, quantity, and how you respond all matter</li>
        <li><strong>Posts</strong> — weekly updates signal an active, relevant business</li>
      </ol>
      <p>Most businesses nail #1 and ignore the rest.</p>

      <h2>Categories and Services (The Easiest Win)</h2>
      <p>Your primary category tells Google what kind of business you are. Don't choose something generic if something specific exists. "Plumber" beats "Home Services." "Family Dentist" beats "Healthcare."</p>
      <p>Look at the top 3 businesses ranking in your area and check what categories they use. You can view this via their GBP listing on the left panel.</p>
      <p>For services: add every service you offer with a short keyword-rich description. Don't just say "cleaning" — say "residential deep cleaning for families in Brampton" or whatever applies.</p>

      <h2>Photos That Rank (And What to Post Weekly)</h2>
      <p>Businesses with 10+ photos receive more direction requests and website clicks than those without. That's not a guess — it's from Google's own data.</p>
      <p>Upload:</p>
      <ul>
        <li>Exterior photo (helps people recognize your location)</li>
        <li>Interior photos (builds trust)</li>
        <li>Team or owner photos (builds connection)</li>
        <li>Work/before-and-after photos (proves competence)</li>
      </ul>
      <p>Add at least 1 new photo every week. It signals active listing to Google's algorithm.</p>

      <h2>Reviews That Convert (What to Ask For and How to Reply)</h2>
      <p>More reviews = better ranking. Better quality reviews = higher conversion.</p>
      <p>Ask for reviews immediately after a positive experience. Use a simple prompt: "Could you leave us a Google review? If you can mention what we helped you with, that really helps other customers too."</p>
      <p>Reply to every review — especially the bad ones. Keep bad review replies short, professional, and solution-focused. Never argue. People read the replies as much as the reviews.</p>

      <h2>The Weekly 10-Minute Routine</h2>
      <ul>
        <li>Post 1 update (a promotion, a tip, a recent job, or a seasonal offer)</li>
        <li>Add 1 photo</li>
        <li>Reply to any new reviews</li>
        <li>Check that all business hours and contact info are current</li>
      </ul>
      <p>That's it. Ten minutes a week, consistently, beats a full GBP overhaul done once and abandoned.</p>
    `,
    metaTitle: "Google Business Profile Checklist (Get More Calls) | Cremsocial",
    metaDescription: "The Google Business Profile checklist that actually works: categories, services, photos, reviews, posts, and a simple 10-minute weekly routine for local SEO."
  },
  {
    id: "5",
    slug: "top-posts-to-digital-product-weekend",
    title: "Creators: Turn Your Top 5 Posts into a Digital Product in One Weekend",
    readTime: "7 min read",
    category: "Shadow Operating",
    targetAudience: "For Creators",
    intro: "If people are commenting, DM-ing, saving, and sharing your posts asking for more — they're basically telling you what they'd pay for. Most creators ignore this signal and keep posting hoping a brand deal shows up.",
    content: `
      <h2>Step 1 — Find What Your Audience Already Wants</h2>
      <p>This step requires zero creativity. Just open your:</p>
      <ul>
        <li>Last 30 days of comments</li>
        <li>DMs from followers</li>
        <li>Saved/bookmarked posts</li>
        <li>"How do you..." questions from replies and Q&As</li>
      </ul>
      <p>Group them into 3 recurring questions or pain points. Write them down exactly as people said them — not in your professional language, theirs. That's your product idea list.</p>
      <p>The one that shows up the most is your first product.</p>

      <h2>Step 2 — Pick a Product That Matches Your Effort Level</h2>
      <p>Not every product needs to be a 12-week course. Choose based on how much time you have:</p>
      <ul>
        <li><strong>Template/checklist</strong> — 1 day — $7–$27</li>
        <li><strong>Short guide/ebook</strong> — 2–3 days — $17–$47</li>
        <li><strong>Mini-course (3–5 videos)</strong> — 1 weekend — $47–$197</li>
        <li><strong>Full program</strong> — 2–4 weeks — $197–$997+</li>
      </ul>
      <p>Start with something you can actually finish this weekend. A $27 template that exists beats a $500 course you never launch.</p>

      <h2>Step 3 — Write a Simple Offer in One Paragraph</h2>
      <p>Don't overthink this. Your offer description needs to answer 4 things:</p>
      <ol>
        <li>Who is this for?</li>
        <li>What problem does it solve?</li>
        <li>What do they get?</li>
        <li>What outcome can they expect?</li>
      </ol>
      <p><strong>Example:</strong> "This is for fitness creators who are tired of posting workouts for free. You'll get a 5-page plug-and-play guide template, a pricing cheat sheet, and a DM script to sell your first coaching package — even if you've never sold anything online before."</p>
      <p>That's your sales page foundation.</p>

      <h2>Step 4 — Build the "No-Tech" Funnel</h2>
      <p>You don't need ClickFunnels, Kajabi, or a developer. Here's the minimum setup:</p>
      <ul>
        <li><strong>Sales page:</strong> Use Gumroad, Stan Store, or Notion (free). Fill in your offer description from Step 3, add a price, and upload your file.</li>
        <li><strong>Checkout:</strong> Gumroad/Stan handle this automatically.</li>
        <li><strong>Delivery:</strong> Same platforms deliver the product automatically on purchase.</li>
        <li><strong>Thank-you/upsell:</strong> Add a short thank-you note + a link to your next offer or booking page.</li>
      </ul>
      <p>That's a working funnel. Built in an afternoon.</p>

      <h2>Step 5 — Launch Without Being Cringe</h2>
      <p>You don't need a 30-day launch campaign. You need:</p>
      <ul>
        <li>3 posts explaining the problem your product solves (not "my product is out!!")</li>
        <li>5 stories showing the product, the outcome, and a direct link</li>
        <li>1 email or DM blast to your most engaged followers</li>
      </ul>
      <p>That's a launch. Post the content, open the link, and watch what happens. Anything above $0 is proof of concept. Then you refine.</p>

      <h2>What If You Want a Bigger System Behind It?</h2>
      <p>If you want a proper sales page, email sequences, upsells, and automations — that's where shadow operating comes in. We build the backend while you keep creating content upfront.</p>
    `,
    metaTitle: "Turn Your Top Posts Into a Digital Product | Cremsocial",
    metaDescription: "A step-by-step guide for creators to turn top posts and comments into a simple digital product, set up the delivery funnel, and launch without being cringe."
  },
  {
    id: "6",
    slug: "marketing-numbers-that-matter",
    title: "The Only Marketing Numbers That Matter (So You Stop Getting Lied To)",
    readTime: "6 min read",
    category: "Strategy",
    targetAudience: "For SMBs & Creators",
    intro: "If your agency sends you a monthly report full of impressions, reach, \"engagement rate,\" and \"brand awareness score\" — and never once mentions leads, cost per lead, or revenue — you're not getting marketing. You're getting activity theater.",
    content: `
      <h2>Cost Per Lead (CPL) — What's Acceptable?</h2>
      <p><strong>Formula:</strong> Total ad/marketing spend ÷ number of leads = CPL</p>
      <p>This tells you how much it costs to get one potential customer into your funnel.</p>
      <p>Whether that's good or bad depends entirely on what your service is worth. A dentist with a $2,000 implant service can afford a much higher CPL than a $50/month subscription. Know your math before you judge your CPL.</p>
      <p><strong>Red flag:</strong> Your agency talks about impressions but has never mentioned CPL once.</p>

      <h2>Conversion Rate — Where Leaks Happen</h2>
      <p>Your conversion rate tells you what percentage of visitors, leads, or prospects are moving to the next step.</p>
      <p>Key ones to track:</p>
      <ul>
        <li><strong>Website conversion rate:</strong> visitors → leads (industry average is 2–5%)</li>
        <li><strong>Lead-to-call rate:</strong> leads who book a call ÷ total leads</li>
        <li><strong>Close rate:</strong> sales ÷ qualified calls</li>
      </ul>
      <p>If your CPL is fine but you're not closing, the problem isn't the ads — it's the sales process, the offer, or the targeting. Fixing the top of funnel won't help if there's a hole in the middle.</p>

      <h2>Customer Lifetime Value (CLV) — What You Can Afford to Pay</h2>
      <p>This is the total revenue a single customer brings you over time.</p>
      <p>If a client pays you $500/month for 12 months on average, their CLV is $6,000. That means you can afford to spend much more than $50 to acquire them — and still be profitable.</p>
      <p>Most businesses underspend on ads because they're thinking about the first sale, not the full relationship. Know your CLV and suddenly your CPL tolerance changes completely.</p>

      <h2>Return on Ad Spend (ROAS) — When It Lies</h2>
      <p><strong>Formula:</strong> Revenue from ads ÷ ad spend = ROAS</p>
      <p>A 3x ROAS means for every $1 you spent, you brought back $3. Sounds great. But:</p>
      <ul>
        <li>Did it account for product cost? Staff time? Refunds?</li>
        <li>Was the revenue actually from the ad or from organic traffic that got lumped in?</li>
        <li>Are you calculating revenue or profit?</li>
      </ul>
      <p>ROAS is useful but easy to manipulate. Always ask: "What was the actual profit after expenses?"</p>

      <h2>The 10-Minute Weekly Scoreboard</h2>
      <p>Stop reading 20-page reports. Set up a simple Google Sheet with these columns and update it every Monday:</p>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="py-2 px-2">Week</th>
              <th class="py-2 px-2">Ad Spend</th>
              <th class="py-2 px-2">Leads</th>
              <th class="py-2 px-2">Calls Booked</th>
              <th class="py-2 px-2">Sales</th>
              <th class="py-2 px-2">Revenue</th>
              <th class="py-2 px-2">CPL</th>
              <th class="py-2 px-2">CAC</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-50">
              <td class="py-2 px-2">Feb 17</td>
              <td class="py-2 px-2">$500</td>
              <td class="py-2 px-2">22</td>
              <td class="py-2 px-2">8</td>
              <td class="py-2 px-2">3</td>
              <td class="py-2 px-2">$2,400</td>
              <td class="py-2 px-2">$22.70</td>
              <td class="py-2 px-2">$166</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>That's it. Seven columns, 10 minutes, and you know more about your marketing than most business owners.</p>
      <p>If you don't know your close rate (sales ÷ leads), stop scaling your ads until you do. More traffic into a broken sales process just burns more money faster.</p>
    `,
    metaTitle: "The Only Marketing Numbers That Matter (No Lies) | Cremsocial",
    metaDescription: "Track CPL, conversion rate, customer acquisition cost, CLV, and real profit the right way—so you know if your marketing is working or just expensive activity."
  }
];
