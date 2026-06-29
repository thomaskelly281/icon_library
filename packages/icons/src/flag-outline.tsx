import { mdiFlagOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagOutline} {...props} />;
}

export { mdiFlagOutline as path };
