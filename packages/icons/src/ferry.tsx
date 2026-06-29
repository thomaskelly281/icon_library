import { mdiFerry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ferry(props: IconComponentProps) {
  return <Icon path={mdiFerry} {...props} />;
}

export { mdiFerry as path };
