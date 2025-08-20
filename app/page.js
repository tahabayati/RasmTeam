import { redirect } from "next/navigation";
import { generatePageMetadata } from "../lib/metadata";

export const metadata = generatePageMetadata({
  title: "RasmTeam | رسم تیم - Premier Creative Design & Development Agency",
  description: "RasmTeam (رسم تیم) is a leading creative agency specializing in branding, digital design, software development, and media production. We transform ideas into exceptional digital experiences.",
  keywords: [
    "creative agency",
    "design agency",
    "branding services",
    "digital solutions",
    "web development",
    "graphic design",
    "UI/UX design",
    "Iran creative agency"
  ],
  path: "/",
});

export default function Page() {
  redirect("/home");
}
