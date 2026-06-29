import { mdiFontAwesome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FontAwesome(props: IconComponentProps) {
  return <Icon path={mdiFontAwesome} {...props} />;
}

export { mdiFontAwesome as path };
