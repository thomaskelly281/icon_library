import { mdiFlagRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagRemoveOutline} {...props} />;
}

export { mdiFlagRemoveOutline as path };
