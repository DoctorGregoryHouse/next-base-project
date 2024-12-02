"use client";

import { lazy } from "react";

// Move error content to a separate chunk and load it only when needed
export default lazy(() => import("@/components/common/Error"));

// Check https://next-intl-docs.vercel.app/docs/environments/error-files
//TODO: is this principle also applicable to the not-found page?
