import { mdiPailMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailMinus(props: IconComponentProps) {
  return <Icon path={mdiPailMinus} {...props} />;
}

export { mdiPailMinus as path };
