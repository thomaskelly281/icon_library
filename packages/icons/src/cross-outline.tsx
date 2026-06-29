import { mdiCrossOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrossOutline(props: IconComponentProps) {
  return <Icon path={mdiCrossOutline} {...props} />;
}

export { mdiCrossOutline as path };
