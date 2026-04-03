import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo and company */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-semibold text-foreground">
                Aeria Solutions
              </span>
              <span className="ml-2 text-sm text-muted-foreground">
                RPAS Training
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/modules"
              className="hover:text-foreground transition-colors"
            >
              Course
            </Link>
            <Link
              href="/reference"
              className="hover:text-foreground transition-colors"
            >
              Reference
            </Link>
            <Link
              href="/volume-planner"
              className="hover:text-foreground transition-colors"
            >
              Volume Planner
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Aeria Solutions. All rights
            reserved.
          </p>
          <p className="mt-1">
            Level 1 Complex Operations Training — Transport Canada TP 15530
          </p>
        </div>
      </div>
    </footer>
  );
}
