import Image from "next/image";
import Link from "next/link";

// The logo file has empty padding around the artwork. This fixed window crops
// the padding so the header stays slim while the artwork keeps its size.
export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Akure Job Hub home"
      className="relative block h-14 w-16 shrink-0 overflow-hidden md:h-16 md:w-20 lg:h-20 lg:w-24"
    >
      <Image
        src="/logo.png"
        alt="Akure Job Hub"
        width={600}
        height={600}
        priority
        className="absolute left-1/2 top-1/2 h-20 w-auto max-w-none -translate-x-1/2 -translate-y-[45%] md:h-24 lg:h-32"
      />
    </Link>
  );
}