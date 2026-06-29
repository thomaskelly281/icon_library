import { mdiBookCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBookCheckOutline} {...props} />;
}

export { mdiBookCheckOutline as path };
