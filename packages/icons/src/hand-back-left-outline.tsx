import { mdiHandBackLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandBackLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiHandBackLeftOutline} {...props} />;
}

export { mdiHandBackLeftOutline as path };
