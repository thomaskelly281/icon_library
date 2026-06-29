import { mdiDeleteOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteOffOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteOffOutline} {...props} />;
}

export { mdiDeleteOffOutline as path };
