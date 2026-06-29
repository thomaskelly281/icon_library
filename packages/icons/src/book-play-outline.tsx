import { mdiBookPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiBookPlayOutline} {...props} />;
}

export { mdiBookPlayOutline as path };
