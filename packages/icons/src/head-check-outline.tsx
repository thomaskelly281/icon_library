import { mdiHeadCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadCheckOutline} {...props} />;
}

export { mdiHeadCheckOutline as path };
