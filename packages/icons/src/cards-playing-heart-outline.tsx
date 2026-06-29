import { mdiCardsPlayingHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingHeartOutline} {...props} />;
}

export { mdiCardsPlayingHeartOutline as path };
