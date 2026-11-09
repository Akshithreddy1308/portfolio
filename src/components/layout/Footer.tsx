import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { CodechefIcon, GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "LeetCode", href: profile.socials.leetcode, Icon: LeetcodeIcon },
  { label: "CodeChef", href: profile.socials.codechef, Icon: CodechefIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-fog">
            © {new Date().getFullYear()} {profile.fullName}. Built with Next.js &amp; Motion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-fog transition hover:-translate-y-0.5 hover:border-signal/50 hover:text-white"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white text-ink-950 transition hover:-translate-y-0.5 hover:bg-signal"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
