import { mdiPlayBoxLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBoxLockOutline(props: IconComponentProps) {
  return <Icon path={mdiPlayBoxLockOutline} {...props} />;
}

export { mdiPlayBoxLockOutline as path };
