import { mdiCardsPlayingHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingHeart(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingHeart} {...props} />;
}

export { mdiCardsPlayingHeart as path };
