import './App.css';

import usdcLogo from './assets/usd-coin-usdc-logo.png'
import dashboardImg from './assets/dashboard.png';
import baseLogo from './assets/base.webp';
import morphLogo from './assets/morph.png';
import createInvoiceImg from './assets/create_invoice.png';
import invoicePayImg from './assets/invoice_pay.png';
import recentImg from './assets/recent.png';
import codeBlockImg from './assets/code-block.png';

function App() {
  return (
    <div className="app font-sans bg-white text-black">
      {/* Navbar */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-white michroma-regular">Swift Protocol<span className="font-normal">.</span></span>
          </div>
          <ul className="hidden md:flex flex-row space-x-8 text-base font-medium">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">APIs</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-sm px-3 py-1 rounded border border-gray-600 bg-gray-900 text-white hover:bg-gray-800">EN</button>
           <button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
  <a href="https://app-swiftprotocol.vercel.app" target="_blank" rel="noopener noreferrer">
    Launch App
  </a>
</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex items-center overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight michroma-regular">
                  Swift Protocol<span className="text-gray-400">.</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Products and APIs built on stablecoin rails that unlock the benefits of modern money.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://diagnostic-middle-7f6.notion.site/BasePay-Core-BaseBatch-Africa-1f3c7e25ebf280c58229db35a87bd23f?pvs=74" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center shadow-lg">
                  Read Documentation
                </a>
<button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
  <a href="https://app-swiftprotocol.vercel.app" target="_blank" rel="noopener noreferrer">
    Launch App
  </a>
</button>
              </div>
            </div>
            {/* Dashboard Image */}
            <div className="relative w-full max-w-5xl">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full transform -translate-y-8 scale-110"></div>
              <img src={dashboardImg} alt="Swift Protocol Dashboard" className="relative z-10 w-full rounded-2xl shadow-2xl border border-gray-800" />
            </div>
          </div>
        </div>
        {/* Background gradient effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Trusted By / Partners Section */}
      <section className="bg-black py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white michroma-regular">Trusted infrastructure</h1>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-16">
          <div className="flex flex-col items-center group cursor-pointer">
            <img src={baseLogo} alt="Base Logo" className="h-16 w-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base font-medium text-gray-500 group-hover:text-blue-400 transition-colors duration-300">Base</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <img src={usdcLogo} alt="USDC Logo" className="h-16 w-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base font-medium text-gray-500 group-hover:text-blue-500 transition-colors duration-300">USDC</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <img src={morphLogo} alt="Morph Logo" className="h-16 w-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base font-medium text-gray-500 group-hover:text-purple-400 transition-colors duration-300">Morph</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white michroma-regular">Why Swift Protocol?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <div className="aspect-square p-8 border border-gray-800 rounded-3xl bg-white text-center hover:bg-gray-800 transition-colors flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-black">Stablecoin Infrastructure</h3>
            <p className="text-black">Built on robust stablecoin rails for reliable, stable transactions.</p>
          </div>
          <div className="aspect-square p-8 border border-gray-800 rounded-3xl bg-black text-center hover:bg-gray-800 transition-colors flex flex-col justify-center md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xl mb-4 text-white">Modern APIs</h3>
            <p className="text-gray-300">Developer-friendly APIs that integrate seamlessly with your applications.</p>
          </div>
          <div className="aspect-square p-8 border border-gray-800 rounded-3xl bg-white text-center hover:bg-gray-800 transition-colors flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-black">Global Access</h3>
            <p className="text-black">Unlock the benefits of modern money with global accessibility.</p>
          </div>
        </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-black py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 text-white michroma-regular">How it works</h2>
          
          {/* Step 1: Connect Wallet */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={dashboardImg} alt="Dashboard" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">1. Connect your wallet with Swift Protocol</h3>
              <p className="text-gray-300 text-lg">Start by connecting your wallet to the Swift Protocol platform to access our stablecoin infrastructure.</p>
            </div>
          </div>

          {/* Step 2: Create Invoice */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={createInvoiceImg} alt="Create Invoice" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">2. Create and manage invoices</h3>
              <p className="text-gray-300 text-lg">Generate professional invoices with our intuitive interface. Set amounts, add descriptions, and track payment status.</p>
            </div>
          </div>

          {/* Step 3: Pay Invoice */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={invoicePayImg} alt="Pay Invoice" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">3. Process payments seamlessly</h3>
              <p className="text-gray-300 text-lg">Complete transactions with our secure payment processing. Support for multiple payment methods and instant confirmations.</p>
            </div>
          </div>

          {/* Step 4: Recent Activity */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img src={recentImg} alt="Recent Activity" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">4. Track your recent activity</h3>
              <p className="text-gray-300 text-lg">Monitor all your transactions, invoices, and payment history in real-time with our comprehensive dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate our SDK Section */}
      <section className="bg-black py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 text-white michroma-regular">Integrate our SDK</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={codeBlockImg} alt="Code Block" className="w-full max-w-xl mx-auto rounded-lg shadow-sm" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-white">Get started in minutes</h3>
              <p className="text-gray-300 text-lg mb-6">Install our SDK and start building with Swift Protocol's infrastructure. Simple, secure, and developer-friendly.</p>
              <div className="bg-gray-900 border border-gray-700 text-white p-6 rounded-lg font-mono text-sm">
                npm i swift-protocol-sdk
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tight michroma-regular">Swift Protocol.</span>
            <div className="text-gray-400 mt-2 text-sm">&copy; {new Date().getFullYear()} Swift Protocol Inc. All rights reserved.</div>
          </div>
          <ul className="flex flex-wrap gap-6 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Customers</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
