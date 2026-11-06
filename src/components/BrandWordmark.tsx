"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Brand name: Arabic wordmark image ("زبون إكس") when the site is in Arabic,
 * the "ZabonEx" text otherwise. Both occupy the same 32px-high line box.
 */
export default function BrandWordmark({ priority = false }: { priority?: boolean }) {
  const { lang } = useLanguage();

  if (lang === "ar") {
    return (
      <span className="inline-flex items-center h-8">
        <Image
          src="/logo-wordmark-ar.png"
          alt="زبون إكس"
          width={493}
          height={109}
          priority={priority}
          className="h-[23px] w-auto"
        />
      </span>
    );
  }

  return (
    <span className="text-2xl font-display font-semibold text-white tracking-wide">
      ZabonEx
    </span>
  );
}
