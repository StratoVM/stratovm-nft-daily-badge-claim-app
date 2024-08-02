import Image from "next/image";

type Props = {
  className?: string;
};

export const LogoIcon = ({ className }: Props) => {
  return (
    <Image
      src="/logo-icon.png"
      width={51}
      height={46}
      alt="StratoVM Icon Logo"
      priority
      className={className}
    />
  );
};
