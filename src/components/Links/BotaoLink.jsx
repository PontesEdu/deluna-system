import Link from "next/link";

export const BotaoLink = ({children, href, className}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      referrerpolicy="no-referrer"
      className={`deluna-efeito-botao deluna-icon ${className}`}
    >
      {children}
    </Link>
  )
};