import { mdiPencilLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilLockOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilLockOutline} {...props} />;
}

export { mdiPencilLockOutline as path };
