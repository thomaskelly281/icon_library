import { mdiCardsPlaying } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsPlaying(props: IconComponentProps) {
  return <Icon path={mdiCardsPlaying} {...props} />;
}

export { mdiCardsPlaying as path };
