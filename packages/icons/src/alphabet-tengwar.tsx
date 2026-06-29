import { mdiAlphabetTengwar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphabetTengwar(props: IconComponentProps) {
  return <Icon path={mdiAlphabetTengwar} {...props} />;
}

export { mdiAlphabetTengwar as path };
