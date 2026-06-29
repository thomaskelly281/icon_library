import { mdiFilterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterOutline} {...props} />;
}

export { mdiFilterOutline as path };
