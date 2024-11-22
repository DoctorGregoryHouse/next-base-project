"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    //run exit animation
    await sleep(200);
    router.push(href);
    await sleep(200);
    // run enter animation
  };

  return (
    <Link onClick={(e) => handleTransition(e)} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
