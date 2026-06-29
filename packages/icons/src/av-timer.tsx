import { mdiAvTimer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AvTimer(props: IconComponentProps) {
  return <Icon path={mdiAvTimer} {...props} />;
}

export { mdiAvTimer as path };
