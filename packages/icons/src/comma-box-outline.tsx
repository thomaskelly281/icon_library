import { mdiCommaBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommaBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiCommaBoxOutline} {...props} />;
}

export { mdiCommaBoxOutline as path };
