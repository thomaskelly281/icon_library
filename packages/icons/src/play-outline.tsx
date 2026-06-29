import { mdiPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayOutline(props: IconComponentProps) {
  return <Icon path={mdiPlayOutline} {...props} />;
}

export { mdiPlayOutline as path };
