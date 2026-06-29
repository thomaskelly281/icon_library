import { mdiRotate360 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rotate360(props: IconComponentProps) {
  return <Icon path={mdiRotate360} {...props} />;
}

export { mdiRotate360 as path };
