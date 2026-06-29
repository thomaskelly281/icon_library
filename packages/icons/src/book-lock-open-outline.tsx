import { mdiBookLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiBookLockOpenOutline} {...props} />;
}

export { mdiBookLockOpenOutline as path };
