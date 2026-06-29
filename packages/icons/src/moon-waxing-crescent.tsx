import { mdiMoonWaxingCrescent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonWaxingCrescent(props: IconComponentProps) {
  return <Icon path={mdiMoonWaxingCrescent} {...props} />;
}

export { mdiMoonWaxingCrescent as path };
