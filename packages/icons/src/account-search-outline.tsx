import { mdiAccountSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountSearchOutline} {...props} />;
}

export { mdiAccountSearchOutline as path };
