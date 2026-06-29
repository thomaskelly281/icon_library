import { mdiEmailSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailSearchOutline} {...props} />;
}

export { mdiEmailSearchOutline as path };
