import send from "../../public/assets/images/icon-send.svg";
import social_icon from "../../public/assets/images/social_media_icons.svg";
import QR from "../../public/assets/images/QR code.svg";

export const FooterContent = [
  {
    logo_title: "Exclusive",
    subtitle: "Subscribe",
    description: "Get 10% off your first order",
    inputPlaceholder: "Enter your email",
    inputIcon: send,
  },
  {
    title: "Support",
    items: [
      "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  },
  { title: "Account", items: ["Login/Register", " Cart ", "Wishlist", "Shop"] },
  {
    title: "Quick Link",
    items: ["Privacy Policy", "Terms Of Use", "FAQ ", "Contact"],
  },
  {
    title: "Download App",
    images: [QR, social_icon],
  },
];
