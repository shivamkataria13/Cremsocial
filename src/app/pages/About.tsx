import { Meta } from "../components/Meta";

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Cremsocial | Honest GTA Marketing Agency"
        description="Cremsocial is a GTA agency for SMBs and creators who want clear strategy, honest feedback, and marketing that actually helps them grow."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          Who TF Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Cremsocial</span>?
        </h1>
        
        <p className="text-xl text-gray-800 leading-relaxed mb-12">
          Cremsocial exists for one reason: to be the agency that cuts through confusion. We keep it honest, skip the fluff, and focus on strategies that actually get you growing. If we are not the right fit, we will tell you that too.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Who</span> We Are</h2>
          <p className="text-gray-800 mb-6">We're a GTA-based team working with SMBs and creators who want to make money but do not always know how to get there. No bloated hierarchy, no disappearing account managers, just the people doing the work talking to you directly.</p>
          <p className="text-gray-800 mb-6">We use AI to speed up our process, automate repetitive work, and keep the gas pedal down so we can spend more time thinking about what works. That means less money spent on manual work and more time spent on new ideas.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">What</span> We Believe</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Clarity beats complexity.</strong> If we can't explain it to you simply, we probably shouldn't be doing it.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Results over vanity.</strong> We care more about leads, sales, and bookings than likes, impressions, or "reach screenshots."</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Less talk, more doing.</strong> Strategy is important, but someone still has to log in and build the campaigns, pages, and systems. That's us.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Radical honesty.</strong> If something isn't working—or if we're not the right fit—we'll say it, not sugarcoat it.</span>
            </li>
          </ul>
          <p className="mt-8 text-xl text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
            You're not hiring us to nod and agree with everything. You're hiring us for honest strategy that can actually move your business forward.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">How</span> We Work With You</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span>We start with an audit and a clear plan. No retainers until we both know what we are doing and why.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span>We build in public with you: you see what we are launching, testing, and changing.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span>We send short, plain-English updates, not 40-slide decks.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span>We focus on a few things done well instead of trying to sell you everything at once.</span>
            </li>
          </ul>
        </section>

        <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 italic text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
          Your growth partner. Not another marketing mystery.
        </p>
      </div>
    </>
  );
}
