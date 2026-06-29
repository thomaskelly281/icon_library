import { mdiCloseBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseBoxOutline} {...props} />;
}

export { mdiCloseBoxOutline as path };
