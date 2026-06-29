import { mdiEmailOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOffOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailOffOutline} {...props} />;
}

export { mdiEmailOffOutline as path };
