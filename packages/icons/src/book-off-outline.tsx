import { mdiBookOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBookOffOutline} {...props} />;
}

export { mdiBookOffOutline as path };
