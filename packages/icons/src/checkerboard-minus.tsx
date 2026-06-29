import { mdiCheckerboardMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckerboardMinus(props: IconComponentProps) {
  return <Icon path={mdiCheckerboardMinus} {...props} />;
}

export { mdiCheckerboardMinus as path };
