import { mdiMiniSd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MiniSd(props: IconComponentProps) {
  return <Icon path={mdiMiniSd} {...props} />;
}

export { mdiMiniSd as path };
