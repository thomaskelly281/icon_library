import { mdiCardsPlayingClub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlayingClub(props: IconComponentProps) {
  return <Icon path={mdiCardsPlayingClub} {...props} />;
}

export { mdiCardsPlayingClub as path };
