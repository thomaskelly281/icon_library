import { mdiBaseballDiamond } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BaseballDiamond(props: IconComponentProps) {
  return <Icon path={mdiBaseballDiamond} {...props} />;
}

export { mdiBaseballDiamond as path };
