import { mdiViewColumnOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewColumnOutline(props: IconComponentProps) {
  return <Icon path={mdiViewColumnOutline} {...props} />;
}

export { mdiViewColumnOutline as path };
