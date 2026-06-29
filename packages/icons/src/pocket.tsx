import { mdiPocket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pocket(props: IconComponentProps) {
  return <Icon path={mdiPocket} {...props} />;
}

export { mdiPocket as path };
