import { mdiPassportPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportPlus(props: IconComponentProps) {
  return <Icon path={mdiPassportPlus} {...props} />;
}

export { mdiPassportPlus as path };
