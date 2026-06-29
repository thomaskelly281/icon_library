import { mdiPassportMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportMinus(props: IconComponentProps) {
  return <Icon path={mdiPassportMinus} {...props} />;
}

export { mdiPassportMinus as path };
