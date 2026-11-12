import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import IntelligenceSystems from "./pages/IntelligenceSystems";
import RevenueDetail from "./pages/RevenueDetail";
import OperationsDetail from "./pages/OperationsDetail";
import MarketDetail from "./pages/MarketDetail";
import Solutions from "./pages/Solutions";
import ManufacturingSolution from "./pages/ManufacturingSolution";
import FMCGSolution from "./pages/FMCGSolution";
import RetailSolution from "./pages/RetailSolution";
import B2BServicesSolution from "./pages/B2BServicesSolution";
import Resources from "./pages/Resources";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Demo from "./pages/Demo";
import AIAutomation from "./pages/AIAutomation";
import AIAutomationProcess from "./pages/AIAutomationProcess";
import AIAutomationAgents from "./pages/AIAutomationAgents";
import AIAutomationCatalogue from "./pages/AIAutomationCatalogue";
import AIAutomationIntegrations from "./pages/AIAutomationIntegrations";
import SmartCommerce from "./pages/SmartCommerce";
import CEOSherpa from "./pages/CEOSherpa";
import SmartCommerceHowItWorks from "./pages/SmartCommerceHowItWorks";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyManufacturing from "./pages/CaseStudyManufacturing";
import CaseStudyJewelGallery from "./pages/CaseStudyJewelGallery";
import AdminDashboard from "./pages/AdminDashboard";

function Router() {
  // Scroll to top on every route change
  useScrollToTop();

  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/consultation"} component={Consultation} />
      <Route path={"/intelligence-systems"} component={IntelligenceSystems} />
      <Route path={"/intelligence-systems/revenue"} component={RevenueDetail} />
      <Route path={"/intelligence-systems/operations"} component={OperationsDetail} />
      <Route path={"/intelligence-systems/market"} component={MarketDetail} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/solutions/manufacturing"} component={ManufacturingSolution} />
      <Route path={"/solutions/fmcg"} component={FMCGSolution} />
      <Route path={"/solutions/retail"} component={RetailSolution} />
      <Route path={"/solutions/b2b-services"} component={B2BServicesSolution} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/demo"} component={Demo} />
      {/* AI Automation Routes */}
      <Route path={"/ai-automation"} component={AIAutomation} />
      <Route path={"/ai-automation/process-automation"} component={AIAutomationProcess} />
      <Route path={"/ai-automation/ai-agents"} component={AIAutomationAgents} />
      <Route path={"/ai-automation/catalogue-automation"} component={AIAutomationCatalogue} />
      <Route path={"/ai-automation/custom-integrations"} component={AIAutomationIntegrations} />
      {/* Smart Commerce Routes */}
      <Route path={"/smart-commerce"} component={SmartCommerce} />
      <Route path={"/smart-commerce/how-it-works"} component={SmartCommerceHowItWorks} />
      {/* CEO Sherpa */}
      <Route path={"/ceo-sherpa"} component={CEOSherpa} />
      {/* Case Studies Routes */}
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/case-studies/manufacturing-machine-optimization"} component={CaseStudyManufacturing} />
      <Route path={"/case-studies/jewel-gallery-ecommerce"} component={CaseStudyJewelGallery} />
      {/* Admin Routes */}
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
