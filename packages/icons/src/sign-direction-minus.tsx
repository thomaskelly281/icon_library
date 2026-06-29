import { mdiSignDirectionMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignDirectionMinus(props: IconComponentProps) {
  return <Icon path={mdiSignDirectionMinus} {...props} />;
}

export { mdiSignDirectionMinus as path };
