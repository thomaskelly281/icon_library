import { mdiStarRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiStarRemoveOutline} {...props} />;
}

export { mdiStarRemoveOutline as path };
