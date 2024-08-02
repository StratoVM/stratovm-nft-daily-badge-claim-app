import Image from "next/image";

type Props = {
  className?: string;
};

export const LogoText = ({ className }: Props) => {
  return (
    <Image
      src="/logo-text.png"
      width={165}
      height={46}
      alt="StratoVM Logo"
      priority
      className={className}
    />
  );
};
