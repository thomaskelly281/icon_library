import { mdiForwardburger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Forwardburger(props: IconComponentProps) {
  return <Icon path={mdiForwardburger} {...props} />;
}

export { mdiForwardburger as path };
