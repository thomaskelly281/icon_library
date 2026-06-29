import { mdiAccountChildOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountChildOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountChildOutline} {...props} />;
}

export { mdiAccountChildOutline as path };
