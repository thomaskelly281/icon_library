import { mdiSofaSingle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SofaSingle(props: IconComponentProps) {
  return <Icon path={mdiSofaSingle} {...props} />;
}

export { mdiSofaSingle as path };
