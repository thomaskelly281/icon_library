import { mdiDeleteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteOutline} {...props} />;
}

export { mdiDeleteOutline as path };
