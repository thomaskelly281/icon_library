import { mdiBedKingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedKingOutline(props: IconComponentProps) {
  return <Icon path={mdiBedKingOutline} {...props} />;
}

export { mdiBedKingOutline as path };
