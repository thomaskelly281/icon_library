import { mdiCardsPlayingDiamond } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingDiamond(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingDiamond} {...props} />;
}

export { mdiCardsPlayingDiamond as path };
