"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const t = useTranslations("Error");
  return (
    <div>
      Something went wrong: {error.message}{" "}
      <button onClick={() => reset()}>{t("button")}</button>
    </div>
  );
};

export default Error;
