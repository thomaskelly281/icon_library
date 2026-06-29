import { mdiCardsClubOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsClubOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsClubOutline} {...props} />;
}

export { mdiCardsClubOutline as path };
