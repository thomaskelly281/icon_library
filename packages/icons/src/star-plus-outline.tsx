import { mdiStarPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiStarPlusOutline} {...props} />;
}

export { mdiStarPlusOutline as path };
