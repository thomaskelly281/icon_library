import { mdiIcePop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IcePop(props: IconComponentProps) {
  return <Icon path={mdiIcePop} {...props} />;
}

export { mdiIcePop as path };
