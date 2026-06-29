import { mdiFileSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiFileSearchOutline} {...props} />;
}

export { mdiFileSearchOutline as path };
