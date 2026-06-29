import { mdiCodeNotEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeNotEqual(props: IconComponentProps) {
  return <Icon path={mdiCodeNotEqual} {...props} />;
}

export { mdiCodeNotEqual as path };
