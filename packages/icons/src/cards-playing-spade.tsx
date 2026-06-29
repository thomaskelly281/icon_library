import { mdiCardsPlayingSpade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingSpade(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingSpade} {...props} />;
}

export { mdiCardsPlayingSpade as path };
