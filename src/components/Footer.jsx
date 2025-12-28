import Container from "./Container";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-600 md:flex-row">
          <div>© {new Date().getFullYear()} {siteData.brand}. All rights reserved.</div>
          <div className="font-semibold">Free Delivery • Cash on Delivery</div>
        </div>
      </Container>
    </footer>
  );
}
