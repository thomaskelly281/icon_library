import { mdiCheckerboardPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckerboardPlus(props: IconComponentProps) {
  return <Icon path={mdiCheckerboardPlus} {...props} />;
}

export { mdiCheckerboardPlus as path };
