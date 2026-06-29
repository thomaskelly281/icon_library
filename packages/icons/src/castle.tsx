import { mdiCastle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Castle(props: IconComponentProps) {
  return <Icon path={mdiCastle} {...props} />;
}

export { mdiCastle as path };
