import { Meta } from "../components/Meta";
import { Send } from "lucide-react";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <>
      <Meta
        title="Contact Cremsocial | Get a Free Marketing Audit"
        description="Tell us about your business or creator goals. We'll send you a free, no-BS audit with clear next steps. No sales pressure, just value."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8 text-center"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Fix</span> Your Marketing
        </h1>
        
        <p className="text-xl text-gray-800 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
          If you're here, you probably already know something isn't working: traffic with no leads, content with no sales, or offers that just don't land. Tell us what's going on and we'll send back a straightforward mini audit with 2–3 things you can fix—whether you hire us or not.
        </p>

        <div className="p-8 md:p-12 rounded-3xl glass-card-matte shadow-2xl">
          <h2 className="text-2xl mb-4 text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>Tell Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">What</span> You're Dealing With</h2>
          <p className="text-gray-600 mb-8 text-sm italic">
            The more honest you are, the more useful our reply will be. You don't need the perfect words—just tell us what's broken and what "good" would look like.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                  Name <span className="text-gray-500 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>- Who are we talking to?</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                  Email <span className="text-gray-500 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>- Where should we send your audit?</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-800 mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                Are you an SMB or a Creator? <span className="text-gray-500 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>- Pick one so we don't waste your time with the wrong advice.</span>
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>Small / Medium Business</option>
                <option>Creator / Influencer</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-800 mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                Biggest Pain Right Now <span className="text-gray-500 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>- Example: "Traffic but no leads," "Leads but no sales," "No idea what to offer," etc.</span>
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="Don't overthink it. Just type."
              />
            </div>
            
            <div>
              <label className="block text-gray-800 mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                Budget Range <span className="text-gray-500 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>- A rough range helps us tailor realistic recommendations.</span>
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>Select a range...</option>
                <option>$1k - $3k / mo</option>
                <option>$3k - $5k / mo</option>
                <option>$5k - $10k / mo</option>
                <option>$10k+ / mo</option>
              </select>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}
            >
              Send My Audit Request <Send size={18} />
            </motion.button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. No pressure. One click to unsubscribe if you ever get bored of us.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
