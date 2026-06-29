import { mdiCloseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseOutline} {...props} />;
}

export { mdiCloseOutline as path };
