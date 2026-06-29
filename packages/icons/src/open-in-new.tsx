import { mdiOpenInNew } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OpenInNew(props: IconComponentProps) {
  return <Icon path={mdiOpenInNew} {...props} />;
}

export { mdiOpenInNew as path };
