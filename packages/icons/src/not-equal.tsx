import { mdiNotEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotEqual(props: IconComponentProps) {
  return <Icon path={mdiNotEqual} {...props} />;
}

export { mdiNotEqual as path };
