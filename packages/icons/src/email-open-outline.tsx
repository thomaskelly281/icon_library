import { mdiEmailOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailOpenOutline} {...props} />;
}

export { mdiEmailOpenOutline as path };
