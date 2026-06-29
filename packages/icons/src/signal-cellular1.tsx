import { mdiSignalCellular1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalCellular1(props: IconComponentProps) {
  return <Icon path={mdiSignalCellular1} {...props} />;
}

export { mdiSignalCellular1 as path };
