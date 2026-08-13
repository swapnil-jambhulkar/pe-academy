import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
