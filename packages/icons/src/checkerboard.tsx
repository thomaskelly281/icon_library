import { mdiCheckerboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Checkerboard(props: IconComponentProps) {
  return <Icon path={mdiCheckerboard} {...props} />;
}

export { mdiCheckerboard as path };
