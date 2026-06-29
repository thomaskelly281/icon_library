import { mdiBookOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOutline(props: IconComponentProps) {
  return <Icon path={mdiBookOutline} {...props} />;
}

export { mdiBookOutline as path };
