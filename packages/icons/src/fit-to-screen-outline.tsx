import { mdiFitToScreenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FitToScreenOutline(props: IconComponentProps) {
  return <Icon path={mdiFitToScreenOutline} {...props} />;
}

export { mdiFitToScreenOutline as path };
