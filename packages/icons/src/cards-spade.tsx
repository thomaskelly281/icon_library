import { mdiCardsSpade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsSpade(props: IconComponentProps) {
  return <Icon path={mdiCardsSpade} {...props} />;
}

export { mdiCardsSpade as path };
