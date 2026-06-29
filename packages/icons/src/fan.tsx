import { mdiFan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fan(props: IconComponentProps) {
  return <Icon path={mdiFan} {...props} />;
}

export { mdiFan as path };
