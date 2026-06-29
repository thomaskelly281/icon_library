import { mdiCloseCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseCircleOutline} {...props} />;
}

export { mdiCloseCircleOutline as path };
