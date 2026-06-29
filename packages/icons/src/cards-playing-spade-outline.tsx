import { mdiCardsPlayingSpadeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingSpadeOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingSpadeOutline} {...props} />;
}

export { mdiCardsPlayingSpadeOutline as path };
