import { mdiStarCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiStarCircleOutline} {...props} />;
}

export { mdiStarCircleOutline as path };
