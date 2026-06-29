import { mdiFacebookMessenger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FacebookMessenger(props: IconComponentProps) {
  return <Icon path={mdiFacebookMessenger} {...props} />;
}

export { mdiFacebookMessenger as path };
