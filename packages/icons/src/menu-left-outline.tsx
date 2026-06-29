import { mdiMenuLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiMenuLeftOutline} {...props} />;
}

export { mdiMenuLeftOutline as path };
