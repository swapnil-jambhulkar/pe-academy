import { cn } from "@/lib/utils";
import { guildContainer, guildHeading, guildKicker, guildLead, guildSection } from "@/components/guild/guild-ui";

type GuildSectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export default function GuildSectionHeader({
  kicker,
  title,
  description,
  className,
}: GuildSectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mb-10 md:mb-12", className)}>
      <p className={guildKicker}>{kicker}</p>
      <h2 className={cn(guildHeading, description ? "mb-4" : "")}>{title}</h2>
      {description ? <p className={guildLead}>{description}</p> : null}
    </div>
  );
}

export function GuildSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn(guildSection, className)}>
      <div className={guildContainer}>{children}</div>
    </section>
  );
}
