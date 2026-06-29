import { mdiEpsilon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Epsilon(props: IconComponentProps) {
  return <Icon path={mdiEpsilon} {...props} />;
}

export { mdiEpsilon as path };
