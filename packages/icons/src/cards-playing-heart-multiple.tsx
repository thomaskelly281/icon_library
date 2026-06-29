import { mdiCardsPlayingHeartMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingHeartMultiple(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingHeartMultiple} {...props} />;
}

export { mdiCardsPlayingHeartMultiple as path };
