import { mdiCountertopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CountertopOutline(props: IconComponentProps) {
  return <Icon path={mdiCountertopOutline} {...props} />;
}

export { mdiCountertopOutline as path };
