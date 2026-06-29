import { mdiPailRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiPailRemoveOutline} {...props} />;
}

export { mdiPailRemoveOutline as path };
