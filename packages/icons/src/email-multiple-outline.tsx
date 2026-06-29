import { mdiEmailMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailMultipleOutline} {...props} />;
}

export { mdiEmailMultipleOutline as path };
