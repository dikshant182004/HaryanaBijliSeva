import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { RouterProvider, useRouter } from './router/RouterContext';
import { OfficialDisclaimerBanner } from './components/OfficialDisclaimerBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { DiscomFinderPage } from './pages/DiscomFinderPage';
import { NewConnectionPage } from './pages/NewConnectionPage';
import { NameTransferPage } from './pages/NameTransferPage';
import { GrievancePage } from './pages/GrievancePage';
import { BillCalculatorPage } from './pages/BillCalculatorPage';
import { DistrictsPage } from './pages/DistrictsPage';
import { DistrictDetailPage } from './pages/DistrictDetailPage';
import { BillDisputePage } from './pages/BillDisputePage';
import { SolarCalculatorPage } from './pages/SolarCalculatorPage';
import { PaymentHelpPage } from './pages/PaymentHelpPage';
import { SmartMeterPage } from './pages/SmartMeterPage';
import { LoadCalculatorPage } from './pages/LoadCalculatorPage';
import { TrustBillingPage } from './pages/TrustBillingPage';
import { BillGlossaryPage } from './pages/BillGlossaryPage';
import { ComplaintGeneratorPage } from './pages/ComplaintGeneratorPage';
import { BillSanityCheckerPage } from './pages/BillSanityCheckerPage';
import { AboutPage, PrivacyPage, DisclaimerPage } from './pages/LegalTrustPages';

function AppContent({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const { currentPath } = useRouter();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Route matching
  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage lang={lang} />;
    }
    if (currentPath === '/discom-finder') {
      return <DiscomFinderPage lang={lang} />;
    }
    if (currentPath === '/new-connection') {
      return <NewConnectionPage lang={lang} />;
    }
    if (currentPath === '/name-transfer') {
      return <NameTransferPage lang={lang} />;
    }
    if (currentPath === '/grievance-1912') {
      return <GrievancePage lang={lang} />;
    }
    if (currentPath === '/bill-calculator') {
      return <BillCalculatorPage lang={lang} />;
    }
    if (currentPath === '/bill-dispute') {
      return <BillDisputePage lang={lang} />;
    }
    if (currentPath === '/bill-sanity-checker') {
      return <BillSanityCheckerPage lang={lang} />;
    }
    if (currentPath === '/complaint-generator') {
      return <ComplaintGeneratorPage lang={lang} />;
    }
    if (currentPath === '/bill-glossary') {
      return <BillGlossaryPage lang={lang} />;
    }
    if (currentPath === '/solar-calculator') {
      return <SolarCalculatorPage lang={lang} />;
    }
    if (currentPath === '/payment-help') {
      return <PaymentHelpPage lang={lang} />;
    }
    if (currentPath === '/smart-meter') {
      return <SmartMeterPage lang={lang} />;
    }
    if (currentPath === '/load-calculator') {
      return <LoadCalculatorPage lang={lang} />;
    }
    if (currentPath === '/trust-billing') {
      return <TrustBillingPage lang={lang} />;
    }
    if (currentPath === '/districts') {
      return <DistrictsPage lang={lang} />;
    }
    if (currentPath.startsWith('/districts/') || currentPath.startsWith('/district/')) {
      const prefix = currentPath.startsWith('/districts/') ? '/districts/' : '/district/';
      const districtId = currentPath.replace(prefix, '').split('/')[0].split('?')[0].split('#')[0];
      return <DistrictDetailPage districtId={districtId} lang={lang} />;
    }
    if (currentPath === '/about') {
      return <AboutPage lang={lang} />;
    }
    if (currentPath === '/privacy') {
      return <PrivacyPage lang={lang} />;
    }
    if (currentPath === '/disclaimer') {
      return <DisclaimerPage lang={lang} />;
    }

    // Default fallback to HomePage
    return <HomePage lang={lang} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 font-sans">
      {/* Prominent Citizen Safety Disclaimer */}
      <OfficialDisclaimerBanner lang={lang} />

      {/* Main Multi-Page Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Multi-Page View Container */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Unified Multi-Page Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <RouterProvider>
      <AppContent lang={lang} setLang={setLang} />
    </RouterProvider>
  );
}
