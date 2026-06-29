import { mdiCardsPlayingSpadeMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingSpadeMultiple(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingSpadeMultiple} {...props} />;
}

export { mdiCardsPlayingSpadeMultiple as path };
