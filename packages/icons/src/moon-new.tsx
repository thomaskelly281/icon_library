import { mdiMoonNew } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonNew(props: IconComponentProps) {
  return <Icon path={mdiMoonNew} {...props} />;
}

export { mdiMoonNew as path };
