import { mdiGog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gog(props: IconComponentProps) {
  return <Icon path={mdiGog} {...props} />;
}

export { mdiGog as path };
