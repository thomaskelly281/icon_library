import { mdiCardsHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsHeart(props: IconComponentProps) {
  return <Icon path={mdiCardsHeart} {...props} />;
}

export { mdiCardsHeart as path };
