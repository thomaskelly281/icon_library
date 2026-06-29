import { mdiFileOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileOutline(props: IconComponentProps) {
  return <Icon path={mdiFileOutline} {...props} />;
}

export { mdiFileOutline as path };
