import { mdiBlenderOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlenderOutline(props: IconComponentProps) {
  return <Icon path={mdiBlenderOutline} {...props} />;
}

export { mdiBlenderOutline as path };
