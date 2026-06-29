import { mdiAccountFileOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountFileOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountFileOutline} {...props} />;
}

export { mdiAccountFileOutline as path };
