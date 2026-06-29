import { mdiCloseCircleMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseCircleMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseCircleMultipleOutline} {...props} />;
}

export { mdiCloseCircleMultipleOutline as path };
