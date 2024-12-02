"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  //This redirect will not be localized with the correct locale
  router.push(`/en/not-found`);
  return (
    <html lang="en">
      <body></body>
    </html>
  );
}
