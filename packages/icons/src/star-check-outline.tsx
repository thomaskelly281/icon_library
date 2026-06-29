import { mdiStarCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiStarCheckOutline} {...props} />;
}

export { mdiStarCheckOutline as path };
