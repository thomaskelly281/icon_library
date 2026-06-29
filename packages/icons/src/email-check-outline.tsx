import { mdiEmailCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailCheckOutline} {...props} />;
}

export { mdiEmailCheckOutline as path };
