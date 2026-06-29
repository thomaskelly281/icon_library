import { mdiDeleteEmptyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteEmptyOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteEmptyOutline} {...props} />;
}

export { mdiDeleteEmptyOutline as path };
