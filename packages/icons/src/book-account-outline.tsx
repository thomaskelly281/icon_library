import { mdiBookAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiBookAccountOutline} {...props} />;
}

export { mdiBookAccountOutline as path };
