import { mdiGamma } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gamma(props: IconComponentProps) {
  return <Icon path={mdiGamma} {...props} />;
}

export { mdiGamma as path };
