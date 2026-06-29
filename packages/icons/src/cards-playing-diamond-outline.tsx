import { mdiCardsPlayingDiamondOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingDiamondOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingDiamondOutline} {...props} />;
}

export { mdiCardsPlayingDiamondOutline as path };
