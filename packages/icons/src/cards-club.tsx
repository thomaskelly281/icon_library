import { mdiCardsClub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsClub(props: IconComponentProps) {
  return <Icon path={mdiCardsClub} {...props} />;
}

export { mdiCardsClub as path };
