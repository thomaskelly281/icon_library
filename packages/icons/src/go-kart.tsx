import { mdiGoKart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoKart(props: IconComponentProps) {
  return <Icon path={mdiGoKart} {...props} />;
}

export { mdiGoKart as path };
