import { mdiViewQuiltOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewQuiltOutline(props: IconComponentProps) {
  return <Icon path={mdiViewQuiltOutline} {...props} />;
}

export { mdiViewQuiltOutline as path };
