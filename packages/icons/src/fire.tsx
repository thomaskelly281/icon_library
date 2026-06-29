import { mdiFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fire(props: IconComponentProps) {
  return <Icon path={mdiFire} {...props} />;
}

export { mdiFire as path };
