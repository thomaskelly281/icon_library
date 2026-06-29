import { mdiFindReplace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FindReplace(props: IconComponentProps) {
  return <Icon path={mdiFindReplace} {...props} />;
}

export { mdiFindReplace as path };
