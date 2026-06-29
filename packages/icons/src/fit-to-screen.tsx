import { mdiFitToScreen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FitToScreen(props: IconComponentProps) {
  return <Icon path={mdiFitToScreen} {...props} />;
}

export { mdiFitToScreen as path };
