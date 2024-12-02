// import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      {/* <Link href="/">Return Home</Link> */}
    </div>
  );
}
