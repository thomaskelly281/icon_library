import { mdiRhombus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rhombus(props: IconComponentProps) {
  return <Icon path={mdiRhombus} {...props} />;
}

export { mdiRhombus as path };
