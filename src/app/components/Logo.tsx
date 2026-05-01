export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Cremsocial logo"
      className={`h-14 w-auto object-contain ${className}`}
    />
  );
}
