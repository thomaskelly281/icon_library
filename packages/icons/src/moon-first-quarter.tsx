import { mdiMoonFirstQuarter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonFirstQuarter(props: IconComponentProps) {
  return <Icon path={mdiMoonFirstQuarter} {...props} />;
}

export { mdiMoonFirstQuarter as path };
