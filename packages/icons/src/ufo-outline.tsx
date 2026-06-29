import { mdiUfoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UfoOutline(props: IconComponentProps) {
  return <Icon path={mdiUfoOutline} {...props} />;
}

export { mdiUfoOutline as path };
