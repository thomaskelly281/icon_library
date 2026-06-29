import { mdiPassportBiometric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportBiometric(props: IconComponentProps) {
  return <Icon path={mdiPassportBiometric} {...props} />;
}

export { mdiPassportBiometric as path };
