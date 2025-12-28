import Container from "./Container";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className=" bg-pink-50 py-4">
      <hr className="border-t border-gray-400 mt-6" />
      <Container>
        <div className="mt-2 text-center text-xs text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis px-2">
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">
            Developed by{" "}
            <a
              href="https://hikmahit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink-600 hover:underline underline-offset-4"
            >
              Hikmah IT
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
