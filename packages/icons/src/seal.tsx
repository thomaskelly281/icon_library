import { mdiSeal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Seal(props: IconComponentProps) {
  return <Icon path={mdiSeal} {...props} />;
}

export { mdiSeal as path };
