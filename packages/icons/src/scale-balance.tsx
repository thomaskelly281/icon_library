import { mdiScaleBalance } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScaleBalance(props: IconComponentProps) {
  return <Icon path={mdiScaleBalance} {...props} />;
}

export { mdiScaleBalance as path };
