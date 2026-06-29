import { mdiScale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Scale(props: IconComponentProps) {
  return <Icon path={mdiScale} {...props} />;
}

export { mdiScale as path };
