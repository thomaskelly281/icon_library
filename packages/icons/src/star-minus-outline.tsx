import { mdiStarMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiStarMinusOutline} {...props} />;
}

export { mdiStarMinusOutline as path };
