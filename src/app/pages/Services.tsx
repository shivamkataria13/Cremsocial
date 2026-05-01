import { Meta } from "../components/Meta";

export default function ServicesPage() {
  return (
    <>
      <Meta
        title="Our Services | No-BS Digital Marketing for SMBs & Creators"
        description="SEO, Ads, Social Media, Websites, and Shadow Operating. We don't do fluff. We do marketing that gets you leads, sales, and money in the bank."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Marketing</span> That Actually Makes Money
        </h1>
        
        <p className="text-xl text-gray-800 leading-relaxed mb-12">
          Most "full-service agencies" sell you a menu and deliver a migraine. Cremsocial keeps it simple: a few core services that actually move the needle—SEO, ads, social, sites, and shadow operating for creators. You get clear offers, clear pricing structures, and work you can actually understand.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>SEO That Isn't <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Witchcraft</span></h2>
          <p className="text-gray-800 mb-6">If your ideal customer searches for you and can't find you, nothing else matters. We fix that.</p>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What we do for you:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Technical cleanup:</strong> We tidy up site structure, speed, and indexing so search engines can crawl your site without having a panic attack.</li>
              <li><strong>On-page optimization:</strong> Clear titles, headers, and copy built around keywords real people type, not robot phrases nobody says out loud.</li>
              <li><strong>Local SEO (GMB):</strong> We claim, verify, and polish your Google Business Profile so you show up on the map when locals are looking.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl mb-4 text-indigo-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What you get:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>Higher quality traffic instead of random visitors</li>
              <li>More calls, forms, and bookings from people who already want what you sell</li>
              <li>Long-term results that don't disappear the second you stop paying for ads</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>Ads Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Wasted</span> Cash</h2>
          <p className="text-gray-800 mb-6">Ads should be an investment, not a donation.</p>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What we do for you:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Strategy first:</strong> We define what "winning" looks like—leads, sales, booked calls—before a single campaign goes live.</li>
              <li><strong>Platform mix:</strong> We run FB/Instagram and Google ads where they make sense, not just where it's trendy.</li>
              <li><strong>Landing page review:</strong> We don't just send traffic to a broken home page. We make sure the destination actually converts.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl mb-4 text-indigo-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What you get:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>A clear picture of how much it costs to get a lead, call, or sale</li>
              <li>Better use of your budget (and usually, less waste)</li>
              <li>Reports that are actually readable</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Social</span> That Doesn't Suck</h2>
          <p className="text-gray-800 mb-6">Social media should help your business, not become a second full-time job with no payoff.</p>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What we do for you:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Profile clean-up:</strong> Bios, links, and highlights that make it obvious who you help and what you offer in 5 seconds or less.</li>
              <li><strong>Content pillars:</strong> We help you define 3–5 themes so you're not staring at a blank screen wondering what to post.</li>
              <li><strong>Engagement strategy:</strong> How to turn comments and DMs into leads without being spammy.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl mb-4 text-indigo-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What you get:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>Profiles that look legit and aligned with your offers</li>
              <li>Content that builds trust and nudges people toward taking action</li>
              <li>More time to actually run your business</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Sell</span> While You Sleep</h2>
          <p className="text-gray-800 mb-6">Your website is not a digital brochure. It's a sales tool. If it's not doing that, it's broken.</p>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What we do for you:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Modern, clean design:</strong> Fast, mobile-first layouts that feel current and are actually pleasant to use.</li>
              <li><strong>Conversion-focused structure:</strong> Hero, proof, services, social proof, FAQs, and CTAs arranged so visitors don't have to think too hard.</li>
              <li><strong>Tracking setup:</strong> So you know where visitors are coming from and what they're doing.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-xl mb-4 text-indigo-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What you get:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>A site that doesn't embarrass you when you share it</li>
              <li>A smoother path from "I just found you" to "I just booked"</li>
              <li>An asset you actually own and control</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
