import { mdiAwningOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AwningOutline(props: IconComponentProps) {
  return <Icon path={mdiAwningOutline} {...props} />;
}

export { mdiAwningOutline as path };
