import * as React from "react";
import Link from "next/link";

export type PageHeroBreadcrumb = {
  label: string;
  href?: string;
};

export type PageHeroProps = {
  title: string;
  breadcrumbs?: PageHeroBreadcrumb[];
  className?: string;
  gradientClassName?: string;
  children?: React.ReactNode;
};

export const PageHero = ({
  title,
  breadcrumbs = [],
  className,
  gradientClassName = "bg-gradient-to-l from-[#05315a] via-[#0d6a74] to-[#1fb082]",
  children,
}: PageHeroProps) => {
  return (
    <section
      className={`${gradientClassName} text-white py-14 pt-28 ${
        className ?? ""
      }`.trim()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold">
            {title}
          </h1>
          {breadcrumbs.length > 0 && (
            <div className="text-sm text-white/80 flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={`${crumb.label}-${index}`}>
                    {index > 0 && <span className="text-white/60">{">"}</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-fx"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={isLast ? "text-brand-secondary" : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
