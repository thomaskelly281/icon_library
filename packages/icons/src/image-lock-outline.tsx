import { mdiImageLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageLockOutline(props: IconComponentProps) {
  return <Icon path={mdiImageLockOutline} {...props} />;
}

export { mdiImageLockOutline as path };
