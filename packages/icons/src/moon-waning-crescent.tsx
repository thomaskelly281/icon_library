import { mdiMoonWaningCrescent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonWaningCrescent(props: IconComponentProps) {
  return <Icon path={mdiMoonWaningCrescent} {...props} />;
}

export { mdiMoonWaningCrescent as path };
