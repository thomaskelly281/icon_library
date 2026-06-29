import { mdiStocking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stocking(props: IconComponentProps) {
  return <Icon path={mdiStocking} {...props} />;
}

export { mdiStocking as path };
