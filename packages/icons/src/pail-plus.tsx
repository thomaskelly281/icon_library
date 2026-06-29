import { mdiPailPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailPlus(props: IconComponentProps) {
  return <Icon path={mdiPailPlus} {...props} />;
}

export { mdiPailPlus as path };
