import { mdiExponent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Exponent(props: IconComponentProps) {
  return <Icon path={mdiExponent} {...props} />;
}

export { mdiExponent as path };
