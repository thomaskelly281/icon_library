import { mdiPassport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Passport(props: IconComponentProps) {
  return <Icon path={mdiPassport} {...props} />;
}

export { mdiPassport as path };
