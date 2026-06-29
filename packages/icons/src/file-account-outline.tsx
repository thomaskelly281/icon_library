import { mdiFileAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiFileAccountOutline} {...props} />;
}

export { mdiFileAccountOutline as path };
