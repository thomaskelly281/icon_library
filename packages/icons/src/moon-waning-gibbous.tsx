import { mdiMoonWaningGibbous } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonWaningGibbous(props: IconComponentProps) {
  return <Icon path={mdiMoonWaningGibbous} {...props} />;
}

export { mdiMoonWaningGibbous as path };
