import { mdiFileRestoreOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRestoreOutline(props: IconComponentProps) {
  return <Icon path={mdiFileRestoreOutline} {...props} />;
}

export { mdiFileRestoreOutline as path };
