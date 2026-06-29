import { mdiStoolOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoolOutline(props: IconComponentProps) {
  return <Icon path={mdiStoolOutline} {...props} />;
}

export { mdiStoolOutline as path };
