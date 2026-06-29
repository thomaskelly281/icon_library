import { mdiTreeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TreeOutline(props: IconComponentProps) {
  return <Icon path={mdiTreeOutline} {...props} />;
}

export { mdiTreeOutline as path };
