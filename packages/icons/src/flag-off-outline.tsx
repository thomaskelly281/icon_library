import { mdiFlagOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagOffOutline} {...props} />;
}

export { mdiFlagOffOutline as path };
