import { mdiExponentBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExponentBox(props: IconComponentProps) {
  return <Icon path={mdiExponentBox} {...props} />;
}

export { mdiExponentBox as path };
