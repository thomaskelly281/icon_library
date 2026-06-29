import { mdiFilterCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterCheckOutline} {...props} />;
}

export { mdiFilterCheckOutline as path };
