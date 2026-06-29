import { mdiViewGridOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGridOutline(props: IconComponentProps) {
  return <Icon path={mdiViewGridOutline} {...props} />;
}

export { mdiViewGridOutline as path };
