import { mdiSignCaution } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignCaution(props: IconComponentProps) {
  return <Icon path={mdiSignCaution} {...props} />;
}

export { mdiSignCaution as path };
