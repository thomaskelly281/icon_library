import { mdiSignDirectionPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignDirectionPlus(props: IconComponentProps) {
  return <Icon path={mdiSignDirectionPlus} {...props} />;
}

export { mdiSignDirectionPlus as path };
