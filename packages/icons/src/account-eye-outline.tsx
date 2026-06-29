import { mdiAccountEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountEyeOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountEyeOutline} {...props} />;
}

export { mdiAccountEyeOutline as path };
