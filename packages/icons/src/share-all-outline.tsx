import { mdiShareAllOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareAllOutline(props: IconComponentProps) {
  return <Icon path={mdiShareAllOutline} {...props} />;
}

export { mdiShareAllOutline as path };
