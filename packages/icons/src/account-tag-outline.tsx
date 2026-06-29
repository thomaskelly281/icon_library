import { mdiAccountTagOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTagOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountTagOutline} {...props} />;
}

export { mdiAccountTagOutline as path };
