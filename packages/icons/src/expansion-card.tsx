import { mdiExpansionCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExpansionCard(props: IconComponentProps) {
  return <Icon path={mdiExpansionCard} {...props} />;
}

export { mdiExpansionCard as path };
