import { mdiAccountOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountOffOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountOffOutline} {...props} />;
}

export { mdiAccountOffOutline as path };
