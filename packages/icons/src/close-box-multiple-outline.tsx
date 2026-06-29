import { mdiCloseBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseBoxMultipleOutline} {...props} />;
}

export { mdiCloseBoxMultipleOutline as path };
