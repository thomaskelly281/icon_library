import { mdiCaseSensitiveAlt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CaseSensitiveAlt(props: IconComponentProps) {
  return <Icon path={mdiCaseSensitiveAlt} {...props} />;
}

export { mdiCaseSensitiveAlt as path };
