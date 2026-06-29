import { mdiForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Forward(props: IconComponentProps) {
  return <Icon path={mdiForward} {...props} />;
}

export { mdiForward as path };
