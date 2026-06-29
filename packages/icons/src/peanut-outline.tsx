import { mdiPeanutOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PeanutOutline(props: IconComponentProps) {
  return <Icon path={mdiPeanutOutline} {...props} />;
}

export { mdiPeanutOutline as path };
