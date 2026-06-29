import { mdiFilterMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterMultipleOutline} {...props} />;
}

export { mdiFilterMultipleOutline as path };
