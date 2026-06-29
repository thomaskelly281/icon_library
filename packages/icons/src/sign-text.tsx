import { mdiSignText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignText(props: IconComponentProps) {
  return <Icon path={mdiSignText} {...props} />;
}

export { mdiSignText as path };
