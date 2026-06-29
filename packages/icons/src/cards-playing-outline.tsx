import { mdiCardsPlayingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingOutline} {...props} />;
}

export { mdiCardsPlayingOutline as path };
