import { mdiDeleteCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteCircleOutline} {...props} />;
}

export { mdiDeleteCircleOutline as path };
