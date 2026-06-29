import { mdiSignDirectionRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignDirectionRemove(props: IconComponentProps) {
  return <Icon path={mdiSignDirectionRemove} {...props} />;
}

export { mdiSignDirectionRemove as path };
