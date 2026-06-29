import { mdiApplicationArrayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationArrayOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationArrayOutline} {...props} />;
}

export { mdiApplicationArrayOutline as path };
