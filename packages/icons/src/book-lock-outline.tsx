import { mdiBookLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookLockOutline(props: IconComponentProps) {
  return <Icon path={mdiBookLockOutline} {...props} />;
}

export { mdiBookLockOutline as path };
