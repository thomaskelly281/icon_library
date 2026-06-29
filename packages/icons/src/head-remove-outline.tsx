import { mdiHeadRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadRemoveOutline} {...props} />;
}

export { mdiHeadRemoveOutline as path };
