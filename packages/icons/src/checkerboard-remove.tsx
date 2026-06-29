import { mdiCheckerboardRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckerboardRemove(props: IconComponentProps) {
  return <Icon path={mdiCheckerboardRemove} {...props} />;
}

export { mdiCheckerboardRemove as path };
