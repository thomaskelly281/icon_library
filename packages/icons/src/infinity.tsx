import { mdiInfinity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Infinity(props: IconComponentProps) {
  return <Icon path={mdiInfinity} {...props} />;
}

export { mdiInfinity as path };
