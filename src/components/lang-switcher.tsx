'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger
        asChild
        aria-label="Select Language"
      >
        <Languages  />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={5}
        className="w-28"
      >
        {routing.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(pathname, { locale })}
            className="cursor-pointer  flex justify-center"
          >
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
