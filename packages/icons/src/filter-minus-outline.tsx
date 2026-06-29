import { mdiFilterMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterMinusOutline} {...props} />;
}

export { mdiFilterMinusOutline as path };
