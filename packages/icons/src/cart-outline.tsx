import { mdiCartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartOutline(props: IconComponentProps) {
  return <Icon path={mdiCartOutline} {...props} />;
}

export { mdiCartOutline as path };
