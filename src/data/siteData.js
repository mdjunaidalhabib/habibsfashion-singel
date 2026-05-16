import sequinedBagImg from "../assets/sequined-bag.jpg";
import crossbodyBagImg from "../assets/crossbody-bag.jpg";

export const siteData = {
  brand: "Habib’s Fashion",
  phone: "01345295840",
  whatsappNumber: "8801345295840",
  facebook: "https://www.facebook.com/habibsfashion",
  tagline: "Elegant & Premium Female Bags for Everyday Style",
  subtitle: "ট্রেন্ডি ডিজাইন • প্রিমিয়াম কোয়ালিটি • সাশ্রয়ী দাম",
  offer: "FREE DELIVERY All Over Bangladesh",
  cod: "Cash on Delivery Available",
  products: [
    {
      id: 1,
      name: "𝐒𝐞𝐪𝐮𝐢𝐧𝐞𝐝 𝐁𝐚𝐠𝐬",
      slug: "sequined-bags",
      price: 800,
      badge: "Best Seller",
      image: sequinedBagImg,
      features: [
        "Shiny & Stylish Look",
        "Lightweight & Comfortable",
        "Perfect for Party & Casual Use",
        "Premium Quality Finish",
      ],
    },
    {
      id: 2,
      name: "𝐂𝐫𝐨𝐬𝐬𝐛𝐨𝐝𝐲 𝐁𝐚𝐠𝐬",
      slug: "crossbody-shoulder-bags",
      price: 1800,
      badge: "Premium",
      image: crossbodyBagImg,
      features: [
        "Trendy Crossbody Style",
        "Spacious & Durable",
        "Premium Material",
        "Perfect for Daily Use & Outing",
      ],
    },
  ],
};
