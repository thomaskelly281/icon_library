import { mdiPailPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPailPlusOutline} {...props} />;
}

export { mdiPailPlusOutline as path };
