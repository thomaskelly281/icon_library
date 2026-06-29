import { mdiMessageStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageStarOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageStarOutline} {...props} />;
}

export { mdiMessageStarOutline as path };
