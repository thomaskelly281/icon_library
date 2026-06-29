import { mdiRivet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rivet(props: IconComponentProps) {
  return <Icon path={mdiRivet} {...props} />;
}

export { mdiRivet as path };
