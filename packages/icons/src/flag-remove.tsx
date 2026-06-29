import { mdiFlagRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagRemove(props: IconComponentProps) {
  return <Icon path={mdiFlagRemove} {...props} />;
}

export { mdiFlagRemove as path };
