import { mdiMoonLastQuarter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonLastQuarter(props: IconComponentProps) {
  return <Icon path={mdiMoonLastQuarter} {...props} />;
}

export { mdiMoonLastQuarter as path };
