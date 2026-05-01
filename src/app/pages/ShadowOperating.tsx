import { Meta } from "../components/Meta";

export default function ShadowOperatingPage() {
  return (
    <>
      <Meta
        title="Shadow Operating for Creators | Monetize Your Audience"
        description="You already have the audience. We help you monetize it with strategy, content planning, automations, and support so you can focus on posting."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Shadow Operating</span> For Creators
        </h1>
        
        <p className="text-xl text-gray-800 leading-relaxed mb-12">
          You already have the audience. Why not monetize it? Shadow Ops is one of the best ways to start making money online by doing what you already know how to do: posting content online.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-gray-900 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>You Post. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Build</span> The Machine.</h2>
          <p className="text-gray-800 mb-6">We give you strategies, do the content planning, create GoHighLevel automations for selling, and offer 24/7 support. All you have to do is post.</p>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 mb-8">
            <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>What we do for you:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Detailed audience audit:</strong> We look at your audience to see what they really want and where the opportunity is.</li>
              <li><strong>Product creation:</strong> We help create the product your audience will actually buy.</li>
              <li><strong>Simple offer ladder:</strong> We design a product and an offer based on your content and audience so the path to buying feels natural.</li>
              <li><strong>Funnels and support:</strong> We set up the landing pages, checkouts, and email support so the system is ready while you keep posting.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-2xl border border-indigo-100 mb-12">
            <h3 className="text-xl mb-4 text-indigo-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>How the money works (example):</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>We give you the whole plan</li>
              <li>You follow it and keep posting</li>
              <li>We see the sales roll in</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
